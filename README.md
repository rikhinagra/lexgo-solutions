# LexGo Solutions

A modern, responsive landing page for LexGo Solutions - a company that provides dedicated case management services for Personal Injury law firms.

## About

LexGo Solutions helps PI law firms scale their practice without the hiring headaches. This website showcases our services, pricing, and allows potential clients to get in touch with us.

## Features

- Responsive design that works on desktop, tablet, and mobile
- Video background in hero section
- Interactive ROI calculator
- Service showcase with custom images
- Pricing plans section
- Client testimonials
- FAQ section with accordion
- Contact form popup with reCAPTCHA

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- CSS (custom styling)
- Lucide React (icons)
- Google reCAPTCHA v2

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rikhinagra/lexgo-solutions.git
cd lexgo-solutions
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
lexgo-solutions/
├── app/
│   ├── components/
│   │   ├── AIAdvantage.tsx
│   │   ├── ContactPopup.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Navigation.tsx
│   │   ├── Pricing.tsx
│   │   ├── Problem.tsx
│   │   ├── ROICalculator.tsx
│   │   ├── Solution.tsx
│   │   └── Testimonials.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── images/
│       └── solutions/
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed on Vercel, Netlify, or any other hosting platform that supports Next.js.

## License

This project is proprietary and confidential. All rights reserved.
