# Netlify Deployment Guide

## Step 1: Prepare Your Project for Deployment

### Build Your Project

```bash
# Install dependencies
npm install

# Build the project for production
npm run build
```

This creates a `dist` folder (or `build` folder) containing your optimized portfolio website.

### Verify Build Output

Check that the build folder contains:
- `index.html`
- JavaScript and CSS files
- Static assets

## Step 2: Create Netlify Account

1. Go to [Netlify](https://netlify.com)
2. Click "Sign up"
3. Choose your preferred signup method:
   - GitHub
   - GitLab
   - Bitbucket
   - Email

**Recommendation**: Use GitHub for seamless integration with your repository.

## Step 3: Deploy Your Portfolio

### Method 1: Drag and Drop (Easiest)

1. Build your project: `npm run build`
2. Locate the `dist` or `build` folder
3. Go to [Netlify](https://netlify.com) and drag the folder to the deployment area
4. Your site will be deployed instantly with a random URL

### Method 2: GitHub Integration (Recommended)

1. **Connect to Git Provider**:
   - In Netlify dashboard, click "New site from Git"
   - Choose "GitHub" (or your provider)
   - Authorize Netlify to access your repositories

2. **Select Repository**:
   - Find your `professional-portfolio` repository
   - Click "Import"

3. **Configure Build Settings**:
   ```yaml
   # Netlify will auto-detect these settings for Vite projects
   Build command: npm run build
   Publish directory: dist
   ```
   
   - If not auto-detected, set manually:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`

4. **Deploy Settings**:
   - **Branch to deploy**: `main`
   - Keep other settings as default
   - Click "Deploy site"

## Step 4: Configure Your Site

### Custom Domain

1. Go to **Site settings** → **Domain management**
2. Click "Add custom domain"
3. Enter your domain (e.g., `drbalamurugan.com`)
4. Follow DNS configuration instructions

### Site Name

1. In Site settings, click "Change site name"
2. Enter a memorable name (e.g., `dr-balamurugan-portfolio`)
3. Your URL will be: `https://dr-balamurugan-portfolio.netlify.app`

## Step 5: Environment Variables (If Needed)

If you need environment variables:

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Add variables like:
   - `NODE_VERSION`: `18`
   - Custom API keys (if applicable)

## Step 6: Deploy Hooks and Continuous Deployment

### Automatic Deploys

With GitHub integration, Netlify automatically:
- Deploys when you push to the `main` branch
- Creates deploy previews for pull requests
- Rebuilds when dependencies change

### Manual Deploys

```bash
# To trigger a manual deploy via Git
git push origin main

# Or use Netlify CLI (after installation)
netlify deploy --prod
```

## Step 7: Optimize Your Portfolio

### Performance Settings

1. **Enable Gzip compression** (default on Netlify)
2. **Configure caching** in `netlify.toml`:

```toml
# netlify.toml
[build]
  publish = "dist"
  command = "npm run build"

[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

### SEO Optimization

Add meta tags to your `index.html`:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dr. Balamurugan K - Vice President Analytical Services</title>
  <meta name="description" content="Professional portfolio of Dr. Balamurugan K, VP Analytical Services with 15+ years in pharmaceutical analysis and regulatory compliance.">
  <meta name="keywords" content="analytical chemistry, pharmaceutical, regulatory compliance, LIMS, method validation">
  <meta name="author" content="Dr. Balamurugan K">
  
  <!-- Open Graph tags for social media -->
  <meta property="og:title" content="Dr. Balamurugan K - Professional Portfolio">
  <meta property="og:description" content="Senior pharmaceutical analytical leader with 15+ years experience">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://your-site.com/og-image.jpg">
  
  <!-- LinkedIn specific -->
  <meta property="og:site_name" content="Dr. Balamurugan K Portfolio">
</head>
```

## Step 8: Monitor and Maintain

### Deploy Logs

- Check deploy logs in Netlify dashboard
- Monitor build performance
- Review any error messages

### Analytics

1. Enable Netlify Analytics (paid feature)
2. Or integrate Google Analytics:
   ```html
   <!-- Add to index.html before closing </head> -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Form Handling (Contact Form)

If you add a contact form:

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

## Step 9: Advanced Configuration

### Redirects

Create `public/_redirects` file:

```
# Handle client-side routing
/*    /index.html   200
```

### Headers

Create `public/_headers` file:

```
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

## Step 10: Backup and Recovery

### Backup Strategy

- Your code is already backed up on GitHub
- Netlify maintains deployment history
- Export site settings if needed

### Recovery

If something goes wrong:

1. **Rollback deploy**: In Netlify dashboard, select a previous deploy
2. **Redeploy**: Push a fix to GitHub
3. **Restore from backup**: Use Git history to restore working version

## Common Issues and Solutions

### Build Failures

```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Issues

Ensure your `netlify.toml` has proper routing configuration for single-page applications.

### Performance Issues

- Optimize images
- Minimize CSS/JS (handled by build process)
- Enable CDN (default on Netlify)

## Final Checklist

Before going live:

- [ ] All links work correctly
- [ ] Contact information is accurate
- [ ] Mobile responsiveness tested
- [ ] SEO meta tags added
- [ ] Custom domain configured (if desired)
- [ ] Analytics set up
- [ ] Error pages configured
- [ ] Site performance tested

Your professional portfolio is now live and accessible to the world! 🎉
