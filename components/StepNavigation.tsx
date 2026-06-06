import React from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

interface StepNavigationProps {
  currentStep: number
  totalSteps: number
  onPrevious: () => void
  onNext: () => void
  onStepClick: (step: number) => void
}

export default function StepNavigation({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onStepClick,
}: StepNavigationProps) {
  return (
    <footer className="bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Step Indicators */}
        <div className="flex justify-between mb-8 gap-2">
          {Array.from({ length: totalSteps }).map((_, idx) => {
            const step = idx + 1
            const isActive = step === currentStep
            const isCompleted = step < currentStep

            return (
              <button
                key={step}
                onClick={() => onStepClick(step)}
                className={`flex-1 py-3 px-2 rounded-lg font-semibold transition-all ${
                  isActive
                    ? 'bg-teal-600 text-white shadow-lg'
                    : isCompleted
                      ? 'bg-green-100 text-green-800 border-2 border-green-300'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div className="text-sm">{step}</div>
              </button>
            )
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={onPrevious}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            <ChevronLeft size={20} />
            <span>السابق</span>
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600">المرحلة {currentStep} من {totalSteps}</p>
            <p className="font-semibold text-gray-900">
              {Math.round((currentStep / totalSteps) * 100)}% مكتمل
            </p>
          </div>

          <button
            onClick={onNext}
            disabled={currentStep === totalSteps}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentStep === totalSteps
                ? 'bg-green-600 text-white cursor-not-allowed'
                : 'bg-teal-600 text-white hover:bg-teal-700'
            }`}
          >
            <span>{currentStep === totalSteps ? 'مكتمل' : 'التالي'}</span>
            {currentStep !== totalSteps && <ChevronRight size={20} />}
          </button>
        </div>

        {/* Completion Message */}
        {currentStep === totalSteps && (
          <div className="mt-6 bg-green-50 border-2 border-green-300 rounded-lg p-4 text-center">
            <p className="text-green-800 font-semibold">✓ لقد أكملت جميع المراحل بنجاح!</p>
            <p className="text-green-700 text-sm mt-1">
              يمكنك الآن تحميل وطباعة المستندات الخاصة بك
            </p>
          </div>
        )}
      </div>
    </footer>
  )
}
