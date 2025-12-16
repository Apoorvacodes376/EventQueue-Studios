document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");

    searchBtn.addEventListener("click", () => {
        const text = searchInput.value.trim();

        if (text === "") {
            alert("Please enter a search keyword for sector, city, or date!");
        } else {
            // In a real application, you would implement search filtering here.
            // For this example, we'll just show an alert.
            alert("Searching for exhibitions related to: " + text);
        }
    });
});