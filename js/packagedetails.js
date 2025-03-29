const packageSets = {
    trekking: {
      title: "Adventure Expeditions",
      containerId: "adventure-package-list",
      packages: [
        // Trekking packages
      ]
    },
    adventure: {
      title: "Cultural Immersion",
      containerId: "cultural-package-list",
      packages: [
        // Adventure packages
      ]
    },
    cultural: {
      title: "Exclusive Goa Cultural Heritage Packages: Journey Through Time",
      containerId: "cultural-package-list",
      packages: [
        // Cultural packages
      ]
    },
    wildlife: {
      title: "Exclusive Goa Wildlife & Nature Packages: Biodiversity Discovery Journeys",
      containerId: "wildlife-package-list",
      packages: [
        // Wellness packages
      ]
    }
  };

const packageDetails = {
    "Adventure Expeditions": {
        title: "Adventure Expeditions",
        descriptions: [
            {
                title: "Ladakh Adrenaline Explorer",
                content: `
                    <div class="package-content">
                        <!-- Photo Grid -->
                        <div class="photo-grid">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/adventure/zanskar.jpg" class="img-fluid" alt="Zanskar River">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/adventure/stok.jpg" class="img-fluid" alt="Stok Kangri">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/adventure/khardungla.jpg" class="img-fluid" alt="Khardung La">
                                </div>
                            </div>
                        </div>

                        <!-- Toggle Buttons -->
                        <div class="toggle-buttons text-center mb-4">
                            <button class="btn active" data-index="0">Ladakh Adrenaline Explorer</button>
                            <button class="btn" data-index="1">High Passes Motorcycle Odyssey</button>
                        </div>

                        <h3><strong>Ladakh Adrenaline Explorer (7 Days)</strong></h3>
                        <p>For the thrill-seekers and adventure enthusiasts</p>
                        
                        <h5>Highlights:</h5>
                        <ul>
                            <li>White water rafting on the Zanskar River</li>
                            <li>Mountain biking in the Indus Valley</li>
                            <li>Trek to the base of Stok Kangri</li>
                            <li>Camping under the stars in remote locations</li>
                            <li>Khardung La pass motorcycle journey</li>
                        </ul>

                        <h5>Includes:</h5>
                        <ul>
                            <li>Accommodation in guesthouses and camps</li>
                            <li>Specialized equipment for rafting and biking</li>
                            <li>Professional guides for all activities</li>
                            <li>Safety briefings and training</li>
                            <li>All necessary permits and fees</li>
                            <li>Most meals during the expedition</li>
                            <li>Airport transfers</li>
                        </ul>

                        <h5>Price Range:</h5>
                        <p>₹65,000 - ₹75,000 per person</p>
                    </div>
                `
            },
            {
                title: "High Passes Motorcycle Odyssey",
                content: `

                    <!-- Photo Grid -->
                        <div class="photo-grid mb-4">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/adventure/camp.jpg" class="img-fluid w-100" alt="Zanskar River">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/adventure/royal.jpeg" class="img-fluid w-100" alt="Stok Kangri">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/adventure/wari la.jpg" class="img-fluid w-100" alt="Khardung La">
                                </div>
                            </div>
                        </div>
                    <div class="package-content">
                        <div class="toggle-buttons text-center mb-4">
                            <button class="btn" data-index="0">Ladakh Adrenaline Explorer</button>
                            <button class="btn active" data-index="1">High Passes Motorcycle Odyssey</button>
                        </div>

                        <h3><strong>High Passes Motorcycle Odyssey (9 Days)</strong></h3>
                        <p>The ultimate Himalayan road trip</p>

                        <h5>Highlights:</h5>
                        <ul>
                            <li>Royal Enfield motorcycle tour across Ladakh's most spectacular passes</li>
                            <li>Ride through Khardung La, Chang La, Wari La, and Tanglang La</li>
                            <li>Visit remote villages inaccessible by regular tourism</li>
                            <li>Camp at Pangong Lake and Tso Moriri</li>
                            <li>Expert motorcycle guides and support vehicles</li>
                        </ul>

                        <h5>Includes:</h5>
                        <ul>
                            <li>Royal Enfield motorcycle rental</li>
                            <li>Fuel throughout the journey</li>
                            <li>Accommodation (hotels and camps)</li>
                            <li>Backup vehicle with mechanic</li>
                            <li>Most meals during the journey</li>
                            <li>Riding gear if needed</li>
                            <li>All necessary permits</li>
                        </ul>

                        <h5>Price Range:</h5>
                        <p>₹85,000 - ₹95,000 per person</p>
                    </div>
                `
            }
        ],
        currentIndex: 0
    },
    "Cultural Immersion": {
        title: "Cultural Immersion",
        descriptions: [
            {
                title: "Ladakhi Heritage Journey",
                content: `
                    <div class="package-content">
                        <!-- Photo Grid -->
                        <div class="photo-grid mb-4">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/adventure/monastery.jpg" class="img-fluid main-photo w-100" alt="Thiksey Monastery">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/adventure/cooking.jpg" class="img-fluid w-100" alt="Village Life">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/adventure/ancient.jpg" class="img-fluid w-100" alt="Traditional Cooking">
                                </div>
                            </div>
                        </div>

                        <!-- Toggle Buttons -->
                        <div class="toggle-buttons text-center mb-4">
                            <button class="btn active" data-index="0">Ladakhi Heritage Journey</button>
                            <button class="btn" data-index="1">Monastic Circuit</button>
                        </div>

                        <h3><strong>Ladakhi Heritage Journey (6 Days)</strong></h3>
                        <p>Discover the living traditions of Little Tibet</p>
                        
                        <h5>Highlights:</h5>
                        <ul>
                            <li>Monastery visits with Buddhist scholars</li>
                            <li>Traditional cooking classes in village homes</li>
                            <li>Participation in local festivals (seasonal)</li>
                            <li>Ancient art and architecture exploration</li>
                            <li>Homestay experiences with Ladakhi families</li>
                        </ul>

                        <h5>Includes:</h5>
                        <ul>
                            <li>Accommodation in boutique hotels and authentic homestays</li>
                            <li>Cultural guides</li>
                            <li>All entrance fees</li>
                            <li>Most meals</li>
                            <li>Local cultural performances</li>
                            <li>Airport transfers</li>
                        </ul>

                        <h5>Price Range:</h5>
                        <p>₹45,000 - ₹55,000 per person</p>
                    </div>
                `
            },
            {
                title: "Monastic Circuit",
                content: `
                    <div class="package-content">
                        <!-- Photo Grid -->
                        <div class="photo-grid mb-4">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/adventure/thiksey.jpg" class="img-fluid main-photo w-100" alt="Hemis Monastery">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/adventure/manuscript.jpg" class="img-fluid w-100" alt="Morning Prayers">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/adventure/meditation.jpg" class="img-fluid w-100" alt="Meditation">
                                </div>
                            </div>
                        </div>

                        <!-- Toggle Buttons -->
                        <div class="toggle-buttons text-center mb-4">
                            <button class="btn" data-index="0">Ladakhi Heritage Journey</button>
                            <button class="btn active" data-index="1">Monastic Circuit</button>
                        </div>

                        <h3><strong>Monastic Circuit (5 Days)</strong></h3>
                        <p>A spiritual journey through ancient Buddhist monasteries</p>

                        <h5>Highlights:</h5>
                        <ul>
                            <li>Guided visits to Thiksey, Hemis, Diskit, Alchi, and Lamayuru monasteries</li>
                            <li>Morning prayer ceremony participation</li>
                            <li>Meditation sessions with resident monks</li>
                            <li>Ancient Buddhist art and manuscript viewing</li>
                            <li>Spiritual discussions and philosophy talks</li>
                        </ul>

                        <h5>Includes:</h5>
                        <ul>
                            <li>Monastery entrance fees</li>
                            <li>Donations</li>
                            <li>Accommodation</li>
                            <li>Vegetarian meals</li>
                            <li>Expert spiritual guide</li>
                            <li>Airport transfers</li>
                        </ul>

                        <h5>Price Range:</h5>
                        <p>₹40,000 - ₹48,000 per person</p>
                    </div>
                `
            }
        ],
        currentIndex: 0
    }
};

// Update the jQuery code for the new toggle buttons
$(document).ready(function() {
    $('.explore-more').on('click', function(e) {
        e.preventDefault();
        const packageType = $(this).data('package');
        const details = packageDetails[packageType];

        if (details && details.descriptions) {
            details.currentIndex = 0;
            const currentDescription = details.descriptions[details.currentIndex];
            
            $('#packageModalLabel').text(details.title);
            $('.modal-body').html(currentDescription.content);

            // Handle toggle button clicks
            $('.modal-body').on('click', '.toggle-buttons .btn', function() {
                const index = $(this).data('index');
                if (index !== details.currentIndex) {
                    $('.package-content').fadeOut(300, function() {
                        details.currentIndex = index;
                        const newDescription = details.descriptions[index];
                        $('.modal-body').html(newDescription.content);
                        $('.package-content').fadeIn(300);
                    });
                }
            });

            $('#packageModal').modal('show');
        }
    });
});