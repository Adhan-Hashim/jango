// Art Form Details Manager
class ArtFormDetailsManager {
    constructor() {
        this.artFormsData = this.initializeArtFormsData();
        this.init();
    }

    init() {
        this.addModalStyles();
        this.initializeEventHandlers();
    }

    initializeArtFormsData() {
        return {
            kathakali: {
                name: 'Kathakali',
                subtitle: 'Classical Dance Drama',
                photos: [
                    { url: '🎭', caption: 'Traditional Kathakali performer in elaborate costume' },
                    { url: '🎨', caption: 'Intricate makeup process' },
                    { url: '👑', caption: 'Crown and ornamental details' },
                    { url: '🎪', caption: 'Temple courtyard performance' }
                ],
                story: {
                    origin: 'Kathakali emerged in the 16th century in Kerala, evolving from earlier temple art forms like Krishnanattam and Ramanattam.',
                    significance: 'This classical dance-drama represents the pinnacle of Kerala\'s performing arts, combining elements of dance, drama, music, and ritual.',
                    tradition: 'Traditionally performed in temple courtyards under flickering oil lamps, Kathakali creates a magical atmosphere where mythology comes alive through precise hand gestures (mudras), facial expressions (rasas), and rhythmic movements.'
                },
                events: [
                    {
                        title: 'Nalacharitham - Complete Performance',
                        date: 'December 15, 2024 - 7:00 PM',
                        venue: 'Kerala Kalamandalam, Thrissur',
                        duration: '3 hours',
                        prices: [
                            { type: 'Standard', amount: 500 },
                            { type: 'Premium', amount: 800 },
                            { type: 'VIP', amount: 1200 }
                        ],
                        description: 'Experience the complete Nalacharitham story performed by master artists from Kerala Kalamandalam.'
                    },
                    {
                        title: 'Kathakali Makeup Workshop',
                        date: 'December 20-22, 2024',
                        venue: 'Cultural Center, Kochi',
                        duration: '3 days',
                        prices: [
                            { type: 'All Inclusive', amount: 3500 }
                        ],
                        description: 'Learn the ancient art of Kathakali makeup from master makeup artists.'
                    },
                    {
                        title: 'Ramayana Spectacular',
                        date: 'January 5, 2025 - 6:30 PM',
                        venue: 'Tagore Theatre, Thiruvananthapuram',
                        duration: '4 hours',
                        prices: [
                            { type: 'Standard', amount: 750 },
                            { type: 'Premium', amount: 1200 },
                            { type: 'VIP', amount: 2000 }
                        ],
                        description: 'A grand presentation of selected episodes from the Ramayana with multiple artists.'
                    }
                ],
                artists: [
                    {
                        name: 'Kalamandalam Ramankutty Nair',
                        role: 'Kathakali Maestro',
                        experience: '50+ years',
                        speciality: 'Heroic and divine characters',
                        contact: 'ramankutty@kalamandalam.ac.in',
                        achievements: 'Padma Shri recipient, performed 5000+ shows'
                    },
                    {
                        name: 'Kalamandalam Gopi',
                        role: 'Character Artist',
                        experience: '45+ years',
                        speciality: 'Female characters and anti-heroic roles',
                        contact: 'gopi@kalamandalam.ac.in',
                        achievements: 'International acclaimed performer'
                    },
                    {
                        name: 'Kalamandalam Bineesh',
                        role: 'Young Performer',
                        experience: '15+ years',
                        speciality: 'Heroic roles',
                        contact: 'bineesh@kalamandalam.ac.in',
                        achievements: 'Multiple state-level awards'
                    }
                ]
            },
            theyyam: {
                name: 'Theyyam',
                subtitle: 'Sacred Ritual Performance',
                photos: [
                    { url: '🔥', caption: 'Theyyam performer in divine transformation' },
                    { url: '👹', caption: 'Elaborate mask and costume' },
                    { url: '🌺', caption: 'Ritual offerings and flowers' },
                    { url: '🥁', caption: 'Traditional drumming ensemble' }
                ],
                story: {
                    origin: 'Theyyam is an ancient ritual art form from Northern Kerala, believed to be over 1500 years old, predating many classical art forms.',
                    significance: 'This sacred performance transforms ordinary humans into living deities, serving as a bridge between the divine and mortal worlds.',
                    tradition: 'Performed in sacred groves and temples, Theyyam involves elaborate costumes, face painting, and ritualistic dance that invokes the presence of gods and spirits.'
                },
                events: [
                    {
                        title: 'Theyyam Festival at Parassinikadavu',
                        date: 'December 10-12, 2024',
                        venue: 'Parassinikadavu Temple, Kannur',
                        duration: '3 days',
                        prices: [
                            { type: 'General Entry', amount: 200 },
                            { type: 'VIP Seating', amount: 500 }
                        ],
                        description: 'Annual Theyyam festival featuring multiple deities and traditional performances.'
                    },
                    {
                        title: 'Muchilottu Bhagavathi Theyyam',
                        date: 'January 15, 2025 - 8:00 PM',
                        venue: 'Kavumba Temple, Kasargod',
                        duration: '5 hours',
                        prices: [
                            { type: 'Darshan', amount: 100 },
                            { type: 'Special Seating', amount: 300 }
                        ],
                        description: 'Witness the powerful Muchilottu Bhagavathi Theyyam performance.'
                    }
                ],
                artists: [
                    {
                        name: 'Kannan Master',
                        role: 'Theyyam Performer',
                        experience: '40+ years',
                        speciality: 'Vishnu Theyyam',
                        contact: 'kannan.theyyam@gmail.com',
                        achievements: 'Hereditary performer from Kannur'
                    },
                    {
                        name: 'Raman Perumal',
                        role: 'Theyyam Artist',
                        experience: '35+ years',
                        speciality: 'Bhagavathi Theyyam',
                        contact: 'raman.theyyam@gmail.com',
                        achievements: 'Traditional family lineage performer'
                    }
                ]
            },
            mohiniyattam: {
                name: 'Mohiniyattam',
                subtitle: 'Classical Dance of Enchantment',
                photos: [
                    { url: '💃', caption: 'Graceful Mohiniyattam dancer' },
                    { url: '🌙', caption: 'Traditional white and gold costume' },
                    { url: '💎', caption: 'Elegant jewelry and ornaments' },
                    { url: '🎵', caption: 'Classical music accompaniment' }
                ],
                story: {
                    origin: 'Mohiniyattam originated in Kerala during the 16th century, inspired by the enchantress Mohini from Hindu mythology.',
                    significance: 'This classical dance form embodies feminine grace and beauty, characterized by swaying movements that mimic the swaying of palm trees.',
                    tradition: 'Performed solo by women in traditional white and gold costumes, Mohiniyattam tells stories through graceful movements, expressions, and hand gestures.'
                },
                events: [
                    {
                        title: 'Mohiniyattam Recital by Sunanda Nair',
                        date: 'December 8, 2024 - 7:30 PM',
                        venue: 'Kerala Fine Arts Society, Ernakulam',
                        duration: '2 hours',
                        prices: [
                            { type: 'Regular', amount: 400 },
                            { type: 'Premium', amount: 600 }
                        ],
                        description: 'An evening of classical Mohiniyattam by renowned artist Sunanda Nair.'
                    },
                    {
                        title: 'Mohiniyattam Workshop for Beginners',
                        date: 'January 10-14, 2025',
                        venue: 'Dance Academy, Thiruvananthapuram',
                        duration: '5 days',
                        prices: [
                            { type: 'Course Fee', amount: 2500 }
                        ],
                        description: 'Learn the basics of Mohiniyattam from certified instructors.'
                    }
                ],
                artists: [
                    {
                        name: 'Sunanda Nair',
                        role: 'Mohiniyattam Exponent',
                        experience: '30+ years',
                        speciality: 'Classical repertoire',
                        contact: 'sunanda.mohiniyattam@gmail.com',
                        achievements: 'Kalaimamani award recipient'
                    },
                    {
                        name: 'Methil Devika',
                        role: 'Classical Dancer',
                        experience: '25+ years',
                        speciality: 'Contemporary adaptations',
                        contact: 'devika.dance@gmail.com',
                        achievements: 'International performances'
                    }
                ]
            }
        };
    }

    showArtFormDetails(artFormId) {
        const artForm = this.artFormsData[artFormId];
        if (!artForm) return;

        const modal = this.createDetailModal(artForm);
        document.body.appendChild(modal);

        // Add event listeners
        this.addModalEventListeners(modal);
    }

    createDetailModal(artForm) {
        const modal = document.createElement('div');
        modal.className = 'art-detail-modal';
        modal.innerHTML = `
            <div class="art-detail-content">
                <div class="art-detail-header">
                    <div class="art-header-info">
                        <h2>${artForm.name}</h2>
                        <p class="art-subtitle">${artForm.subtitle}</p>
                    </div>
                    <button class="close-modal">&times;</button>
                </div>
                
                <div class="art-detail-body">
                    <div class="art-tabs">
                        <button class="tab-btn active" data-tab="photos">📸 Photos</button>
                        <button class="tab-btn" data-tab="story">📖 Story</button>
                        <button class="tab-btn" data-tab="events">🎫 Events</button>
                        <button class="tab-btn" data-tab="artists">👥 Artists</button>
                    </div>
                    
                    <div class="art-tab-content">
                        ${this.createPhotosTab(artForm.photos)}
                        ${this.createStoryTab(artForm.story)}
                        ${this.createEventsTab(artForm.events)}
                        ${this.createArtistsTab(artForm.artists)}
                    </div>
                </div>
            </div>
        `;
        return modal;
    }

    createPhotosTab(photos) {
        return `
            <div class="tab-pane active" id="photos">
                <div class="photos-grid">
                    ${photos.map(photo => `
                        <div class="photo-item">
                            <div class="photo-placeholder">${photo.url}</div>
                            <p class="photo-caption">${photo.caption}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    createStoryTab(story) {
        return `
            <div class="tab-pane" id="story">
                <div class="story-content">
                    <div class="story-section">
                        <h3>🏛️ Origins</h3>
                        <p>${story.origin}</p>
                    </div>
                    <div class="story-section">
                        <h3>⭐ Significance</h3>
                        <p>${story.significance}</p>
                    </div>
                    <div class="story-section">
                        <h3>🎭 Tradition</h3>
                        <p>${story.tradition}</p>
                    </div>
                </div>
            </div>
        `;
    }

    createEventsTab(events) {
        return `
            <div class="tab-pane" id="events">
                <div class="events-list">
                    ${events.map(event => `
                        <div class="event-item">
                            <div class="event-header">
                                <h3>${event.title}</h3>
                                <div class="event-meta">
                                    <span class="event-date">📅 ${event.date}</span>
                                    <span class="event-venue">📍 ${event.venue}</span>
                                    <span class="event-duration">⏱️ ${event.duration}</span>
                                </div>
                            </div>
                            <p class="event-description">${event.description}</p>
                            <div class="event-pricing">
                                <h4>🎫 Ticket Prices</h4>
                                <div class="price-list">
                                    ${event.prices.map(price => `
                                        <div class="price-item">
                                            <span class="price-type">${price.type}</span>
                                            <span class="price-amount">₹${price.amount}</span>
                                            <button class="book-btn" onclick="bookEvent('${event.title}', '${price.type}', ${price.amount})">
                                                Book Now
                                            </button>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    createArtistsTab(artists) {
        return `
            <div class="tab-pane" id="artists">
                <div class="artists-grid">
                    ${artists.map(artist => `
                        <div class="artist-item">
                            <div class="artist-avatar">👤</div>
                            <div class="artist-info">
                                <h3>${artist.name}</h3>
                                <p class="artist-role">${artist.role}</p>
                                <div class="artist-details">
                                    <div class="detail-row">
                                        <span class="detail-label">Experience:</span>
                                        <span class="detail-value">${artist.experience}</span>
                                    </div>
                                    <div class="detail-row">
                                        <span class="detail-label">Speciality:</span>
                                        <span class="detail-value">${artist.speciality}</span>
                                    </div>
                                    <div class="detail-row">
                                        <span class="detail-label">Achievements:</span>
                                        <span class="detail-value">${artist.achievements}</span>
                                    </div>
                                </div>
                                <div class="artist-contact">
                                    <button class="contact-artist-btn" onclick="contactArtistDirect('${artist.contact}', '${artist.name}')">
                                        📧 Contact Artist
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    addModalEventListeners(modal) {
        // Close modal
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });

        // Tab switching
        const tabBtns = modal.querySelectorAll('.tab-btn');
        const tabPanes = modal.querySelectorAll('.tab-pane');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all tabs and panes
                tabBtns.forEach(t => t.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('active'));

                // Add active class to clicked tab and corresponding pane
                btn.classList.add('active');
                const targetTab = btn.getAttribute('data-tab');
                const targetPane = modal.querySelector(`#${targetTab}`);
                if (targetPane) {
                    targetPane.classList.add('active');
                }
            });
        });

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
        });
    }

    initializeEventHandlers() {
        // Add global functions for booking and contact
        window.bookEvent = (eventTitle, priceType, amount) => {
            const bookingDetails = {
                event: eventTitle,
                ticketType: priceType,
                price: amount,
                bookingId: 'BK' + Date.now()
            };

            // Create booking modal
            this.showBookingModal(bookingDetails);
        };

        window.contactArtistDirect = (email, name) => {
            const subject = encodeURIComponent(`Inquiry about ${name} - Kerala Art Performance`);
            const body = encodeURIComponent(`Dear ${name},\n\nI am interested in learning more about your art performances and availability.\n\nBest regards,`);
            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        };

        window.showArtFormDetails = (artFormId) => {
            this.showArtFormDetails(artFormId);
        };
    }

    showBookingModal(bookingDetails) {
        const modal = document.createElement('div');
        modal.className = 'booking-modal';
        modal.innerHTML = `
            <div class="booking-content">
                <div class="booking-header">
                    <h3>🎫 Book Tickets</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="booking-body">
                    <div class="booking-summary">
                        <h4>${bookingDetails.event}</h4>
                        <p><strong>Ticket Type:</strong> ${bookingDetails.ticketType}</p>
                        <p><strong>Price:</strong> ₹${bookingDetails.price}</p>
                        <p><strong>Booking ID:</strong> ${bookingDetails.bookingId}</p>
                    </div>
                    <form class="booking-form">
                        <div class="form-group">
                            <label>Number of Tickets</label>
                            <select name="tickets" id="ticket-count">
                                <option value="1">1 Ticket</option>
                                <option value="2">2 Tickets</option>
                                <option value="3">3 Tickets</option>
                                <option value="4">4 Tickets</option>
                                <option value="5">5+ Tickets</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" required>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label>Phone</label>
                            <input type="tel" name="phone" required>
                        </div>
                        <div class="total-section">
                            <h4>Total Amount: ₹<span id="total-amount">${bookingDetails.price}</span></h4>
                        </div>
                        <div class="booking-actions">
                            <button type="button" class="cancel-btn">Cancel</button>
                            <button type="submit" class="confirm-btn">Proceed to Payment</button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add event listeners for booking modal
        const closeBtn = modal.querySelector('.close-modal');
        const cancelBtn = modal.querySelector('.cancel-btn');
        const form = modal.querySelector('.booking-form');
        const ticketSelect = modal.querySelector('#ticket-count');
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

        // Update total on ticket count change
        ticketSelect.addEventListener('change', () => {
            const count = parseInt(ticketSelect.value);
            const total = bookingDetails.price * count;
            totalAmount.textContent = total;
        });

        // Handle form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.processBooking(new FormData(form), bookingDetails);
            closeModal();
        });
    }

    processBooking(formData, bookingDetails) {
        // Simulate booking process
        const customerData = Object.fromEntries(formData);
        const totalTickets = parseInt(customerData.tickets);
        const totalAmount = bookingDetails.price * totalTickets;

        // Show success message
        this.showNotification(
            `🎉 Booking Successful!\n\nBooking ID: ${bookingDetails.bookingId}\nEvent: ${bookingDetails.event}\nTickets: ${totalTickets}\nTotal: ₹${totalAmount}\n\nConfirmation will be sent to your email.`,
            'success'
        );

        // In a real application, this would send data to backend
        console.log('Booking processed:', {
            bookingId: bookingDetails.bookingId,
            event: bookingDetails,
            customer: customerData,
            total: totalAmount
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <div class="notification-message">${message.replace(/\n/g, '<br>')}</div>
                <button class="notification-close">×</button>
            </div>
        `;

        document.body.appendChild(notification);

        // Auto remove after 8 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 8000);

        // Manual close
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        });
    }

    addModalStyles() {
        const styles = `
            <style>
                .art-detail-modal, .booking-modal {
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
                    padding: 1rem;
                }

                .art-detail-content, .booking-content {
                    background: white;
                    border-radius: 15px;
                    max-width: 1000px;
                    width: 100%;
                    max-height: 90vh;
                    overflow-y: auto;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                }

                .art-detail-header, .booking-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 2rem;
                    border-bottom: 1px solid #eee;
                    background: linear-gradient(135deg, #2d5016, #3e6b1f);
                    color: white;
                    border-radius: 15px 15px 0 0;
                }

                .art-header-info h2 {
                    margin: 0;
                    font-size: 2rem;
                    font-family: 'Playfair Display', serif;
                }

                .art-subtitle {
                    opacity: 0.9;
                    margin: 0.5rem 0 0 0;
                }

                .close-modal {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 2rem;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                }

                .close-modal:hover {
                    background: rgba(255, 255, 255, 0.2);
                }

                .art-detail-body, .booking-body {
                    padding: 2rem;
                }

                .art-tabs {
                    display: flex;
                    border-bottom: 2px solid #eee;
                    margin-bottom: 2rem;
                    gap: 0.5rem;
                }

                .tab-btn {
                    background: none;
                    border: none;
                    padding: 1rem 1.5rem;
                    cursor: pointer;
                    border-radius: 8px 8px 0 0;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    color: #666;
                }

                .tab-btn.active {
                    background: #2d5016;
                    color: white;
                }

                .tab-btn:hover:not(.active) {
                    background: #f8f9fa;
                    color: #2d5016;
                }

                .tab-pane {
                    display: none;
                }

                .tab-pane.active {
                    display: block;
                }

                /* Photos Tab */
                .photos-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                }

                .photo-item {
                    text-align: center;
                }

                .photo-placeholder {
                    width: 100%;
                    aspect-ratio: 1;
                    background: linear-gradient(45deg, #daa520, #ff8c42);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 3rem;
                    color: white;
                    margin-bottom: 0.5rem;
                }

                .photo-caption {
                    font-size: 0.9rem;
                    color: #666;
                    line-height: 1.4;
                }

                /* Story Tab */
                .story-content {
                    max-width: 800px;
                }

                .story-section {
                    margin-bottom: 2rem;
                    padding: 1.5rem;
                    background: #f8f9fa;
                    border-radius: 10px;
                    border-left: 4px solid #2d5016;
                }

                .story-section h3 {
                    color: #2d5016;
                    margin-bottom: 1rem;
                    font-family: 'Playfair Display', serif;
                }

                .story-section p {
                    line-height: 1.7;
                    color: #444;
                }

                /* Events Tab */
                .events-list {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .event-item {
                    border: 1px solid #eee;
                    border-radius: 10px;
                    padding: 1.5rem;
                    transition: all 0.3s ease;
                }

                .event-item:hover {
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    transform: translateY(-2px);
                }

                .event-header h3 {
                    color: #2d5016;
                    margin-bottom: 1rem;
                    font-family: 'Playfair Display', serif;
                }

                .event-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }

                .event-meta span {
                    background: #f0f8f0;
                    padding: 0.3rem 0.8rem;
                    border-radius: 15px;
                    font-size: 0.9rem;
                    color: #2d5016;
                }

                .event-description {
                    color: #666;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }

                .event-pricing {
                    background: #f8f9fa;
                    padding: 1rem;
                    border-radius: 8px;
                }

                .event-pricing h4 {
                    color: #2d5016;
                    margin-bottom: 1rem;
                }

                .price-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .price-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    background: white;
                    border-radius: 8px;
                    border: 1px solid #eee;
                }

                .price-type {
                    font-weight: 600;
                    color: #333;
                }

                .price-amount {
                    font-weight: 700;
                    color: #2d5016;
                    font-size: 1.1rem;
                }

                .book-btn {
                    background: #2d5016;
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .book-btn:hover {
                    background: #3e6b1f;
                    transform: translateY(-1px);
                }

                /* Artists Tab */
                .artists-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                }

                .artist-item {
                    background: #f8f9fa;
                    border-radius: 10px;
                    padding: 1.5rem;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .artist-item:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                }

                .artist-avatar {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(45deg, #2d5016, #4a7c28);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    color: white;
                    margin: 0 auto 1rem auto;
                }

                .artist-info h3 {
                    color: #2d5016;
                    margin-bottom: 0.5rem;
                    font-family: 'Playfair Display', serif;
                }

                .artist-role {
                    color: #4a7c28;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                .artist-details {
                    text-align: left;
                    margin-bottom: 1.5rem;
                }

                .detail-row {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 0.5rem;
                    padding: 0.5rem 0;
                    border-bottom: 1px dotted #ddd;
                }

                .detail-label {
                    font-weight: 600;
                    color: #333;
                }

                .detail-value {
                    color: #666;
                }

                .contact-artist-btn {
                    background: #4a7c28;
                    color: white;
                    border: none;
                    padding: 0.8rem 1.5rem;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .contact-artist-btn:hover {
                    background: #2d5016;
                    transform: translateY(-1px);
                }

                /* Booking Modal Specific */
                .booking-content {
                    max-width: 500px;
                }

                .booking-summary {
                    background: #f0f8f0;
                    padding: 1.5rem;
                    border-radius: 8px;
                    margin-bottom: 2rem;
                    border-left: 4px solid #2d5016;
                }

                .booking-summary h4 {
                    color: #2d5016;
                    margin-bottom: 1rem;
                    font-family: 'Playfair Display', serif;
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

                .form-group input:focus, .form-group select:focus {
                    outline: none;
                    border-color: #2d5016;
                    box-shadow: 0 0 0 2px rgba(45, 80, 22, 0.1);
                }

                .total-section {
                    background: #e8f5e8;
                    padding: 1rem;
                    border-radius: 8px;
                    text-align: center;
                    margin: 1rem 0;
                }

                .total-section h4 {
                    color: #2d5016;
                    margin: 0;
                    font-size: 1.2rem;
                }

                .booking-actions {
                    display: flex;
                    gap: 1rem;
                    justify-content: flex-end;
                }

                .cancel-btn, .confirm-btn {
                    padding: 0.8rem 1.5rem;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .cancel-btn {
                    background: #f8f9fa;
                    color: #666;
                }

                .cancel-btn:hover {
                    background: #e9ecef;
                }

                .confirm-btn {
                    background: #2d5016;
                    color: white;
                }

                .confirm-btn:hover {
                    background: #3e6b1f;
                    transform: translateY(-1px);
                }

                /* Notification */
                .notification {
                    position: fixed;
                    top: 2rem;
                    right: 2rem;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    z-index: 10001;
                    min-width: 300px;
                    max-width: 400px;
                }

                .notification-success {
                    border-left: 4px solid #28a745;
                }

                .notification-content {
                    padding: 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .notification-message {
                    flex: 1;
                    line-height: 1.5;
                    color: #333;
                }

                .notification-close {
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #666;
                    margin-left: 1rem;
                }

                .notification-close:hover {
                    color: #333;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .art-detail-modal, .booking-modal {
                        padding: 0.5rem;
                    }

                    .art-detail-content, .booking-content {
                        max-height: 95vh;
                        border-radius: 10px;
                    }

                    .art-detail-header, .booking-header {
                        padding: 1rem;
                    }

                    .art-header-info h2 {
                        font-size: 1.5rem;
                    }

                    .art-detail-body, .booking-body {
                        padding: 1rem;
                    }

                    .art-tabs {
                        overflow-x: auto;
                        flex-wrap: nowrap;
                    }

                    .tab-btn {
                        white-space: nowrap;
                        min-width: 120px;
                    }

                    .photos-grid {
                        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    }

                    .artists-grid {
                        grid-template-columns: 1fr;
                    }

                    .price-item {
                        flex-direction: column;
                        gap: 0.5rem;
                        text-align: center;
                    }

                    .event-meta {
                        flex-direction: column;
                        gap: 0.5rem;
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
        document.head.insertAdjacentHTML('beforeend', styles);
    }
}

// Initialize the art form details manager
document.addEventListener('DOMContentLoaded', function() {
    window.artFormDetailsManager = new ArtFormDetailsManager();
});