// Art Forms JavaScript Functionality

// Main Art Forms Class
class ArtFormsManager {
    constructor() {
        this.init();
    }

    init() {
        this.initNavigation();
        this.initVideoPlayers();
        this.initEventBooking();
        this.initArtistContacts();
        this.initPriceSelection();
        this.initSmoothScrolling();
    }

    // Navigation functionality
    initNavigation() {
        const hamburger = document.getElementById('nav-hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }

        // Close mobile menu when clicking on links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            });
        });
    }

    // Video player functionality
    initVideoPlayers() {
        const videoPlaceholders = document.querySelectorAll('.video-placeholder');
        const playlistItems = document.querySelectorAll('.playlist-item');

        videoPlaceholders.forEach(placeholder => {
            placeholder.addEventListener('click', (e) => {
                const videoId = e.target.dataset.videoId || 'main-video';
                this.playVideo(videoId);
            });
        });

        playlistItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const videoId = e.target.dataset.videoId || 'playlist-video';
                this.playVideo(videoId);
            });
        });
    }

    playVideo(videoId) {
        // In a real implementation, this would integrate with a video platform
        const videoTitles = {
            'kathakali-main': 'Traditional Kathakali Performance - Nalacharitham',
            'kathakali-makeup': 'The Art of Kathakali Makeup',
            'kathakali-story': 'The Story Behind Kathakali',
            'kathakali-training': 'Artist Training and Preparation',
            'theyyam-main': 'Theyyam Ritual Performance',
            'mohiniyattam-main': 'Classical Mohiniyattam Dance'
        };

        const title = videoTitles[videoId] || 'Art Form Video';
        
        // Show video player modal or redirect to video platform
        this.showVideoModal(title, videoId);
    }

    showVideoModal(title, videoId) {
        // Create modal for video player
        const modal = document.createElement('div');
        modal.className = 'video-modal';
        modal.innerHTML = `
            <div class="video-modal-content">
                <div class="video-modal-header">
                    <h3>${title}</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="video-player">
                    <div class="video-placeholder-large">
                        <i class="fas fa-play-circle"></i>
                        <p>Video player would load here</p>
                        <p class="video-note">This would integrate with YouTube, Vimeo, or a custom video solution</p>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal functionality
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }

    // Event booking functionality
    initEventBooking() {
        const bookButtons = document.querySelectorAll('.btn-book');
        
        bookButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleBooking(button);
            });
        });
    }

    handleBooking(buttonElement) {
        const eventCard = buttonElement.closest('.event-card');
        const eventTitle = eventCard.querySelector('.event-title').textContent;
        const eventDate = eventCard.querySelector('.event-date').textContent;
        const selectedPrice = eventCard.querySelector('.price-option.selected');
        
        if (!selectedPrice) {
            this.showNotification('Please select a ticket price first.', 'warning');
            return;
        }

        const price = selectedPrice.querySelector('.price-amount').textContent;
        const priceType = selectedPrice.querySelector('.price-label').textContent;

        this.showBookingModal({
            title: eventTitle,
            date: eventDate,
            price: price,
            priceType: priceType
        });
    }

    showBookingModal(eventData) {
        const modal = document.createElement('div');
        modal.className = 'booking-modal';
        modal.innerHTML = `
            <div class="booking-modal-content">
                <div class="booking-header">
                    <h3>Book Tickets</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="booking-details">
                    <div class="event-summary">
                        <h4>${eventData.title}</h4>
                        <p><i class="fas fa-calendar"></i> ${eventData.date}</p>
                        <p><i class="fas fa-ticket-alt"></i> ${eventData.priceType}: ${eventData.price}</p>
                    </div>
                    <form class="booking-form">
                        <div class="form-group">
                            <label for="tickets">Number of Tickets</label>
                            <select id="tickets" name="tickets">
                                <option value="1">1 Ticket</option>
                                <option value="2">2 Tickets</option>
                                <option value="3">3 Tickets</option>
                                <option value="4">4 Tickets</option>
                                <option value="5">5+ Tickets</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" required>
                        </div>
                        <div class="booking-total">
                            <p><strong>Total: <span id="total-amount">${eventData.price}</span></strong></p>
                        </div>
                        <div class="booking-actions">
                            <button type="button" class="btn-cancel">Cancel</button>
                            <button type="submit" class="btn-confirm">Proceed to Payment</button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Modal functionality
        const closeBtn = modal.querySelector('.close-modal');
        const cancelBtn = modal.querySelector('.btn-cancel');
        const form = modal.querySelector('.booking-form');
        const ticketsSelect = modal.querySelector('#tickets');
        const totalAmount = modal.querySelector('#total-amount');

        const closeModal = () => {
            document.body.removeChild(modal);
        };

        closeBtn.addEventListener('click', closeModal);
        cancelBtn.addEventListener('click', closeModal);
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Update total when ticket count changes
        ticketsSelect.addEventListener('change', () => {
            const ticketCount = parseInt(ticketsSelect.value);
            const basePrice = parseInt(eventData.price.replace('₹', '').replace(',', ''));
            const total = basePrice * ticketCount;
            totalAmount.textContent = `₹${total.toLocaleString()}`;
        });

        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.processBooking(new FormData(form), eventData);
            closeModal();
        });
    }

    processBooking(formData, eventData) {
        // Simulate booking process
        const bookingId = 'BK' + Date.now();
        
        this.showNotification(
            `Booking successful! Booking ID: ${bookingId}. 
            You will receive confirmation details via email.`, 
            'success'
        );

        // In a real application, this would send data to a backend service
        console.log('Booking Data:', {
            bookingId,
            event: eventData,
            customer: Object.fromEntries(formData)
        });
    }

    // Price selection functionality
    initPriceSelection() {
        const priceOptions = document.querySelectorAll('.price-option');
        
        priceOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Remove selected class from siblings
                const siblings = option.parentNode.querySelectorAll('.price-option');
                siblings.forEach(sibling => sibling.classList.remove('selected'));
                
                // Add selected class to clicked option
                option.classList.add('selected');
            });
        });
    }

    // Artist contact functionality
    initArtistContacts() {
        const contactButtons = document.querySelectorAll('.contact-btn');
        
        contactButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const contactType = button.title.toLowerCase();
                const artistCard = button.closest('.artist-card');
                const artistName = artistCard.querySelector('.artist-name').textContent;
                
                this.handleArtistContact(artistName, contactType);
            });
        });
    }

    handleArtistContact(artistName, contactType) {
        const contacts = {
            'kalamandalam ramankutty nair': {
                'email': 'ramankutty@kalamandalam.ac.in',
                'phone': '+91 487 2262418',
                'website': 'https://kalamandalam.ac.in'
            },
            'kalamandalam gopi': {
                'email': 'gopi@kalamandalam.ac.in',
                'phone': '+91 487 2262419',
                'instagram': '@kalamandalam_gopi'
            },
            'kalamandalam bineesh': {
                'email': 'bineesh@kalamandalam.ac.in',
                'whatsapp': '+91 9876543210',
                'youtube': '@BineeshKathakali'
            }
        };

        const artistKey = artistName.toLowerCase();
        const contact = contacts[artistKey] && contacts[artistKey][contactType];
        
        if (contact) {
            this.openContact(contactType, contact, artistName);
        } else {
            this.showNotification(`Contact information not available for ${contactType}`, 'info');
        }
    }

    openContact(type, contact, artistName) {
        switch (type) {
            case 'email':
                window.location.href = `mailto:${contact}?subject=Inquiry about ${artistName}`;
                break;
            case 'phone':
                if (navigator.userAgent.match(/iPhone|Android/i)) {
                    window.location.href = `tel:${contact}`;
                } else {
                    this.copyToClipboard(contact, `Phone number for ${artistName}`);
                }
                break;
            case 'whatsapp':
                window.open(`https://wa.me/${contact.replace('+', '').replace(' ', '')}`, '_blank');
                break;
            case 'website':
                window.open(contact, '_blank');
                break;
            case 'instagram':
                window.open(`https://instagram.com/${contact.replace('@', '')}`, '_blank');
                break;
            case 'youtube':
                window.open(`https://youtube.com/${contact}`, '_blank');
                break;
            default:
                this.copyToClipboard(contact, `${type} for ${artistName}`);
        }
    }

    // Smooth scrolling functionality
    initSmoothScrolling() {
        const scrollLinks = document.querySelectorAll('a[href^="#"]');
        
        scrollLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Utility functions
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        document.body.appendChild(notification);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 5000);

        // Manual close
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        });
    }

    getNotificationIcon(type) {
        const icons = {
            'success': 'check-circle',
            'warning': 'exclamation-triangle',
            'error': 'times-circle',
            'info': 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    copyToClipboard(text, description) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                this.showNotification(`${description} copied to clipboard!`, 'success');
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showNotification(`${description} copied to clipboard!`, 'success');
        }
    }
}

// Global functions for backward compatibility
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function selectPrice(element) {
    const siblings = element.parentNode.children;
    for (let sibling of siblings) {
        sibling.classList.remove('selected');
    }
    element.classList.add('selected');
}

function playVideo(videoId) {
    if (window.artFormsManager) {
        window.artFormsManager.playVideo(videoId);
    }
}

function bookTickets(eventId, buttonElement) {
    if (window.artFormsManager) {
        window.artFormsManager.handleBooking(buttonElement);
    }
}

function shareEvent(eventId) {
    const shareData = {
        title: 'Kerala Art Form Performance - Kaleidokatha',
        text: 'Experience traditional Kerala art performances!',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData);
    } else {
        if (window.artFormsManager) {
            window.artFormsManager.copyToClipboard(window.location.href, 'Event link');
        }
    }
}

function contactArtist(artistId, contactType) {
    const artistCards = document.querySelectorAll('.artist-card');
    let artistName = '';
    
    artistCards.forEach(card => {
        const nameElement = card.querySelector('.artist-name');
        if (nameElement && nameElement.textContent.toLowerCase().includes(artistId)) {
            artistName = nameElement.textContent;
        }
    });

    if (window.artFormsManager && artistName) {
        window.artFormsManager.handleArtistContact(artistName, contactType);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    window.artFormsManager = new ArtFormsManager();
});

// Add CSS for modals and notifications
const modalStyles = `
<style>
.video-modal, .booking-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
}

.video-modal-content, .booking-modal-content {
    background: white;
    border-radius: 15px;
    max-width: 800px;
    width: 90%;
    max-height: 90%;
    overflow-y: auto;
}

.video-modal-header, .booking-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid #eee;
}

.close-modal {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
}

.video-player {
    padding: 2rem;
    text-align: center;
}

.video-placeholder-large {
    background: linear-gradient(135deg, #8B4513, #2C1810);
    color: white;
    padding: 4rem 2rem;
    border-radius: 10px;
}

.video-placeholder-large i {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.video-note {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-top: 1rem;
}

.booking-details {
    padding: 1.5rem;
}

.event-summary {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
}

.booking-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #333;
}

.form-group input, .form-group select {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
}

.booking-total {
    background: #e8f5e8;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
}

.booking-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
}

.btn-cancel, .btn-confirm {
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
}

.btn-cancel {
    background: #f8f9fa;
    color: #666;
}

.btn-confirm {
    background: #8B4513;
    color: white;
}

.notification {
    position: fixed;
    top: 2rem;
    right: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    z-index: 10001;
    min-width: 300px;
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
}

.notification-success { border-left: 4px solid #28a745; }
.notification-warning { border-left: 4px solid #ffc107; }
.notification-error { border-left: 4px solid #dc3545; }
.notification-info { border-left: 4px solid #17a2b8; }

.notification-close {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: #666;
    margin-left: auto;
}

@media (max-width: 768px) {
    .video-modal-content, .booking-modal-content {
        width: 95%;
        margin: 1rem;
    }
    
    .booking-actions {
        flex-direction: column;
    }
    
    .notification {
        right: 1rem;
        left: 1rem;
        min-width: auto;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', modalStyles);