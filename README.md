# Baridimob - Next.js Project (Environment Variables Cleaned)

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app). All hardcoded variables have been removed and replaced with environment variable references.

## Setup Instructions

### 1. Install Dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your actual values:

```env
# Telegram API (for notifications)
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here

# Image URLs (replace with your CDN URLs)
NEXT_PUBLIC_LOGO_URL=https://your-cdn.com/logo.png
NEXT_PUBLIC_PREMIUM_CARD_IMG=https://your-cdn.com/premium-card.jpg
NEXT_PUBLIC_CLASSIC_CARD_IMG=https://your-cdn.com/classic-card.jpg
NEXT_PUBLIC_BUSINESS_CARD_IMG=https://your-cdn.com/business-card.jpg
NEXT_PUBLIC_EMPLOYEE_CARD_IMG=https://your-cdn.com/employee-card.jpg
NEXT_PUBLIC_GIFT_CARD_IMG=https://your-cdn.com/gift-card.jpg
NEXT_PUBLIC_VISITOR_CARD_IMG=https://your-cdn.com/visitor-card.jpg
NEXT_PUBLIC_JOURNALIST_CARD_IMG=https://your-cdn.com/journalist-card.jpg
NEXT_PUBLIC_BARIDI_MOB_LOGO=https://your-cdn.com/baridi-mob-logo.png
NEXT_PUBLIC_BARIDIMOB_LOGIN_LOGO=https://your-cdn.com/baridimob-login-logo.png
NEXT_PUBLIC_HERO_IMAGE=https://your-cdn.com/hero-image.jpg
```

## Getting Started

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables Reference

### Telegram Configuration
- `TELEGRAM_BOT_TOKEN` - Your Telegram bot token (required for sending notifications)
- `TELEGRAM_CHAT_ID` - Your Telegram chat ID where notifications will be sent

### Image URLs (NEXT_PUBLIC_*)
All image URLs use the `NEXT_PUBLIC_` prefix so they're available in the browser:
- `NEXT_PUBLIC_LOGO_URL` - Main header logo
- `NEXT_PUBLIC_HERO_IMAGE` - Hero section background image
- `NEXT_PUBLIC_PREMIUM_CARD_IMG` - Premium card image
- `NEXT_PUBLIC_CLASSIC_CARD_IMG` - Classic card image
- `NEXT_PUBLIC_BUSINESS_CARD_IMG` - Business card image
- `NEXT_PUBLIC_EMPLOYEE_CARD_IMG` - Employee card image
- `NEXT_PUBLIC_GIFT_CARD_IMG` - Gift card image
- `NEXT_PUBLIC_VISITOR_CARD_IMG` - Visitor card image
- `NEXT_PUBLIC_JOURNALIST_CARD_IMG` - Journalist card image
- `NEXT_PUBLIC_BARIDI_MOB_LOGO` - Baridi Mob login logo
- `NEXT_PUBLIC_BARIDIMOB_LOGIN_LOGO` - Baridi Mob login page logo

## Files Modified

The following files have been updated to use environment variables instead of hardcoded URLs:
- `lib/cards-data.ts` - Card images and hero image
- `components/header.tsx` - Header logo
- `components/steps/step-baridi-mob.tsx` - Baridi Mob logo
- `components/steps/step-baridimob-login.tsx` - Baridi Mob login logo

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.
