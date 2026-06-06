'use client'

import { useState, useEffect, useRef } from 'react'
import { validateOTP } from '@/lib/validation'
import { TEST_OTP, TEST_OTP_TIMEOUT } from '@/lib/training-data'
import { Button } from '@/components/ui/button'

interface TrainingStepOTPProps {
  onNext: (otp: string) => void
}

export default function TrainingStepOTP({ onNext }: TrainingStepOTPProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')
  const [timeLeft, setTimeLeft] = useState(Math.floor(TEST_OTP_TIMEOUT / 1000))
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Timer for OTP
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !canResend) {
      setCanResend(true)
    }
  }, [timeLeft, canResend])

  const handleChange = (index: number, value: string) => {
    // Only allow digits
    if (!/^\d?$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value

    setOtp(newOtp)
    setError('')

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }

    // Handle arrow keys
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
    if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text/plain').replace(/\D/g, '').slice(0, 6)

    const newOtp = pastedData.split('').concat(['', '', '', '', '', '']).slice(0, 6) as string[]
    setOtp(newOtp)
    setError('')

    // Focus last filled input
    if (pastedData.length > 0) {
      inputRefs.current[Math.min(pastedData.length, 5)]?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const otpString = otp.join('')

    if (!validateOTP(otpString)) {
      setError('الرجاء إدخال 6 أرقام')
      return
    }

    if (otpString !== TEST_OTP) {
      setError('رمز OTP غير صحيح. استخدم 123456')
      return
    }

    onNext(otpString)
  }

  const handleResend = () => {
    setTimeLeft(Math.floor(TEST_OTP_TIMEOUT / 1000))
    setCanResend(false)
    setOtp(['', '', '', '', '', ''])
    setError('')
    inputRefs.current[0]?.focus()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-right">
        <p className="text-sm text-blue-900 mb-2">
          💡 رمز OTP للاختبار: <span className="font-mono font-bold">123456</span>
        </p>
        <p className="text-xs text-blue-800">
          هذه خطوة محاكاة تدريب لممارسة التحقق من الهوية بعاملين.
        </p>
      </div>

      <div className="space-y-4">
        <div className="text-right">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">أدخل رمز التحقق</h3>
          <p className="text-sm text-gray-600">
            تم إرسال رمز التحقق إلى رقم الهاتف الخاص بك
          </p>
        </div>

        {/* OTP Input Fields */}
        <div className="flex gap-2 justify-center my-6" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el
              }}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              maxLength={1}
              className={`w-12 h-12 text-center text-2xl font-bold border-2 rounded-lg focus:outline-none transition ${
                error
                  ? 'border-red-500 bg-red-50 focus:ring-2 focus:ring-red-500'
                  : 'border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200'
              }`}
              placeholder="0"
            />
          ))}
        </div>

        {error && <p className="text-sm text-red-600 text-center">{error}</p>}

        {/* Timer */}
        <div className="text-center">
          {timeLeft > 0 ? (
            <p className="text-sm text-gray-600">
              انتهاء الصلاحية في:{' '}
              <span className="font-mono font-bold text-teal-600">
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </span>
            </p>
          ) : (
            <p className="text-sm text-orange-600">انتهت صلاحية الرمز</p>
          )}
        </div>

        {/* Resend Button */}
        <div className="text-center">
          {canResend ? (
            <button
              type="button"
              onClick={handleResend}
              className="text-sm text-teal-600 hover:text-teal-700 font-medium"
            >
              إعادة إرسال الرمز
            </button>
          ) : (
            <p className="text-sm text-gray-500">
              لم تستقبل الرمز؟ انتظر لإعادة الإرسال
            </p>
          )}
        </div>
      </div>

      <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-medium">
        التحقق
      </Button>
    </form>
  )
}
