'use client'

import { Lock } from 'lucide-react'

interface TrainingDisplayOTPProps {
  otp: string
}

export default function TrainingDisplayOTP({ otp }: TrainingDisplayOTPProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      {/* Step Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <Lock className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">الخطوة 3: التحقق برمز OTP</h3>
          <p className="text-sm text-gray-600">التوثيق الثنائي (رسالة نصية)</p>
        </div>
      </div>

      {/* OTP Process Description */}
      <div className="mb-6 space-y-4">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-sm text-gray-700">
            بعد إدخال بيانات البطاقة، ستتلقى رسالة نصية تحتوي على رمز OTP (كلمة المرور لمرة واحدة).
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <div>
              <p className="font-medium text-gray-900">الحصول على الرمز</p>
              <p className="text-sm text-gray-600">رسالة نصية قصيرة على رقم هاتفك</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <div>
              <p className="font-medium text-gray-900">إدخال الرمز</p>
              <p className="text-sm text-gray-600">أدخل الرمز المكون من 6 أرقام</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <div>
              <p className="font-medium text-gray-900">التحقق الناجح</p>
              <p className="text-sm text-gray-600">تأكيد الهوية والانتقال للخطوة التالية</p>
            </div>
          </div>
        </div>
      </div>

      {/* OTP Code Display */}
      <div className="space-y-3 mb-6">
        <label className="block text-sm font-medium text-gray-700">رمز OTP التدريبي</label>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-6 text-center">
          <div className="text-xs text-gray-600 mb-2">استخدم هذا الرمز في الممارسة التدريبية</div>
          <div className="text-4xl font-mono font-bold text-green-600 tracking-widest">
            {otp.split('').map((digit, idx) => (
              <span key={idx} className="inline-block w-10 h-10 leading-10">
                {digit}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Timer Info */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-gray-700">مدة الصلاحية</label>
        <div className="bg-orange-50 border border-orange-200 rounded p-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            <p className="text-sm text-orange-800">
              <span className="font-semibold">60 ثانية</span> - مدة صلاحية رمز OTP
            </p>
          </div>
          <p className="text-xs text-orange-700 mt-2">
            إذا انتهت صلاحية الرمز، يمكنك طلب رمز جديد.
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-4 bg-blue-50 border border-blue-200 rounded p-3 text-sm text-blue-800">
        ℹ️ في البيئة الفعلية، ستتلقى رسالة نصية حقيقية على رقم هاتفك المسجل.
      </div>
    </div>
  )
}
