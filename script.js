// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ROI Calculator Function
function calculateROI() {
    const propertyValue = parseFloat(document.getElementById('property-value').value) || 0;
    const iotInvestment = parseFloat(document.getElementById('iot-investment').value) || 0;
    const insuranceDiscount = parseFloat(document.getElementById('insurance-discount').value) || 0;
    const propertyAppreciation = parseFloat(document.getElementById('property-appreciation').value) || 0;
    
    if (propertyValue === 0 || iotInvestment === 0) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Calculate annual savings
    const annualInsuranceSavings = (propertyValue * 0.01 * insuranceDiscount / 100); // Assuming 1% property value as annual insurance
    const propertyValueIncrease = (propertyValue * propertyAppreciation / 100);
    const totalAnnualSavings = annualInsuranceSavings + (propertyValueIncrease / 10); // Property appreciation over 10 years
    
    // Calculate ROI percentage
    const roiPercentage = ((totalAnnualSavings / iotInvestment) * 100).toFixed(1);
    
    // Calculate payback period
    const paybackPeriod = (iotInvestment / totalAnnualSavings).toFixed(1);
    
    // Update results
    document.getElementById('roi-percentage').textContent = roiPercentage + '%';
    document.getElementById('savings-amount').textContent = 'R$ ' + totalAnnualSavings.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: 0});
    document.getElementById('payback-period').textContent = paybackPeriod + ' anos';
}

// Animate numbers on scroll
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
        const suffix = stat.textContent.replace(/[\d]/g, '');
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current).toLocaleString() + suffix;
        }, 30);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Trigger number animation for stats section
            if (entry.target.classList.contains('stats')) {
                animateNumbers();
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.overview-card, .feature-item, .benefit-card, .risk-card, .trend-card, .innovation-card, .stats');
    animateElements.forEach(el => observer.observe(el));
});

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.content-card, .benefit-card, .risk-card, .trend-card, .innovation-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Simple fade in animation
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.classList.add('fade-in');
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Simple device interactions
document.addEventListener('DOMContentLoaded', () => {
    const devices = document.querySelectorAll('.device');
    
    devices.forEach(device => {
        device.classList.add('fade-in');
    });
});

// Simple button interactions
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.classList.add('fade-in');
    });
});

// Simple card animations
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.benefit-card, .overview-card, .content-card');
    
    cards.forEach(card => {
        card.classList.add('fade-in');
    });
});

// Simple CSS animations
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeIn 0.6s ease-out;
    }
    
    .slide-up {
        animation: slideUp 0.8s ease-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideUp {
        from { 
            opacity: 0;
            transform: translateY(20px);
        }
        to { 
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
