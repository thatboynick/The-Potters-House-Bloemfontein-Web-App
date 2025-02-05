function toggleDrawer() {
    const drawer = document.querySelector('.sidebar-drawer, .events-sidebar-drawer, .ministries-sidebar-drawer, .giving-sidebar-drawer');
    const menuIcon = document.querySelector('.menu-icon i');

    if (drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        menuIcon.classList.remove('fa-times'); // Close icon
        menuIcon.classList.add('fa-bars'); // Menu icon
    } else {
        drawer.classList.add('open');
        menuIcon.classList.remove('fa-bars'); // Menu icon
        menuIcon.classList.add('fa-times'); // Close icon
    }
}
