// Patterson Global - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize the application
    initializeApp();
    
    // Navigation interactions
    setupNavigation();
    
    // Add interactive elements
    setupInteractiveElements();
    
    // Add blueprint animations
    setupBlueprintAnimations();
});

function initializeApp() {
    console.log('Patterson Global - Global Manufacturing Solutions');
    console.log('Website initialized successfully');
    
    // Add loading animation complete class
    document.body.classList.add('loaded');
}

function setupNavigation() {
    // Sidebar navigation
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Smooth scroll to section if exists
            const sectionName = this.textContent.trim().toLowerCase();
            scrollToSection(sectionName);
        });
    });
    
    // Top navigation dropdowns
    const topNavItems = document.querySelectorAll('.nav-item');
    topNavItems.forEach(item => {
        if (item.querySelector('i')) {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                // Add dropdown functionality here if needed
                console.log('Dropdown clicked:', this.textContent);
            });
        }
    });
}

function setupInteractiveElements() {
    // Service cards hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(102, 179, 255, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Connection points interaction
    const connectionPoints = document.querySelectorAll('.point');
    
    connectionPoints.forEach((point, index) => {
        point.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.5)';
            this.style.boxShadow = '0 0 20px rgba(102, 179, 255, 0.8)';
            
            // Show tooltip with country info
            showLocationTooltip(this, index);
        });
        
        point.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 0 10px rgba(102, 179, 255, 0.5)';
            
            // Hide tooltip
            hideLocationTooltip();
        });
    });
}

function setupBlueprintAnimations() {
    // Add subtle animations to blueprint elements
    const pgLogo = document.querySelector('.pg-logo');
    if (pgLogo) {
        pgLogo.addEventListener('mouseenter', function() {
            this.style.borderColor = '#66b3ff';
            this.style.color = '#66b3ff';
        });
        
        pgLogo.addEventListener('mouseleave', function() {
            this.style.borderColor = '#ffffff';
            this.style.color = '#ffffff';
        });
    }
    
    // Animate hero PG letters on load
    const heroLetters = document.querySelector('.pg-letters');
    if (heroLetters) {
        setTimeout(() => {
            heroLetters.style.opacity = '1';
            heroLetters.style.transform = 'scale(1)';
        }, 500);
        
        // Initial state
        heroLetters.style.opacity = '0';
        heroLetters.style.transform = 'scale(0.9)';
        heroLetters.style.transition = 'all 1s ease-out';
    }
    
    // Stagger animation for service cards
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 800 + (index * 200));
    });
}

function scrollToSection(sectionName) {
    let targetElement = null;
    
    switch(sectionName) {
        case 'home':
            targetElement = document.querySelector('.hero-section');
            break;
        case 'services':
            targetElement = document.querySelector('.services-section');
            break;
        case 'global reach':
            targetElement = document.querySelector('.global-reach-section');
            break;
        case 'about':
        case 'contact':
            // These would scroll to their respective sections when implemented
            console.log(`Scrolling to ${sectionName} section`);
            break;
    }
    
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function showLocationTooltip(element, index) {
    const locations = [
        'North America',
        'Europe',
        'Asia Pacific',
        'South America',
        'Africa',
        'Middle East'
    ];
    
    // Create tooltip if it doesn't exist
    let tooltip = document.getElementById('location-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'location-tooltip';
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0, 20, 40, 0.95);
            color: white;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            border: 1px solid rgba(255, 255, 255, 0.2);
            z-index: 1000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(tooltip);
    }
    
    tooltip.textContent = locations[index] || 'Global Region';
    tooltip.style.opacity = '1';
    
    // Position tooltip
    const rect = element.getBoundingClientRect();
    tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
}

function hideLocationTooltip() {
    const tooltip = document.getElementById('location-tooltip');
    if (tooltip) {
        tooltip.style.opacity = '0';
    }
}

// Utility functions for future enhancements
function addBlueprintLine(startX, startY, endX, endY) {
    // Function to dynamically add blueprint-style lines
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', startX);
    line.setAttribute('y1', startY);
    line.setAttribute('x2', endX);
    line.setAttribute('y2', endY);
    line.setAttribute('stroke', 'rgba(255, 255, 255, 0.3)');
    line.setAttribute('stroke-width', '1');
    return line;
}

function createBlueprintMarker(x, y) {
    // Function to create blueprint-style markers
    const marker = document.createElement('div');
    marker.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 8px;
        height: 8px;
        border: 2px solid rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        transform: translate(-50%, -50%);
    `;
    return marker;
}

// Console welcome message
console.log(`
██████╗  █████╗ ████████╗████████╗███████╗██████╗ ███████╗ ██████╗ ███╗   ███╗
██╔══██╗██╔══██╗╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗██╔════╝██╔═══██╗████╗ ████║
██████╔╝███████║   ██║      ██║   █████╗  ██████╔╝███████╗██║   ██║██╔████╔██║
██╔═══╝ ██╔══██║   ██║      ██║   ██╔══╝  ██╔══██╗╚════██║██║   ██║██║╚██╔╝██║
██║     ██║  ██║   ██║      ██║   ███████╗██║  ██║███████║╚██████╔╝██║ ╚═╝ ██║
╚═╝     ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚══════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝
                                                                                  
Global Manufacturing Solutions - Website Loaded Successfully
`);