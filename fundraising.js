document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("searchBtn");
    const input = document.getElementById("searchInput");

    btn.addEventListener("click", () => {
        let q = input.value.trim();

        if (q === "") {
            alert("Please enter a fundraising event to search!");
        } else {
            alert("Searching fundraising events for: " + q);
        }
    });

});