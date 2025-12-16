document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");

    searchBtn.addEventListener("click", () => {
        const text = searchInput.value.trim();

        if (text === "") {
            alert("Please enter a search keyword for summits, conferences, or city!");
        } else {
            // In a real application, you would implement search filtering here.
            alert("Searching for business events related to: " + text);
        }
    });
});