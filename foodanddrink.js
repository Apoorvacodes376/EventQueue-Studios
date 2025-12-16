document.addEventListener("DOMContentLoaded", () => {

    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");

    searchBtn.addEventListener("click", () => {
        let q = searchInput.value.trim();

        if (q === "") {
            alert("Please enter a festival name to search!");
        } else {
            alert("Searching food festivals for: " + q);
        }
    });

});
