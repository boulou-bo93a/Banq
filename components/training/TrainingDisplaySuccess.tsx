'use client'

import { CheckCircle, ArrowRight } from 'lucide-react'

interface TrainingDisplaySuccessProps {
  transactionRef?: string
}

export default function TrainingDisplaySuccess({
  transactionRef = 'TRN-2024-123456-DEMO',
}: TrainingDisplaySuccessProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      {/* Step Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">الخطوة 5: تأكيد النجاح</h3>
          <p className="text-sm text-gray-600">تمت معالجة العملية بنجاح</p>
        </div>
      </div>

      {/* Success Message */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-8 text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <h4 className="text-2xl font-bold text-green-700 mb-2">تم النجاح!</h4>
        <p className="text-gray-700 mb-4">
          تمت معالجة طلبك بنجاح. شكراً لاستخدام منصة اقتناء قسائم السيارات.
        </p>
      </div>

      {/* Transaction Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Transaction Reference */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">رقم المعاملة</label>
          <div className="bg-gray-50 border border-gray-200 rounded p-4">
            <div className="font-mono font-bold text-lg text-gray-900 text-center">
              {transactionRef}
            </div>
          </div>
        </div>

        {/* Date and Time */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">التاريخ والوقت</label>
          <div className="bg-gray-50 border border-gray-200 rounded p-4 text-center">
            <div className="text-gray-900">
              {new Date().toLocaleDateString('ar-SA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <div className="text-sm text-gray-600">
              {new Date().toLocaleTimeString('ar-SA')}
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-6">
        <h4 className="font-bold text-gray-900 mb-4">الخطوات التالية</h4>
        
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div>
              <p className="font-medium text-gray-900">استقبال رسالة التأكيد</p>
              <p className="text-sm text-gray-600">ستتلقى رسالة تأكيد على بريدك الإلكتروني وهاتفك</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div>
              <p className="font-medium text-gray-900">تحميل القسيمة</p>
              <p className="text-sm text-gray-600">يمكنك تحميل قسيمتك من حسابك أو من البريد الإلكتروني</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div>
              <p className="font-medium text-gray-900">استخدام القسيمة</p>
              <p className="text-sm text-gray-600">استخدم القسيمة لديك عند شراء سيارة من الموزعين المعتمدين</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h4 className="font-bold text-gray-900 mb-3">هل تحتاج إلى المساعدة؟</h4>
        <p className="text-sm text-gray-600 mb-4">
          إذا كان لديك أي أسئلة أو احتجت إلى مساعدة، يمكنك التواصل معنا:
        </p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">📞 الهاتف:</span>
            <span className="text-gray-900 font-medium">021-123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700">📧 البريد الإلكتروني:</span>
            <span className="text-gray-900 font-medium">support@banq.dz</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700">⏰ ساعات العمل:</span>
            <span className="text-gray-900 font-medium">24/7</span>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-4 bg-purple-50 border border-purple-200 rounded p-3 text-sm text-purple-800">
        ℹ️ هذا نموذج تدريبي للعملية. في البيئة الفعلية، ستصل إلى صفحة النجاح الحقيقية بعد الدفع.
      </div>
    </div>
  )
}
