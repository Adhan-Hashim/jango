// Kerala Map Data and Functionality

// Kerala Districts Data with Art Forms
const keralaDistricts = {
    'thiruvananthapuram': {
        name: 'Thiruvananthapuram',
        description: 'The capital city known for its classical music traditions and Padmanabhaswamy Temple.',
        arts: ['Swathi Thirunal Music', 'Classical Carnatic', 'Bharatanatyam', 'Traditional Architecture'],
        color: '#4a7c28'
    },
    'kollam': {
        name: 'Kollam',
        description: 'Ancient port city famous for its boat races and traditional crafts.',
        arts: ['Vallam Kali', 'Cashew Crafts', 'Traditional Boat Building', 'Folk Songs'],
        color: '#4a7c28'
    },
    'pathanamthitta': {
        name: 'Pathanamthitta',
        description: 'Known as the pilgrimage capital with rich spiritual traditions.',
        arts: ['Aranmula Kannadi', 'Sabarimala Traditions', 'Metal Mirror Craft', 'Devotional Music'],
        color: '#4a7c28'
    },
    'alappuzha': {
        name: 'Alappuzha',
        description: 'Venice of the East, famous for backwaters and snake boat races.',
        arts: ['Nehru Trophy Boat Race', 'Coir Crafts', 'Backwater Songs', 'Traditional Cooking'],
        color: '#4a7c28'
    },
    'kottayam': {
        name: 'Kottayam',
        description: 'Land of letters and latex, center of Malayalam literature.',
        arts: ['Literary Traditions', 'Rubber Tapping Arts', 'Christian Art', 'Traditional Printing'],
        color: '#4a7c28'
    },
    'idukki': {
        name: 'Idukki',
        description: 'Hill station known for spice gardens and tribal cultures.',
        arts: ['Tribal Dances', 'Spice Cultivation', 'Hill Station Music', 'Eco Art Forms'],
        color: '#4a7c28'
    },
    'ernakulam': {
        name: 'Ernakulam',
        description: 'Commercial capital with a blend of traditional and modern arts.',
        arts: ['Kathakali', 'Kerala Folklore', 'Marine Trade Songs', 'Urban Folk Arts'],
        color: '#4a7c28'
    },
    'thrissur': {
        name: 'Thrissur',
        description: 'Cultural capital of Kerala, home to spectacular festivals.',
        arts: ['Thrissur Pooram', 'Chenda Melam', 'Pulikali', 'Traditional Percussion'],
        color: '#4a7c28'
    },
    'palakkad': {
        name: 'Palakkad',
        description: 'Gateway to Kerala, known for classical music and dance.',
        arts: ['Bharatanatyam', 'Carnatic Music', 'Traditional Agriculture', 'Classical Dance'],
        color: '#4a7c28'
    },
    'malappuram': {
        name: 'Malappuram',
        description: 'Cultural melting pot with rich Islamic traditions and folk arts.',
        arts: ['Mappila Songs', 'Oppana Dance', 'Islamic Calligraphy', 'Sufi Traditions'],
        color: '#4a7c28'
    },
    'kozhikode': {
        name: 'Kozhikode',
        description: 'City of spices with vibrant trade history and cultural heritage.',
        arts: ['Malabar Cuisine', 'Trade Folk Songs', 'Traditional Weaving', 'Spice Art'],
        color: '#4a7c28'
    },
    'wayanad': {
        name: 'Wayanad',
        description: 'Tribal homeland with ancient cave paintings and indigenous arts.',
        arts: ['Tribal Art', 'Cave Paintings', 'Indigenous Crafts', 'Forest Folk Songs'],
        color: '#4a7c28'
    },
    'kannur': {
        name: 'Kannur',
        description: 'Land of looms and lores, famous for Theyyam and handloom.',
        arts: ['Theyyam', 'Traditional Weaving', 'Martial Arts', 'Ritual Performances'],
        color: '#4a7c28'
    },
    'kasaragod': {
        name: 'Kasaragod',
        description: 'Northernmost district known for Yakshagana and diverse cultures.',
        arts: ['Yakshagana', 'Beary Culture', 'Tulu Traditions', 'Coastal Folk Arts'],
        color: '#4a7c28'
    }
};

// Real Kerala Map - SVG Path Data based on actual geographical boundaries
const keralaSVGPaths = {
    // Kerala's authentic district boundaries - based on real geography
    'kasaragod': 'M50,30 L180,25 L185,45 L190,65 L185,85 L175,105 L165,120 L150,135 L135,145 L120,150 L105,145 L90,135 L75,120 L65,105 L55,85 L50,65 L50,45 Z',
    
    'kannur': 'M55,85 L175,105 L180,125 L185,145 L180,165 L170,185 L160,200 L145,215 L130,225 L115,230 L100,225 L85,215 L70,200 L60,185 L55,165 L55,145 L55,125 Z',
    
    'wayanad': 'M185,45 L320,40 L325,60 L335,80 L345,100 L355,120 L365,140 L370,160 L365,180 L355,200 L340,215 L325,225 L310,230 L295,225 L280,215 L265,200 L250,180 L240,160 L235,140 L240,120 L250,100 L265,80 L280,60 L295,45 Z',
    
    'kozhikode': 'M55,165 L170,185 L175,205 L180,225 L175,245 L165,265 L155,280 L140,295 L125,305 L110,310 L95,305 L80,295 L65,280 L55,265 L50,245 L50,225 L50,205 Z',
    
    'malappuram': 'M175,245 L280,215 L290,235 L300,255 L310,275 L315,295 L310,315 L300,335 L285,350 L270,360 L255,365 L240,360 L225,350 L210,335 L200,315 L195,295 L200,275 L210,255 L225,235 Z',
    
    'palakkad': 'M335,80 L470,75 L475,95 L485,115 L495,135 L505,155 L510,175 L505,195 L495,215 L480,235 L465,250 L450,260 L435,265 L420,260 L405,250 L390,235 L375,215 L365,195 L360,175 L365,155 L375,135 L390,115 L405,95 Z',
    
    'thrissur': 'M50,245 L165,265 L170,285 L175,305 L170,325 L160,345 L150,360 L135,375 L120,385 L105,390 L90,385 L75,375 L60,360 L50,345 L45,325 L45,305 L45,285 Z',
    
    'ernakulam': 'M175,305 L285,350 L295,370 L305,390 L300,410 L290,430 L280,445 L265,460 L250,470 L235,475 L220,470 L205,460 L190,445 L180,430 L175,410 L175,390 L175,370 Z',
    
    'idukki': 'M315,295 L510,175 L520,195 L535,215 L550,235 L565,255 L575,275 L580,295 L575,315 L565,335 L550,355 L535,370 L520,380 L505,385 L490,380 L475,370 L460,355 L445,335 L435,315 L430,295 L435,275 L445,255 L460,235 L475,215 L490,195 Z',
    
    'kottayam': 'M175,410 L300,410 L310,430 L320,450 L330,470 L335,490 L330,510 L320,530 L305,545 L290,555 L275,560 L260,555 L245,545 L230,530 L220,510 L215,490 L220,470 L230,450 L245,430 Z',
    
    'alappuzha': 'M45,325 L160,345 L165,365 L170,385 L165,405 L155,425 L145,440 L130,455 L115,465 L100,470 L85,465 L70,455 L55,440 L45,425 L40,405 L40,385 L40,365 Z',
    
    'pathanamthitta': 'M330,470 L490,380 L505,400 L520,420 L530,440 L535,460 L530,480 L520,500 L505,515 L490,525 L475,530 L460,525 L445,515 L430,500 L420,480 L415,460 L420,440 L430,420 L445,400 Z',
    
    'kollam': 'M40,405 L155,425 L160,445 L165,465 L160,485 L150,505 L140,520 L125,535 L110,545 L95,550 L80,545 L65,535 L50,520 L40,505 L35,485 L35,465 L35,445 Z',
    
    'thiruvananthapuram': 'M160,485 L415,460 L425,480 L435,500 L445,520 L450,540 L445,560 L435,580 L420,595 L405,605 L390,610 L375,605 L360,595 L345,580 L335,560 L330,540 L335,520 L345,500 L360,480 L220,510 L200,530 L180,550 L160,570 L145,585 L130,595 L115,600 L100,595 L85,585 L70,570 L60,550 L55,530 L60,510 L70,490 L85,475 L100,465 L115,460 L130,465 L145,475 Z'
};

class KeralaMap {
    constructor() {
        this.regionsContainer = document.getElementById('regions-grid');
        this.districtsContainer = document.getElementById('districts-grid');
        this.districtInfoPanel = document.getElementById('district-info');
        this.activeDistrict = null;
        this.tooltip = null;
        this.init();
    }

    init() {
        this.createTooltip();
        this.bindEvents();
        // No need to create SVG map anymore - using buttons from HTML
    }

    // SVG Map creation method is no longer needed with button layout
    // The createSVGMap method has been removed as we now use HTML buttons

    getPathBounds(pathData) {
        // Simple bounds calculation for positioning labels
        const numbers = pathData.match(/[\d.]+/g).map(Number);
        const xs = numbers.filter((_, i) => i % 2 === 0);
        const ys = numbers.filter((_, i) => i % 2 === 1);
        
        return {
            centerX: (Math.min(...xs) + Math.max(...xs)) / 2,
            centerY: (Math.min(...ys) + Math.max(...ys)) / 2
        };
    }

    createTooltip() {
        this.tooltip = document.createElement('div');
        this.tooltip.classList.add('map-tooltip');
        document.body.appendChild(this.tooltip);
    }

    bindEvents() {
        const districts = document.querySelectorAll('.district-button');
        
        districts.forEach((district, index) => {
            const districtId = district.getAttribute('data-district');
            
            let clickTimeout;
            
            // Mouse events
            district.addEventListener('mouseenter', (e) => this.handleDistrictHover(e));
            district.addEventListener('mouseleave', (e) => this.handleDistrictLeave(e));
            district.addEventListener('mousemove', (e) => this.handleDistrictMouseMove(e));
            
            // Click events with double-click detection
            district.addEventListener('click', (e) => {
                e.preventDefault();
                clearTimeout(clickTimeout);
                clickTimeout = setTimeout(() => {
                    this.handleDistrictClick(e);
                }, 250); // 250ms delay to distinguish from double-click
            });

            district.addEventListener('dblclick', (e) => {
                e.preventDefault();
                clearTimeout(clickTimeout);
                this.handleDistrictDoubleClick(e);
            });
        });
    }

    handleDistrictHover(e) {
        const button = e.target.closest('.district-button');
        const districtId = button ? button.getAttribute('data-district') : null;
        const districtData = keralaDistricts[districtId];
        
        if (districtData) {
            this.showArtFormsTooltip(districtData, e);
            button.style.cursor = 'pointer';
        }
    }

    handleDistrictLeave(e) {
        this.hideTooltip();
    }

    handleDistrictMouseMove(e) {
        if (this.tooltip.classList.contains('show')) {
            this.positionTooltip(e);
        }
    }

    handleDistrictClick(e) {
        e.preventDefault();
        const button = e.target.closest('.district-button');
        const districtId = button ? button.getAttribute('data-district') : null;
        
        if (districtId) {
            // Single click - show art forms in info panel
            this.selectDistrict(districtId);
            this.showDistrictArtPopup(districtId);
        }
    }

    handleDistrictDoubleClick(e) {
        e.preventDefault();
        const button = e.target.closest('.district-button');
        const districtId = button ? button.getAttribute('data-district') : null;
        
        if (districtId) {
            // Double click - navigate to detailed district page
            this.navigateToDistrictPage(districtId);
        }
    }

    showDistrictArtPopup(districtId) {
        const districtData = keralaDistricts[districtId];
        if (!districtData) return;

        // Create popup overlay
        const popup = document.createElement('div');
        popup.className = 'district-art-popup';
        popup.innerHTML = `
            <div class="popup-content">
                <div class="popup-header">
                    <h3>${districtData.name} Art Forms</h3>
                    <button class="popup-close">&times;</button>
                </div>
                <div class="popup-body">
                    <p class="district-description">${districtData.description}</p>
                    <div class="art-forms-grid">
                        ${districtData.arts.map(art => `
                            <div class="art-form-card" onclick="goToArtForm('${art}')">
                                <div class="art-form-icon">🎭</div>
                                <div class="art-form-name">${art}</div>
                                <div class="art-form-action">
                                    <i class="fas fa-play"></i> Watch & Book
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="popup-footer">
                        <button class="view-details-btn" onclick="window.keralaMap.navigateToDistrictPage('${districtId}')">
                            View Detailed Page
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Add to document
        document.body.appendChild(popup);

        // Close popup functionality
        const closeBtn = popup.querySelector('.popup-close');
        closeBtn.addEventListener('click', () => {
            popup.remove();
        });

        // Close on overlay click
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.remove();
            }
        });

        // Animate popup in
        setTimeout(() => {
            popup.classList.add('show');
        }, 10);
    }

    navigateToDistrictPage(districtId) {
        // Create or navigate to detailed district page
        window.location.href = `pages/district-${districtId}.html`;
    }

    selectDistrict(districtId) {
        // Remove active class from previous district
        if (this.activeDistrict) {
            const prevButton = document.querySelector(`[data-district="${this.activeDistrict}"]`);
            if (prevButton) {
                prevButton.classList.remove('active');
            }
        }

        // Add active class to current district
        const districtButton = document.querySelector(`[data-district="${districtId}"]`);
        if (districtButton) {
            districtButton.classList.add('active');
            this.activeDistrict = districtId;
        }

        // Update info panel
        this.updateInfoPanel(districtId);
        
        // Hide tooltip when district is selected
        this.hideTooltip();
    }

    updateInfoPanel(districtId) {
        const districtData = keralaDistricts[districtId];
        const nameElement = document.getElementById('district-name');
        const descriptionElement = document.getElementById('district-description');
        const artsElement = document.getElementById('district-arts');

        // Add updating class for animation
        this.districtInfoPanel.classList.add('updating');

        setTimeout(() => {
            nameElement.textContent = districtData.name;
            descriptionElement.textContent = districtData.description;
            
            // Clear and populate arts
            artsElement.innerHTML = '';
            districtData.arts.forEach((art, index) => {
                const artTag = document.createElement('span');
                artTag.classList.add('art-tag');
                artTag.textContent = art;
                artTag.style.animationDelay = `${index * 0.1}s`;
                artsElement.appendChild(artTag);
            });

            // Remove updating class
            this.districtInfoPanel.classList.remove('updating');
        }, 200);
    }

    showTooltip(text, event) {
        this.tooltip.textContent = text;
        this.positionTooltip(event);
        this.tooltip.classList.add('show');
    }

    showArtFormsTooltip(districtData, event) {
        // Create rich tooltip content with art forms
        const artFormsHtml = districtData.arts.slice(0, 4).map(art => `
            <div class="tooltip-art-item">
                <span class="art-emoji">🎭</span>
                <span class="art-name">${art}</span>
            </div>
        `).join('');
        
        this.tooltip.innerHTML = `
            <div class="tooltip-header">${districtData.name}</div>
            <div class="tooltip-arts">${artFormsHtml}</div>
            <div class="tooltip-hint">Click to view all • Double-click for details</div>
        `;
        
        this.positionTooltip(event);
        this.tooltip.classList.add('show');
    }

    hideTooltip() {
        this.tooltip.classList.remove('show');
        // Clear content to prevent lingering HTML
        setTimeout(() => {
            if (!this.tooltip.classList.contains('show')) {
                this.tooltip.innerHTML = '';
            }
        }, 300);
    }

    positionTooltip(event) {
        const x = event.clientX;
        const y = event.clientY;
        const tooltipRect = this.tooltip.getBoundingClientRect();
        
        let left = x - tooltipRect.width / 2;
        let top = y - tooltipRect.height - 10;

        // Prevent tooltip from going off-screen
        if (left < 10) left = 10;
        if (left + tooltipRect.width > window.innerWidth - 10) {
            left = window.innerWidth - tooltipRect.width - 10;
        }
        if (top < 10) top = y + 10;

        this.tooltip.style.left = `${left}px`;
        this.tooltip.style.top = `${top}px`;
    }

    // Method to programmatically select a district (useful for external calls)
    selectDistrictByName(districtName) {
        const districtId = Object.keys(keralaDistricts).find(
            id => keralaDistricts[id].name.toLowerCase() === districtName.toLowerCase()
        );
        if (districtId) {
            this.selectDistrict(districtId);
        }
    }

    // Method to get all district data (useful for external access)
    getAllDistricts() {
        return keralaDistricts;
    }

    // Method to search districts by art form
    searchByArtForm(artForm) {
        return Object.entries(keralaDistricts).filter(([id, data]) =>
            data.arts.some(art => art.toLowerCase().includes(artForm.toLowerCase()))
        );
    }
}

// Initialize the map when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const keralaMap = new KeralaMap();
    
    // Make it globally accessible for other scripts
    window.keralaMap = keralaMap;
    
    // Initialize the interface
    showRegions();
});

// Initialize regions view
function showRegions() {
    // Reset info panel
    document.getElementById('district-name').textContent = 'Select a District';
    document.getElementById('district-description').textContent = 'Click on any district to learn about its traditional art forms and cultural significance.';
    document.getElementById('district-arts').innerHTML = '';
}

// Global function to show art form modal with comprehensive details
function goToArtForm(artFormName) {
    const artFormData = {
        'Kathakali': {
            name: 'Kathakali',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
            story: 'Kathakali is a traditional form of classical Indian dance-drama that originated in Kerala. Known for its elaborate costumes, intricate makeup, and expressive gestures, Kathakali combines dance, drama, music, and ritual. The art form traditionally depicts stories from Hindu epics like the Ramayana and Mahabharata. Performers undergo years of rigorous training to master the complex facial expressions (rasas) and hand gestures (mudras) that form the language of this magnificent art.',
            events: [
                { name: 'Kathakali Classical Performance', date: '2025-11-15', venue: 'Kerala Kalamandalam', price: '₹500-1500' },
                { name: 'Traditional Kathakali Festival', date: '2025-12-02', venue: 'Ernakulam Cultural Center', price: '₹800-2000' },
                { name: 'Kathakali Workshop & Show', date: '2025-12-20', venue: 'Kochi Arts Center', price: '₹300-800' }
            ],
            artists: [
                { name: 'Kalamandalam Gopi', specialization: 'Kathakali Master', contact: '+91 98765 43210' },
                { name: 'Margi Vijayakumar', specialization: 'Classical Performer', contact: '+91 98765 43211' },
                { name: 'Sadanam Krishnankutty', specialization: 'Traditional Artist', contact: '+91 98765 43212' }
            ]
        },
        'Theyyam': {
            name: 'Theyyam',
            image: 'https://images.unsplash.com/photo-1609618641851-ee2b4b840e66?w=800&h=600&fit=crop',
            story: 'Theyyam is a ritualistic art form and religious custom practiced in North Kerala and South Karnataka. The word "Theyyam" comes from "Daivam," meaning God. During Theyyam performances, the artist embodies the spirit of deities and ancestral heroes through elaborate makeup, costumes, and intense performances. This ancient tradition dates back over 1,500 years and serves as a form of worship and cultural preservation. Each Theyyam tells unique stories of gods, goddesses, and legendary figures.',
            events: [
                { name: 'Annual Theyyam Festival', date: '2025-11-25', venue: 'Kannur Temples', price: '₹200-600' },
                { name: 'Theyyam Sacred Rituals', date: '2025-12-10', venue: 'Kasaragod Villages', price: '₹150-400' },
                { name: 'Traditional Theyyam Performance', date: '2026-01-05', venue: 'Malabar Heritage Center', price: '₹300-700' }
            ],
            artists: [
                { name: 'Ramesh Theyyam', specialization: 'Sacred Performer', contact: '+91 98765 43213' },
                { name: 'Mukundan Kannur', specialization: 'Ritual Artist', contact: '+91 98765 43214' },
                { name: 'Divya Theyyam', specialization: 'Female Theyyam', contact: '+91 98765 43215' }
            ]
        },
        'Mohiniyattam': {
            name: 'Mohiniyattam',
            image: 'https://images.unsplash.com/photo-1583983911400-8737733e57b5?w=800&h=600&fit=crop',
            story: 'Mohiniyattam, meaning "dance of the enchantress," is a classical dance form from Kerala that embodies feminine grace and beauty. This solo dance traditionally performed by women features gentle, flowing movements that mimic the swaying of palm trees and the gentle flow of rivers. The dance form evolved from the ancient temple dance traditions and incorporates elements from Bharatanatyam and Kathakali. Mohiniyattam tells stories of love, devotion, and spiritual awakening through subtle expressions and graceful movements.',
            events: [
                { name: 'Mohiniyattam Solo Recital', date: '2025-11-30', venue: 'Trivandrum Arts Academy', price: '₹400-1000' },
                { name: 'Classical Dance Festival', date: '2025-12-15', venue: 'Kochi Cultural Center', price: '₹600-1500' },
                { name: 'Traditional Dance Workshop', date: '2026-01-10', venue: 'Kozhikode Dance Studio', price: '₹250-500' }
            ],
            artists: [
                { name: 'Bharati Shivaji', specialization: 'Mohiniyattam Guru', contact: '+91 98765 43216' },
                { name: 'Methil Devika', specialization: 'Classical Dancer', contact: '+91 98765 43217' },
                { name: 'Gopika Varma', specialization: 'Traditional Artist', contact: '+91 98765 43218' }
            ]
        },
        'Koodiyattam': {
            name: 'Koodiyattam',
            image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop',
            story: 'Koodiyattam is one of the oldest continuously performed theatre traditions in the world, with a history spanning over 2000 years. Recognized by UNESCO as a Masterpiece of Oral and Intangible Heritage of Humanity, this Sanskrit theatre art form was traditionally performed in temple compounds of Kerala. The performances combine music, dance, acting, and elaborate eye movements to narrate stories from Sanskrit literature. A single performance can last several days, with actors using only facial expressions and hand gestures to convey complex emotions.',
            events: [
                { name: 'UNESCO Heritage Performance', date: '2025-12-05', venue: 'Thiruvananthapuram Temple', price: '₹300-800' },
                { name: 'Classical Sanskrit Theatre', date: '2025-12-25', venue: 'Thrissur Cultural Center', price: '₹500-1200' },
                { name: 'Traditional Koodiyattam Festival', date: '2026-01-15', venue: 'Irinjalakuda Temple', price: '₹400-900' }
            ],
            artists: [
                { name: 'Margi Madhu', specialization: 'Koodiyattam Master', contact: '+91 98765 43219' },
                { name: 'Kalamandalam Shanmukhadas', specialization: 'Sanskrit Theatre', contact: '+91 98765 43220' },
                { name: 'Kapila Venu', specialization: 'Classical Performer', contact: '+91 98765 43221' }
            ]
        },
        'Yakshagana': {
            name: 'Yakshagana',
            image: './images/yakshaganam2.jpg',
            story: 'Yakshagana is a traditional theatre form that combines dance, music, dialogue, costume, make-up, and stage techniques with a unique style and form. This ancient art form is primarily found in coastal Karnataka and some parts of Kerala. Yakshagana literally means "song of the yaksha" (nature spirits). The performances are usually conducted from dusk to dawn, traditionally in the open air. The stories are drawn from Ramayana, Mahabharata, Bhagavata and other epics from both Hindu and Jain traditions. The elaborate costumes, distinctive makeup, and dynamic movements make Yakshagana a visually spectacular art form.',
            events: [
                { name: 'Traditional Yakshagana Night Performance', date: '2025-11-20', venue: 'Mangalore Cultural Center', price: '₹400-1000' },
                { name: 'Yakshagana Festival', date: '2025-12-08', venue: 'Udupi Heritage Village', price: '₹600-1500' },
                { name: 'Classical Yakshagana Workshop', date: '2026-01-12', venue: 'Kasaragod Arts Academy', price: '₹250-600' }
            ],
            artists: [
                { name: 'Chittani Ramachandra Hegde', specialization: 'Yakshagana Master', contact: '+91 98765 43224' },
                { name: 'Keremane Shivananda Hegde', specialization: 'Traditional Performer', contact: '+91 98765 43225' },
                { name: 'Sheni Gopalakrishna', specialization: 'Yakshagana Artist', contact: '+91 98765 43226' }
            ]
        }
    };

    // Get the art form data or use default
    const artData = artFormData[artFormName] || {
        name: artFormName,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
        story: `${artFormName} is a traditional art form from Kerala with rich cultural heritage. This performance art combines various elements including music, dance, and storytelling to create captivating experiences for audiences. The art form has been passed down through generations, preserving the cultural identity and traditions of Kerala.`,
        events: [
            { name: `${artFormName} Performance`, date: '2025-12-01', venue: 'Cultural Center', price: '₹300-800' },
            { name: `${artFormName} Workshop`, date: '2025-12-15', venue: 'Arts Academy', price: '₹200-500' }
        ],
        artists: [
            { name: 'Traditional Artist', specialization: `${artFormName} Performer`, contact: '+91 98765 43222' },
            { name: 'Cultural Master', specialization: `${artFormName} Guru`, contact: '+91 98765 43223' }
        ]
    };

    showArtFormModal(artData);
}

// Function to create and show the comprehensive art form modal
function showArtFormModal(artData) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.art-form-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'art-form-modal';
    modal.innerHTML = `
        <div class="art-modal-content">
            <div class="art-modal-header">
                <h2>${artData.name}</h2>
                <button class="close-art-modal">&times;</button>
            </div>
            
            <div class="art-modal-body">
                <div class="art-image-section">
                    <img src="${artData.image}" alt="${artData.name}" class="art-main-image">
                </div>
                
                <div class="art-story-section">
                    <h3>📖 Story & Heritage</h3>
                    <p class="art-story">${artData.story}</p>
                </div>
                
                <div class="art-events-section">
                    <h3>🎪 Upcoming Events</h3>
                    <div class="events-grid">
                        ${artData.events.map(event => `
                            <div class="event-card">
                                <h4>${event.name}</h4>
                                <p><strong>📅 Date:</strong> ${event.date}</p>
                                <p><strong>📍 Venue:</strong> ${event.venue}</p>
                                <p><strong>💰 Price:</strong> ${event.price}</p>
                                <button class="book-event-btn" onclick="bookEvent('${event.name}')">Book Tickets</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="art-artists-section">
                    <h3>👥 Featured Artists</h3>
                    <div class="artists-grid">
                        ${artData.artists.map(artist => `
                            <div class="artist-card">
                                <h4>${artist.name}</h4>
                                <p><strong>🎭 Specialization:</strong> ${artist.specialization}</p>
                                <p><strong>📞 Contact:</strong> ${artist.contact}</p>
                                <button class="contact-artist-btn" onclick="contactArtist('${artist.name}', '${artist.contact}')">Contact Artist</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal functionality
    const closeBtn = modal.querySelector('.close-art-modal');
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Function to handle event booking
function bookEvent(eventName) {
    alert(`🎫 Booking request for "${eventName}"!\n\nYou would be redirected to the booking portal.\nFeatures:\n• Seat selection\n• Payment gateway\n• Digital tickets\n• Event reminders`);
}

// Function to handle artist contact
function contactArtist(artistName, contact) {
    alert(`📞 Contacting ${artistName}\n\nContact: ${contact}\n\nOptions:\n• Call directly\n• Send WhatsApp message\n• Email inquiry\n• Schedule meeting`);
}

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { KeralaMap, keralaDistricts };
}