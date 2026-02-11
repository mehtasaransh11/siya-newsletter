# Siya's Monthly Newsletter

A beautiful interactive newsletter viewer with page-turning animations, welcome page, and milestone archive.

## Features

- **Welcome Page**: Elegant landing page with animated envelope graphic
- **Interactive Newsletter**: Two-page layout with realistic book page-turning animations
- **Milestone Archive**: Cute baby-themed archive with 8 different milestones
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Baby Pink Theme**: Consistent pink gradient design throughout

## 🌐 Live Demo

Deployed on Vercel: [Your Live URL will appear here after deployment]

## 📁 Project Structure

```
Newsletter/
├── welcome.html          # Welcome/landing page
├── index.html           # Main newsletter viewer
├── archive.html         # Milestone archive page
├── milestone.html       # Individual milestone pages
├── styles.css           # Main newsletter styles
├── welcome.css          # Welcome page styles
├── archive.css          # Archive page styles
├── milestone.css        # Milestone page styles
├── script.js            # Main newsletter functionality
├── welcome.js           # Welcome page interactions
├── archive.js           # Archive page functionality
├── milestone.js         # Milestone page logic
├── vercel.json          # Vercel deployment configuration
├── image1.jpeg          # Newsletter images
├── image2.jpeg
├── image3.jpeg
├── image4.jpeg
├── image5.jpeg
├── image6.jpeg
└── README.md            # This file
```

## 🚀 Deployment on Vercel

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project directory**:
   ```bash
   cd /Users/saranshmehta/CascadeProjects/Newsletter
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? → `Yes`
   - Which scope? → Choose your Vercel account
   - Link to existing project? → `No` (first time)
   - Project name? → `siya-newsletter` (or your choice)
   - In which directory is your code located? → `./`
   - Want to override settings? → `No`

5. **Your site will be live** at the provided URL!

### Method 2: Using Vercel Dashboard

1. **Go to [vercel.com](https://vercel.com)** and sign up/login
2. **Click "New Project"**
3. **Choose "Import Git Repository"** or **"Upload"** the project folder
4. **Select the Newsletter folder**
5. **Configure settings**:
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
6. **Click "Deploy"**

### Method 3: Using GitHub (Best for updates)

1. **Create a GitHub repository**
2. **Push your project to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Siya's Newsletter"
   git branch -M main
   git remote add origin https://github.com/yourusername/siya-newsletter.git
   git push -u origin main
   ```
3. **Import the repository on Vercel**
4. **Enable automatic deployments** for future updates

## 📱 How to Use

1. **Welcome Page**: First page users see with animated envelope
2. **Newsletter**: Click envelope to enter the 3-page newsletter
3. **Archive**: Click "Archive" button on last page to view milestones
4. **Navigation**: Use arrows or keyboard to navigate between pages

## 🎨 Customization

### Adding More Images
1. Add new images to the project folder
2. Update `script.js` to include new image paths:
   ```javascript
   this.images = [
       'image1.jpeg',
       'image2.jpeg',
       // Add more images here
   ];
   ```

### Changing Colors
- Edit CSS files to customize the baby pink theme
- Main colors: `#ffb3d9`, `#ff69b4`, `#ff1493`

### Adding More Milestones
1. Update `milestone.js` with new milestone data
2. Add corresponding cards to `archive.html`

## 🔧 Technical Details

- **Pure HTML/CSS/JavaScript** - No build process required
- **Static Site** - Perfect for Vercel's free tier
- **Responsive Design** - Mobile-first approach
- **Modern CSS** - Grid, Flexbox, CSS Animations
- **ES6 JavaScript** - Modern features with broad support

## 🌟 Features Breakdown

### Welcome Page
- Animated envelope with floating effects
- Smooth transitions to main newsletter
- Baby pink gradient background

### Newsletter Viewer
- Realistic book page-turning animations
- 6 images displayed as 3 pages (2 per page)
- Hover effects and keyboard navigation
- Archive button appears on last page

### Milestone Archive
- 8 baby milestones with detailed content
- Floating animations and interactive cards
- Individual milestone pages with navigation
- Cute baby-themed graphics and icons

## 📞 Support

If you need help with deployment or customization, feel free to reach out!

---

Made with 💖 for Siya's precious moments.
