document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("searchBtn");
    const input = document.getElementById("searchInput");

    btn.addEventListener("click", () => {
        const query = input.value.trim();

        if (query === "") {
            alert("Please enter a dance workshop to search!");
        } else {
            alert("Searching dance workshops for: " + query);
        }
    });

});
