import { validateLuhn } from './luhn'

/**
 * Validate phone number (10 digits for DZ format: 0XXXXXXXXX)
 */
export function validatePhoneNumber(phone: string): boolean {
  const digits = phone.replace(/\D/g, '')
  return digits.length === 10 && digits.startsWith('0')
}

/**
 * Format phone number to DZ format
 */
export function formatPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  if (digits.length === 10) {
    return `${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`
  }
  return phone
}

/**
 * Validate expiry date (MM/YY format)
 */
export function validateExpiryDate(expiry: string): boolean {
  const [month, year] = expiry.split('/')
  
  if (!month || !year) return false
  
  const m = parseInt(month, 10)
  const y = parseInt(year, 10)
  
  // Month validation
  if (m < 1 || m > 12) return false
  
  // Year validation (current year and future)
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear() % 100
  const currentMonth = currentDate.getMonth() + 1
  
  if (y < currentYear) return false
  if (y === currentYear && m < currentMonth) return false
  
  return true
}

/**
 * Format expiry date to MM/YY
 */
export function formatExpiryDate(value: string): string {
  const digits = value.replace(/\D/g, '')
  
  if (digits.length === 0) return ''
  if (digits.length <= 2) return digits
  
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`
}

/**
 * Validate CVV (3-4 digits)
 */
export function validateCVV(cvv: string): boolean {
  const digits = cvv.replace(/\D/g, '')
  return digits.length >= 3 && digits.length <= 4
}

/**
 * Validate card number using Luhn algorithm
 */
export function validateCardNumber(cardNumber: string): boolean {
  return validateLuhn(cardNumber)
}

/**
 * Validate email address
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate name (at least 2 characters)
 */
export function validateName(name: string): boolean {
  return name.trim().length >= 2
}

/**
 * Validate OTP (6 digits)
 */
export function validateOTP(otp: string): boolean {
  const digits = otp.replace(/\D/g, '')
  return digits.length === 6
}

/**
 * Validate date of birth (must be 18+ years old)
 */
export function validateDateOfBirth(dateString: string): boolean {
  try {
    const dob = new Date(dateString)
    const today = new Date()
    let age = today.getFullYear() - dob.getFullYear()
    const monthDiff = today.getMonth() - dob.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--
    }
    
    return age >= 18 && age <= 120
  } catch {
    return false
  }
}
