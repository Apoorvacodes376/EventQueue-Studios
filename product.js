document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");

    searchBtn.addEventListener("click", () => {
        let value = searchInput.value.trim();

        if (value === "") {
            alert("Please enter a product name to search!");
        } else {
            alert("Searching product launches for: " + value);
        }
    });
});
