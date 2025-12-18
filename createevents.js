document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('createEventForm');

    eventForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Simple button loading effect
        const btn = document.querySelector('.submit-btn');
        const originalText = btn.innerText;
        btn.innerText = "Publishing...";
        btn.style.opacity = "0.7";

        // Capture data
        const eventData = {
            title: document.getElementById('eventTitle').value,
            category: document.getElementById('eventCategory').value,
            location: document.getElementById('eventLocation').value,
            startDate: document.getElementById('startDate').value,
            startTime: document.getElementById('startTime').value,
            description: document.getElementById('eventDescription').value
        };

        // Simulate API delay
        setTimeout(() => {
            console.log("EventQueue | New Event:", eventData);
            alert(`Success! "${eventData.title}" is now live on EventQueue.`);
            
            // Reset form and button
            eventForm.reset();
            btn.innerText = originalText;
            btn.style.opacity = "1";
        }, 1000);
    });
});