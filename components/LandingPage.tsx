'use client'

import React from 'react'
import Link from 'next/link'
import { FileText, CheckSquare, CreditCard, HandCoins, Car } from 'lucide-react'

export default function LandingPage() {
  const steps = [
    {
      number: '01',
      titleAr: 'إدخال رقم تسجيل المركبة',
      titleEn: 'Enter Vehicle Registration Number',
      descriptionAr: 'لاقتناء قسيمتك عن بعد، يرجى إدخال رقم تسجيل المركبة.',
      descriptionEn: 'To purchase your voucher remotely, please enter your vehicle registration number.',
      icon: FileText,
    },
    {
      number: '02',
      titleAr: 'التحقق من صحة المعلومات المتعلقة بالمركبة',
      titleEn: 'Verify Vehicle Information',
      descriptionAr: 'بعد التأكد من صحة المعلومات، يرجى إدخال بيانات مالك المركبة.',
      descriptionEn: 'After confirming the information, please enter the vehicle owner details.',
      icon: CheckSquare,
    },
    {
      number: '03',
      titleAr: 'عرض تعريفة القسيمة',
      titleEn: 'Voucher Definition Display',
      descriptionAr: 'في هاته الخطوة، يرجى الموافقة على عملية دفع تعريفة القسيمة المطلوبة.',
      descriptionEn: 'At this step, please agree to the voucher fee payment process.',
      icon: CheckSquare,
    },
    {
      number: '04',
      titleAr: 'دفع القسيمة',
      titleEn: 'Pay the Voucher',
      descriptionAr: 'يرجى إدخال معلومات بطاقة الدفع البنكية أو الدفهية.',
      descriptionEn: 'Please enter your bank card or payment information.',
      icon: CreditCard,
    },
    {
      number: '05',
      titleAr: 'تحميل وطباعة',
      titleEn: 'Download and Print',
      descriptionAr: 'بمجرد دفع القسيمة، يمكنكم تحميل القسيمة و إرسال الدفق و طباعتها.',
      descriptionEn: 'Once paid, you can download the voucher and print it.',
      icon: Car,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 text-right mb-4">
            مرحبا بكم في منصة اقتناء قسيمة السيارات لسنة 2026
          </h1>
          <p className="text-gray-600 text-right text-sm md:text-base leading-relaxed max-w-3xl ml-auto">
            توفر هذه المنصة إمكانية اقتناء قسيمة السيارات عن بعد مدار 24 ساعة و 24 ساعة و 7 أيام بسرعة وأمان، دون الحاجة إلى التنقل
          </p>
        </div>
      </div>

      {/* Steps Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            لاقتناء قسيمتك عن بعد، يرجى اتباع الخطوات التالية:
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-amber-500" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Step Number and Title */}
                <div className="text-right mb-4">
                  <div className="text-sm text-amber-600 font-semibold mb-1">
                    الخطوة {step.number}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                    {step.titleAr}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base text-right leading-relaxed">
                  {step.descriptionAr}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/flow"
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 md:px-12 py-3 md:py-4 rounded-lg transition-colors text-lg"
          >
            ابدأ الآن
          </Link>
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">متاح 24/7</h4>
              <p className="text-gray-600 text-sm">
                المنصة متاحة طوال اليوم وطوال الأسبوع لراحتك
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">آمن وموثوق</h4>
              <p className="text-gray-600 text-sm">
                تحويل آمن للبيانات والدفع الإلكتروني المشفر
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">سريع وسهل</h4>
              <p className="text-gray-600 text-sm">
                عملية بسيطة وسريعة لا تتجاوز بضع دقائق
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
