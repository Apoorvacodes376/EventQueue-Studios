document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("searchBtn");
    const input = document.getElementById("searchInput");

    btn.addEventListener("click", () => {
        let q = input.value.trim();
        if (q === "") {
            alert("Please enter a music event to search!");
        } else {
            alert("Searching events for: " + q);
        }
    });

});
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");

    searchBtn.addEventListener("click", () => {
        const text = searchInput.value.trim();

        if (text === "") {
            alert("Please enter a search keyword for artists, genres, or venues!");
        } else {
            // In a real application, you would implement search filtering here.
            // For this example, we'll just show an alert.
            alert("Searching for music events related to: " + text);
        }
    });
});
