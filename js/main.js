// Main JavaScript file

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('#main-nav');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('mobile-open');
            document.body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('mobile-open');
                document.body.classList.remove('menu-open');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mobileMenuToggle.classList.remove('active');
                    mainNav.classList.remove('mobile-open');
                    document.body.classList.remove('menu-open');
                }
            });
        });
    }
    
    // Cart functionality
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    
    // Update cart count
    function updateCartCount() {
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
        }
    }
    
    // Add to cart (will be used on product pages)
    window.addToCart = function(productId) {
        cartCount++;
        updateCartCount();
        // Here you would typically add the product to a cart array/localStorage
        localStorage.setItem('cartCount', cartCount);
        alert('Produit ajouté au panier!');
    };
    
    // Load cart count from localStorage
    const savedCartCount = localStorage.getItem('cartCount');
    if (savedCartCount) {
        cartCount = parseInt(savedCartCount);
        updateCartCount();
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Search functionality
    const searchForm = document.querySelector('.search-bar form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = this.querySelector('input').value;
            if (searchTerm.trim()) {
                // Redirect to products page with search parameter
                window.location.href = `produits.html?search=${encodeURIComponent(searchTerm)}`;
            }
        });
    }
    
    // Dropdown menu mobile handling
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('> a');
        if (link) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('mobile-open');
                document.body.classList.remove('menu-open');
            }
        }
    });
    
    // Product image lazy loading
    const productImages = document.querySelectorAll('.product-image img');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        productImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Sticky header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// Promotions Carousel
let currentPromoSlide = 0;
let promoAutoSlideInterval;

function showPromoSlide() {
    const slides = document.querySelectorAll('.promo-slide');
    const dots = document.querySelectorAll('.promo-dot');
    
    if (currentPromoSlide >= slides.length) {
        currentPromoSlide = 0;
    }
    if (currentPromoSlide < 0) {
        currentPromoSlide = slides.length - 1;
    }
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    if (slides[currentPromoSlide]) {
        slides[currentPromoSlide].classList.add('active');
    }
    if (dots[currentPromoSlide]) {
        dots[currentPromoSlide].classList.add('active');
    }
}

function changePromoSlide(n) {
    currentPromoSlide += n;
    showPromoSlide();
    resetPromoAutoSlide();
}

function setPromoSlide(n) {
    currentPromoSlide = n;
    showPromoSlide();
    resetPromoAutoSlide();
}

function resetPromoAutoSlide() {
    clearInterval(promoAutoSlideInterval);
    promoAutoSlideInterval = setInterval(() => {
        currentPromoSlide++;
        showPromoSlide();
    }, 1500); // Change slide every 1.5 seconds
}

// Initialize carousel on page load (will be called after DOM is loaded)
function initPromoCarousel() {
    const slides = document.querySelectorAll('.promo-slide');
    if (slides.length > 0) {
        currentPromoSlide = 0;
        showPromoSlide();
        resetPromoAutoSlide();
        
        // Pause on hover
        const carouselContainer = document.querySelector('.promo-carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', () => {
                clearInterval(promoAutoSlideInterval);
            });
            carouselContainer.addEventListener('mouseleave', () => {
                resetPromoAutoSlide();
            });
        }
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPromoCarousel);
} else {
    initPromoCarousel();
}

// Make functions available globally
window.changePromoSlide = changePromoSlide;
window.setPromoSlide = setPromoSlide;

// Hero Carousel
let currentHeroSlide = 0;
let heroAutoSlideInterval;

function showHeroSlide() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    
    if (currentHeroSlide >= slides.length) {
        currentHeroSlide = 0;
    }
    if (currentHeroSlide < 0) {
        currentHeroSlide = slides.length - 1;
    }
    
    // Hide all slides with fade out
    slides.forEach((slide, index) => {
        if (index !== currentHeroSlide) {
            slide.classList.remove('active');
        }
    });
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide with fade in
    if (slides[currentHeroSlide]) {
        // Small delay for smooth transition
        setTimeout(() => {
            slides[currentHeroSlide].classList.add('active');
        }, 50);
    }
    if (dots[currentHeroSlide]) {
        dots[currentHeroSlide].classList.add('active');
    }
}

function changeHeroSlide(n) {
    currentHeroSlide += n;
    showHeroSlide();
    resetHeroAutoSlide();
}

function setHeroSlide(n) {
    currentHeroSlide = n;
    showHeroSlide();
    resetHeroAutoSlide();
}

function resetHeroAutoSlide() {
    clearInterval(heroAutoSlideInterval);
    heroAutoSlideInterval = setInterval(() => {
        currentHeroSlide++;
        showHeroSlide();
    }, 1500); // Change slide every 1.5 seconds
}

// Initialize hero carousel
function initHeroCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        currentHeroSlide = 0;
        showHeroSlide();
        resetHeroAutoSlide();
        
        // Pause on hover
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', () => {
                clearInterval(heroAutoSlideInterval);
            });
            heroSection.addEventListener('mouseleave', () => {
                resetHeroAutoSlide();
            });
        }

    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroCarousel);
} else {
    initHeroCarousel();
}

// Make hero functions available globally
window.changeHeroSlide = changeHeroSlide;
window.setHeroSlide = setHeroSlide;

// Newsletter subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Here you would typically send the email to your backend
    alert('Merci pour votre inscription! Vous recevrez nos dernières offres par email.');
    event.target.reset();
    
    // You can integrate with your email service here
    // For example: Send to backend API or email service
}

window.subscribeNewsletter = subscribeNewsletter;

