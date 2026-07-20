# Environment Variables Setup Guide

## What Was Changed

All hardcoded URLs and sensitive credentials have been removed from the codebase and replaced with environment variable references.

### Files Modified

1. **`lib/cards-data.ts`**
   - Replaced hardcoded Blob URLs with `NEXT_PUBLIC_*` environment variables
   - Variables: `CLASSIC_CARD_IMG`, `BUSINESS_CARD_IMG`, `EMPLOYEE_CARD_IMG`, `GIFT_CARD_IMG`, `VISITOR_CARD_IMG`, `JOURNALIST_CARD_IMG`, `heroImage`

2. **`components/header.tsx`**
   - Replaced header logo URL with `NEXT_PUBLIC_LOGO_URL`

3. **`components/steps/step-baridi-mob.tsx`**
   - Replaced Baridi Mob logo with `NEXT_PUBLIC_BARIDI_MOB_LOGO`

4. **`components/steps/step-baridimob-login.tsx`**
   - Replaced login page logo with `NEXT_PUBLIC_BARIDIMOB_LOGIN_LOGO`

5. **`app/api/telegram/route.ts`**
   - Already uses environment variables: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`

## Required Environment Variables

### Telegram Configuration (Backend Only)
These variables are **private** and should NOT be prefixed with `NEXT_PUBLIC_`:
- `TELEGRAM_BOT_TOKEN` - Your Telegram bot token
- `TELEGRAM_CHAT_ID` - Your Telegram chat ID

### Image URLs (Public)
These variables are prefixed with `NEXT_PUBLIC_` because they're accessed from the browser:
- `NEXT_PUBLIC_LOGO_URL` - Header logo image
- `NEXT_PUBLIC_HERO_IMAGE` - Hero section background
- `NEXT_PUBLIC_PREMIUM_CARD_IMG` - Premium card image
- `NEXT_PUBLIC_CLASSIC_CARD_IMG` - Classic card image
- `NEXT_PUBLIC_BUSINESS_CARD_IMG` - Business card image
- `NEXT_PUBLIC_EMPLOYEE_CARD_IMG` - Employee card image
- `NEXT_PUBLIC_GIFT_CARD_IMG` - Gift card image
- `NEXT_PUBLIC_VISITOR_CARD_IMG` - Visitor card image
- `NEXT_PUBLIC_JOURNALIST_CARD_IMG` - Journalist card image
- `NEXT_PUBLIC_BARIDI_MOB_LOGO` - Baridi Mob main logo
- `NEXT_PUBLIC_BARIDIMOB_LOGIN_LOGO` - Baridi Mob login page logo

## Setup Instructions

### Step 1: Create .env.local File
```bash
cp .env.example .env.local
```

### Step 2: Add Your Values

Edit `.env.local` and replace all placeholder values:

```env
# Telegram (Required for notifications to work)
TELEGRAM_BOT_TOKEN=YOUR_BOT_TOKEN_HERE
TELEGRAM_CHAT_ID=YOUR_CHAT_ID_HERE

# Image URLs (Add your CDN or storage URLs)
NEXT_PUBLIC_LOGO_URL=https://your-storage.com/logo.png
NEXT_PUBLIC_HERO_IMAGE=https://your-storage.com/hero.jpg
NEXT_PUBLIC_PREMIUM_CARD_IMG=https://your-storage.com/premium.jpg
NEXT_PUBLIC_CLASSIC_CARD_IMG=https://your-storage.com/classic.jpg
NEXT_PUBLIC_BUSINESS_CARD_IMG=https://your-storage.com/business.jpg
NEXT_PUBLIC_EMPLOYEE_CARD_IMG=https://your-storage.com/employee.jpg
NEXT_PUBLIC_GIFT_CARD_IMG=https://your-storage.com/gift.jpg
NEXT_PUBLIC_VISITOR_CARD_IMG=https://your-storage.com/visitor.jpg
NEXT_PUBLIC_JOURNALIST_CARD_IMG=https://your-storage.com/journalist.jpg
NEXT_PUBLIC_BARIDI_MOB_LOGO=https://your-storage.com/baridi-logo.png
NEXT_PUBLIC_BARIDIMOB_LOGIN_LOGO=https://your-storage.com/baridimob-login.png
```

### Step 3: Run the Application
```bash
pnpm dev
```

## Important Notes

✅ **Do's:**
- Store sensitive credentials (like `TELEGRAM_BOT_TOKEN`) in `.env.local` (never commit this)
- Use `NEXT_PUBLIC_` prefix only for URLs that need to be accessible from the browser
- Keep `.env.example` updated when adding new variables
- Add `.env.local` to `.gitignore` (already done)

❌ **Don'ts:**
- Never commit `.env.local` to version control
- Never hardcode URLs directly in component files
- Never use `NEXT_PUBLIC_` for sensitive data

## Deployment

When deploying to production (e.g., Vercel), add these variables through:
- **Vercel Dashboard** → Project Settings → Environment Variables
- **Vercel CLI** → `vercel env add`

All `NEXT_PUBLIC_` variables will be embedded in the JavaScript bundle and visible to users, so only add non-sensitive URLs there.
