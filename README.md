# Automation Architect Website

Professional automation services website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✅ Modern, professional design system
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ WCAG AA accessible
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ TypeScript for type safety
- ✅ Smooth animations with Framer Motion

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd automation-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your values:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx          # Home page
│   ├── services/         # Services page
│   ├── projects/         # Projects/Portfolio page
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   └── ...              # Page-specific components
├── lib/                 # Utility functions
├── public/              # Static assets
├── design-system.json   # Design system configuration
└── tailwind.config.ts   # Tailwind configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run analyze` - Analyze bundle size

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment guide.

### Quick Deploy to Vercel

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variables
4. Deploy!

## Configuration

### Environment Variables

**Required:**
- `NEXT_PUBLIC_SITE_URL` - Your site URL (for SEO and structured data)

**Optional:**
- `FORMSPREE_ID` - FormSpree form ID (for contact form)
- `GOOGLE_ANALYTICS_ID` - Google Analytics ID
- `SENTRY_DSN` - Sentry error tracking

See `.env.example` for all available variables.

## Customization

### Update Links

- **Calendly:** Update in `components/BookingOption.tsx`
- **LinkedIn:** Update in `components/Footer.tsx`
- **Contact Form:** Configure backend in `components/ContactForm.tsx` or `app/api/contact/route.ts`

### Design System

All design tokens are in `design-system.json`. Colors, typography, and spacing can be customized there.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Documentation

- [Design System](./DESIGN_SYSTEM.md) - Design system guide
- [Deployment Guide](./DEPLOYMENT.md) - Production deployment
- [SEO Optimization](./SEO_OPTIMIZATION.md) - SEO setup
- [Accessibility Audit](./ACCESSIBILITY_AUDIT.md) - Accessibility compliance
- [Performance Optimization](./PERFORMANCE_OPTIMIZATION.md) - Performance guide
- [QA Checklist](./QA_CHECKLIST.md) - Pre-deployment checklist
- [Launch Checklist](./LAUNCH_CHECKLIST.md) - Final launch steps

## License

Private project - All rights reserved.

## Support

For deployment issues, see [DEPLOYMENT.md](./DEPLOYMENT.md).

For development questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
