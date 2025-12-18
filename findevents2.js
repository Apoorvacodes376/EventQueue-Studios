// ALL EVENTS FROM YOUR CATEGORY PAGES
const events = [
    // ----- ART & CULTURE -----
    { name: "Jaipur Literature Festival", date: "2026-01-22", category: "Art", img: "https://image2url.com/images/1765915945300-dade8c7e-3a0a-4deb-bd09-1a6b7cda9958.webp", location: "Jaipur" },
    { name: "Kochi-Muziris Biennale", date: "2026-03-15", category: "Art", img: "https://image2url.com/images/1765915988337-dd533b90-7f4d-498a-872b-9554610f866d.webp", location: "Kochi" },
    { name: "Khajuraho Dance Festival", date: "2026-02-20", category: "Art", img: "https://image2url.com/images/1765916035303-02aca200-cbba-40a6-a40d-16acb7e9452e.webp", location: "MP" },
    { name: "Dharamshala International Film Festival (DIFF)", date: "2026-04-03", category: "Art", img: "https://image2url.com/images/1765916087192-bb827277-c790-4d5f-b322-c72168542299.webp", location: "MP" },
    { name: "Surajkund International Crafts Mela<", date: "2026-02-01", category: "Art", img: "https://image2url.com/images/1765916122765-44508ad4-8de3-4cf5-886c-a7186b83d414.webp", location: "MP" },
    { name: "Bharat Rang Mahotsav (BRM)", date: "2026-07-10", category: "Art", img: "https://image2url.com/images/1765916202285-a9bd0f17-7a09-45c8-98a7-1332c44aa4a4.webp", location: "MP" },

    // ----- BUSINESS -----
    { name: "Global Digital Transformation Summit", date: "2026-03-15", category: "Business", img: "https://image2url.com/images/1765913742055-3702a81d-e9d6-4b16-bf0c-78f7a5e5e397.webp", location: "Mumbai" },
    { name: "Startup PitchFest", date: "2026-04-22", category: "Business", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952", location: "Hyderabad" },
    { name: "Venture India Startup PitchFest", date: "2026-04-22", category: "Business", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", location: "Hyderabad" },
    { name: "Future of Cyber Security Conference", date: "2026-06-10", category: "Business", img: "https://image2url.com/images/1765913839016-d345da4b-709f-4e5b-be7d-e674e1ce669b.webp", location: "Hyderabad" },
    { name: "India CFO Leadership Forum 2026", date: "2026-07-18", category: "Business", img: "https://image2url.com/images/1765913928934-78e41fc4-10a3-475f-997b-8e54cb437375.webp", location: "Hyderabad" },
    { name: "National HR Strategy Symposium", date: "2026-04-22", category: "Business", img: "https://image2url.com/images/1765914116955-66229aa1-2d15-4504-b36d-494e69939085.webp", location: "Hyderabad" },

    // ----- DANCE -----
   { name: "Bollywood Dance Workshop", date: "2026-03-12", category: "Dance", img: "http://choreonconcept.com/wp-content/uploads/2021/04/Copy-of-Welcome-2_268943f20.jpg", location: "Chennai" },
    { name: "Hip Hop Masterclass", date: "2026-03-18", category: "Dance", img: "https://img-c.udemycdn.com/course/750x422/4158454_1e05_2.jpg", location: "Bengaluru" },
    { name: "Contemporary Dance Workshop", date: "2026-03-25", category: "Dance", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5fynTJB69gRgf2oh7v3_kWQbOSWtvQ1PRA&s", location: "Hyderabad" },
    { name: "Bharatanatyam Classical Workshop", date: "2026-04-02", category: "Dance", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/8e/43/f5/caption.jpg?w=500&h=400&s=1", location: "Chennai" },
    { name: "Salsa Couple Dance Workshop", date: "2026-04-10", category: "Dance", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUUeg-0CX0qg4o5ZlnC5CiJ-haSTz5DC0dQ&s", location: "Bengaluru" },
    { name: "K-Pop Dance Cover Workshop", date: "2026-04-20", category: "Dance", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWX-fqG1lH-8F59biofxIRyhR5k4wYLlp1TA&s", location: "Chennai" },
    { name: "Alexander Noel – Pro Choreography Workshop", date: "2026-04-28", category: "Dance", img: "https://images.squarespace-cdn.com/content/v1/65aa66922c635a68c6958d05/0e0f6b5f-b0bb-43e5-997f-e33835563d44/WhatsApp+Image+2025-08-07+at+16.34.10.jpeg", location: "Chennai" },
    { name: "Urban Jazz Intensive Workshop", date: "2026-05-05", category: "Dance", img: "https://www.city-academy.com/staticresources/uploads/1717752526.png", location: "Delhi" },
   
    // ----- EXHIBITIONS -----
    { name: "Tech Expo 2026", date: "2026-02-18", category: "Exhibition", img: "https://image2url.com/images/1765905256965-2e6b9b03-39d5-4229-b6ab-385ba596576f.webp", location: "Delhi" },
    { name: "Kala Sangam Modern Art Show", date: "2026-06-03", category: "Exhibition", img: "https://image2url.com/images/1765905311658-f170b2ed-5cc8-4c8f-811d-513f970b3609.webp", location: "Delhi" },
    { name: "Chennai International Book Fair", date: "2026-02-18", category: "Exhibition", img: "https://image2url.com/images/1765905387457-7a5f2403-19cf-4faa-8b99-6c15bc277d13.webp", location: "Delhi" },
    { name: "India Tech Expo 2026<", date: "2026-02-18", category: "Exhibition", img: "https://image2url.com/images/1765905163293-8e0b6b46-6deb-4a50-b4b7-858469a1d918.jpg", location: "Delhi" },
    { name: "Automobile and EV India Expo", date: "2026-03-10", category: "Exhibition", img: "https://image2url.com/images/1765904965035-ddf65cb1-3035-4878-bceb-f7a039198192.webp", location: "Delhi" },
    { name: "Indian Textile & Apparel Fair", date: "2026-04-02", category: "Exhibition", img: "https://image2url.com/images/1765904873500-8f4c677d-dd41-486d-8532-43ca91aae916.jpg", location: "Delhi" },

    // ----- FOOD -----
{ name: "Gourmet Food Festival", date: "2026-04-15", category: "Food", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", location: "Chennai" },
    { name: "Craft Beer & Music Night", date: "2026-05-20", category: "Food", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", location: "Bengaluru" },
    { name: "Vegan Cooking Workshop", date: "2026-06-10", category: "Food", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", location: "Chennai" },
    { name: "Wine Tasting Soiree", date: "2026-07-05", category: "Food", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", location: "Bengaluru" },
    { name: "Street Food Carnival", date: "2026-08-14", category: "Food", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", location: "Hyderabad" },
    { name: "Coffee Brewing Masterclass", date: "2026-09-02", category: "Food", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", location: "Delhi" },
    { name: "Chocolate Making Workshop", date: "2026-10-18", category: "Food", img: "https://images.unsplash.com/photo-1548907040-4baa42d10919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", location: "Chennai" },
       
    // ----- FUNDRAISING -----
    { 
    name: "Cancer Charity Marathon", 
    date: "2026-03-10", 
    category: "Fundraising", 
    img: "https://img.freepik.com/free-photo/group-people-cancer-awareness-marathon_23-2148604521.jpg", 
    location: "Chennai" 
  },
  { 
    name: "Animal Shelter Support Drive", 
    date: "2026-03-18", 
    category: "Fundraising", 
    img: "https://img.freepik.com/free-photo/volunteers-helping-dogs-shelter_23-2148609565.jpg", 
    location: "Bengaluru" 
  },
  { 
    name: "Orphanage Cultural Festival", 
    date: "2026-03-24", 
    category: "Fundraising", 
    img: "https://img.freepik.com/free-photo/happy-children-celebrating-school-event_23-2148291243.jpg", 
    location: "Chennai" 
  },
  { 
    name: "Flood Relief Donation Drive", 
    date: "2026-03-30", 
    category: "Fundraising", 
    img: "https://img.freepik.com/free-photo/volunteers-helping-collect-donations_23-2148907939.jpg", 
    location: "Coimbatore" 
  },
  { 
    name: "Women Empowerment 5K Run", 
    date: "2026-04-08", 
    category: "Fundraising", 
    img: "https://img.freepik.com/free-photo/women-running-charity-race_23-2148831487.jpg", 
    location: "Hyderabad" 
  },
  { 
    name: "Musical Night for Senior Citizens", 
    date: "2026-04-15", 
    category: "Fundraising", 
    img: "https://img.freepik.com/free-photo/elderly-people-enjoying-music-event_23-2148377289.jpg", 
    location: "Chennai" 
  },
  { 
    name: "Food Donation Festival", 
    date: "2026-04-22", 
    category: "Fundraising", 
    img: "https://img.freepik.com/free-photo/volunteers-serving-food-homeless_23-2148578290.jpg", 
    location: "Chennai" 
  },
  { 
    name: "Education Awareness Charity Concert", 
    date: "2026-05-01", 
    category: "Fundraising", 
    img: "https://img.freepik.com/free-photo/live-concert-stage_23-2148095282.jpg", 
    location: "Delhi" 
  },
    // ----- PRODUCT LAUNCH -----
    { name: "NovaX Pro Smartphone Launch", date: "2026-03-10", category: "Product", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4djMaXVEFGffpNOu4Q_jCwPwPf0oF0J7fbw&s", location: "Bangalore" },
    { name: "Luxora Electric Car Global Launch", date: "2026-03-25", category: "Product", img: "https://www.rushlane.com/wp-content/uploads/2024/11/mahindra-be-6e-official-photos-18.jpg", location: "Chennai" },
    { name: "FutureTech Gadget Expo 2025", date: "2026-04-02", category: "Product", img: "https://audaces.com/wp-content/uploads/2025/04/what-is-wearable-tech.webp", location: "Hyderabad" },
    { name: "SmartLiving Home Automation Launch", date: "2026-04-18", category: "Product", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8RfBc3B1KYKqGzeALckC8vPIUO_JXZRCow&s", location: "Chennai" },
    { name: "EliteWear Fashion Product Reveal", date: "2026-04-30", category: "Product", img: "https://elitewearfashion.in/wp-content/uploads/2025/03/Checked-Casual-Shirt-300x300.jpg", location: "Mumbai" },
    { name: "AI Robotics Innovation Showcase", date: "2026-05-15", category: "Product", img: "http://thumbs.dreamstime.com/b/humanoid-robot-interacts-glowing-digital-interface-high-tech-environment-symbolizing-advanced-ai-machine-learning-331219717.jpg", location: "Bangalore" },
    { name: "HyperVision X – VR Gaming Console Launch", date: "2026-06-05", category: "Product", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb6lvocauj-OSfkb8TrfF1Gtn_MQggdzJ-Ww&s", location: "Bangalore" },
    { name: "VoltRide X1 – Electric Bike Official Launch", date: "2026-06-21", category: "Product", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mtFBLBO-kmdsoh0-fSkHsiTNy5eKHsztpw&s", location: "Chennai" },
    // ----- SPORTS -----
    { name: "International Football Championship", date: "2026-03-12", category: "Sports", img: "https://www.playspots.in/wp-content/uploads/2021/03/yS0YQ5MYLH.jpg", location: "Chennai" },
    { name: "India vs Australia – ODI Series", date: "2026-04-28", category: "Sports", img: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/primary/ugvcvyuorglkafijaz4x", location: "Chennai" },
    { name: "NBA Pre-Season Games", date: "2026-07-10", category: "Sports", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUk6aCZC9MQZNLk6XzB-iIlOuQ-mSPUKhXQ&s", location: "Chennai" },
    { name: "Pro Kabaddi League – Season 2026", date: "2026-06-15", category: "Sports", img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/07/bengal-1564369201.jpg", location: "Hyderabad" },
    { name: "All India National Badminton Championship", date: "2026-07-05", category: "Sports", img: "https://media.dtnext.in/h-upload/2023/10/03/750x450_769307-nation.webp", location: "Delhi" },
    { name: "Asian Open Tennis Tournament", date: "2026-08-22", category: "Sports", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMvnjyzPBniqB3UmYGFS05XBZwIL33fJsJg&s", location: "Bengaluru" },
    { name: "IPL 2025 – Chennai Super Kings Vs rajasthan royals", date: "2026-05-11", category: "Sports", img: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960,q_50/lsci/db/PICTURES/CMS/400800/400859.jpg", location: "Chennai" },
    { name: "Chennai Open – International Table Tennis Tournament", date: "2026-02-03", category: "Sports", img: "https://tennews.in/wp-content/uploads/2022/01/manika-batra-1.jpg", location: "Chennai" },
    { name: "City Marathon 2025", date: "2026-01-20", category: "Sports", img: "https://www.shutterstock.com/image-photo/mumbai-maharashtra-india-people-participates-260nw-2573522019.jpg", location: "Bengaluru" },
    { name: "Happy Streets – Cycling Event", date: "2026-02-03", category: "Sports", img: "https://www.tclracing.com/wp-content/uploads/2023/07/slide1.jpg", location: "Chennai" },
    { name: "Street Sports Carnival", date: "2026-02-25", category: "Sports", img: "https://assets.telegraphindia.com/telegraph/2022/Nov/1669143855_new-project-2022-11-23t001159-927.jpg", location: "Chennai" },
];

function loadEvents(list) {
    let container = document.getElementById("eventsContainer");
    container.innerHTML = "";

    list.forEach(ev => {
        container.innerHTML += `
            <div class="event-card">
                <img src="${ev.img}">
                <h3>${ev.name}</h3>
                <p><strong>Date:</strong> ${ev.date}</p>
                <p><strong>Location:</strong> ${ev.location}</p>
                <p><strong>Category:</strong> ${ev.category}</p>
                <a href="#" class="book-btn">Book Now</a>
            </div>
        `;
    });
}

loadEvents(events);

// ---------------- FILTER LOGIC ----------------
document.getElementById("applyFilters").addEventListener("click", () => {

    let selectedDate = document.querySelector("input[name='date-filter']:checked").value;
    let selectedCategories = [...document.querySelectorAll(".cat:checked")].map(c => c.value);
    
    let today = new Date();

    let filtered = events.filter(ev => {
        let evDate = new Date(ev.date);

        // CATEGORY FILTER
        if (selectedCategories.length > 0 && !selectedCategories.includes(ev.category))
            return false;

        // DATE FILTER
        if (selectedDate === "today") {
            return evDate.toDateString() === today.toDateString();
        }

        if (selectedDate === "weekend") {
            return evDate.getDay() === 6 || evDate.getDay() === 0;
        }

        if (selectedDate === "nextweek") {
            let start = new Date();
            start.setDate(today.getDate() + 7);

            let end = new Date();
            end.setDate(today.getDate() + 14);

            return evDate >= start && evDate <= end;
        }

        return true;
    });

    loadEvents(filtered);
});
document.getElementById("applyFilters").addEventListener("click", () => {

    let selectedDate = document.querySelector("input[name='date-filter']:checked").value;
    let selectedCategories = [...document.querySelectorAll(".cat:checked")].map(c => c.value);

    let selectedMonth = document.getElementById("monthFilter").value; 
    // "03" for March, "all" for no filter

    let today = new Date();

    let filtered = events.filter(ev => {
        let evDate = new Date(ev.date);
        let evMonth = ev.date.split("-")[1]; // "03"

        // CATEGORY FILTER
        if (selectedCategories.length > 0 && !selectedCategories.includes(ev.category))
            return false;

        // MONTH FILTER
        if (selectedMonth !== "all" && evMonth !== selectedMonth)
            return false;

        // DATE FILTER
        if (selectedDate === "today") {
            return evDate.toDateString() === today.toDateString();
        }

        if (selectedDate === "weekend") {
            return evDate.getDay() === 6 || evDate.getDay() === 0;
        }

        if (selectedDate === "nextweek") {
            let start = new Date();
            start.setDate(today.getDate() + 7);

            let end = new Date();
            end.setDate(today.getDate() + 14);

            return evDate >= start && evDate <= end;
        }

        return true;
    });

    loadEvents(filtered);
});