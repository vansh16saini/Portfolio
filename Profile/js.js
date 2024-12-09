let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
        })
    }
}) 
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
}
const phrases = ["Frontend Designer", "Web Developer", "Coming Soon", "To be Found"];
let currentPhrase = 0;
let currentLetter = 0;
let isDeleting = false;

const textElement = document.getElementById("animated-text");
const typingSpeed = 150; // Typing speed in milliseconds
const deletingSpeed = 95; // Deleting speed in milliseconds
const pauseBetweenWords = 1500; // Pause before typing the next phrase

function type() {
    const currentText = phrases[currentPhrase];
    
    if (isDeleting) {
        // Remove characters
        textElement.textContent = currentText.substring(0, currentLetter--);
    } else {
        // Add characters
        textElement.textContent = currentText.substring(0, currentLetter++);
    }

    // Adjust speeds and handle transitions
    if (!isDeleting && currentLetter === currentText.length) {
        // Pause at the end of the word
        isDeleting = true;
        setTimeout(type, pauseBetweenWords);
    } else if (isDeleting && currentLetter === 0) {
        // Move to the next word
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        // Continue typing or deleting
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
}
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
buttons.forEach(button =>{
    button.addEventListener('click', (e) => {
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
    })
})

// Start the typing effect
type();
