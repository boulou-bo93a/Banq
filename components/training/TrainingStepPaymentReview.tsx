'use client'

import { useState } from 'react'
import { maskCardNumber } from '@/lib/luhn'
import { Button } from '@/components/ui/button'
import { PersonalInfoData } from './TrainingStepPersonalInfo'
import { CardDetailsData } from './TrainingStepCardDetails'

interface TrainingStepPaymentReviewProps {
  personalInfo: PersonalInfoData
  cardDetails: CardDetailsData
  onNext: () => void
}

export default function TrainingStepPaymentReview({
  personalInfo,
  cardDetails,
  onNext,
}: TrainingStepPaymentReviewProps) {
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (agreed) {
      onNext()
    }
  }

  const fees = {
    registration: 50,
    processing: 15,
    delivery: 10,
  }

  const total = fees.registration + fees.processing + fees.delivery

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-right">
        <p className="text-sm text-blue-900">
          💡 تحقق من جميع المعلومات قبل تأكيد الدفع.
        </p>
      </div>

      {/* Personal Information Summary */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-right">البيانات الشخصية</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-right">
            <p className="text-sm text-gray-600">الاسم الأول</p>
            <p className="font-medium text-gray-900">{personalInfo.firstName}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">الاسم الأخير</p>
            <p className="font-medium text-gray-900">{personalInfo.lastName}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">رقم الهاتف</p>
            <p className="font-medium text-gray-900">{personalInfo.phone}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">البريد الإلكتروني</p>
            <p className="font-medium text-gray-900">{personalInfo.email}</p>
          </div>
          <div className="col-span-2 text-right">
            <p className="text-sm text-gray-600">تاريخ الميلاد</p>
            <p className="font-medium text-gray-900">{personalInfo.dateOfBirth}</p>
          </div>
        </div>
      </div>

      {/* Card Information Summary */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-right">بيانات البطاقة</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-right">
            <p className="text-sm text-gray-600">رقم البطاقة</p>
            <p className="font-mono font-medium text-gray-900">{maskCardNumber(cardDetails.cardNumber)}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">اسم صاحب البطاقة</p>
            <p className="font-medium text-gray-900">{cardDetails.cardholder}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">تاريخ الانتهاء</p>
            <p className="font-mono font-medium text-gray-900">{cardDetails.expiryDate}</p>
          </div>
        </div>
      </div>

      {/* Fees Breakdown */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-right">ملخص الرسوم</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-right">
            <span className="text-gray-600">رسم التسجيل</span>
            <span className="font-medium text-gray-900">{fees.registration} دينار</span>
          </div>
          <div className="flex justify-between text-right">
            <span className="text-gray-600">رسم المعالجة</span>
            <span className="font-medium text-gray-900">{fees.processing} دينار</span>
          </div>
          <div className="flex justify-between text-right">
            <span className="text-gray-600">رسم التسليم</span>
            <span className="font-medium text-gray-900">{fees.delivery} دينار</span>
          </div>
          <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between text-right">
            <span className="font-semibold text-gray-900">الإجمالي</span>
            <span className="text-xl font-bold text-teal-600">{total} دينار</span>
          </div>
        </div>
      </div>

      {/* Confirmation Checkbox */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <label className="flex items-center gap-3 cursor-pointer text-right">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
          />
          <span className="text-sm text-gray-700">
            أوافق على جميع الشروط والأحكام وأؤكد صحة المعلومات المدخلة
          </span>
        </label>
      </div>

      {/* Terms & Conditions Note */}
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-right">
        <p className="text-sm text-amber-900">
          ⚠️ هذه عملية اختبار. لن يتم خصم أي رسوم فعلية من البطاقة.
        </p>
      </div>

      <Button
        type="submit"
        disabled={!agreed}
        className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white py-2 rounded-lg font-medium"
      >
        تأكيد الدفع
      </Button>
    </form>
  )
}
