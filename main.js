let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

// Toggle for mobile menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll event listener for header and active links
window.addEventListener('scroll', () => {
    // Header stickiness on scroll
    header.classList.toggle('sticky', window.scrollY > 0);

    // Section highlighting for navigation links
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
            });
        });


        if(top >= offset && top < offset + height){
            // Remove active class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add active class to the current section's link
            document.querySelector('header nav a[href*="#' + id + '"]').classList.add('active');
        }
    });

    // To remove the mobile menu when a link is clicked
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// Typing animation
const phrases = ["Frontend Designer", "Web Developer", "Coming Soon", "To be Found"];
let currentPhrase = 0;
let currentLetter = 0;
let isDeleting = false;

const textElement = document.getElementById("animated-text");
const typingSpeed = 150;
const deletingSpeed = 95;
const pauseBetweenWords = 1500;

function type() {
    const currentText = phrases[currentPhrase];
    
    if (isDeleting) {
        textElement.textContent = currentText.substring(0, currentLetter--);
    } else {
        textElement.textContent = currentText.substring(0, currentLetter++);
    }

    if (!isDeleting && currentLetter === currentText.length) {
        isDeleting = true;
        setTimeout(type, pauseBetweenWords);
    } else if (isDeleting && currentLetter === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
}

// Start the typing effect
type();
// Animate elements on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            // Optional: remove the class when not visible
            entry.target.classList.remove('is-visible');
        }
    });
}, { threshold: 0.25 }); // The animation will trigger when 10% of the element is visible

const elements = document.querySelectorAll('.animate-on-scroll');
elements.forEach(element => {
    observer.observe(element);
});