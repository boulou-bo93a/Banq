'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface TrainingStepSuccessProps {
  onRestart: () => void
}

export default function TrainingStepSuccess({ onRestart }: TrainingStepSuccessProps) {
  const [referenceNumber] = useState(
    `TRN-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
  )
  const [copied, setCopied] = useState(false)

  const handleCopyReference = () => {
    navigator.clipboard.writeText(referenceNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Success Icon */}
      <div className="flex justify-center">
        <div className="bg-green-100 p-6 rounded-full">
          <CheckCircle className="text-green-600" size={64} />
        </div>
      </div>

      {/* Success Message */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">تمت المعاملة بنجاح!</h2>
        <p className="text-lg text-gray-600">شكراً لاستخدام منصة التدريب</p>
      </div>

      {/* Transaction Details */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
        <div className="text-right">
          <p className="text-sm text-gray-600 mb-2">رقم المرجع للمعاملة</p>
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={handleCopyReference}
              className="p-2 hover:bg-gray-100 rounded transition"
              title="نسخ"
            >
              <Copy size={18} className="text-teal-600" />
            </button>
            <p className="font-mono font-bold text-lg text-teal-600">{referenceNumber}</p>
          </div>
          {copied && <p className="text-xs text-green-600 mt-1">تم النسخ!</p>}
        </div>
      </div>

      {/* What's Next */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4 text-right">
        <h3 className="font-semibold text-gray-900">الخطوات التالية:</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold mt-1">✓</span>
            <span className="text-gray-700">ستتلقى بريد إلكتروني تأكيدي على البريد المسجل</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold mt-1">✓</span>
            <span className="text-gray-700">احفظ رقم المرجع لمتابعة المعاملة في أي وقت</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold mt-1">✓</span>
            <span className="text-gray-700">يمكنك تحميل المستندات من صفحة التحميل</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold mt-1">✓</span>
            <span className="text-gray-700">اتصل بنا للمساعدة إذا كان لديك أي استفسارات</span>
          </li>
        </ul>
      </div>

      {/* Documents Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4 text-right">المستندات المتاحة</h3>
        <div className="space-y-2">
          <button className="w-full text-right px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-gray-700">
            📄 تحميل شهادة التسجيل
          </button>
          <button className="w-full text-right px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-gray-700">
            📄 تحميل إيصال الدفع
          </button>
          <button className="w-full text-right px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-gray-700">
            📄 تحميل تفاصيل المعاملة
          </button>
        </div>
      </div>

      {/* Training Complete Note */}
      <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-right">
        <p className="text-sm text-green-900">
          ✨ أكملت خطوات التدريب بنجاح! أنت الآن جاهز لاستخدام النظام الفعلي.
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button
          onClick={onRestart}
          className="flex-1 px-4 py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 font-medium transition"
        >
          تمرين آخر
        </button>
        <Button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-medium">
          العودة للبداية
        </Button>
      </div>
    </div>
  )
}
