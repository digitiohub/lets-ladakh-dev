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
    seasonal: {
        title: "Seasonal Specials",
        containerId: "seasonal-package-list",
        packages: [
          // Cultural packages
        ]
      },
      family: {
        title: "Family Expeditions",
        containerId: "family-package-list",
        packages: [
          // Cultural packages
        ]
      },
      customized: {
        title: "Customized Journeys",
        containerId: "customized-package-list",
        packages: [
          // Cultural packages
        ]
      },
      Leh: {
        title: "Leh",
        containerId: "leh-package-list",
        packages: [
          // Cultural packages
        ]
      },
      NubraValley: {
        title: "Nubra Valley",
        containerId: "nubra-package-list",
        packages: [
          // Cultural packages
        ]
      },
      PangongLake: {
        title: "Pangong Lake",
        containerId: "pangong-package-list",
        packages: [
          // Cultural packages
        ]
      },
      TsoMoriri: {
        title: "Tso Moriri",
        containerId: "tso-package-list",
        packages: [
          // Cultural packages
        ]
      },
      ZanskarValley: {
            title: "Zanskar Valley",
            containerId: "zanskar-package-list",
            packages: [
            // Cultural packages
            ]
        },
       Kargil: {
            title: "Kargil",
            containerId: "kargil-package-list",
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
    },
    "Leh": {
        title: "Leh",
        descriptions: [
            {
                title: "The Heart of Ladakh",
                content: `
                    <div class="package-content">
                        <!-- Photo Grid -->
                        <div class="photo-grid">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/destinations/leh-palace.jpg" class="img-fluid w-100" alt="Leh Palace">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/destinations/shanti-stupa.jpeg" class="img-fluid w-100" alt="Shanti Stupa">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/destinations/leh-market.jpg" class="img-fluid w-100" alt="Leh Market">
                                </div>
                            </div>
                        </div>

                        <!-- Title Section -->
                        <div class="title-section text-center my-4">
                            <h3 class="display-5">The Heart of Ladakh</h3>
                            <div class="title-underline mb-4"></div>
                        </div>

                        <div class="destination-content mt-4">
                            <p class="lead">
                                Leh, the ancient capital of Ladakh, sits at an elevation of 3,500 meters, surrounded by the majestic Himalayan and Karakoram mountain ranges. This enchanting town blends centuries-old Buddhist culture with growing modern influences, creating a unique atmosphere that captivates every visitor.
                            </p>
                            
                            <h5 class="mt-4"><strong>Key Attractions</strong></h5>
                            <ul class="attractions-list">
                                <li>
                                    <strong>Leh Palace:</strong> This nine-story royal palace, constructed in the 17th century, offers panoramic views of the town and surrounding mountains. The architectural style resembles Tibet's iconic Potala Palace.
                                </li>
                                <li>
                                    <strong>Shanti Stupa:</strong> A gleaming white dome perched on a hilltop, this Japanese-built peace pagoda offers spectacular sunrise and sunset views over the Leh valley.
                                </li>
                                <li>
                                    <strong>Namgyal Tsemo Monastery:</strong> Dating back to 1430, this historic monastery houses a three-story golden statue of Maitreya Buddha and provides magnificent views of the town.
                                </li>
                                <li>
                                    <strong>Leh Main Bazaar:</strong> Explore the bustling heart of Leh, where local handicrafts, Tibetan artifacts, pashmina shawls, and vibrant street food create an immersive cultural experience.
                                </li>
                            </ul>

                            <h5 class="mt-4"><strong>Experiences</strong></h5>
                            <ul class="experiences-list">
                                <li>Explore ancient monasteries and temples reflecting Ladakh's rich Buddhist heritage</li>
                                <li>Sample authentic Ladakhi cuisine at local eateries and homestays</li>
                                <li>Visit the Hall of Fame museum honoring India's military history</li>
                                <li>Enjoy a gentle acclimatization walk through the old town's narrow lanes</li>
                            </ul>

                            <h5 class="mt-4"><strong>Practical Information</strong></h5>
                            <ul class="practical-info">
                                <li><strong>Best Time to Visit:</strong> June to September offers pleasant weather and accessibility</li>
                                <li><strong>Acclimatization:</strong> Spend at least 2-3 days in Leh before venturing to higher altitudes</li>
                                <li><strong>Local Transportation:</strong> Available through shared taxis, private cabs, and bicycle rentals</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        ],
        currentIndex: 0
    },
    "NubraValley": {
        title: "Nubra Valley",
        descriptions: [
            {
                title: "The Valley of Flowers",
                content: `
                    <div class="package-content">
                        <!-- Photo Grid -->
                        <div class="photo-grid">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/destinations/diskit.jpeg" class="img-fluid w-100" alt="Diskit Monastery">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/destinations/hunder.jpg" class="img-fluid w-100" alt="Hunder Sand Dunes">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/destinations/yarab-tso.jpg" class="img-fluid w-100" alt="Yarab Tso Lake">
                                </div>
                            </div>
                        </div>

                        <!-- Title Section -->
                        <div class="title-section text-center my-4">
                            <h3 class="display-5">The Valley of Flowers</h3>
                            <div class="title-underline mb-4"></div>
                        </div>

                        <div class="destination-content mt-4">
                            <p class="lead">
                                Known as the "Valley of Flowers," Nubra Valley lies northeast of Leh, separated by the world's highest motorable pass, Khardung La (18,380 ft). This remarkable valley where the Shyok and Nubra rivers meet creates a stunning high-altitude desert landscape dotted with green oases.
                            </p>
                            
                            <h5 class="mt-4"><strong>Key Attractions</strong></h5>
                            <ul class="attractions-list">
                                <li>
                                    <strong>Diskit Monastery:</strong> The oldest and largest monastery in Nubra Valley, featuring a towering 32-meter Maitreya Buddha statue overlooking the valley.
                                </li>
                                <li>
                                    <strong>Hunder Sand Dunes:</strong> Experience the surreal landscape of sand dunes set against snowcapped mountains, complete with Bactrian camel rides.
                                </li>
                                <li>
                                    <strong>Yarab Tso (Hidden Lake):</strong> A sacred emerald-hued lake near Sumur village, surrounded by legends and spiritual significance.
                                </li>
                                <li>
                                    <strong>Panamik Hot Springs:</strong> Natural hot springs known for their medicinal properties, situated near the Pakistan border.
                                </li>
                            </ul>

                            <h5 class="mt-4"><strong>Experiences</strong></h5>
                            <ul class="experiences-list">
                                <li>Ride double-humped Bactrian camels across the sand dunes</li>
                                <li>Trek to remote villages like Turtuk and Bogdang</li>
                                <li>Witness apricot and sea buckthorn harvests (seasonal)</li>
                                <li>Experience traditional Ladakhi hospitality in village homestays</li>
                            </ul>

                            <h5 class="mt-4"><strong>Practical Information</strong></h5>
                            <ul class="practical-info">
                                <li><strong>Inner Line Permit Required:</strong> Easily arranged through Safari Sutra Holidays</li>
                                <li><strong>Journey Time:</strong> Approximately 5-6 hours from Leh via Khardung La</li>
                                <li><strong>Best Time:</strong> May to September when the passes are open and weather is favorable</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        ],
        currentIndex: 0
    },
    "PangongLake": {
        title: "Pangong Lake",
        descriptions: [
            {
                title: "The Enchanting Blue Marvel",
                content: `
                    <div class="package-content">
                        <!-- Photo Grid -->
                        <div class="photo-grid">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/destinations/pangong-sunrise.jpg" class="img-fluid w-100" alt="Pangong Sunrise">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/destinations/pangong-camp.jpg" class="img-fluid w-100" alt="Lakeside Camping">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/destinations/pangong-birds.jpg" class="img-fluid w-100" alt="Wildlife at Pangong">
                                </div>
                            </div>
                        </div>

                        <!-- Title Section -->
                        <div class="title-section text-center my-4">
                            <h3 class="display-5">The Enchanting Blue Marvel</h3>
                            <div class="title-underline mb-4"></div>
                        </div>

                        <div class="destination-content mt-4">
                            <p class="lead">
                                Pangong Tso, a long, narrow, enchanting lake stretching from India to China, has captured the imagination of travelers worldwide. At 14,270 feet above sea level, this saline water lake changes colors throughout the day—from azure to turquoise to midnight blue—creating a mesmerizing natural spectacle.
                            </p>
                            
                            <h5 class="mt-4"><strong>Key Attractions</strong></h5>
                            <ul class="attractions-list">
                                <li>
                                    <strong>Ever-changing Colors:</strong> Witness the lake's famous color transitions throughout the day, influenced by sunlight and weather.
                                </li>
                                <li>
                                    <strong>Spangmik Village:</strong> The main settlement along the lake's shore, offering homestays and camping options with direct lake views.
                                </li>
                                <li>
                                    <strong>3 Idiots Shooting Point:</strong> The famous location from the Bollywood movie that introduced many to Pangong's beauty.
                                </li>
                                <li>
                                    <strong>Surrounding Mountains:</strong> The stark, barren mountains create a dramatic backdrop against the vibrant blue waters.
                                </li>
                            </ul>

                            <h5 class="mt-4"><strong>Experiences</strong></h5>
                            <ul class="experiences-list">
                                <li>Capture sunrise and sunset photography at the lake's edge</li>
                                <li>Stargaze under one of the clearest night skies in India</li>
                                <li>Explore the shoreline and spot unique wildlife including bar-headed geese and Brahmini ducks</li>
                                <li>Stay in eco-friendly camps or homestays by the lakeside</li>
                            </ul>

                            <h5 class="mt-4"><strong>Practical Information</strong></h5>
                            <ul class="practical-info">
                                <li><strong>Inner Line Permit Required:</strong> Essential for all visitors</li>
                                <li><strong>Distance:</strong> Approximately 225 km from Leh (5-6 hour journey)</li>
                                <li><strong>Best Time to Visit:</strong> May to September when the Chang La pass is accessible</li>
                                <li><strong>Overnight Stay Recommended:</strong> To fully experience the changing colors and tranquility</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        ],
        currentIndex: 0
    },
    "TsoMoriri": {
        title: "Tso Moriri",
        descriptions: [
            {
                title: "The Mountain Lake Sanctuary",
                content: `
                    <div class="package-content">
                        <!-- Photo Grid -->
                        <div class="photo-grid">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/destinations/tso-moriri.jpeg" class="img-fluid w-100" alt="Tso Moriri Lake">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/destinations/korzok.jpg" class="img-fluid w-100" alt="Korzok Village">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/destinations/changpa.jpg" class="img-fluid w-100" alt="Changpa Nomads">
                                </div>
                            </div>
                        </div>

                        <!-- Title Section -->
                        <div class="title-section text-center my-4">
                            <h3 class="display-5">Where History Meets Beauty</h3>
                            <div class="title-underline mb-4"></div>
                        </div>

                        <div class="destination-content mt-4">
                            <p class="lead">
                                Less visited than Pangong but equally stunning, Tso Moriri lies in the Changthang Plateau at an elevation of 15,075 feet. This high-altitude lake is a designated Ramsar site (wetland of international importance) and a nesting ground for numerous rare bird species, making it a paradise for nature enthusiasts and photographers.
                            </p>
                            
                            <h5 class="mt-4"><strong>Key Attractions</strong></h5>
                            <ul class="attractions-list">
                                <li>
                                    <strong>Pristine Blue Waters:</strong> The lake spans approximately 28 km in length and up to 8 km in width, with remarkable clarity.
                                </li>
                                <li>
                                    <strong>Korzok Village:</strong> One of the highest permanent settlements in the world, featuring the ancient Korzok Monastery overlooking the lake.
                                </li>
                                <li>
                                    <strong>Wildlife Sanctuary:</strong> The surrounding Tso Moriri Wetland Conservation Reserve hosts kiang (Tibetan wild ass), marmots, and migratory birds.
                                </li>
                                <li>
                                    <strong>Nomadic Culture:</strong> Encounter the Changpa nomads who have preserved their traditional lifestyle for centuries.
                                </li>
                            </ul>

                            <h5 class="mt-4"><strong>Experiences</strong></h5>
                            <ul class="experiences-list">
                                <li>Bird watching for rare species like black-necked cranes and bar-headed geese</li>
                                <li>Trek around parts of the lake shore for spectacular photography</li>
                                <li>Visit Korzok Monastery to understand high-altitude Buddhist practices</li>
                                <li>Experience the traditional lifestyle of Changpa nomads (seasonal)</li>
                            </ul>

                            <h5 class="mt-4"><strong>Practical Information</strong></h5>
                            <ul class="practical-info">
                                <li><strong>Protected Area Permit Required:</strong> In addition to the Inner Line Permit</li>
                                <li><strong>Distance:</strong> Approximately 240 km from Leh</li>
                                <li><strong>Limited Facilities:</strong> Accommodation options are basic; come prepared</li>
                                <li><strong>Responsible Tourism:</strong> Critical due to the fragile ecosystem and limited resources</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        ],
        currentIndex: 0
    },
    "ZanskarValley": {
        title: "Zanskar Valley",
        descriptions: [
            {
                title: "The Last Frontier",
                content: `
                    <div class="package-content">
                        <!-- Photo Grid -->
                        <div class="photo-grid">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/destinations/karsha-monastery.jpg" class="img-fluid w-100" alt="Karsha Monastery">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/destinations/drang-drung.jpg" class="img-fluid w-100" alt="Drang Drung Glacier">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/destinations/zanskar-river.jpg" class="img-fluid w-100" alt="Zanskar River">
                                </div>
                            </div>
                        </div>

                        <!-- Title Section -->
                        <div class="title-section text-center my-4">
                            <h3 class="display-5">The Last Frontier</h3>
                            <div class="title-underline mb-4"></div>
                        </div>

                        <div class="destination-content mt-4">
                            <p class="lead">
                                Nestled between the Great Himalayan Range and the Zanskar Range, this remote valley remains one of the least explored regions of Ladakh. Famous for its dramatic gorges, ancient monasteries perched on cliffs, and the frozen river trek (Chadar) in winter, Zanskar offers the ultimate adventure for those seeking Ladakh's wild heart.
                            </p>
                            
                            <h5 class="mt-4"><strong>Key Attractions</strong></h5>
                            <ul class="attractions-list">
                                <li>
                                    <strong>Padum:</strong> The main town of Zanskar, serving as a base for explorations of the valley.
                                </li>
                                <li>
                                    <strong>Karsha Monastery:</strong> The largest monastery in Zanskar, housing ancient artifacts and offering spectacular valley views.
                                </li>
                                <li>
                                    <strong>Stongdey Monastery:</strong> Perched at 3,657 meters on a rocky mountainside, providing panoramic views of the Zanskar range.
                                </li>
                                <li>
                                    <strong>Drang Drung Glacier:</strong> One of the largest glaciers in Ladakh, the source of the Zanskar River.
                                </li>
                            </ul>

                            <h5 class="mt-4"><strong>Experiences</strong></h5>
                            <ul class="experiences-list">
                                <li>Summer treks through stunning mountain landscapes</li>
                                <li>The legendary winter Chadar Trek on the frozen Zanskar River</li>
                                <li>White water rafting on the Zanskar River (seasonal)</li>
                                <li>Cultural immersion in villages largely unchanged for centuries</li>
                            </ul>

                            <h5 class="mt-4"><strong>Practical Information</strong></h5>
                            <ul class="practical-info">
                                <li><strong>Remoteness:</strong> One of the most isolated inhabited regions in India</li>
                                <li><strong>Accessibility:</strong> Open only from June to September via road; winter access limited to Chadar Trek</li>
                                <li><strong>Distance:</strong> Approximately 462 km from Leh (two-day journey)</li>
                                <li><strong>Preparation:</strong> Advanced planning essential due to limited infrastructure</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        ],
        currentIndex: 0
    },
    "Kargil": {
        title: "Kargil",
        descriptions: [
            {
                title: "Where History Meets Beauty",
                content: `
                    <div class="package-content">
                        <!-- Photo Grid -->
                        <div class="photo-grid">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="images/Packages/destinations/kargil-memorial.jpeg" class="img-fluid w-100" alt="Kargil War Memorial">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/destinations/suru-valley.jpeg" class="img-fluid w-100" alt="Suru Valley">
                                </div>
                                <div class="col-4">
                                    <img src="images/Packages/destinations/mulbekh.jpg" class="img-fluid w-100" alt="Mulbekh Monastery">
                                </div>
                            </div>
                        </div>

                        <!-- Title Section -->
                        <div class="title-section text-center my-4">
                            <h3 class="display-5">Where History Meets Beauty</h3>
                            <div class="title-underline mb-4"></div>
                        </div>

                        <div class="destination-content mt-4">
                            <p class="lead">
                                Kargil, situated on the banks of the Suru River, serves as a crucial gateway between Ladakh and Kashmir. While known for its historical significance from the 1999 Indo-Pak conflict, Kargil offers much more—lush valleys, cultural diversity with a blend of Buddhist and Muslim influences, and spectacular landscapes that remain less explored by mainstream tourism.
                            </p>
                            
                            <h5 class="mt-4"><strong>Key Attractions</strong></h5>
                            <ul class="attractions-list">
                                <li>
                                    <strong>Kargil War Memorial:</strong> Located in Drass (the second coldest inhabited place in the world), honoring the soldiers who made the ultimate sacrifice.
                                </li>
                                <li>
                                    <strong>Munshi Aziz Bhat Museum:</strong> Housing artifacts from the ancient Silk Route trading era.
                                </li>
                                <li>
                                    <strong>Suru Valley:</strong> Offering stunning views of the Nun Kun peaks and verdant landscapes contrasting with Ladakh's typical arid terrain.
                                </li>
                                <li>
                                    <strong>Mulbekh Monastery:</strong> Famous for its large rock-carved statue of Maitreya Buddha dating back to the 8th century.
                                </li>
                            </ul>

                            <h5 class="mt-4"><strong>Experiences</strong></h5>
                            <ul class="experiences-list">
                                <li>Visit the Kargil War Memorial to understand the region's recent history</li>
                                <li>Explore the apricot orchards of Suru Valley when in bloom</li>
                                <li>Discover the unique culture where Buddhist and Islamic traditions coexist</li>
                                <li>Trek to remote villages in the Wakha-Mulbekh Valley</li>
                            </ul>

                            <h5 class="mt-4"><strong>Practical Information</strong></h5>
                            <ul class="practical-info">
                                <li><strong>Strategic Location:</strong> Midway point between Srinagar and Leh</li>
                                <li><strong>Distance:</strong> 234 km from Leh, typically requiring 5-6 hours</li>
                                <li><strong>Best Time:</strong> May to September, though slightly longer season than other parts of Ladakh</li>
                                <li><strong>Cultural Sensitivity:</strong> Important to respect the diverse religious practices of the region</li>
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