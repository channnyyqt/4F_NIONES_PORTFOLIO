// This script will ensure that when you click on the logo, the link is opened
const logoLinks = document.querySelectorAll('.edu-image a');

logoLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Optionally, you can log when a link is clicked
        console.log(`Opening link: ${link.href}`);
    });
});
