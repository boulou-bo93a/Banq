'use client'

import { useState } from 'react'
import StepHeader from '@/components/StepHeader'
import StepContent from '@/components/StepContent'
import StepNavigation from '@/components/StepNavigation'

const TOTAL_STEPS = 5

export default function Home() {
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
