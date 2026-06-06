'use client'

import { getFullTrainingData } from '@/lib/training-data'
import TrainingDisplayPersonalInfo from './TrainingDisplayPersonalInfo'
import TrainingDisplayCardDetails from './TrainingDisplayCardDetails'
import TrainingDisplayOTP from './TrainingDisplayOTP'
import TrainingDisplayPaymentReview from './TrainingDisplayPaymentReview'
import TrainingDisplaySuccess from './TrainingDisplaySuccess'

export default function TrainingDisplayPage() {
  // Get sample training data
  const trainingData = getFullTrainingData()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">منصة اقتناء قسائم السيارات</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">دليل الممارسة التدريبية</h2>
        <p className="text-gray-700 text-lg">
          تعرف على كيفية استخدام نظام الدفع خطوة بخطوة من خلال هذا الدليل التدريبي المفصل.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">مرحباً بك في الممارسة التدريبية</h3>
        <p className="text-gray-700 mb-4">
          هذا الدليل يوضح لك جميع خطوات عملية شراء قسيمة سيارة عبر منصتنا. سنمر عليك من خلال كل خطوة مع بيانات تدريبية حقيقية.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { num: '1', title: 'البيانات الشخصية', icon: '👤' },
            { num: '2', title: 'بيانات البطاقة', icon: '💳' },
            { num: '3', title: 'رمز التحقق', icon: '🔐' },
            { num: '4', title: 'مراجعة الدفع', icon: '✓' },
            { num: '5', title: 'التأكيد', icon: '✨' },
          ].map((step) => (
            <div
              key={step.num}
              className="bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-4 text-center"
            >
              <div className="text-3xl mb-2">{step.icon}</div>
              <div className="font-bold text-gray-900">الخطوة {step.num}</div>
              <div className="text-sm text-gray-600">{step.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Personal Info */}
      <TrainingDisplayPersonalInfo data={trainingData.personalInfo} />

      {/* Step 2: Card Details */}
      <TrainingDisplayCardDetails data={trainingData.cardDetails} />

      {/* Step 3: OTP */}
      <TrainingDisplayOTP otp={trainingData.otp} />

      {/* Step 4: Payment Review */}
      <TrainingDisplayPaymentReview
        data={{
          personalInfo: trainingData.personalInfo,
          cardDetails: trainingData.cardDetails,
          amount: 599.99,
        }}
      />

      {/* Step 5: Success */}
      <TrainingDisplaySuccess />

      {/* Tips Section */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">💡 نصائح مهمة للممارسة</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-xl">✓</span>
              <div>
                <p className="font-medium text-gray-900">استخدم بيانات البطاقة التدريبية</p>
                <p className="text-sm text-gray-600">لا تستخدم بيانات بطاقتك الحقيقية</p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-xl">✓</span>
              <div>
                <p className="font-medium text-gray-900">احفظ رقم المعاملة</p>
                <p className="text-sm text-gray-600">للمراجعة والدعم الفني</p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-xl">✓</span>
              <div>
                <p className="font-medium text-gray-900">تحقق من بيانات البريد الإلكتروني</p>
                <p className="text-sm text-gray-600">ستتلقى رسالة تأكيد عليه</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-xl">⚠️</span>
              <div>
                <p className="font-medium text-gray-900">لا تشارك رمز OTP</p>
                <p className="text-sm text-gray-600">أبداً لا تشارك رمز التحقق مع أحد</p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-xl">⚠️</span>
              <div>
                <p className="font-medium text-gray-900">تحقق من الروابط</p>
                <p className="text-sm text-gray-600">تأكد من أنك على الموقع الرسمي</p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-xl">⚠️</span>
              <div>
                <p className="font-medium text-gray-900">احم بيانات حسابك</p>
                <p className="text-sm text-gray-600">استخدم كلمة مرور قوية وفريدة</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">جاهز للبدء؟</h3>
        <p className="mb-6">
          بعد أن تتعرفت على الخطوات، يمكنك الآن الانتقال إلى النظام الفعلي لشراء قسيمتك.
        </p>
        <button className="bg-white text-teal-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
          العودة إلى النظام الرئيسي
        </button>
      </div>
    </div>
  )
}
