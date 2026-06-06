import React from 'react'
import { CheckCircle, FileText, CreditCard, Download, UserCheck } from 'lucide-react'

interface StepContentProps {
  step: number
}

const STEP_CONTENT = {
  1: {
    icon: UserCheck,
    title: 'التسجيل الأولي',
    sections: [
      {
        heading: 'ما الذي تحتاجه',
        items: [
          'رقم تعريف وطني أو جواز سفر',
          'رقم المرجع إذا كان لديك واحد',
          'عنوان بريد إلكتروني صحيح',
          'رقم هاتف نشط',
        ],
      },
      {
        heading: 'الخطوات',
        items: [
          'انقر على زر "ابدأ" أدناه',
          'أدخل رقم التعريف الخاص بك',
          'أدخل عنوان بريدك الإلكتروني',
          'تحقق من التفاصيل وتابع',
        ],
      },
    ],
  },
  2: {
    icon: CheckCircle,
    title: 'التحقق من المعلومات',
    sections: [
      {
        heading: 'يتم التحقق من',
        items: [
          'معلومات الهوية الشخصية',
          'سجلات المالك',
          'تفاصيل المركبة',
          'حالة التسجيل السابق',
        ],
      },
      {
        heading: 'ملاحظات مهمة',
        items: [
          'تأكد من أن جميع المعلومات دقيقة',
          'سيستغرق التحقق 2-3 ساعات عادة',
          'ستتلقى رسالة تأكيد عند الانتهاء',
          'يمكنك متابعة الحالة في أي وقت',
        ],
      },
    ],
  },
  3: {
    icon: FileText,
    title: 'مراجعة جدول الرسوم',
    sections: [
      {
        heading: 'الرسوم المطبقة',
        items: [
          'رسم التسجيل الأساسي: 50 دينار',
          'رسم معالجة: 15 دينار',
          'رسم التسليم: 10 دينار',
          'الإجمالي: 75 دينار',
        ],
      },
      {
        heading: 'طرق الدفع',
        items: [
          'بطاقات الائتمان والخصم',
          'التحويل البنكي',
          'المحافظ الرقمية',
          'الدفع عند الاستلام',
        ],
      },
    ],
  },
  4: {
    icon: CreditCard,
    title: 'معالجة الدفع',
    sections: [
      {
        heading: 'تفاصيل الدفع',
        items: [
          'اختر طريقة الدفع المفضلة لديك',
          'أدخل تفاصيل الدفع الآمنة',
          'تحقق من المبلغ والرسوم',
          'أكمل المعاملة',
        ],
      },
      {
        heading: 'الأمان والخصوصية',
        items: [
          'جميع المعاملات آمنة وموثوقة 100%',
          'البيانات مشفرة باستخدام SSL',
          'لن نشارك بيانات الدفع مع أطراف ثالثة',
          'ستتلقى إيصالاً عند الانتهاء',
        ],
      },
    ],
  },
  5: {
    icon: Download,
    title: 'تحميل وطباعة',
    sections: [
      {
        heading: 'المستندات المتاحة',
        items: [
          'شهادة التسجيل الأصلية',
          'إيصال الدفع',
          'تفاصيل المعاملة',
          'معلومات الاتصال',
        ],
      },
      {
        heading: 'الخطوات التالية',
        items: [
          'قم بتحميل جميع المستندات',
          'احفظها بمكان آمن',
          'اطبع نسخة احتياطية',
          'احتفظ برقم المرجع للمستقبل',
        ],
      },
    ],
  },
}

export default function StepContent({ step }: StepContentProps) {
  const content = STEP_CONTENT[step as keyof typeof STEP_CONTENT]
  if (!content) return null

  const Icon = content.icon

  return (
    <div className="space-y-8">
      {/* Header with Icon */}
      <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow">
        <div className="bg-teal-100 p-4 rounded-lg">
          <Icon className="text-teal-600" size={32} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{content.title}</h2>
          <p className="text-gray-600 mt-1">المرحلة {step} من 5</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid md:grid-cols-2 gap-6">
        {content.sections.map((section, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{section.heading}</h3>
            <ul className="space-y-3">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-lg mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg border border-teal-200">
        <h3 className="font-bold text-gray-900 mb-2">💡 نصيحة مهمة</h3>
        <p className="text-gray-700">
          تأكد من أن لديك جميع المستندات المطلوبة قبل بدء هذه المرحلة. هذا سيساعدك على إكمال العملية بسرعة أكبر بكفاءة.
        </p>
      </div>
    </div>
  )
}
