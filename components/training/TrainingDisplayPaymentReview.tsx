'use client'

import { CheckCircle } from 'lucide-react'
import { maskCardNumber } from '@/lib/luhn'

interface ReviewData {
  personalInfo: {
    firstName: string
    lastName: string
    phone: string
    email: string
  }
  cardDetails: {
    cardNumber: string
    cardholder: string
    expiryDate: string
  }
  amount?: number
}

interface TrainingDisplayPaymentReviewProps {
  data: ReviewData
}

export default function TrainingDisplayPaymentReview({
  data,
}: TrainingDisplayPaymentReviewProps) {
  const amount = data.amount || 599.99 // Default training amount

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      {/* Step Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">الخطوة 4: مراجعة الدفع</h3>
          <p className="text-sm text-gray-600">تحقق من جميع البيانات قبل التأكيد</p>
        </div>
      </div>

      {/* Payment Summary Card */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6 mb-6">
        <h4 className="font-bold text-gray-900 mb-4">ملخص الدفع</h4>
        
        <div className="space-y-3 mb-6 pb-6 border-b border-indigo-200">
          {/* Item */}
          <div className="flex justify-between">
            <span className="text-gray-700">قسيمة سيارة</span>
            <span className="font-semibold text-gray-900">599.99 د.ج</span>
          </div>

          {/* Fees */}
          <div className="flex justify-between text-sm text-gray-600">
            <span>رسوم المعالجة</span>
            <span>5.00 د.ج</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">الإجمالي</span>
          <span className="text-2xl font-bold text-indigo-600">{amount.toFixed(2)} د.ج</span>
        </div>
      </div>

      {/* Billing Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Personal Info */}
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900 mb-4">بيانات صاحب الدفع</h4>
          
          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-600 uppercase">الاسم</label>
            <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm text-gray-900">
              {data.personalInfo.firstName} {data.personalInfo.lastName}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-600 uppercase">رقم الهاتف</label>
            <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm text-gray-900">
              {data.personalInfo.phone}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-600 uppercase">البريد الإلكتروني</label>
            <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm text-gray-900">
              {data.personalInfo.email}
            </div>
          </div>
        </div>

        {/* Card Info */}
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900 mb-4">بيانات البطاقة</h4>
          
          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-600 uppercase">رقم البطاقة</label>
            <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm text-gray-900 font-mono">
              {maskCardNumber(data.cardDetails.cardNumber)}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-600 uppercase">صاحب البطاقة</label>
            <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm text-gray-900">
              {data.cardDetails.cardholder}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-600 uppercase">الصلاحية</label>
            <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm text-gray-900">
              {data.cardDetails.expiryDate}
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Checkbox Info */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <div className="w-5 h-5 rounded border-2 border-green-600 flex items-center justify-center">
              <span className="text-green-600 text-sm">✓</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">موافقة على الشروط</p>
            <p className="text-xs text-gray-600 mt-1">
              أوافق على الشروط والأحكام وسياسة الخصوصية وتفويض المعاملة المالية.
            </p>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-4 bg-blue-50 border border-blue-200 rounded p-3 text-sm text-blue-800">
        ℹ️ بعد التأكيد، ستتم معالجة الدفع وستتلقى رسالة تأكيد على بريدك الإلكتروني.
      </div>
    </div>
  )
}
