/**
 * Validates a card number using the Luhn algorithm
 * @param cardNumber - The card number string (digits only)
 * @returns true if the card number is valid according to Luhn algorithm
 */
export function validateLuhn(cardNumber: string): boolean {
  // Remove any spaces or non-digit characters
  const digits = cardNumber.replace(/\D/g, "");

  // Must be at least 13 digits (standard card length)
  if (digits.length < 13 || digits.length > 19) {
    return false;
  }

  let sum = 0;
  let isEven = false;

  // Process digits from right to left
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i], 10);

    // Double every second digit from the right
    if (isEven) {
      digit *= 2;
      // If doubled digit is greater than 9, subtract 9
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  // Valid if sum is divisible by 10
  return sum % 10 === 0;
}
