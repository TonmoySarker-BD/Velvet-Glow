window.onload = function () {
    var toggleBtn = document.getElementById("menu-toggle");
    var dropdownMenu = document.getElementById("dropdown-menu");

    // Make sure both elements exist
    if (toggleBtn && dropdownMenu) {
        toggleBtn.addEventListener("click", function () {
            dropdownMenu.classList.toggle("show");
        });

        // Close dropdown when a menu item is clicked
        var menuLinks = dropdownMenu.querySelectorAll("a");
        menuLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                dropdownMenu.classList.remove("show");
            });
        });
    }
};
