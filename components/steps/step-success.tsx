"use client"

import { CheckCircle2, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StepSuccessProps {
  onGoHome: () => void
  cardName: string
}

export function StepSuccess({ onGoHome, cardName }: StepSuccessProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      {/* Success Icon */}
      <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
        <CheckCircle2 className="w-16 h-16 text-green-500" />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-foreground mb-3 text-center">
        تم بنجاح!
      </h1>

      {/* Description */}
      <p className="text-muted-foreground text-center mb-2">
        تم تسجيل طلبك للحصول على
      </p>
      <p className="text-primary font-bold text-xl text-center mb-6">
        {cardName}
      </p>

      {/* Info Box */}
      <div className="bg-secondary/50 rounded-xl p-4 mb-8 max-w-sm w-full">
        <p className="text-foreground text-center text-sm leading-relaxed">
          سيتم التواصل معك عبر رقم الهاتف المسجل لإتمام عملية استلام البطاقة الجديدة. 
          يرجى الاحتفاظ ببطاقتك الذهبية الحالية حتى استلام البطاقة الجديدة.
        </p>
      </div>

      {/* Order Number */}
      <div className="text-center mb-8">
        <p className="text-muted-foreground text-sm mb-1">رقم الطلب</p>
        <p className="text-2xl font-mono font-bold text-foreground">
          #{Math.random().toString(36).substring(2, 10).toUpperCase()}
        </p>
      </div>

      {/* Home Button */}
      <Button
        onClick={onGoHome}
        className="w-full max-w-sm h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold rounded-xl"
      >
        <Home className="w-5 h-5 ml-2" />
        العودة للرئيسية
      </Button>
    </div>
  )
}
