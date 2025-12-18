document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("searchBtn");
    const input = document.getElementById("searchInput");

    btn.addEventListener("click", () => {
        let q = input.value.trim();

        if (q === "") {
            alert("Please enter an event or keyword to search!");
        } else {
            // In a real application, this would trigger content filtering.
            alert("Searching art and cultural events for: " + q);
        }
    });

});