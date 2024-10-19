// script.js
document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const contactSection = document.getElementById('contact');
    
    // Toggle the display of the contact section
    if (contactSection.style.display === 'none' || contactSection.style.display === '') {
        contactSection.style.display = 'block';
    } else {
        contactSection.style.display = 'none';
    }

    // Optionally, hide other sections
    const sections = ['hero', 'features', 'testimonials'];
    sections.forEach(section => {
        document.getElementById(section).style.display = 'none';
    });
});
