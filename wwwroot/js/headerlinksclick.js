// Function to set the active class on the clicked link
function setActive(clickedLink) {
    // Select all links in the sidebar that need the active class
    const links = document.querySelectorAll('.website-header-links a, .footer-container a');

    // Remove the 'active' class from all links
    links.forEach(link => link.classList.remove('active'));

    // Add the 'active' class to the clicked link
    clickedLink.classList.add('active');
}

// Automatically set active class based on the current URL path
document.addEventListener('DOMContentLoaded', (event) => {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.website-header-links a, .footer-container a');

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }

        // Add click event listener to each link
        link.addEventListener('click', function () {
            setActive(this);
        });
    });
});