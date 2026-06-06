/**
 * Training data for the practice form
 * All card numbers pass Luhn validation and are non-real test cards
 */

export const TRAINING_CARDS = [
  {
    number: '4532015112830366',
    type: 'Visa',
    name: 'Ahmed Ben Mohamed',
    cvv: '123',
  },
  {
    number: '5425233010103442',
    type: 'Mastercard',
    name: 'Fatima Saidane',
    cvv: '456',
  },
  {
    number: '378282246310005',
    type: 'American Express',
    name: 'Mohamed Karim',
    cvv: '1234',
  },
]

export const TRAINING_USERS = [
  {
    firstName: 'أحمد',
    lastName: 'بن محمد',
    englishFirstName: 'Ahmed',
    englishLastName: 'Ben Mohamed',
    phone: '0666123456',
    email: 'ahmed.benmed@example.com',
    dateOfBirth: '1990-05-15',
  },
  {
    firstName: 'فاطمة',
    lastName: 'سعيدان',
    englishFirstName: 'Fatima',
    englishLastName: 'Saidane',
    phone: '0770234567',
    email: 'fatima.saidane@example.com',
    dateOfBirth: '1992-08-22',
  },
  {
    firstName: 'محمد',
    lastName: 'كريم',
    englishFirstName: 'Mohamed',
    englishLastName: 'Karim',
    phone: '0656789012',
    email: 'mohamed.karim@example.com',
    dateOfBirth: '1988-03-10',
  },
]

export const TEST_OTP = '123456'
export const TEST_OTP_TIMEOUT = 60000 // 60 seconds in milliseconds

/**
 * Get a random training user
 */
export function getRandomTrainingUser() {
  return TRAINING_USERS[Math.floor(Math.random() * TRAINING_USERS.length)]
}

/**
 * Get a random training card
 */
export function getRandomTrainingCard() {
  return TRAINING_CARDS[Math.floor(Math.random() * TRAINING_CARDS.length)]
}

/**
 * Get all training data as a combined object
 */
export function getFullTrainingData() {
  const user = getRandomTrainingUser()
  const card = getRandomTrainingCard()
  
  return {
    personalInfo: {
      firstName: user.englishFirstName,
      lastName: user.englishLastName,
      phone: user.phone,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
    },
    cardDetails: {
      cardNumber: card.number,
      cardholder: card.name,
      expiryDate: '12/26',
      cvv: card.cvv,
    },
    otp: TEST_OTP,
  }
}
