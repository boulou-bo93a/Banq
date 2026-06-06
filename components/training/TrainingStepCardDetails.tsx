'use client'

import { useState } from 'react'
import {
  validateCardNumber,
  validateExpiryDate,
  validateCVV,
  formatExpiryDate,
} from '@/lib/validation'
import { maskCardNumber, getCardType, formatCardNumber } from '@/lib/luhn'
import { Button } from '@/components/ui/button'

interface TrainingStepCardDetailsProps {
  onNext: (data: CardDetailsData) => void
  initialData?: CardDetailsData
}

export interface CardDetailsData {
  cardNumber: string
  cardholder: string
  expiryDate: string
  cvv: string
}

export default function TrainingStepCardDetails({
  onNext,
  initialData,
}: TrainingStepCardDetailsProps) {
  const [formData, setFormData] = useState<CardDetailsData>(
    initialData || {
      cardNumber: '',
      cardholder: '',
      expiryDate: '',
      cvv: '',
    }
  )

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors }

    switch (name) {
      case 'cardNumber':
        if (!validateCardNumber(value)) {
          newErrors.cardNumber = 'رقم البطاقة غير صحيح'
        } else {
          delete newErrors.cardNumber
        }
        break
      case 'cardholder':
        if (value.trim().length < 2) {
          newErrors.cardholder = 'اسم صاحب البطاقة مطلوب'
        } else {
          delete newErrors.cardholder
        }
        break
      case 'expiryDate':
        if (!validateExpiryDate(value)) {
          newErrors.expiryDate = 'تاريخ انتهاء الصلاحية غير صحيح'
        } else {
          delete newErrors.expiryDate
        }
        break
      case 'cvv':
        if (!validateCVV(value)) {
          newErrors.cvv = 'رمز الأمان يجب أن يكون 3-4 أرقام'
        } else {
          delete newErrors.cvv
        }
        break
    }

    setErrors(newErrors)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let finalValue = value

    // Format card number
    if (name === 'cardNumber') {
      const digits = value.replace(/\s/g, '')
      finalValue = formatCardNumber(digits)
    }

    // Format expiry date
    if (name === 'expiryDate') {
      finalValue = formatExpiryDate(value)
    }

    // Only allow digits for CVV
    if (name === 'cvv') {
      finalValue = value.replace(/\D/g, '').slice(0, 4)
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

    const newErrors: Record<string, string> = {}
    if (!validateCardNumber(formData.cardNumber)) newErrors.cardNumber = 'رقم بطاقة صحيح مطلوب'
    if (formData.cardholder.trim().length < 2) newErrors.cardholder = 'اسم صاحب البطاقة مطلوب'
    if (!validateExpiryDate(formData.expiryDate)) newErrors.expiryDate = 'تاريخ انتهاء الصلاحية صحيح مطلوب'
    if (!validateCVV(formData.cvv)) newErrors.cvv = 'رمز أمان صحيح مطلوب'

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      onNext(formData)
    }
  }

  const cardType = getCardType(formData.cardNumber)

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-right">
        <p className="text-sm text-blue-900">
          💡 استخدم أرقام بطاقة الاختبار المتوفرة. لن يتم أي خصم فعلي.
        </p>
      </div>

      {/* Card Preview */}
      {formData.cardNumber && (
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 rounded-lg text-white">
          <div className="space-y-6">
            <div className="text-lg font-semibold">{cardType}</div>
            <div className="text-xl tracking-widest">{maskCardNumber(formData.cardNumber)}</div>
            <div className="flex justify-between">
              <div className="text-sm">صاحب البطاقة</div>
              <div className="text-sm">انتهاء الصلاحية</div>
            </div>
            <div className="flex justify-between">
              <div className="text-sm font-medium">{formData.cardholder}</div>
              <div className="text-sm font-medium">{formData.expiryDate}</div>
            </div>
          </div>
        </div>
      )}

      {/* Card Number */}
      <div>
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2 text-right">
          رقم البطاقة
        </label>
        <input
          id="cardNumber"
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="0000 0000 0000 0000"
          maxLength={19}
          className={`w-full px-4 py-2 border rounded-lg text-right font-mono ${
            touched.cardNumber && errors.cardNumber
              ? 'border-red-500 bg-red-50'
              : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-teal-500`}
        />
        {touched.cardNumber && errors.cardNumber && (
          <p className="mt-1 text-sm text-red-600 text-right">{errors.cardNumber}</p>
        )}
      </div>

      {/* Cardholder Name */}
      <div>
        <label htmlFor="cardholder" className="block text-sm font-medium text-gray-700 mb-2 text-right">
          اسم صاحب البطاقة
        </label>
        <input
          id="cardholder"
          type="text"
          name="cardholder"
          value={formData.cardholder}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Ahmed Ben Mohamed"
          className={`w-full px-4 py-2 border rounded-lg text-right ${
            touched.cardholder && errors.cardholder
              ? 'border-red-500 bg-red-50'
              : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-teal-500`}
        />
        {touched.cardholder && errors.cardholder && (
          <p className="mt-1 text-sm text-red-600 text-right">{errors.cardholder}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Expiry Date */}
        <div>
          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-2 text-right">
            تاريخ الانتهاء
          </label>
          <input
            id="expiryDate"
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="MM/YY"
            maxLength={5}
            className={`w-full px-4 py-2 border rounded-lg text-right font-mono ${
              touched.expiryDate && errors.expiryDate
                ? 'border-red-500 bg-red-50'
                : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-teal-500`}
          />
          {touched.expiryDate && errors.expiryDate && (
            <p className="mt-1 text-sm text-red-600 text-right">{errors.expiryDate}</p>
          )}
        </div>

        {/* CVV */}
        <div>
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2 text-right">
            رمز الأمان (CVV)
          </label>
          <input
            id="cvv"
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="123"
            maxLength={4}
            className={`w-full px-4 py-2 border rounded-lg text-right font-mono ${
              touched.cvv && errors.cvv
                ? 'border-red-500 bg-red-50'
                : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-teal-500`}
          />
          {touched.cvv && errors.cvv && (
            <p className="mt-1 text-sm text-red-600 text-right">{errors.cvv}</p>
          )}
        </div>
      </div>

      <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-medium">
        التالي
      </Button>
    </form>
  )
}
