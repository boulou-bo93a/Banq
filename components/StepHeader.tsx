import React from 'react'

interface StepHeaderProps {
  currentStep: number
  totalSteps: number
}

const STEP_TITLES = {
  1: 'التسجيل الأولي',
  2: 'التحقق من المعلومات',
  3: 'مراجعة جدول الرسوم',
  4: 'معالجة الدفع',
  5: 'تحميل وطباعة',
}

const STEP_DESCRIPTIONS = {
  1: 'أدخل رقم تعريفك أو رمز المرجع',
  2: 'تأكد من دقة سجلاتك',
  3: 'راجع وقبل الرسم المطبق',
  4: 'أكمل دفعتك بأمان',
  5: 'استرجع وطبع مستنداتك',
}

export default function StepHeader({ currentStep, totalSteps }: StepHeaderProps) {
  const stepTitle = STEP_TITLES[currentStep as keyof typeof STEP_TITLES]
  const stepDescription = STEP_DESCRIPTIONS[currentStep as keyof typeof STEP_DESCRIPTIONS]
  const progress = (currentStep / totalSteps) * 100

  return (
    <header className="bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{stepTitle}</h1>
            <p className="text-teal-100">{stepDescription}</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">{currentStep}</div>
            <div className="text-teal-100">من {totalSteps}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-teal-500 rounded-full h-2 overflow-hidden">
          <div
            className="bg-white h-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </header>
  )
}
