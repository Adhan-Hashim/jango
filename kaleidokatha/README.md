# Kaleidokatha - Kerala Cultural Heritage Web App

🎭 **Immersive Web Experience Showcasing Kerala's Rich Cultural Heritage**

## 📋 Project Overview

Kaleidokatha is a premium-quality web application that showcases Kerala's traditional art forms through interactive maps, high-quality visuals, and modern storytelling. The application features all 14 districts of Kerala with their unique cultural identities and traditional arts.

### 🎯 Features

- **Interactive Kerala Map**: Clickable SVG map with all 14 districts
- **Responsive Design**: Mobile-first approach with modern layouts
- **Scroll Animations**: Smooth parallax and fade-in animations
- **Cultural Content**: Detailed profiles of traditional art forms
- **Modern UI/UX**: Luxurious design with Kerala-inspired color palette
- **Performance Optimized**: Fast loading with lazy loading and optimizations

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)
- Basic knowledge of HTML, CSS, JavaScript

### Installation & Setup

1. **Download/Clone the Project**
   ```
   - Download the project folder to your desired location
   - Extract if downloaded as ZIP
   ```

2. **Project Structure**
   ```
   kaleidokatha/
   ├── index.html              # Main homepage
   ├── css/
   │   ├── styles.css          # Main stylesheets
   │   ├── map.css             # Map-specific styles
   │   └── animations.css      # Animation styles
   ├── js/
   │   ├── main.js             # Main JavaScript functionality
   │   ├── map.js              # Interactive map functionality
   │   └── animations.js       # Animation engine
   ├── pages/
   │   ├── art-forms.html      # Art forms showcase page
   │   ├── about.html          # About us page
   │   └── contact.html        # Contact page
   └── images/                 # Image assets (to be added)
   ```

3. **Running the Application**

   **Option A: Direct File Opening (Basic)**
   - Open `index.html` directly in your web browser
   - Note: Some features may not work due to CORS restrictions

   **Option B: Local Web Server (Recommended)**
   
   Using Python (if installed):
   ```bash
   # Navigate to the kaleidokatha folder
   cd path/to/kaleidokatha
   
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -M SimpleHTTPServer 8000
   ```
   
   Using Node.js (if installed):
   ```bash
   # Install http-server globally
   npm install -g http-server
   
   # Navigate to project folder and start server
   cd path/to/kaleidokatha
   http-server -p 8000
   ```
   
   Using Live Server (VS Code Extension):
   - Install "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"

4. **Access the Application**
   - Open your browser and go to: `http://localhost:8000`
   - The homepage should load with the hero section and interactive map

## 🎨 Design System

### Color Palette
- **Primary Green**: `#2d5016` - Main brand color
- **Secondary Green**: `#3e6b1f` - Accent color
- **Light Green**: `#4a7c28` - Map districts
- **Earthy Brown**: `#8b4513` - Text and accents
- **Cream**: `#f5f5dc` - Background
- **Golden**: `#daa520` - Highlights and CTAs
- **Orange Accent**: `#ff8c42` - Interactive elements

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Montserrat (sans-serif)

### Key Components
- Full-screen hero sections
- Interactive SVG map
- Card-based layouts
- Smooth animations
- Mobile-responsive design

## 🗺️ Interactive Map Guide

### District Data Structure
Each district contains:
- **Name**: Official district name
- **Description**: Brief cultural overview
- **Arts**: Array of traditional art forms
- **Color**: Map color coding

### Map Interactions
- **Hover**: Shows district name in tooltip
- **Click**: Displays detailed information panel
- **Active State**: Highlights selected district
- **Responsive**: Adapts to different screen sizes

### Adding New Districts
To add or modify district data, edit the `keralaDistricts` object in `js/map.js`:

```javascript
const keralaDistricts = {
    'district-id': {
        name: 'District Name',
        description: 'District description...',
        arts: ['Art Form 1', 'Art Form 2', 'Art Form 3'],
        color: '#4a7c28'
    }
};
```

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

### Mobile Optimizations
- Collapsible navigation menu
- Stacked layout components
- Touch-friendly interactions
- Optimized font sizes
- Simplified animations

## ⚡ Performance Features

### Optimization Techniques
- **Lazy Loading**: Images load on scroll
- **CSS Optimization**: Minimized render-blocking
- **JavaScript**: Efficient event handling
- **Animation**: Hardware acceleration
- **Responsive Images**: Multiple sizes for different devices

### Loading Performance
- Optimized CSS delivery
- Efficient JavaScript loading
- Image compression
- Minimal external dependencies

## 🎯 Animation System

### Animation Types
- **Fade In Up**: Elements appear from bottom
- **Fade In Scale**: Elements scale up on appearance
- **Stagger**: Multiple elements animate in sequence
- **Parallax**: Background elements move at different speeds
- **Hover Effects**: Interactive element responses

### Animation Controls
- Reduced motion support for accessibility
- Performance monitoring
- Configurable animation delays
- Smooth transitions between states

## 📄 Page Structure

### Homepage (`index.html`)
- Hero section with call-to-action
- Interactive Kerala map
- Featured art forms
- Why choose section
- Testimonials
- Footer with contact info

### Art Forms Page (`pages/art-forms.html`)
- Comprehensive art form grid
- Modal popups with detailed information
- Category filtering
- Rich media content

### About Page (`pages/about.html`)
- Mission and story
- Team profiles
- Company values
- Impact statistics
- Timeline of achievements

### Contact Page (`pages/contact.html`)
- Contact form with validation
- Contact information cards
- Interactive map placeholder
- FAQ section

## 🛠️ Customization Guide

### Adding New Art Forms
1. Edit the `artFormsData` object in the respective page
2. Add new card HTML structure
3. Update modal content
4. Add any new images to the `images/` folder

### Modifying Colors
1. Update CSS custom properties in `css/styles.css`:
   ```css
   :root {
       --primary-green: #your-color;
       --secondary-green: #your-color;
       /* ... other colors */
   }
   ```

### Adding New Pages
1. Create new HTML file in `pages/` folder
2. Copy navigation and footer from existing pages
3. Link new page in navigation menus
4. Update any relevant JavaScript

### Customizing Animations
1. Modify animation classes in `css/animations.css`
2. Adjust timing and easing functions
3. Add new animation types in `js/animations.js`

## 🔧 Technical Details

### Dependencies
- **Google Fonts**: Playfair Display, Montserrat
- **Font Awesome**: Icons and symbols
- **No JavaScript frameworks**: Pure vanilla JavaScript
- **Modern CSS**: CSS Grid, Flexbox, Custom Properties

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### File Sizes (Approximate)
- CSS: ~50KB (combined)
- JavaScript: ~40KB (combined)
- HTML: ~15KB per page

## 🎨 Content Guidelines

### Adding Images
1. Optimize images for web (use tools like TinyPNG)
2. Use appropriate formats: JPEG for photos, PNG for graphics
3. Include alt text for accessibility
4. Consider multiple sizes for responsive design

### Writing Content
- Use descriptive and engaging language
- Keep paragraphs concise
- Include cultural context and significance
- Maintain respectful tone towards traditional arts

## 🐛 Troubleshooting

### Common Issues

**Map not loading properly:**
- Check console for JavaScript errors
- Ensure all CSS files are loaded
- Verify SVG path data is correct

**Animations not working:**
- Check if device has reduced motion preference
- Verify Intersection Observer support
- Ensure proper CSS class assignments

**Mobile navigation issues:**
- Check hamburger menu JavaScript
- Verify touch event handlers
- Test on actual mobile devices

**Images not displaying:**
- Check file paths and extensions
- Verify image files exist
- Check for proper lazy loading implementation

## 📈 Future Enhancements

### Planned Features
- **Multi-language Support**: Malayalam, Hindi translations
- **Video Integration**: Performance videos and documentaries
- **Virtual Tours**: 360° experiences of cultural sites
- **Artist Profiles**: Detailed practitioner showcases
- **Event Calendar**: Cultural events and festivals
- **E-commerce**: Traditional craft marketplace

### Technical Improvements
- Progressive Web App (PWA) features
- Offline content caching
- Advanced search functionality
- User accounts and personalization
- Integration with cultural institutions

## 📞 Support & Contact

### Getting Help
- Check this documentation first
- Review browser console for errors
- Test on different devices and browsers
- Ensure all files are properly uploaded

### Contributing
- Follow existing code style and structure
- Test thoroughly before submitting changes
- Include documentation for new features
- Respect cultural sensitivities in content

## 📜 License & Credits

### Content
- All cultural content is respectfully sourced and documented
- Images should be properly licensed or original
- Traditional art forms are presented with cultural sensitivity

### Code
- Open source components are properly attributed
- Custom code follows modern web standards
- Accessibility guidelines are implemented

---

## 🎭 Welcome to Kaleidokatha!

This web application represents a digital celebration of Kerala's rich cultural heritage. Through interactive technology and thoughtful design, we aim to preserve and share the beauty of traditional art forms with the world.

**Happy exploring! 🌟**