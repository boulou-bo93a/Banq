import { X } from 'lucide-react'

interface ModalProps {
  step: number
  onClose: () => void
}

const STEP_DETAILS: Record<number, { title: string; content: string[] }> = {
  1: {
    title: 'Initial Registration',
    content: [
      'To begin the process, you need to provide your unique identification number.',
      'This helps us locate and retrieve your existing records in the system.',
      'Ensure the number you enter is correct to avoid errors.',
      'Once submitted, our system will automatically search for matching records and retrieve your information for verification.'
    ]
  },
  2: {
    title: 'Information Verification',
    content: [
      'After we retrieve your information, you must carefully verify its accuracy.',
      'Check all personal details including name, date of birth, address, and contact information.',
      'If any information is incorrect, you can request corrections before proceeding.',
      'This step is critical to ensure the final documents are accurate and valid.'
    ]
  },
  3: {
    title: 'Fee Schedule Review',
    content: [
      'The system will calculate and display the applicable fees for your request.',
      'Review the complete fee breakdown including any applicable taxes or surcharges.',
      'You must agree to the terms and conditions to proceed.',
      'Payment cannot be processed until you explicitly accept and approve all charges.'
    ]
  },
  4: {
    title: 'Process Payment',
    content: [
      'We accept major debit and credit cards for secure payment processing.',
      'Your payment information is encrypted and securely transmitted.',
      'Double-check your billing address and card details before confirming.',
      'Upon successful payment, you will receive an immediate confirmation and receipt number.'
    ]
  },
  5: {
    title: 'Download & Print',
    content: [
      'After successful payment, your documents are immediately available for download.',
      'Save both your certificate and payment receipt for your records.',
      'Keep digital copies as backup in case you need to reference them later.',
      'Print the documents if you need physical copies for official use or submission.'
    ]
  }
}

export default function Modal({ step, onClose }: ModalProps) {
  const details = STEP_DETAILS[step]

  if (!details) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-teal-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{details.title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-teal-700 rounded transition"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {details.content.map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}

          <div className="bg-teal-50 border-l-4 border-teal-600 p-4 mt-6">
            <p className="text-teal-900 font-semibold">💡 Pro Tip</p>
            <p className="text-teal-800 text-sm mt-2">
              Having all your information ready before starting will help you complete each step more quickly and smoothly.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition font-medium"
          >
            Close
          </button>
          <button
            onClick={() => alert('Starting the process for Step ' + step)}
            className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition font-medium"
          >
            Start Process
          </button>
        </div>
      </div>
    </div>
  )
}
