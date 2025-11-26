// ============================================
// ArchiTime Landing Page JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initBillingToggle();
    initAnimations();
});

// ============================================
// Navigation
// ============================================

function initNavigation() {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Mobile menu toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.classList.remove('active');
            });
        });
    }
    
    // Scroll effect for navigation
    if (nav) {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }
}

// ============================================
// Scroll Effects
// ============================================

function initScrollEffects() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Billing Toggle (Pricing Page)
// ============================================

function initBillingToggle() {
    const toggle = document.getElementById('billingToggle');
    const labels = document.querySelectorAll('.toggle-label');
    const priceAmounts = document.querySelectorAll('.price-amount[data-monthly]');
    
    if (!toggle) return;
    
    let isAnnual = false;
    
    toggle.addEventListener('click', () => {
        isAnnual = !isAnnual;
        toggle.classList.toggle('active', isAnnual);
        
        // Update labels
        labels.forEach(label => {
            const period = label.dataset.period;
            label.classList.toggle('active', 
                (period === 'annual' && isAnnual) || 
                (period === 'monthly' && !isAnnual)
            );
        });
        
        // Update prices with animation
        priceAmounts.forEach(price => {
            const monthly = price.dataset.monthly;
            const annual = price.dataset.annual;
            
            if (monthly && annual) {
                price.style.opacity = '0';
                price.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    price.textContent = isAnnual ? `€${annual}` : `€${monthly}`;
                    price.style.opacity = '1';
                    price.style.transform = 'translateY(0)';
                }, 150);
            }
        });
    });
    
    // Add transition styles
    priceAmounts.forEach(price => {
        price.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
    });
}

// ============================================
// Scroll Animations
// ============================================

function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const animatedElements = document.querySelectorAll(
        '.problem-card, .audience-card, .testimonial-card, .pricing-card, ' +
        '.feature-detail, .faq-item, .step, .start-step'
    );
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    } else {
        // Fallback for older browsers
        animatedElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }
    
    // Stagger animation for grids
    const grids = document.querySelectorAll(
        '.problems-grid, .audience-grid, .pricing-grid, .feature-details-grid'
    );
    
    grids.forEach(grid => {
        const items = grid.children;
        Array.from(items).forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    });
}

// ============================================
// Helper Functions
// ============================================

// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============================================
// Analytics (placeholder for future implementation)
// ============================================

function trackEvent(category, action, label) {
    // Placeholder for analytics tracking
    // Can be connected to Google Analytics, Plausible, etc.
    if (window.gtag) {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    console.log(`Event: ${category} - ${action} - ${label}`);
}

// Track CTA clicks
document.querySelectorAll('.btn-primary, .nav-cta').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('CTA', 'click', btn.textContent.trim());
    });
});
