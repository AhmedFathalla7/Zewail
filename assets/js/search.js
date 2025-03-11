document.addEventListener("DOMContentLoaded", function() {
    const searchToggle = document.getElementById("search-toggle");
    const searchBox = document.getElementById("search-box");

    searchToggle.addEventListener("click", function() {
        searchBox.classList.toggle("active");
    });

    document.addEventListener("click", function(event) {
        if (!searchBox.contains(event.target) && !searchToggle.contains(event.target)) {
            searchBox.classList.remove("active");
        }
    });
});