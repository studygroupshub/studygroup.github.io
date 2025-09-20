// Platform Detection
function detectPlatform() {
    const userAgent = navigator.userAgent.toLowerCase();
    const platformDetection = document.getElementById('platformDetection');
    
    if (userAgent.includes('windows')) {
        platformDetection.innerHTML = '<i class="fab fa-windows"></i><span>We detected you\'re on Windows!</span>';
        platformDetection.style.display = 'flex';
    } else if (userAgent.includes('mac')) {
        platformDetection.innerHTML = '<i class="fab fa-apple"></i><span>We detected you\'re on macOS!</span>';
        platformDetection.style.display = 'flex';
    } else if (userAgent.includes('android')) {
        platformDetection.innerHTML = '<i class="fab fa-android"></i><span>We detected you\'re on Android!</span>';
        platformDetection.style.display = 'flex';
    } else {
        platformDetection.style.display = 'none';
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Download button functionality
function initDownloadButtons() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(button => {
        // Skip disabled buttons (like Coming Soon)
        if (button.classList.contains('disabled')) {
            return;
        }
        
        button.addEventListener('click', function(e) {
            // For actual download links, let them work normally
            if (this.tagName === 'A') {
                const platform = this.closest('.download-card').querySelector('h3').textContent;
                showNotification(`Starting download for ${platform}...`);
                return;
            }
            
            // For buttons that need simulation
            const platform = this.closest('.download-card').querySelector('h3').textContent;
            
            // Simulate download process
            const originalContent = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
                this.style.background = '#4CAF50';
                showNotification(`${platform} download completed!`);
                
                setTimeout(() => {
                    // Reset button after 3 seconds
                    this.innerHTML = originalContent;
                    this.disabled = false;
                    this.style.background = '';
                }, 3000);
            }, 2000);
        });
    });
}

// Community feature buttons
function initCommunityFeatures() {
    const featureButtons = document.querySelectorAll('.feature-btn');
    
    featureButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add active state
            featureButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Simulate feature interaction
            const featureName = this.textContent.trim();
            showNotification(`Opening ${featureName}...`);
        });
    });
}

// Join community button
function initJoinCommunity() {
    const joinButton = document.querySelector('.join-community-btn');
    
    joinButton.addEventListener('click', function() {
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Joining...';
        this.disabled = true;
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-check"></i> Joined!';
            this.style.background = '#4CAF50';
            showNotification('Welcome to Study Group Community!');
        }, 2000);
    });
}

// Notification system
function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-info-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #4facfe, #00f2fe);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .feature-btn.active {
            background: rgba(79, 172, 254, 0.3) !important;
            transform: translateY(-2px);
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Coming Soon notification for macOS
function showComingSoonNotification() {
    showNotification('macOS version is coming soon! Stay tuned for updates.');
}

// Download tracking function
function trackDownload(platform) {
    // Track download analytics
    console.log(`Download started for ${platform}`);
    
    // Show notification
    showNotification(`Downloading Study Group for ${platform}...`);
    
    // You can add analytics tracking here
    // Example: gtag('event', 'download', { platform: platform });
    
    // Optional: Track in localStorage
    const downloads = JSON.parse(localStorage.getItem('studyGroupDownloads') || '{}');
    downloads[platform] = (downloads[platform] || 0) + 1;
    downloads.lastDownload = new Date().toISOString();
    localStorage.setItem('studyGroupDownloads', JSON.stringify(downloads));
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .download-card, .stat-card, .feature-btn');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Mobile menu toggle (for responsive design)
function initMobileMenu() {
    // Create mobile menu button
    const nav = document.querySelector('.nav');
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.setAttribute('aria-label', 'Toggle mobile menu');
    mobileMenuBtn.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: #2c3e50;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 5px;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    `;
    
    // Add mobile menu styles
    const mobileStyles = document.createElement('style');
    mobileStyles.textContent = `
        @media (max-width: 768px) {
            .nav {
                position: relative;
            }
            .mobile-menu-btn {
                display: block !important;
            }
            .mobile-menu-btn:hover {
                background-color: rgba(44, 62, 80, 0.1);
            }
            .nav-links {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: rgba(255, 255, 255, 0.98);
                flex-direction: column;
                padding: 20px;
                backdrop-filter: blur(10px);
                z-index: 1000;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                border-radius: 0 0 15px 15px;
            }
            .nav-links.active {
                display: flex;
                animation: slideDown 0.3s ease;
            }
            .nav-links a {
                padding: 12px 0;
                border-bottom: 1px solid rgba(44, 62, 80, 0.1);
                text-align: center;
                transition: color 0.3s ease;
                color: #2c3e50;
            }
            .nav-links a:hover {
                color: #667eea;
            }
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }
    `;
    document.head.appendChild(mobileStyles);
    
    nav.appendChild(mobileMenuBtn);
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const isActive = navLinks.classList.contains('active');
        
        navLinks.classList.toggle('active');
        
        // Update button icon
        const icon = mobileMenuBtn.querySelector('i');
        if (isActive) {
            icon.className = 'fas fa-bars';
        } else {
            icon.className = 'fas fa-times';
        }
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'fas fa-bars';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const nav = document.querySelector('.nav');
        const navLinks = document.querySelector('.nav-links');
        if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'fas fa-bars';
        }
    });
}

// Touch and mobile optimizations
function initMobileOptimizations() {
    // Prevent zoom on double tap for iOS
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Add touch feedback for buttons
    const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary, .download-btn, .join-community-btn, .feature-btn');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Improve scroll performance on mobile
    let ticking = false;
    function updateScrollPosition() {
        // Add any scroll-based animations here
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Add viewport meta tag if not present
    if (!document.querySelector('meta[name="viewport"]')) {
        const viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        document.head.appendChild(viewport);
    }
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Lazy load images (if any are added later)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Recalculate any size-dependent elements
            const platformDetection = document.getElementById('platformDetection');
            if (window.innerWidth <= 768) {
                platformDetection.style.fontSize = '0.85rem';
            } else {
                platformDetection.style.fontSize = '';
            }
        }, 250);
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    detectPlatform();
    initSmoothScrolling();
    initDownloadButtons();
    initCommunityFeatures();
    initJoinCommunity();
    initScrollAnimations();
    initMobileMenu();
    initMobileOptimizations();
    initPerformanceOptimizations();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .download-card, .stat-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .download-btn, .join-community-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});
