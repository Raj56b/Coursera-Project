# Portfolio Website

A fully functional, responsive, and accessible developer portfolio website built with vanilla HTML, CSS, and JavaScript.

## 🌟 Features

### Core Functionality
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Hamburger Menu** - Mobile-friendly navigation toggle
- **Smooth Scrolling** - Elegant navigation between sections
- **Project Filtering** - Filter projects by category (Frontend, Full Stack, API Integration)
- **Lightbox Gallery** - Click to view project images in a modal
- **Form Validation** - Real-time validation with helpful error messages
- **Scroll to Top** - Quick navigation to top of page
- **Accessibility** - WCAG 2.1 compliant with proper ARIA labels

### Interactive Elements
- Dynamic hamburger menu that transforms into an X when clicked
- Keyboard navigation (Tab, Enter, Arrow keys, Escape)
- Smooth animations and transitions
- Touch-friendly interface for mobile devices
- Real-time form validation with visual feedback

## 📱 Responsive Breakpoints

| Device | Width | Features |
|--------|-------|----------|
| Mobile | < 768px | Hamburger menu, single column layout |
| Tablet | 768px - 1023px | Hamburger menu, 2-3 column grid |
| Desktop | ≥ 1024px | Full navigation, optimized layout |

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ IE 11 (basic support with fallbacks)

## 📂 File Structure

```
├── index.html                      # Main HTML structure (214 lines)
├── styles.css                      # Complete styling & responsive design (770 lines)
├── script.js                       # Interactive features & validation (505 lines)
├── README.md                       # This file
├── PROJECT_COMPLETION_SUMMARY.md   # Detailed project overview
├── TESTING_REPORT.md              # Test results and verification
├── JAVASCRIPT_IMPLEMENTATION.md   # Feature documentation
├── DEBUGGING_GUIDE.md             # Testing and debugging guide
└── QUICK_REFERENCE.md             # Quick reference card
```

## 🚀 Quick Start

### View the Website
1. Clone the repository:
   ```bash
   git clone https://github.com/Raj56b/Coursera-Project.git
   cd Coursera-Project
   ```

2. Open `index.html` in your browser:
   - Right-click on `index.html` and select "Open with Browser"
   - Or drag the file to your browser window

### No Installation Required!
This is a standalone project with no dependencies. Just open the HTML file and it works!

## 🎨 Customization

### Change Your Name/Title
**File**: `index.html`, line 14
```html
<h1>Your Name Here</h1>
```

### Update About Section
**File**: `index.html`, lines 37-45
```html
<section id="about-me">
    <h2>About Me</h2>
    <p>Your introduction here...</p>
</section>
```

### Add New Project
**File**: `index.html`, after line 75
```html
<article class="project-item" data-category="your-category">
    <figure>
        <img src="image-url" alt="Project description" class="project-image">
    </figure>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Project description</p>
        <a href="project-link" class="project-link">View Project</a>
    </div>
</article>
```

### Change Colors
**File**: `styles.css`
- Primary Blue: `#3498db`
- Dark Color: `#2c3e50`
- Success Green: `#27ae60`
- Error Red: `#e74c3c`

### Update Contact Information
**File**: `index.html`, lines 182-190
```html
<li><strong>Email:</strong> <a href="mailto:your-email@example.com">your-email@example.com</a></li>
<li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile">your-profile</a></li>
<li><strong>GitHub:</strong> <a href="https://github.com/yourprofile">your-profile</a></li>
```

## ✨ Key Features Explained

### Hamburger Menu
- Visible on screens smaller than 768px
- Smooth animation when clicked
- Auto-closes when a link is selected
- Accessible with keyboard navigation

### Project Filtering
Click the filter buttons to view projects by category:
- **All Projects** - Shows all projects
- **Frontend** - Shows Task Management App
- **Full Stack** - Shows E-Commerce Platform
- **API Integration** - Shows Weather Dashboard

### Lightbox Gallery
- Click any project image to open in full-screen modal
- Navigate with previous/next arrows or keyboard arrows
- Close with X button, Escape key, or click outside image
- Works perfectly on all devices

### Form Validation
Real-time validation for all fields:
- **Name**: Required, minimum 2 characters
- **Email**: Valid email format required
- **Subject**: Required, minimum 2 characters
- **Message**: Required, minimum 10 characters

Visual feedback:
- Red border for errors
- Green border for valid fields
- Error messages below each field
- Success message after submission

## ♿ Accessibility Features

- **Semantic HTML** - Proper use of structural tags
- **ARIA Labels** - All interactive elements labeled
- **Keyboard Navigation** - Full keyboard support
- **Focus Indicators** - Clear visual feedback
- **Color Contrast** - WCAG AA standard met
- **Form Labels** - Properly associated with inputs
- **Alt Text** - Descriptive text on all images

## 🧪 Testing

### Manual Testing
All features have been tested on:
- Multiple screen sizes (320px to 1920px)
- Multiple browsers (Chrome, Firefox, Safari, Edge)
- Multiple devices (Desktop, Tablet, Mobile)
- Keyboard and touch interactions

### Test Features
```javascript
// Open browser console (F12) and try:

// Test hamburger menu
toggleMenu();

// Test smooth scrolling
smoothScroll('#projects');

// Test project filter
filterProjects('frontend');

// Test form validation
validateForm();

// View debug information
debugPortfolio();
```

## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| Total Lines of Code | 1,489 |
| HTML | 214 lines |
| CSS | 770 lines |
| JavaScript | 505 lines |
| File Size (unminified) | ~58 KB |
| File Size (minified) | ~15-20 KB |
| Mobile-Friendly | ✅ Yes |
| Accessibility Level | WCAG 2.1 A |

## 🐛 Known Issues & Solutions

### Project Filter Not Working
```javascript
// Run in console:
initializeProjectFilter();
```

### Form Not Validating
- Check that all form fields have correct IDs
- Verify browser console shows no errors
- Try refreshing the page

### Lightbox Not Opening
- Make sure you're clicking on the image, not the card
- Check browser console for errors
- Try: `initializeLightbox();` in console

## 🔧 Development

### File Organization
- **HTML**: Semantic structure with proper nesting
- **CSS**: Organized with clear sections and comments
- **JavaScript**: Modular functions with error handling

### Code Quality
- ✅ No syntax errors
- ✅ Valid HTML5
- ✅ Valid CSS3
- ✅ ES6+ JavaScript
- ✅ Well-commented
- ✅ Responsive design
- ✅ Cross-browser compatible

### Vendor Prefixes
Includes prefixes for:
- Webkit (Chrome, Safari)
- Mozilla (Firefox)
- Standard versions

## 📚 Documentation

### Included Guides
1. **PROJECT_COMPLETION_SUMMARY.md** - Complete project overview and statistics
2. **TESTING_REPORT.md** - Detailed test results and verification
3. **JAVASCRIPT_IMPLEMENTATION.md** - Technical documentation of all features
4. **DEBUGGING_GUIDE.md** - Debugging tips and console commands
5. **QUICK_REFERENCE.md** - Quick reference card for common tasks

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Website automatically available at `yourusername.github.io/Coursera-Project`

### Traditional Web Server
1. Upload all files to web server
2. Ensure all files are in the same directory
3. Configure proper MIME types
4. Enable HTTPS
5. Test in production

### Required Server Features
- Web server (Apache, Nginx, etc.)
- HTTPS support
- Proper MIME types configured
- No special backend required

## 💡 Tips

### For Best Performance
- Minify CSS and JavaScript before deployment
- Optimize images (consider lazy-loading)
- Use CDN for faster delivery
- Enable caching on web server

### For Better SEO
- Update meta description (line 6 in index.html)
- Use relevant keywords in content
- Add Open Graph tags for social sharing
- Create sitemap.xml
- Add robots.txt

### For Ongoing Maintenance
- Keep browser support updated
- Monitor console for errors
- Test on new devices as they release
- Update dependencies if using frameworks
- Collect user feedback

## 🤝 Contributing

Feel free to:
- Fork this repository
- Create feature branches
- Submit pull requests
- Report issues
- Suggest improvements

## 📄 License

This project is open source and available under the MIT License. You are free to use, modify, and distribute this code.

## 🔗 Links

- **Live Demo**: [View on GitHub Pages](https://raj56b.github.io/Coursera-Project)
- **Repository**: [GitHub Repo](https://github.com/Raj56b/Coursera-Project)
- **Portfolio Contact**: john@example.com

## 📞 Support

For issues or questions:
1. Check the **DEBUGGING_GUIDE.md** for solutions
2. Review the **TESTING_REPORT.md** for verification steps
3. Open a GitHub issue with details
4. Consult the **QUICK_REFERENCE.md** for quick answers

## ✅ Checklist for Your Portfolio

- [ ] Update name and title
- [ ] Add your projects
- [ ] Update about section
- [ ] Add your contact information
- [ ] Replace placeholder images
- [ ] Test all features
- [ ] Deploy to GitHub Pages or web server
- [ ] Share your portfolio!

## 🎓 Learning Outcomes

This project demonstrates proficiency in:
- Semantic HTML5
- Responsive CSS3 Design
- Vanilla JavaScript (ES6+)
- DOM Manipulation
- Event Handling
- Form Validation
- Web Accessibility
- Cross-browser Compatibility
- Responsive Design Patterns
- Code Documentation

---

**Created**: February 15, 2026  
**Status**: ✅ Production Ready  
**Version**: 1.0

**Ready to deploy and showcase your work! 🎉**
