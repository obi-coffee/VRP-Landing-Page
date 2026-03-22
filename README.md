# tāst Coffee — Verified Roaster Partner Landing Page

A Next.js landing page for the tāst Coffee VRP program, collecting interest from prospective roaster partners.

## Quick Start

```bash
npm install
cp .env.local.example .env.local
# Edit .env.local with your credentials (see below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

### Resend (email notifications)

1. Sign up at [resend.com](https://resend.com)
2. Create an API key in the dashboard
3. Set `RESEND_API_KEY` and `NOTIFICATION_EMAIL` in `.env.local`

> On the free tier, you can only send to the email address you signed up with until you verify a domain.

### Google Sheets (submission logging)

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a project (or use an existing one)
3. Enable the **Google Sheets API**
4. Go to **IAM & Admin → Service Accounts** and create a service account
5. Create a JSON key for the service account and download it
6. From the JSON key, copy `client_email` → `GOOGLE_SHEETS_CLIENT_EMAIL` and `private_key` → `GOOGLE_SHEETS_PRIVATE_KEY`
7. Create a Google Sheet and copy the spreadsheet ID from the URL (`https://docs.google.com/spreadsheets/d/{THIS_PART}/edit`)
8. Set `GOOGLE_SHEETS_SPREADSHEET_ID`
9. **Share the spreadsheet** with the service account email (Editor access)

The first row of submissions will create headers automatically. Column order: Timestamp, Roastery Name, Contact Name, Email, Phone, Location, Website, Instagram, Year Founded, How They Heard, Interest, Notes.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add the environment variables from `.env.local.example` in the Vercel project settings
4. Deploy

## Swapping the Logo for an SVG

The logo is rendered by `components/Logo.tsx` as styled text. To replace it with an SVG:

1. Place your SVG file in `public/` (e.g., `public/tast-logo.svg`)
2. Edit `components/Logo.tsx`:

```tsx
import Image from 'next/image'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/tast-logo.svg"
      alt="tāst Coffee"
      width={120}
      height={40}
      className={className}
      priority
    />
  )
}
```

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** with custom brand tokens
- **Resend** for email notifications
- **Google Sheets API** for submission logging
- Deployed on **Vercel**
