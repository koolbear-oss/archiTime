# ArchiTime Landing Page

A clean, professional landing page for ArchiTime — a time tracking and project management application for independent professionals.

## Overview

This landing page is designed to:
- Showcase ArchiTime's value proposition for architects, consultants, designers, and other independent professionals
- Clearly present the 5-tier pricing structure (Basic, Independent, Solo, Collaborative, Enterprise)
- Guide visitors through how the application works
- Convert visitors into trial users

## Pages

- **index.html** - Home page with hero, problems/solutions, audience segments, testimonials
- **features.html** - Comprehensive feature breakdown by category with tier comparison table
- **pricing.html** - All 5 pricing tiers with feature lists and FAQ
- **how-it-works.html** - 3-step walkthrough with visual mockups, mobile-first showcase

## Tech Stack

- **HTML5** - Semantic, accessible markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No dependencies, lightweight interactions
- **Google Fonts** - DM Sans (body) + Instrument Serif (display)

## Design Principles

- **Mobile-first** - Responsive down to 320px
- **Clean & Professional** - Minimalist aesthetic matching the ArchiTime app
- **Performance-focused** - No heavy frameworks, optimized assets
- **Accessible** - Semantic HTML, proper contrast ratios

## Deployment

### Netlify (Recommended)

1. Push this repository to GitHub
2. Connect to Netlify
3. Deploy with default settings

The `netlify.toml` file includes:
- Clean URL redirects
- Security headers
- Cache optimization

### Manual Deployment

Simply upload all files to any static hosting service:
- Vercel
- GitHub Pages
- Cloudflare Pages
- Any web server

## File Structure

```
architime-landing/
├── index.html          # Home page
├── features.html       # Features page
├── pricing.html        # Pricing page
├── how-it-works.html   # How it works page
├── styles.css          # All styles
├── script.js           # JavaScript functionality
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --accent: #2563eb;      /* Primary brand color */
    --black: #0a0a0a;       /* Text color */
    --gray-*: ...           /* Gray scale */
}
```

### Typography
Fonts are loaded from Google Fonts. To change:
1. Update the `<link>` in HTML files
2. Update `--font-display` and `--font-body` in CSS

### Content
All content is in plain HTML. Edit the `.html` files directly.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

© 2025 ArchiTime. All rights reserved.
