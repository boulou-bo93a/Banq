'use client'

import { CreditCard } from 'lucide-react'
import { maskCardNumber, getCardType } from '@/lib/luhn'

interface CardDetailsData {
  cardNumber: string
  cardholder: string
  expiryDate: string
  cvv: string
}

interface TrainingDisplayCardDetailsProps {
  data: CardDetailsData
}

export default function TrainingDisplayCardDetails({
  data,
}: TrainingDisplayCardDetailsProps) {
  const cardType = getCardType(data.cardNumber)
  const maskedCardNumber = maskCardNumber(data.cardNumber)

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      {/* Step Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
          <CreditCard className="w-5 h-5 text-purple-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">الخطوة 2: بيانات البطاقة</h3>
          <p className="text-sm text-gray-600">معلومات البطاقة البنكية</p>
        </div>
      </div>

      {/* Credit Card Preview */}
      <div className="mb-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white shadow-lg">
        <div className="flex justify-between items-start mb-8">
          <div className="text-lg font-semibold">{cardType}</div>
          <div className="text-sm opacity-90">بطاقة اختبار</div>
        </div>

        <div className="mb-6">
          <div className="text-xs opacity-75 mb-2">رقم البطاقة</div>
          <div className="text-lg tracking-widest font-mono">{maskedCardNumber}</div>
        </div>

        <div className="flex justify-between">
          <div>
            <div className="text-xs opacity-75 mb-1">اسم صاحب البطاقة</div>
            <div className="text-sm">{data.cardholder}</div>
          </div>
          <div>
            <div className="text-xs opacity-75 mb-1">الصلاحية</div>
            <div className="text-sm">{data.expiryDate}</div>
          </div>
        </div>
      </div>

      {/* Card Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Card Number */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">رقم البطاقة الكامل</label>
          <div className="bg-gray-50 border border-gray-200 rounded p-3 text-gray-900 font-mono text-sm">
            {data.cardNumber}
          </div>
        </div>

        {/* Card Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">نوع البطاقة</label>
          <div className="bg-gray-50 border border-gray-200 rounded p-3 text-gray-900">
            {cardType}
          </div>
        </div>

        {/* Cardholder Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">اسم صاحب البطاقة</label>
          <div className="bg-gray-50 border border-gray-200 rounded p-3 text-gray-900">
            {data.cardholder}
          </div>
        </div>

        {/* Expiry Date */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">تاريخ الصلاحية</label>
          <div className="bg-gray-50 border border-gray-200 rounded p-3 text-gray-900">
            {data.expiryDate}
          </div>
        </div>

        {/* CVV */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">رمز التحقق (CVV)</label>
          <div className="bg-gray-50 border border-gray-200 rounded p-3 text-gray-900 font-mono">
            {data.cvv}
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded p-3 text-sm text-yellow-800">
        ⚠️ هذه بيانات بطاقة اختبار. لا تستخدم بيانات بطاقتك الحقيقية في بيئة التدريب.
      </div>
    </div>
  )
}
