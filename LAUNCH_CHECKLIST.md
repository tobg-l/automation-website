# Launch Checklist

Final checklist before going live with your website.

## Pre-Launch (24-48 hours before)

### Code & Build
- [ ] Run `npm run build` successfully
- [ ] Fix all build errors and warnings
- [ ] Test production build locally (`npm start`)
- [ ] Review bundle sizes
- [ ] Verify no console errors

### Content
- [ ] Review all copy for accuracy
- [ ] Check for typos and grammatical errors
- [ ] Verify all contact information
- [ ] Update placeholder links (Calendly, LinkedIn)
- [ ] Ensure no "lorem ipsum" or placeholder text

### Configuration
- [ ] Set `NEXT_PUBLIC_SITE_URL` environment variable
- [ ] Configure form backend (FormSpree/Basin/custom)
- [ ] Set up email notifications for form submissions
- [ ] Configure analytics (if using)
- [ ] Set up error tracking (if using)

## Launch Day

### Deployment
- [ ] Deploy to production environment
- [ ] Verify deployment successful
- [ ] Check deployment logs for errors
- [ ] Confirm HTTPS is enabled
- [ ] Verify SSL certificate is valid

### Domain & DNS
- [ ] Custom domain configured (if applicable)
- [ ] DNS records updated correctly
- [ ] Domain verified in hosting platform
- [ ] Wait for DNS propagation (can take up to 48 hours)

### Testing on Production URL

#### Functionality
- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Mobile menu functions
- [ ] All buttons link correctly
- [ ] Forms submit successfully
- [ ] Form validation works
- [ ] Error messages display correctly

#### Links
- [ ] Internal links work
- [ ] External links open correctly
- [ ] Footer links functional
- [ ] CTA buttons navigate correctly
- [ ] No broken links

#### Responsive Design
- [ ] Mobile layout (< 640px)
- [ ] Tablet layout (640px - 1024px)
- [ ] Desktop layout (> 1024px)
- [ ] No horizontal scroll
- [ ] Touch targets adequate (44x44px)

#### Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Performance
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Check Core Web Vitals
- [ ] Verify fast load times
- [ ] Test on slow connection
- [ ] Check mobile performance

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify structured data (Rich Results Test)
- [ ] Check meta tags on all pages
- [ ] Verify Open Graph tags (Facebook Debugger)
- [ ] Verify Twitter Cards (Twitter Card Validator)

### Accessibility
- [ ] Test keyboard navigation
- [ ] Verify focus indicators visible
- [ ] Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Check color contrast
- [ ] Verify ARIA labels

### Forms & Backend
- [ ] Test form submission
- [ ] Verify email notifications received
- [ ] Check form error handling
- [ ] Test form validation
- [ ] Verify spam protection (if enabled)

### Analytics & Monitoring
- [ ] Analytics tracking verified
- [ ] Error tracking configured
- [ ] Uptime monitoring active
- [ ] Performance monitoring set up
- [ ] Set up alerts for critical issues

## Post-Launch (First 24 hours)

### Monitoring
- [ ] Monitor error logs
- [ ] Check analytics for traffic
- [ ] Review performance metrics
- [ ] Watch for any user-reported issues
- [ ] Monitor form submissions

### Quick Fixes
- [ ] Address any critical bugs immediately
- [ ] Fix broken links if found
- [ ] Update any incorrect information
- [ ] Respond to form submissions promptly

### Verification
- [ ] Google Search Console: Check for crawl errors
- [ ] Verify sitemap is indexed
- [ ] Check search engine indexing status
- [ ] Test all user flows end-to-end

## First Week

### Ongoing Monitoring
- [ ] Daily error log review
- [ ] Daily analytics check
- [ ] Monitor form submissions
- [ ] Check performance metrics
- [ ] Review user feedback (if any)

### Optimization
- [ ] Analyze user behavior
- [ ] Identify improvement opportunities
- [ ] Optimize based on data
- [ ] Fix any discovered issues

## Important Links

### Testing Tools
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Validation
- [W3C Validator](https://validator.w3.org/)
- [Schema.org Validator](https://validator.schema.org/)
- [Open Graph Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### Monitoring
- [Google Analytics](https://analytics.google.com)
- [Vercel Analytics](https://vercel.com/analytics)
- [UptimeRobot](https://uptimerobot.com)

## Emergency Contacts

If something goes wrong:
1. Check deployment logs
2. Review error tracking
3. Check hosting platform status
4. Contact hosting support if needed

## Success Criteria

✅ Website loads in < 3 seconds
✅ All pages accessible
✅ Forms submit successfully
✅ No critical errors
✅ Lighthouse score > 90
✅ Mobile-friendly verified
✅ SEO properly configured
✅ Analytics tracking working

---

**Ready to launch?** Complete all items above and you're good to go! 🚀

