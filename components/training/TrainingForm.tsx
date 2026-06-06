'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import TrainingStepPersonalInfo, { PersonalInfoData } from './TrainingStepPersonalInfo'
import TrainingStepCardDetails, { CardDetailsData } from './TrainingStepCardDetails'
import TrainingStepOTP from './TrainingStepOTP'
import TrainingStepPaymentReview from './TrainingStepPaymentReview'
import TrainingStepSuccess from './TrainingStepSuccess'

interface TrainingFormProps {
  onClose: () => void
}

export default function TrainingForm({ onClose }: TrainingFormProps) {
  const [step, setStep] = useState(1)
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoData | null>(null)
  const [cardDetails, setCardDetails] = useState<CardDetailsData | null>(null)
  const [otp, setOtp] = useState<string | null>(null)

  const handlePersonalInfoNext = (data: PersonalInfoData) => {
    setPersonalInfo(data)
    setStep(2)
  }

  const handleCardDetailsNext = (data: CardDetailsData) => {
    setCardDetails(data)
    setStep(3)
  }

  const handleOTPNext = (otpCode: string) => {
    setOtp(otpCode)
    setStep(4)
  }

  const handlePaymentReviewNext = () => {
    setStep(5)
  }

  const handleRestart = () => {
    setStep(1)
    setPersonalInfo(null)
    setCardDetails(null)
    setOtp(null)
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label="إغلاق"
          >
            <X size={24} className="text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900 text-right flex-1 text-center">
            نمط التدريب - التدفق الكامل
          </h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>

        {/* Progress Indicator */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="flex justify-end gap-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                  step >= s
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {s}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 text-right mt-2">
            الخطوة {step} من 5
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 text-right">البيانات الشخصية</h2>
              <TrainingStepPersonalInfo
                onNext={handlePersonalInfoNext}
                initialData={personalInfo || undefined}
              />
            </div>
          )}

          {step === 2 && personalInfo && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 text-right">بيانات البطاقة</h2>
              <TrainingStepCardDetails
                onNext={handleCardDetailsNext}
                initialData={cardDetails || undefined}
              />
            </div>
          )}

          {step === 3 && personalInfo && cardDetails && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 text-right">التحقق عبر OTP</h2>
              <TrainingStepOTP onNext={handleOTPNext} />
            </div>
          )}

          {step === 4 && personalInfo && cardDetails && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 text-right">مراجعة الدفع</h2>
              <TrainingStepPaymentReview
                personalInfo={personalInfo}
                cardDetails={cardDetails}
                onNext={handlePaymentReviewNext}
              />
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 text-right">تمت معاملتك بنجاح</h2>
              <TrainingStepSuccess onRestart={handleRestart} />
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        {step < 5 && (
          <div className="bg-gray-50 border-t border-gray-200 p-6 flex gap-4 justify-end">
            {step > 1 && (
              <button
                onClick={handlePrevious}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition"
              >
                السابق
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
