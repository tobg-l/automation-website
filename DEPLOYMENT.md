# Deployment Guide

Complete guide for deploying the Automation Architect website to production.

## Prerequisites

- Node.js 18+ installed
- Git repository set up
- Vercel account (recommended) or other hosting platform
- Domain name (optional but recommended)

## 1. Environment Variables

### Development Setup

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Update `.env.local` with your values:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production Setup

**For Vercel:**
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the following variables:

| Variable | Value | Environment |
|----------|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com` | Production, Preview |

**Important:** Never commit `.env.local` to Git. It's already in `.gitignore`.

## 2. Build Optimization

### Pre-Deployment Build Test

1. Install dependencies:
```bash
npm install
```

2. Run production build:
```bash
npm run build
```

3. Check for errors:
- Review build output
- Fix any TypeScript errors
- Fix any ESLint warnings

4. Test production build locally:
```bash
npm start
```

5. Review build output:
- Check bundle sizes
- Verify static pages are generated
- Ensure no unnecessary code is included

### Build Output Analysis

To analyze bundle size:
```bash
npm run analyze
```

This will show:
- Bundle sizes per route
- Code splitting effectiveness
- Opportunities for optimization

## 3. Hosting Setup (Vercel)

### Initial Setup

1. **Connect Repository:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

2. **Configure Build Settings:**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

3. **Set Environment Variables:**
   - Add `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`
   - Add any other required variables
   - Set for Production, Preview, and Development environments

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Review deployment URL

### Custom Domain Setup

1. **Add Domain:**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **DNS Configuration:**
   - Add CNAME record pointing to Vercel
   - Or add A record (if using apex domain)
   - Wait for DNS propagation (up to 48 hours)

3. **SSL Certificate:**
   - Vercel automatically provisions SSL certificates
   - HTTPS will be enabled automatically

### Alternative Hosting Options

**Netlify:**
- Similar process to Vercel
- Use `netlify.toml` for configuration
- Set build command: `npm run build`
- Publish directory: `.next`

**Self-Hosted:**
- Requires Node.js server
- Use `npm run build` then `npm start`
- Configure reverse proxy (nginx recommended)
- Set up SSL certificate (Let's Encrypt)

## 4. Analytics Setup (Optional)

### Google Analytics

1. **Create GA4 Property:**
   - Go to [Google Analytics](https://analytics.google.com)
   - Create new property
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Add to Project:**
   - Install: `npm install @next/third-parties`
   - Add to `app/layout.tsx`:
   ```tsx
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <GoogleAnalytics gaId="G-XXXXXXXXXX" />
         </body>
       </html>
     )
   }
   ```

3. **Environment Variable:**
   - Add `GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX` to Vercel

### Plausible Analytics (Privacy-Friendly)

1. **Sign up:** [plausible.io](https://plausible.io)

2. **Add Script:**
   - Add to `app/layout.tsx`:
   ```tsx
   <script defer data-domain="your-domain.com" src="https://plausible.io/js/script.js"></script>
   ```

3. **Environment Variable:**
   - Add `PLAUSIBLE_DOMAIN=your-domain.com`

## 5. Form Backend Setup

### Option 1: FormSpree (Recommended)

1. **Sign up:** [formspree.io](https://formspree.io)
2. **Create Form:**
   - Get form endpoint URL
   - Update `components/ContactForm.tsx`:
   ```tsx
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData),
     });
     // Handle response
   };
   ```

3. **Environment Variable:**
   - Add `FORMSPREE_ID=your-form-id`

### Option 2: Basin

1. **Sign up:** [usebasin.com](https://usebasin.com)
2. **Get API Key:**
   - Create form endpoint
   - Get API key

3. **Update Form:**
   ```tsx
   const response = await fetch('https://api.usebasin.com/v1/submissions', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${process.env.BASIN_API_KEY}`,
     },
     body: JSON.stringify(formData),
   });
   ```

### Option 3: Custom Backend

1. **Create API Route:**
   - Create `app/api/contact/route.ts`
   - Handle form submission
   - Send email notifications
   - Return success/error responses

2. **Update Form:**
   ```tsx
   const response = await fetch('/api/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   });
   ```

## 6. Monitoring Setup

### Error Tracking (Sentry - Optional)

1. **Sign up:** [sentry.io](https://sentry.io)
2. **Install:**
   ```bash
   npm install @sentry/nextjs
   ```
3. **Configure:**
   ```bash
   npx @sentry/nextjs wizard
   ```
4. **Environment Variable:**
   - Add `SENTRY_DSN=your-sentry-dsn`

### Performance Monitoring

**Vercel Analytics:**
- Automatically included with Vercel Pro
- No setup required
- View in Vercel dashboard

**Google PageSpeed Insights:**
- Monitor Core Web Vitals
- Set up alerts for performance regressions

### Uptime Monitoring

**Recommended Services:**
- [UptimeRobot](https://uptimerobot.com) - Free tier available
- [Pingdom](https://www.pingdom.com)
- [StatusCake](https://www.statuscake.com)

**Setup:**
1. Create account
2. Add your website URL
3. Set check interval (5 minutes recommended)
4. Configure alerts (email/SMS)

## 7. Final Checks Before Launch

### Pre-Launch Checklist

- [ ] **Build Test:**
  - [ ] `npm run build` completes without errors
  - [ ] `npm start` runs successfully
  - [ ] All pages load correctly

- [ ] **Environment Variables:**
  - [ ] `NEXT_PUBLIC_SITE_URL` set correctly
  - [ ] All required variables configured
  - [ ] No sensitive data exposed

- [ ] **Links & Navigation:**
  - [ ] All internal links work
  - [ ] External links open correctly
  - [ ] Navigation menu functional
  - [ ] Mobile menu works

- [ ] **Forms:**
  - [ ] Form validation works
  - [ ] Form submission configured
  - [ ] Error handling works
  - [ ] Success messages display

- [ ] **Responsive Design:**
  - [ ] Mobile layout correct
  - [ ] Tablet layout correct
  - [ ] Desktop layout correct
  - [ ] No horizontal scroll

- [ ] **Performance:**
  - [ ] Lighthouse score > 90
  - [ ] Fast loading times
  - [ ] Smooth animations
  - [ ] No console errors

- [ ] **SEO:**
  - [ ] Metadata on all pages
  - [ ] Structured data valid
  - [ ] Sitemap accessible
  - [ ] Robots.txt configured

- [ ] **Accessibility:**
  - [ ] Keyboard navigation works
  - [ ] Focus indicators visible
  - [ ] Screen reader friendly
  - [ ] Color contrast sufficient

## 8. Launch Checklist

### DNS & Domain

- [ ] Custom domain configured (if applicable)
- [ ] DNS records updated
- [ ] SSL certificate active (HTTPS)
- [ ] Domain verified in hosting platform

### Search Engines

- [ ] **Google Search Console:**
  - [ ] Verify domain ownership
  - [ ] Submit sitemap: `https://your-domain.com/sitemap.xml`
  - [ ] Request indexing for key pages
  - [ ] Monitor for crawl errors

- [ ] **Bing Webmaster Tools:**
  - [ ] Verify domain ownership
  - [ ] Submit sitemap
  - [ ] Request indexing

### Testing

- [ ] **Production URL Test:**
  - [ ] All pages load correctly
  - [ ] No 404 errors
  - [ ] Images load (when added)
  - [ ] Forms submit successfully

- [ ] **Cross-Browser Test:**
  - [ ] Chrome (latest)
  - [ ] Firefox (latest)
  - [ ] Safari (latest)
  - [ ] Edge (latest)

- [ ] **Mobile Test:**
  - [ ] iPhone Safari
  - [ ] Android Chrome
  - [ ] Tablet devices

- [ ] **Performance Test:**
  - [ ] Run Lighthouse audit
  - [ ] Check Core Web Vitals
  - [ ] Verify fast load times

### Monitoring

- [ ] Error tracking configured
- [ ] Analytics tracking verified
- [ ] Uptime monitoring active
- [ ] Performance monitoring set up

### Content Updates

- [ ] Update Calendly link in `components/BookingOption.tsx`
- [ ] Update LinkedIn link in `components/Footer.tsx`
- [ ] Verify all contact information correct
- [ ] Check all copy for accuracy

## 9. Post-Launch

### Immediate Actions

1. **Monitor:**
   - Check error logs
   - Monitor performance
   - Watch for any issues

2. **Verify:**
   - Test form submissions
   - Check analytics tracking
   - Verify all links work

3. **Optimize:**
   - Review performance metrics
   - Address any issues
   - Optimize based on data

### Ongoing Maintenance

- **Weekly:**
  - Check error logs
  - Review analytics
  - Monitor performance

- **Monthly:**
  - Update dependencies
  - Review SEO performance
  - Check for security updates

- **Quarterly:**
  - Review and update content
  - Analyze user behavior
  - Optimize based on insights

## Troubleshooting

### Common Issues

**Build Fails:**
- Check environment variables
- Review build logs
- Ensure all dependencies installed

**404 Errors:**
- Verify routing configuration
- Check file structure
- Review Next.js routing docs

**Form Not Submitting:**
- Check form backend configuration
- Verify API endpoints
- Check network requests in DevTools

**Performance Issues:**
- Run bundle analyzer
- Check for large dependencies
- Optimize images
- Review code splitting

## Support Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Troubleshooting](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)

---

**Ready to deploy?** Follow the checklist above and you'll be live in minutes!

