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
      title: "Photography Specials",
      containerId: "photography",
      packages: [
        // Cultural packages
      ]
    },
    wildlife: {
      title: "Duration Packages",
      containerId: "duration-package-list",
      packages: [
        // Wellness packages
      ]
    },
    cultural: {
        title: "Seasonal Specials",
        containerId: "seasonal-package-list",
        packages: [
          // Cultural packages
        ]
      },
      cultural: {
        title: "Family Expeditions",
        containerId: "family-package-list",
        packages: [
          // Cultural packages
        ]
      },
      cultural: {
        title: "Customized Journeys",
        containerId: "customized-package-list",
        packages: [
          // Cultural packages
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
    },
    "Photography Specials": {
        title: "Photography Specials",
        descriptions: [
            {
                title: "Ladakh Through the Lens",
                content: `
                    <div class="package-content">
                        <!-- Photo Grid -->
                        <div class="photo-grid mb-4">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/photography/pangong.jpg" class="img-fluid w-100" alt="Pangong Lake Sunrise">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/photography/night-sky.jpeg" class="img-fluid w-100" alt="Night Sky">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/photography/landscape.jpeg" class="img-fluid w-100" alt="Mountain Landscape">
                                </div>
                            </div>
                        </div>

                        <!-- Toggle Buttons -->
                        <div class="toggle-buttons text-center mb-4">
                            <button class="btn active" data-index="0">Ladakh Through the Lens</button>
                            <button class="btn" data-index="1">Light & Shadow: Monastic Photography</button>
                        </div>

                        <h3><strong>Ladakh Through the Lens (8 Days)</strong></h3>
                        <p>Capture the extraordinary landscapes and cultures</p>
                        
                        <h5>Highlights:</h5>
                        <ul>
                            <li>Sunrise sessions at Pangong Lake</li>
                            <li>Night photography of Ladakh's star-filled skies</li>
                            <li>Portrait opportunities at local festivals and markets</li>
                            <li>Dramatic landscape shoots at high mountain passes</li>
                            <li>Post-processing workshops in the evenings</li>
                        </ul>

                        <h5>Includes:</h5>
                        <ul>
                            <li>Photography guide</li>
                            <li>All transportation to optimal shooting locations</li>
                            <li>Accommodation</li>
                            <li>Permits</li>
                            <li>Most meals</li>
                            <li>Airport transfers</li>
                        </ul>

                        <h5>Price Range:</h5>
                        <p>₹70,000 - ₹80,000 per person</p>
                    </div>
                `
            },
            {
                title: "Light & Shadow: Monastic Photography",
                content: `
                    <div class="package-content">
                        <!-- Photo Grid -->
                        <div class="photo-grid mb-4">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/photography/monsatery-interior.jpg" class="img-fluid w-100" alt="Monastery Interior">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/photography/monk-portrait.jpg" class="img-fluid w-100" alt="Monk Portrait">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/photography/golden-hour.jpg" class="img-fluid w-100" alt="Golden Hour Monastery">
                                </div>
                            </div>
                        </div>

                        <!-- Toggle Buttons -->
                        <div class="toggle-buttons text-center mb-4">
                            <button class="btn" data-index="0">Ladakh Through the Lens</button>
                            <button class="btn active" data-index="1">Light & Shadow: Monastic Photography</button>
                        </div>

                        <h3><strong>Light & Shadow: Ladakh Monastic Photography (6 Days)</strong></h3>
                        <p>Focus on the mystical ambiance of Ladakhi monasteries</p>

                        <h5>Highlights:</h5>
                        <ul>
                            <li>Special access to monastery interiors during ideal lighting conditions</li>
                            <li>Permission to photograph sacred ceremonies and rituals</li>
                            <li>Portraits of monks and local people</li>
                            <li>Architecture and detail photography guidance</li>
                            <li>Golden hour shoots at key monasteries</li>
                        </ul>

                        <h5>Includes:</h5>
                        <ul>
                            <li>Special monastery photography permits</li>
                            <li>Expert photography guide</li>
                            <li>All accommodation</li>
                            <li>Most meals</li>
                            <li>Transportation</li>
                            <li>Airport transfers</li>
                        </ul>

                        <h5>Price Range:</h5>
                        <p>₹60,000 - ₹68,000 per person</p>
                    </div>
                `
            }
        ],
        currentIndex: 0
    },
    "Duration Packages": {
        title: "Duration Packages",
        descriptions: [
            {
                title: "Ladakh Express",
                content: `
                    <div class="package-content">
                        <!-- Photo Grid -->
                        <div class="photo-grid">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/photography/pangong.jpg" class="img-fluid w-100" alt="Pangong Lake">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/adventure/monastery.jpg" class="img-fluid w-100" alt="Monastery Visit">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/adventure/khardungla.jpg" class="img-fluid w-100" alt="Khardung La">
                                </div>
                            </div>
                        </div>

                        <!-- Toggle Buttons -->
                        <div class="toggle-buttons text-center mb-4">
                            <button class="btn active" data-index="0">Ladakh Express</button>
                            <button class="btn" data-index="1">Grand Ladakh Expedition</button>
                        </div>

                        <h3><strong>Ladakh Express (4 Days)</strong></h3>
                        <p>A perfect introduction for time-constrained travelers</p>
                        
                        <h5>Highlights:</h5>
                        <ul>
                            <li>Essential Leh experiences and main monasteries</li>
                            <li>Quick visit to Pangong Lake</li>
                            <li>Khardung La day trip</li>
                            <li>Local market and cuisine exploration</li>
                            <li>Cultural performances</li>
                        </ul>

                        <h5>Includes:</h5>
                        <ul>
                            <li>3-star accommodation</li>
                            <li>All transportation</li>
                            <li>Guide</li>
                            <li>Permits</li>
                            <li>Most meals</li>
                            <li>Airport transfers</li>
                        </ul>

                        <h5>Price Range:</h5>
                        <p>₹35,000 - ₹40,000 per person</p>
                    </div>
                `
            },
            {
                title: "Grand Ladakh Expedition",
                content: `
                    <div class="package-content">
                        <!-- Photo Grid -->
                        <div class="photo-grid">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/duration/nubra-valley.jpg" class="img-fluid w-100" alt="Nubra Valley">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/duration/zanskar.jpeg" class="img-fluid w-100" alt="Zanskar Valley">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/duration/homestay.jpg" class="img-fluid w-100" alt="Homestay Experience">
                                </div>
                            </div>
                        </div>

                        <!-- Toggle Buttons -->
                        <div class="toggle-buttons text-center mb-4">
                            <button class="btn" data-index="0">Ladakh Express</button>
                            <button class="btn active" data-index="1">Grand Ladakh Expedition</button>
                        </div>

                        <h3><strong>Grand Ladakh Expedition (12 Days)</strong></h3>
                        <p>The comprehensive Ladakh experience</p>

                        <h5>Highlights:</h5>
                        <ul>
                            <li>All major regions: Leh, Nubra, Pangong, Tso Moriri, and Zanskar Valley</li>
                            <li>Off-the-beaten-path villages and hidden gems</li>
                            <li>Variety of activities from trekking to cultural immersion</li>
                            <li>Multiple homestay experiences</li>
                            <li>Authentic interaction with diverse communities</li>
                        </ul>

                        <h5>Includes:</h5>
                        <ul>
                            <li>Mixed accommodation (hotels, camps, homestays)</li>
                            <li>All transportation</li>
                            <li>Expert guide</li>
                            <li>Permits</li>
                            <li>Most meals</li>
                            <li>Airport transfers</li>
                        </ul>

                        <h5>Price Range:</h5>
                        <p>₹95,000 - ₹1,20,000 per person</p>
                    </div>
                `
            }
        ],
        currentIndex: 0
    },
    "Seasonal Specials": {
        title: "Seasonal Specials",
        descriptions: [
            {
                title: "Winter Wonderland: Chadar Trek",
                content: `
                    <div class="package-content">
                        <!-- Photo Grid -->
                        <div class="photo-grid">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/seasonal/chadar-trek.jpg" class="img-fluid w-100" alt="Frozen Zanskar">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/seasonal/cave-camping.jpg" class="img-fluid w-100" alt="Cave Camping">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/seasonal/frozen-waterfall.jpg" class="img-fluid w-100" alt="Frozen Waterfall">
                                </div>
                            </div>
                        </div>

                        <!-- Toggle Buttons -->
                        <div class="toggle-buttons text-center mb-4">
                            <button class="btn active" data-index="0">Winter Wonderland: Chadar Trek</button>
                            <button class="btn" data-index="1">Summer Blossoms & Festivals</button>
                        </div>

                        <h3><strong>Winter Wonderland: Chadar Trek (8 Days)</strong></h3>
                        <p>The legendary frozen river expedition (January-February only)</p>
                        
                        <h5>Highlights:</h5>
                        <ul>
                            <li>Trek on the frozen Zanskar River</li>
                            <li>Cave camping experience</li>
                            <li>Witness ice formations and frozen waterfalls</li>
                            <li>Visit remote winter-isolated villages</li>
                            <li>Comprehensive preparation and safety protocols</li>
                        </ul>

                        <h5>Includes:</h5>
                        <ul>
                            <li>Specialized winter gear</li>
                            <li>Expert trek guides</li>
                            <li>All camping equipment</li>
                            <li>Safety equipment</li>
                            <li>Permits</li>
                            <li>All meals during the trek</li>
                            <li>Pre-trek training</li>
                        </ul>

                        <h5>Price Range:</h5>
                        <p>₹75,000 - ₹85,000 per person</p>
                    </div>
                `
            },
            {
                title: "Summer Blossoms & Festivals",
                content: `
                    <div class="package-content">
                        <!-- Photo Grid -->
                        <div class="photo-grid">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/seasonal/hemis-festival.jpeg" class="img-fluid w-100" alt="Hemis Festival">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/seasonal/apricot-bloom.jpg" class="img-fluid w-100" alt="Apricot Blossoms">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/seasonal/craft-workshop.jpg" class="img-fluid w-100" alt="Traditional Crafts">
                                </div>
                            </div>
                        </div>

                        <!-- Toggle Buttons -->
                        <div class="toggle-buttons text-center mb-4">
                            <button class="btn" data-index="0">Winter Wonderland: Chadar Trek</button>
                            <button class="btn active" data-index="1">Summer Blossoms & Festivals</button>
                        </div>

                        <h3><strong>Summer Blossoms & Festivals (7 Days)</strong></h3>
                        <p>Celebrate Ladakh's vibrant summer festivals (June-September)</p>

                        <h5>Highlights:</h5>
                        <ul>
                            <li>Attendance at Hemis Festival, Phyang Tsedup, or Ladakh Festival (date dependent)</li>
                            <li>Cultural performances and mask dances</li>
                            <li>Apricot and apple orchard visits during bloom</li>
                            <li>Green valley experiences during peak summer</li>
                            <li>Traditional craft workshops</li>
                        </ul>

                        <h5>Includes:</h5>
                        <ul>
                            <li>Festival entrance and seating</li>
                            <li>Accommodation</li>
                            <li>Cultural expert guide</li>
                            <li>All transportation</li>
                            <li>Most meals</li>
                            <li>Airport transfers</li>
                        </ul>

                        <h5>Price Range:</h5>
                        <p>₹55,000 - ₹65,000 per person</p>
                    </div>
                `
            }
        ],
        currentIndex: 0
    },
    "Family Expeditions": {
        title: "Family Expeditions",
        descriptions: [
            {
                title: "Ladakh Family Adventure",
                content: `
                    <div class="package-content">
                        <!-- Photo Grid -->
                        <div class="photo-grid">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/family/camel-ride.jpeg" class="img-fluid w-100" alt="Camel Ride at Hunder">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/family/star-gazing.jpg" class="img-fluid w-100" alt="Star Gazing">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/family/cultural-kids.jpg" class="img-fluid w-100" alt="Cultural Activities">
                                </div>
                            </div>
                        </div>

                        <h3><strong>Ladakh Family Adventure (6 Days)</strong></h3>
                        <p>Kid-friendly exploration of Ladakh's wonders</p>
                        
                        <h5>Highlights:</h5>
                        <ul>
                            <li>Age-appropriate activities for different family members</li>
                            <li>Educational experiences about local ecology and culture</li>
                            <li>Camel rides at Hunder sand dunes</li>
                            <li>Star-gazing nights</li>
                            <li>Interactive cultural experiences with local children</li>
                            <li>Moderate physical activities suitable for children 8+</li>
                        </ul>

                        <h5>Includes:</h5>
                        <ul>
                            <li>Family-friendly accommodation</li>
                            <li>All transportation</li>
                            <li>Child-specialist guide</li>
                            <li>Most meals</li>
                            <li>Airport transfers</li>
                        </ul>

                        <h5>Price Range:</h5>
                        <p>₹50,000 - ₹60,000 per person (special rates for children)</p>
                    </div>
                `
            }
        ],
        currentIndex: 0
    },
    "Customized Journeys": {
        title: "Customized Journeys",
        descriptions: [
            {
                title: "Your Ladakh, Your Way",
                content: `
                    <div class="package-content">
                        <!-- Photo Grid -->
                        <div class="photo-grid">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/custom/astronomy.jpeg" class="img-fluid w-100" alt="Stargazing in Ladakh">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/custom/textile.jpg" class="img-fluid w-100" alt="Traditional Textiles">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/custom/wildlife.jpeg" class="img-fluid w-100" alt="Wildlife Spotting">
                                </div>
                            </div>
                        </div>

                        <div class="custom-journey-content">
                            <p>At Safari Sutra Holidays, we specialize in crafting bespoke Ladakh journeys tailored to your specific interests, timeframe, and preferences. Whether you're passionate about wildlife, astronomy, textiles, geology, or any other special interest, our expert team will design a customized itinerary just for you.</p>
                            
                            <h5>Customization Options:</h5>
                            <ul>
                                <li>Special interest focus (architecture, birding, botany, etc.)</li>
                                <li>Accommodation preferences from luxury to authentic homestays</li>
                                <li>Dietary requirements and culinary experiences</li>
                                <li>Physical activity levels</li>
                                <li>Private or group experiences</li>
                                <li>Extended stays in preferred locations</li>
                            </ul>
                        </div>
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