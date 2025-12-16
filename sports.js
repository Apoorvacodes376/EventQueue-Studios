document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");

    searchBtn.addEventListener("click", () => {
        const text = searchInput.value.trim();

        if (text === "") {
            alert("Please enter a search keyword!");
        } else {
            alert("Searching for sports events related to: " + text);
        }
    });
});
