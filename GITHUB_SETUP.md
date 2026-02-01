# GitHub Repository Setup Guide

## Step 1: Initialize Git Repository

```bash
# Navigate to your project directory
cd professional-portfolio

# Initialize Git repository
git init

# Add all files to staging
git add .

# Make initial commit
git commit -m "Initial commit: Professional portfolio website"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in repository details:
   - **Repository name**: `professional-portfolio`
   - **Description**: `Professional portfolio website for Dr. Balamurugan K`
   - **Visibility**: Public (recommended for portfolio)
   - **Initialize with README**: Unchecked (we already have one)
   - **Add .gitignore**: None (we already have one)
   - **Choose license**: MIT License (recommended)

5. Click "Create repository"

## Step 3: Connect Local Repository to GitHub

```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/professional-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Configure Repository Settings

### Enable GitHub Pages (Optional - for alternative hosting)

1. Go to repository settings
2. Scroll down to "GitHub Pages" section
3. Under "Build and deployment", select "GitHub Actions"
4. Create a workflow file for deployment (if needed)

### Add Repository Description

1. Click on repository name
2. Click "About" section
3. Add description and website URL once deployed

## Step 5: Best Practices for Version Control

### .gitignore Configuration

Your `.gitignore` file should include:

```
# Dependencies
node_modules/
/.pnp
.pnp.js

# Production
/build
/dist

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

### Commit Message Guidelines

Use clear, descriptive commit messages:

```bash
# Good examples
git commit -m "Add: Hero section with professional introduction"
git commit -m "Fix: Mobile navigation responsiveness issues"
git commit -m "Update: Contact information and links"
git commit -m "Style: Improve color scheme and typography"

# Bad examples
git commit -m "fix stuff"
git commit -m "update"
git commit -m "wip"
```

### Branch Strategy

```bash
# Create a new branch for features
git checkout -b feature/add-publications-section

# Make changes and commit
git add .
git commit -m "Add: Publications section with research highlights"

# Switch back to main
git checkout main

# Merge feature branch
git merge feature/add-publications-section

# Delete feature branch
git branch -d feature/add-publications-section

# Push changes to GitHub
git push origin main
```

## Step 6: Regular Maintenance

### Update Dependencies

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Commit dependency updates
git add package.json package-lock.json
git commit -m "Update: Dependencies to latest stable versions"
git push origin main
```

### Backup Strategy

- Regular commits ensure version history
- Use GitHub as remote backup
- Consider creating releases for major milestones:

```bash
# Create a tagged release
git tag -a v1.0.0 -m "Initial portfolio release"
git push origin v1.0.0
```

## Step 7: Collaborative Features

### Issues and Projects

1. Use **Issues** to track:
   - Bug reports
   - Feature requests
   - Content updates

2. Use **Projects** to organize:
   - Development roadmap
   - Content improvements
   - Deployment tasks

### Pull Requests (for collaborative work)

```bash
# Create feature branch
git checkout -b feature/improve-seo

# Make changes
git add .
git commit -m "Improve: SEO meta tags and descriptions"

# Push branch
git push origin feature/improve-seo

# Create pull request on GitHub
```

## Repository Structure

```
professional-portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Publications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

This setup provides a solid foundation for version control and collaboration on your professional portfolio website.
