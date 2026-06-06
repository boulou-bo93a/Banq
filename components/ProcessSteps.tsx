import { CheckCircle, ListChecks, DollarSign, CreditCard, Download } from 'lucide-react'

interface StepData {
  id: number
  title: string
  description: string
  icon: any
  details: string[]
}

const STEPS: StepData[] = [
  {
    id: 1,
    title: 'Step 01: Initial Registration',
    description: 'Enter your identification number or reference code',
    icon: CheckCircle,
    details: [
      'Submit your unique identification number',
      'Verify your personal information',
      'Review system-detected details',
      'Proceed once all information is confirmed'
    ]
  },
  {
    id: 2,
    title: 'Step 02: Information Verification',
    description: 'Confirm the accuracy of your records',
    icon: ListChecks,
    details: [
      'Review all retrieved information carefully',
      'Verify personal data accuracy',
      'Enter additional required details',
      'Confirm before proceeding to payment'
    ]
  },
  {
    id: 3,
    title: 'Step 03: Fee Schedule Review',
    description: 'Review and accept the applicable fee',
    icon: DollarSign,
    details: [
      'Review the complete fee breakdown',
      'Understand all applicable charges',
      'Review terms and conditions',
      'Provide explicit consent to proceed'
    ]
  },
  {
    id: 4,
    title: 'Step 04: Process Payment',
    description: 'Complete your payment securely',
    icon: CreditCard,
    details: [
      'Enter your payment card information',
      'Select payment method (debit or credit)',
      'Verify billing address details',
      'Confirm transaction to complete payment'
    ]
  },
  {
    id: 5,
    title: 'Step 05: Download & Print',
    description: 'Retrieve and print your documents',
    icon: Download,
    details: [
      'Download your certificate or document',
      'Download payment receipt',
      'Save digital copies for your records',
      'Print for physical documentation'
    ]
  }
]

interface ProcessStepsProps {
  selectedStep: number | null
  onSelectStep: (step: number | null) => void
}

export default function ProcessSteps({ selectedStep, onSelectStep }: ProcessStepsProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          To complete the process, follow these steps:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
          {STEPS.map((step) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.id}
                onClick={() => onSelectStep(step.id)}
                className="bg-white rounded-lg p-6 cursor-pointer transition-all hover:shadow-lg hover:border-teal-300 border-2 border-transparent"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-yellow-400 p-4 rounded-lg">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {step.description}
                  </p>
                  <button className="text-teal-600 text-xs font-semibold hover:text-teal-700 transition">
                    Learn More →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
