# 🚀 Deployment Guide for CrowFliesDistance.com

## Option 1: Vercel (Recommended)

### Prerequisites
1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm install -g vercel`

### Steps:
1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ready for deployment"
   ```

2. **Push to GitHub**:
   - Create new repository on GitHub
   - Add remote: `git remote add origin https://github.com/yourusername/crowfliesdistance.git`
   - Push: `git push -u origin main`

3. **Deploy to Vercel**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Configure settings:
     - Framework: **Next.js**
     - Build Command: `npm run build`
     - Output Directory: `.next`
     - Install Command: `npm install`

4. **Environment Variables** (optional):
   - In Vercel dashboard, go to Project Settings > Environment Variables
   - Add: `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` = `your-ga4-id`

5. **Custom Domain**:
   - In Project Settings > Domains
   - Add your custom domain: `crowfliesdistance.com`
   - Follow DNS instructions

---

## Option 2: Netlify

### Steps:
1. **Build for static export** (required for Netlify):
   ```bash
   # Add to next.config.js:
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: { unoptimized: true }
   }
   module.exports = nextConfig
   ```

2. **Build project**:
   ```bash
   npm run build
   ```

3. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder
   - Or connect to GitHub repository

---

## Option 3: Self-hosted (VPS/Server)

### Prerequisites:
- Ubuntu/Debian server
- Node.js 18+ installed
- PM2 for process management

### Steps:
1. **Server setup**:
   ```bash
   # Install Node.js and PM2
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```

2. **Deploy application**:
   ```bash
   # Clone repository
   git clone https://github.com/yourusername/crowfliesdistance.git
   cd crowfliesdistance
   
   # Install dependencies
   npm install
   
   # Build application
   npm run build
   
   # Start with PM2
   pm2 start npm --name "crowfliesdistance" -- start
   pm2 startup
   pm2 save
   ```

3. **Setup Nginx reverse proxy**:
   ```nginx
   server {
       listen 80;
       server_name crowfliesdistance.com www.crowfliesdistance.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## 📊 Analytics Setup (After Deployment)

### Google Analytics:
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Replace placeholder in `components/Analytics.tsx`
4. Redeploy

### Google Search Console:
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property with your domain
3. Verify ownership using the meta tag (already in layout)
4. Submit sitemap: `https://crowfliesdistance.com/sitemap.xml`

---

## 🔧 Pre-deployment Checklist

- [ ] Update Google Analytics ID
- [ ] Update Search Console verification token
- [ ] Test all calculator modes
- [ ] Verify all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Test API endpoints
- [ ] Verify sitemap.xml accessibility
- [ ] Check robots.txt
- [ ] Test popular distance cards
- [ ] Verify blog post links

---

## 🌐 DNS Configuration (for custom domain)

### Required DNS Records:
```
Type    Name    Value
A       @       76.76.19.61 (Vercel IP - will vary)
CNAME   www     crowfliesdistance.com
```

### For Cloudflare users:
- Enable "Proxied" status for A record
- Set SSL/TLS to "Full (strict)"

---

## 📈 Post-Launch Tasks

1. **Submit to search engines**:
   - Google: Submit sitemap in Search Console
   - Bing: [bing.com/webmasters](https://bing.com/webmasters)

2. **Monitor performance**:
   - Google Analytics for traffic
   - Search Console for SEO performance
   - Vercel Analytics for core web vitals

3. **Social media setup**:
   - Test Open Graph images on Facebook/LinkedIn
   - Test Twitter Cards
   - Update social media bio links

4. **Optional integrations**:
   - Add contact form backend (Formspree, Netlify Forms)
   - Setup email notifications
   - Add user feedback system

---

## 🆘 Troubleshooting

### Common issues:
- **Build fails**: Check Node.js version (need 18+)
- **404 on refresh**: Enable client-side routing in hosting config
- **API not working**: Verify environment variables
- **Images not loading**: Check image optimization settings
- **Slow loading**: Enable caching headers, use CDN

---

*Estimated deployment time: 15-30 minutes*
*Expected live URL: https://crowfliesdistance.com*