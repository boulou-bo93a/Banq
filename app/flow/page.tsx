'use client'

import { useState } from 'react'
import Link from 'next/link'
import StepHeader from '@/components/StepHeader'
import StepContent from '@/components/StepContent'
import StepNavigation from '@/components/StepNavigation'
import { ArrowRight } from 'lucide-react'

const TOTAL_STEPS = 5

export default function FlowPage() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleStepClick = (step: number) => {
    setCurrentStep(step)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      {/* Back to Home Link */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto w-full px-4 py-3">
          <Link href="/" className="inline-flex items-center text-amber-600 hover:text-amber-700 text-sm font-medium">
            <ArrowRight className="w-4 h-4 ml-2" />
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </div>

      <StepHeader currentStep={currentStep} totalSteps={TOTAL_STEPS} />
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <StepContent step={currentStep} />
      </main>

      <StepNavigation
        currentStep={currentStep}
        totalSteps={TOTAL_STEPS}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onStepClick={handleStepClick}
      />
    </div>
  )
}
