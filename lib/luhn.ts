/**
 * Luhn Algorithm - Validates credit card numbers
 * Used to verify that a card number is mathematically valid
 */
export function validateLuhn(cardNumber: string): boolean {
  // Remove spaces
  const digits = cardNumber.replace(/\s/g, '')
  
  // Check if all characters are digits
  if (!/^\d+$/.test(digits)) {
    return false
  }
  
  // Check length (typically 13-19 digits)
  if (digits.length < 13 || digits.length > 19) {
    return false
  }

  let sum = 0
  let isEven = false

  // Process digits from right to left
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i], 10)

    if (isEven) {
      digit *= 2
      if (digit > 9) {
        digit -= 9
      }
    }

    sum += digit
    isEven = !isEven
  }

  return sum % 10 === 0
}

/**
 * Get card type from card number
 */
export function getCardType(cardNumber: string): string {
  const digits = cardNumber.replace(/\s/g, '')
  
  if (/^4/.test(digits)) return 'Visa'
  if (/^5[1-5]/.test(digits)) return 'Mastercard'
  if (/^3[47]/.test(digits)) return 'American Express'
  if (/^6(?:011|5)/.test(digits)) return 'Discover'
  
  return 'Unknown'
}

/**
 * Format card number with spaces
 */
export function formatCardNumber(cardNumber: string): string {
  const digits = cardNumber.replace(/\s/g, '')
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ')
}

/**
 * Mask card number for display
 */
export function maskCardNumber(cardNumber: string): string {
  const digits = cardNumber.replace(/\s/g, '')
  const lastFour = digits.slice(-4)
  return `**** **** **** ${lastFour}`
}
