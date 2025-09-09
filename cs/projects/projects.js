// Projects Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Get all technology cards
    const techCards = document.querySelectorAll('.tech-card');
    
    // Add click event listeners to technology cards
    techCards.forEach(card => {
        card.addEventListener('click', function() {
            const tech = this.getAttribute('data-tech');
            showProjects(tech);
            
            // Update active state
            techCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Function to show projects for selected technology
    function showProjects(tech) {
        // Hide all project sections
        const allSections = document.querySelectorAll('.projects-section');
        allSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show selected technology's projects
        const selectedSection = document.getElementById(tech + '-projects');
        if (selectedSection) {
            selectedSection.style.display = 'block';
            
            // Smooth scroll to projects section
            selectedSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click event to show project details (placeholder for future enhancement)
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // This can be enhanced to show detailed project information
            // For now, just add a subtle effect
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // Initialize with Java projects visible (default)
    showProjects('java');
    document.querySelector('[data-tech="java"]').classList.add('active');
});

// Add smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for project cards
function addLoadingAnimation() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Call loading animation when projects section becomes visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            addLoadingAnimation();
            observer.unobserve(entry.target);
        }
    });
});

// Observe all project sections
document.querySelectorAll('.projects-section').forEach(section => {
    observer.observe(section);
});

