'use client'

import { User } from 'lucide-react'

interface PersonalInfoData {
  firstName: string
  lastName: string
  phone: string
  email: string
  dateOfBirth: string
}

interface TrainingDisplayPersonalInfoProps {
  data: PersonalInfoData
}

export default function TrainingDisplayPersonalInfo({
  data,
}: TrainingDisplayPersonalInfoProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      {/* Step Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-teal-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">الخطوة 1: المعلومات الشخصية</h3>
          <p className="text-sm text-gray-600">معلومات المستخدم الأساسية</p>
        </div>
      </div>

      {/* Sample Data Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">الاسم الأول</label>
          <div className="bg-gray-50 border border-gray-200 rounded p-3 text-gray-900">
            {data.firstName}
          </div>
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">اسم العائلة</label>
          <div className="bg-gray-50 border border-gray-200 rounded p-3 text-gray-900">
            {data.lastName}
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">رقم الهاتف</label>
          <div className="bg-gray-50 border border-gray-200 rounded p-3 text-gray-900">
            {data.phone}
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">البريد الإلكتروني</label>
          <div className="bg-gray-50 border border-gray-200 rounded p-3 text-gray-900">
            {data.email}
          </div>
        </div>

        {/* Date of Birth */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">تاريخ الميلاد</label>
          <div className="bg-gray-50 border border-gray-200 rounded p-3 text-gray-900">
            {new Date(data.dateOfBirth).toLocaleDateString('ar-SA', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-4 bg-blue-50 border border-blue-200 rounded p-3 text-sm text-blue-800">
        ℹ️ هذه بيانات تدريبية. في الواقع ستدخل معلوماتك الشخصية الفعلية هنا.
      </div>
    </div>
  )
}
