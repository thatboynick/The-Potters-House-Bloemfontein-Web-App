function toggleDrawer() {
    const drawer = document.querySelector('.sidebar-drawer, .events-sidebar-drawer, .ministries-sidebar-drawer, .giving-sidebar-drawer');
    const menuIcon = document.querySelector('.menu-icon');

    if (drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        menuIcon.textContent = '☰'; // Change back to the menu icon
    } else {
        drawer.classList.add('open');
        menuIcon.textContent = 'X'; // Change to the close icon
    }
}
