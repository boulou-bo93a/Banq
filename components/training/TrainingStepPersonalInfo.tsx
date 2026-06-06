'use client'

import { useState } from 'react'
import { validateName, validateEmail, validatePhoneNumber, validateDateOfBirth, formatPhoneNumber } from '@/lib/validation'
import { Button } from '@/components/ui/button'

interface TrainingStepPersonalInfoProps {
  onNext: (data: PersonalInfoData) => void
  initialData?: PersonalInfoData
}

export interface PersonalInfoData {
  firstName: string
  lastName: string
  phone: string
  email: string
  dateOfBirth: string
}

export default function TrainingStepPersonalInfo({
  onNext,
  initialData,
}: TrainingStepPersonalInfoProps) {
  const [formData, setFormData] = useState<PersonalInfoData>(
    initialData || {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      dateOfBirth: '',
    }
  )

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors }

    switch (name) {
      case 'firstName':
        if (!validateName(value)) {
          newErrors.firstName = 'الاسم الأول يجب أن يكون على الأقل حرفين'
        } else {
          delete newErrors.firstName
        }
        break
      case 'lastName':
        if (!validateName(value)) {
          newErrors.lastName = 'الاسم الأخير يجب أن يكون على الأقل حرفين'
        } else {
          delete newErrors.lastName
        }
        break
      case 'phone':
        if (!validatePhoneNumber(value)) {
          newErrors.phone = 'رقم الهاتف يجب أن يكون 10 أرقام (مثال: 0666123456)'
        } else {
          delete newErrors.phone
        }
        break
      case 'email':
        if (!validateEmail(value)) {
          newErrors.email = 'البريد الإلكتروني غير صحيح'
        } else {
          delete newErrors.email
        }
        break
      case 'dateOfBirth':
        if (!validateDateOfBirth(value)) {
          newErrors.dateOfBirth = 'يجب أن تكون بعمر 18 سنة على الأقل'
        } else {
          delete newErrors.dateOfBirth
        }
        break
    }

    setErrors(newErrors)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let finalValue = value

    // Auto-format phone number
    if (name === 'phone') {
      finalValue = value.replace(/\D/g, '').slice(0, 10)
    }

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }))

    if (touched[name]) {
      validateField(name, finalValue)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }))
    validateField(name, value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors: Record<string, string> = {}
    if (!validateName(formData.firstName)) newErrors.firstName = 'الاسم الأول مطلوب'
    if (!validateName(formData.lastName)) newErrors.lastName = 'الاسم الأخير مطلوب'
    if (!validatePhoneNumber(formData.phone)) newErrors.phone = 'رقم هاتف صحيح مطلوب'
    if (!validateEmail(formData.email)) newErrors.email = 'بريد إلكتروني صحيح مطلوب'
    if (!validateDateOfBirth(formData.dateOfBirth)) newErrors.dateOfBirth = 'تاريخ ميلاد صحيح مطلوب'

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      onNext(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-right">
        <p className="text-sm text-blue-900">
          💡 هذه خطوة تدريب. استخدم بيانات وهمية للممارسة.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2 text-right">
            الاسم الأول
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="أحمد"
            className={`w-full px-4 py-2 border rounded-lg text-right font-arabic ${
              touched.firstName && errors.firstName
                ? 'border-red-500 bg-red-50'
                : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-teal-500`}
          />
          {touched.firstName && errors.firstName && (
            <p className="mt-1 text-sm text-red-600 text-right">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2 text-right">
            الاسم الأخير
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="محمد"
            className={`w-full px-4 py-2 border rounded-lg text-right font-arabic ${
              touched.lastName && errors.lastName
                ? 'border-red-500 bg-red-50'
                : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-teal-500`}
          />
          {touched.lastName && errors.lastName && (
            <p className="mt-1 text-sm text-red-600 text-right">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 text-right">
          رقم الهاتف
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="0666123456"
          className={`w-full px-4 py-2 border rounded-lg text-right ${
            touched.phone && errors.phone
              ? 'border-red-500 bg-red-50'
              : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-teal-500`}
        />
        {touched.phone && errors.phone && (
          <p className="mt-1 text-sm text-red-600 text-right">{errors.phone}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-right">
          البريد الإلكتروني
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="example@email.com"
          className={`w-full px-4 py-2 border rounded-lg text-right ${
            touched.email && errors.email
              ? 'border-red-500 bg-red-50'
              : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-teal-500`}
        />
        {touched.email && errors.email && (
          <p className="mt-1 text-sm text-red-600 text-right">{errors.email}</p>
        )}
      </div>

      {/* Date of Birth */}
      <div>
        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2 text-right">
          تاريخ الميلاد
        </label>
        <input
          id="dateOfBirth"
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-2 border rounded-lg text-right ${
            touched.dateOfBirth && errors.dateOfBirth
              ? 'border-red-500 bg-red-50'
              : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-teal-500`}
        />
        {touched.dateOfBirth && errors.dateOfBirth && (
          <p className="mt-1 text-sm text-red-600 text-right">{errors.dateOfBirth}</p>
        )}
      </div>

      <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-medium">
        التالي
      </Button>
    </form>
  )
}
