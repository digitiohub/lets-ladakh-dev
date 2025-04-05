// Create a package collection object to hold all package sets
const packageSets = {
  discover: {
    title: "Discover Leh with Let’s Ladakh: Expertly Crafted Itineraries",
    containerId: "dicover-package-list",
    packages: [
      // Discover packages
    ]
  },
  activities: {
    title: "Ladakh Unplugged: Adventure, Culture & Stillness",
    containerId: "activities-package-list",
    packages: [
      // Activities packages
    ]
  }
};

packageSets.discover.packages = [
  {
    id: 1,
    mini_title: "Leh Essentials",
    title: "Leh Essentials (3 Nights | 4 Days)",
    description: `Your Ladakh adventure begins as you land in Leh, surrounded by majestic mountains at 11,500 feet. This carefully crafted 4-day package combines essential acclimatization with thoughtfully planned exploration of Leh's most significant cultural and natural attractions, including the stunning Pangong Lake.

This expertly sequenced itinerary ensures safe adaptation to the high altitude while maximizing your experience of Ladakh's remarkable landscapes, ancient monasteries, and unique culture. Perfect for first-time visitors, this package provides both comfort and adventure.`,
    photos: [
      "images/Packages/discover/leh-arrival.jpg",
      "images/Packages/discover/monastery-circuit.jpg",
      "images/Packages/discover/pangong-lake.jpg",
      "images/Packages/discover/leh-market.jpg"
    ],
    itinerary: [
      // Day 1
      { day: "Day 1", activity: "Arrival at Kushok Bakula Rimpochee Airport, Leh" },
      { day: "Day 1", activity: "Traditional Ladakhi welcome and hotel transfer" },
      { day: "Day 1", activity: "Check-in and acclimatization briefing" },
      { day: "Day 1", activity: "Rest and hydration period" },
      { day: "Day 1", activity: "Optional gentle walk through Leh Market (if feeling well)" },
      { day: "Day 1", activity: "Visit to Leh Jokhang temple (optional)" },
      { day: "Day 1", activity: "Dinner and trip briefing at hotel" },

      // Day 2
      { day: "Day 2", activity: "Breakfast at hotel" },
      { day: "Day 2", activity: "Visit Thiksey Monastery - morning prayers and monastery tour" },
      { day: "Day 2", activity: "Explore Hemis Monastery" },
      { day: "Day 2", activity: "Lunch at local restaurant" },
      { day: "Day 2", activity: "Visit Shey Palace" },
      { day: "Day 2", activity: "Explore Stok Palace Museum" },
      { day: "Day 2", activity: "Return to Leh" },
      { day: "Day 2", activity: "Dinner at hotel" },

      // Day 3
      { day: "Day 3", activity: "Early breakfast at hotel" },
      { day: "Day 3", activity: "Drive to Pangong Lake via Changla Pass (17,688 ft)" },
      { day: "Day 3", activity: "Photography and sightseeing at Pangong Lake" },
      { day: "Day 3", activity: "Lunch at lakeside restaurant" },
      { day: "Day 3", activity: "Lake shore exploration and photography" },
      { day: "Day 3", activity: "Return journey to Leh" },
      { day: "Day 3", activity: "Dinner at hotel" },

      // Day 4
      { day: "Day 4", activity: "Breakfast at hotel" },
      { day: "Day 4", activity: "Optional Leh Market visit (flight timing dependent)" },
      { day: "Day 4", activity: "Transfer to Leh airport for departure" }
    ],
    includes: [
      "3 nights' accommodation in Leh (3-star category hotel with breakfast and dinner)",
      "Airport transfers and all ground transportation in a private vehicle",
      "English-speaking local guide throughout the tour",
      "All monument/monastery entrance fees per itinerary",
      "Inner Line Permits for restricted areas",
      "Bottled water during sightseeing tours",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare to/from Leh",
      "Meals not mentioned (lunches during sightseeing)",
      "Personal expenses (telephone calls, laundry, beverages)",
      "Travel insurance (strongly recommended due to high altitude)",
      "Tips for guides and drivers",
      "Any activities not mentioned in the itinerary",
      "Oxygen cylinders or personal medical supplies",
      "Additional expenses arising due to weather, roadblocks, or factors beyond our control"
    ]
  },

  {
  id: 2,
  mini_title: "Ladakh Highlights",
  title: "Ladakh Highlights (4 Nights | 5 Days)",
  description: `Experience the grandeur of Ladakh with this carefully crafted 5-day journey that takes you from the historic city of Leh to the mesmerizing Nubra Valley. This package combines essential acclimatization with exploration of Ladakh's most significant monasteries, high mountain passes, and unique desert landscapes.

This thoughtfully sequenced itinerary ensures safe adaptation to the high altitude while maximizing your experience of the region's remarkable Buddhist heritage, dramatic landscapes, and unique culture. Perfect for those seeking a comprehensive introduction to Ladakh's diverse attractions.`,
  photos: [
    "images/Packages/discover/leh-view.jpg",
    "images/Packages/discover/khardung-la.jpg",
    "images/Packages/discover/nubra-valley.jpg",
    "images/Packages/discover/bactrian-camels.jpg"
  ],
  itinerary: [
    // Day 1
    { day: "Day 1", activity: "Arrival at Leh airport" },
    { day: "Day 1", activity: "Traditional Ladakhi welcome and hotel transfer" },
    { day: "Day 1", activity: "Check-in and acclimatization briefing" },
    { day: "Day 1", activity: "Rest and hydration period" },
    { day: "Day 1", activity: "Optional gentle walk through Leh Market" },
    { day: "Day 1", activity: "Visit to Central Asian Museum (optional)" },
    { day: "Day 1", activity: "Dinner and trip briefing at hotel" },

    // Day 2
    { day: "Day 2", activity: "Breakfast at hotel" },
    { day: "Day 2", activity: "Visit Shey Palace and ancient murals" },
    { day: "Day 2", activity: "Explore Thiksey Monastery - morning prayers" },
    { day: "Day 2", activity: "Lunch at local restaurant" },
    { day: "Day 2", activity: "Visit Hemis Monastery" },
    { day: "Day 2", activity: "Tour of Stok Palace Museum" },
    { day: "Day 2", activity: "Return to Leh" },
    { day: "Day 2", activity: "Dinner at hotel" },

    // Day 3
    { day: "Day 3", activity: "Early breakfast at hotel" },
    { day: "Day 3", activity: "Drive to Nubra Valley via Khardung La Pass (18,380 ft)" },
    { day: "Day 3", activity: "Photo stop and tea break at Khardung La" },
    { day: "Day 3", activity: "Visit Diskit Monastery" },
    { day: "Day 3", activity: "Lunch break" },
    { day: "Day 3", activity: "Bactrian camel safari at Hunder sand dunes" },
    { day: "Day 3", activity: "Check-in at Nubra Valley accommodation" },
    { day: "Day 3", activity: "Dinner under the stars" },

    // Day 4
    { day: "Day 4", activity: "Breakfast in Nubra Valley" },
    { day: "Day 4", activity: "Visit Sumur village and Samstanling Monastery" },
    { day: "Day 4", activity: "Optional visit to Panamik hot springs" },
    { day: "Day 4", activity: "Lunch at local restaurant" },
    { day: "Day 4", activity: "Return journey to Leh via Khardung La" },
    { day: "Day 4", activity: "Evening at leisure in Leh" },
    { day: "Day 4", activity: "Farewell dinner at rooftop restaurant" },

    // Day 5
    { day: "Day 5", activity: "Breakfast at hotel" },
    { day: "Day 5", activity: "Free time for shopping (flight timing dependent)" },
    { day: "Day 5", activity: "Transfer to Leh airport for departure" }
  ],
  includes: [
    "3 nights' accommodation in Leh and 1 night in Nubra Valley (3-star hotels/camps with breakfast and dinner)",
    "Airport transfers and all ground transportation in private vehicle",
    "English-speaking local guide throughout the tour",
    "All monument/monastery entrance fees as per itinerary",
    "Inner Line Permits for restricted areas including Nubra Valley",
    "Bottled water during sightseeing tours",
    "All applicable taxes"
  ],
  excludes: [
    "Airfare to/from Leh",
    "Meals not mentioned (lunches during sightseeing)",
    "Camel safari in Hunder (optional activity, paid directly)",
    "Personal expenses (telephone calls, laundry, beverages)",
    "Travel insurance (strongly recommended)",
    "Tips for guides and drivers",
    "Any activities not mentioned in the itinerary",
    "Additional expenses arising due to weather, roadblocks, or factors beyond our control"
  ]
},
{
  id: 3,
  mini_title: "Ladakh Explorer",
  title: "Ladakh Explorer (5 Nights | 6 Days)",
  description: `Experience the ultimate Ladakh adventure with this comprehensive 6-day journey that takes you from the historic city of Leh to the enchanting Nubra Valley and the mesmerizing Pangong Lake. This carefully crafted package combines essential acclimatization with exploration of Ladakh's most remarkable monasteries, highest passes, and stunning landscapes.

This thoughtfully sequenced itinerary ensures safe adaptation to the high altitude while maximizing your experience of the region's remarkable Buddhist heritage, dramatic mountain passes, and unique natural wonders. Perfect for those seeking a complete Ladakh experience.`,
  photos: [
    "images/Packages/discover/leh-palace.jpeg",
    "images/Packages/discover/nubra-landscape.jpg",
    "images/Packages/discover/pangong-sunset.jpg",
    "images/Packages/discover/hemis-monastery.jpeg"
  ],
  itinerary: [
    // Day 1
    { day: "Day 1", activity: "Arrival at Leh airport (11,500 ft)" },
    { day: "Day 1", activity: "Traditional Ladakhi welcome and hotel transfer" },
    { day: "Day 1", activity: "Check-in and essential acclimatization period" },
    { day: "Day 1", activity: "Rest and increased fluid intake" },
    { day: "Day 1", activity: "Optional gentle walk to Leh Main Market (if feeling well)" },
    { day: "Day 1", activity: "Visit to Leh Palace for sunset views (optional)" },
    { day: "Day 1", activity: "Dinner and trip briefing at hotel" },

    // Day 2
    { day: "Day 2", activity: "Breakfast at hotel" },
    { day: "Day 2", activity: "Visit Hemis Monastery - largest monastic institution" },
    { day: "Day 2", activity: "Explore Thiksey Monastery and morning rituals" },
    { day: "Day 2", activity: "Traditional Ladakhi lunch" },
    { day: "Day 2", activity: "Visit Shey Palace and copper-gilt Buddha" },
    { day: "Day 2", activity: "Tour of Stok Palace Museum" },
    { day: "Day 2", activity: "Return to Leh" },
    { day: "Day 2", activity: "Free time in local bazaar" },
    { day: "Day 2", activity: "Dinner at hotel" },

    // Day 3
    { day: "Day 3", activity: "Early breakfast at hotel" },
    { day: "Day 3", activity: "Drive to Nubra Valley via Khardung La Pass (18,380 ft)" },
    { day: "Day 3", activity: "Tea break at world's highest cafeteria" },
    { day: "Day 3", activity: "Visit Diskit Monastery and giant Buddha statue" },
    { day: "Day 3", activity: "Bactrian camel safari at Hunder sand dunes" },
    { day: "Day 3", activity: "Check-in at Nubra Valley accommodation" },
    { day: "Day 3", activity: "Village walk or leisure time" },
    { day: "Day 3", activity: "Dinner under starlit sky" },

    // Day 4
    { day: "Day 4", activity: "Breakfast in Nubra Valley" },
    { day: "Day 4", activity: "Scenic drive along Shyok River to Pangong Lake" },
    { day: "Day 4", activity: "Photo stops at dramatic gorges and viewpoints" },
    { day: "Day 4", activity: "Arrive at Pangong Lake (14,270 ft)" },
    { day: "Day 4", activity: "Check-in to lake-view accommodation" },
    { day: "Day 4", activity: "Sunset viewing at Pangong Lake" },
    { day: "Day 4", activity: "Dinner with lake views" },

    // Day 5
    { day: "Day 5", activity: "Sunrise photography at Pangong Lake" },
    { day: "Day 5", activity: "Breakfast with lake views" },
    { day: "Day 5", activity: "Return to Leh via Chang La Pass (17,688 ft)" },
    { day: "Day 5", activity: "Visit to Thiksey Monastery (if missed earlier)" },
    { day: "Day 5", activity: "Stop at Druk White Lotus School" },
    { day: "Day 5", activity: "Evening free for souvenir shopping" },
    { day: "Day 5", activity: "Optional cultural show with dinner" },

    // Day 6
    { day: "Day 6", activity: "Breakfast at hotel" },
    { day: "Day 6", activity: "Free time (flight timing dependent)" },
    { day: "Day 6", activity: "Transfer to Leh airport for departure" }
  ],
  includes: [
    "3 nights' accommodation in Leh, 1 night in Nubra Valley, 1 night at Pangong Lake (3-star hotels/camps with breakfast and dinner)",
    "Airport transfers and all ground transportation in private vehicle",
    "English-speaking local guide throughout the tour",
    "All monument/monastery entrance fees as per itinerary",
    "Inner Line Permits for restricted areas (Nubra Valley, Pangong Lake)",
    "Bottled water during sightseeing tours",
    "All applicable taxes"
  ],
  excludes: [
    "Airfare to/from Leh",
    "Meals not mentioned (lunches during sightseeing)",
    "Camel safari in Hunder (optional activity)",
    "Cultural show on final evening (optional)",
    "Personal expenses (telephone calls, laundry, beverages)",
    "Travel insurance (strongly recommended)",
    "Tips for guides and drivers",
    "Any activities not mentioned in the itinerary",
    "Oxygen cylinders or personal medical supplies",
    "Additional expenses arising due to weather, roadblocks, or factors beyond our control"
  ]
},

{
  id: 4,
  mini_title: "Ladakh Immersion",
  title: "Ladakh Immersion (6 Nights | 7 Days)",
  description: `Embark on our most comprehensive Ladakh journey with this carefully crafted 7-day immersion that takes you deep into the heart of this Himalayan wonderland. From the historic city of Leh to the remote Balti village of Turtuk, from the highest motorable passes to the mesmerizing Pangong Lake, this package combines essential acclimatization with in-depth exploration of Ladakh's most remarkable landscapes and cultures.

This expertly sequenced itinerary ensures safe adaptation to the high altitude while maximizing your experience of the region's rich Buddhist heritage, dramatic mountain passes, and unique cultural traditions. Perfect for those seeking a thorough understanding of Ladakh's diverse attractions and hidden treasures.`,
  photos: [
    "images/Packages/discover/leh-overview.jpg",
    "images/Packages/discover/turtuk-village.jpg",
    "images/Packages/discover/evening-pangong.jpeg",
    "images/Packages/discover/namgyal-tsemo.jpg"
  ],
  itinerary: [
    // Day 1
    { day: "Day 1", activity: "Arrival at Kushok Bakula Rimpochee Airport, Leh (11,500 ft)" },
    { day: "Day 1", activity: "Traditional Ladakhi welcome and hotel transfer" },
    { day: "Day 1", activity: "Check-in and essential acclimatization period" },
    { day: "Day 1", activity: "Rest and hydration period" },
    { day: "Day 1", activity: "Optional gentle walk through Leh old town (if feeling well)" },
    { day: "Day 1", activity: "Visit to Central Asian Museum (optional)" },
    { day: "Day 1", activity: "Dinner and comprehensive trip briefing at hotel" },

    // Day 2
    { day: "Day 2", activity: "Breakfast at hotel" },
    { day: "Day 2", activity: "Visit Leh Palace and guided tour" },
    { day: "Day 2", activity: "Explore Namgyal Tsemo Gompa" },
    { day: "Day 2", activity: "Lunch at garden restaurant" },
    { day: "Day 2", activity: "Visit Shanti Stupa for panoramic views" },
    { day: "Day 2", activity: "Tour of Hall of Fame museum" },
    { day: "Day 2", activity: "Shopping time at Leh Market" },
    { day: "Day 2", activity: "Dinner at hotel" },

    // Day 3
    { day: "Day 3", activity: "Early breakfast at hotel" },
    { day: "Day 3", activity: "Drive to Nubra Valley via Khardung La Pass (18,380 ft)" },
    { day: "Day 3", activity: "Tea and photography stop at Khardung La" },
    { day: "Day 3", activity: "Visit Diskit Monastery and giant Buddha statue" },
    { day: "Day 3", activity: "Lunch break" },
    { day: "Day 3", activity: "Bactrian camel safari at Hunder sand dunes" },
    { day: "Day 3", activity: "Check-in at Nubra Valley accommodation" },
    { day: "Day 3", activity: "Evening walk through orchards (optional)" },

    // Day 4
    { day: "Day 4", activity: "Breakfast in Nubra Valley" },
    { day: "Day 4", activity: "Scenic drive to Turtuk village" },
    { day: "Day 4", activity: "Explore traditional Balti architecture" },
    { day: "Day 4", activity: "Home-hosted lunch with Balti family" },
    { day: "Day 4", activity: "Visit village mosque and royal house" },
    { day: "Day 4", activity: "Return to Nubra accommodation" },
    { day: "Day 4", activity: "Cultural performance under the stars" },

    // Day 5
    { day: "Day 5", activity: "Breakfast at accommodation" },
    { day: "Day 5", activity: "Drive to Pangong Lake via Shyok River route" },
    { day: "Day 5", activity: "Photography stops at dramatic landscapes" },
    { day: "Day 5", activity: "Arrive at Pangong Lake (14,270 ft)" },
    { day: "Day 5", activity: "Check-in to lake-view accommodation" },
    { day: "Day 5", activity: "Evening walk along lake shore" },
    { day: "Day 5", activity: "Sunset photography session" },

    // Day 6
    { day: "Day 6", activity: "Sunrise photography at Pangong Lake" },
    { day: "Day 6", activity: "Breakfast with lake views" },
    { day: "Day 6", activity: "Return to Leh via Chang La Pass (17,688 ft)" },
    { day: "Day 6", activity: "Visit to Hemis or Chemrey Monastery" },
    { day: "Day 6", activity: "Optional stop at Thiksey evening prayers" },
    { day: "Day 6", activity: "Special farewell dinner with Ladakhi specialties" },

    // Day 7
    { day: "Day 7", activity: "Breakfast at hotel" },
    { day: "Day 7", activity: "Free time for shopping or relaxation" },
    { day: "Day 7", activity: "Transfer to Leh airport for departure" }
  ],
  includes: [
    "3 nights' accommodation in Leh, 2 nights in Nubra Valley, 1 night at Pangong Lake (3-star hotels/deluxe camps with breakfast and dinner)",
    "Airport transfers and all ground transportation in private vehicle",
    "English-speaking local guide throughout the tour",
    "All monument/monastery entrance fees as per itinerary",
    "Inner Line Permits for restricted areas (Nubra Valley, Pangong Lake, Turtuk)",
    "Cultural performance in Nubra Valley",
    "Special farewell dinner on final night",
    "Bottled water during sightseeing tours",
    "All applicable taxes"
  ],
  excludes: [
    "Airfare to/from Leh",
    "Meals not mentioned (lunches during sightseeing)",
    "Camel safari in Hunder (optional activity)",
    "Personal expenses (telephone calls, laundry, beverages)",
    "Travel insurance (strongly recommended)",
    "Tips for guides and drivers",
    "Any activities not mentioned in the itinerary",
    "Oxygen cylinders or personal medical supplies",
    "Additional expenses arising due to weather, roadblocks, or factors beyond our control"
  ]
},  
{
  id: 5,
  mini_title: "Greater Ladakh",
  title: "Greater Ladakh (7 Nights | 8 Days)",
  description: `Embark on our most extensive Ladakh odyssey with this carefully crafted 8-day journey that takes you through the region's most spectacular landscapes and remote cultures. From the ancient monasteries of the Indus Valley to the pristine waters of Tso Moriri, from the highest motorable passes to the northernmost village of Turtuk, this comprehensive package combines essential acclimatization with in-depth exploration of Ladakh's most remarkable terrains.

This expertly sequenced itinerary ensures safe adaptation to the high altitude while maximizing your experience of the region's Buddhist heritage, dramatic mountain passes, and untouched wilderness. Perfect for those seeking the ultimate Ladakh adventure spanning the region's full diversity of landscapes and cultures.`,
  photos: [
    "images/Packages/discover/leh-aerial.jpg",
    "images/Packages/discover/tso-moriri.jpg",
    "images/Packages/discover/Stakna Monastery.jpeg",
    "images/Packages/discover/changthang.jpeg"
  ],
  itinerary: [
    // Day 1
    { day: "Day 1", activity: "Arrival at Leh airport (11,500 ft)" },
    { day: "Day 1", activity: "Traditional khatag welcome and hotel transfer" },
    { day: "Day 1", activity: "Check-in and essential acclimatization period" },
    { day: "Day 1", activity: "Rest and increased fluid intake (4-5 liters recommended)" },
    { day: "Day 1", activity: "Optional gentle walk to Leh Main Bazaar (if feeling well)" },
    { day: "Day 1", activity: "Visit to Leh Jokhang temple (optional)" },
    { day: "Day 1", activity: "Dinner and comprehensive trip briefing at hotel" },

    // Day 2
    { day: "Day 2", activity: "Breakfast at hotel" },
    { day: "Day 2", activity: "Visit Hemis Monastery and museum" },
    { day: "Day 2", activity: "Explore Thiksey Monastery and morning prayers" },
    { day: "Day 2", activity: "Lunch overlooking Indus River" },
    { day: "Day 2", activity: "Visit Shey Palace and copper-gilt Buddha" },
    { day: "Day 2", activity: "Explore Stakna Monastery" },
    { day: "Day 2", activity: "Evening walk in Leh Old Town" },
    { day: "Day 2", activity: "Dinner at hotel" },

    // Day 3
    { day: "Day 3", activity: "Early breakfast at hotel" },
    { day: "Day 3", activity: "Drive to Nubra Valley via Khardung La Pass (18,380 ft)" },
    { day: "Day 3", activity: "Tea break at world's highest cafeteria" },
    { day: "Day 3", activity: "Visit Diskit Monastery with giant Buddha statue" },
    { day: "Day 3", activity: "Lunch break" },
    { day: "Day 3", activity: "Bactrian camel safari at Hunder sand dunes" },
    { day: "Day 3", activity: "Check-in at Nubra Valley accommodation" },
    { day: "Day 3", activity: "Evening walk through nearby orchards" },
    { day: "Day 3", activity: "Dinner under starlit sky" },

    // Day 4
    { day: "Day 4", activity: "Breakfast in Nubra Valley" },
    { day: "Day 4", activity: "Scenic drive to Turtuk village" },
    { day: "Day 4", activity: "Explore traditional Balti architecture" },
    { day: "Day 4", activity: "Home-hosted lunch with Balti family" },
    { day: "Day 4", activity: "Visit village mosque and royal house" },
    { day: "Day 4", activity: "Return to Nubra accommodation" },
    { day: "Day 4", activity: "Cultural performance under the stars" },

    // Day 5
    { day: "Day 5", activity: "Breakfast at accommodation" },
    { day: "Day 5", activity: "Drive to Pangong Lake via Shyok River route" },
    { day: "Day 5", activity: "Photography stops at dramatic landscapes" },
    { day: "Day 5", activity: "Arrive at Pangong Lake (14,270 ft)" },
    { day: "Day 5", activity: "Check-in to lake-view accommodation" },
    { day: "Day 5", activity: "Evening walk along lake shore" },
    { day: "Day 5", activity: "Sunset photography session" },
    { day: "Day 5", activity: "Dinner with lake views" },

    // Day 6
    { day: "Day 6", activity: "Sunrise photography at Pangong Lake" },
    { day: "Day 6", activity: "Breakfast with lake views" },
    { day: "Day 6", activity: "Drive to Tso Moriri Lake through Changthang" },
    { day: "Day 6", activity: "Visit Changthang Wildlife Sanctuary" },
    { day: "Day 6", activity: "Picnic lunch at scenic spot" },
    { day: "Day 6", activity: "Arrive at Tso Moriri Lake (15,075 ft)" },
    { day: "Day 6", activity: "Check-in at Korzok village accommodation" },
    { day: "Day 6", activity: "Evening exploration of lake shore" },
    { day: "Day 6", activity: "Dinner at camp" },

    // Day 7
    { day: "Day 7", activity: "Breakfast with views of Tso Moriri" },
    { day: "Day 7", activity: "Return journey to Leh through Changthang plains" },
    { day: "Day 7", activity: "Visit to Tso Kar Lake" },
    { day: "Day 7", activity: "Cross Tanglang La Pass (17,582 ft)" },
    { day: "Day 7", activity: "Stop at Chumathang hot springs" },
    { day: "Day 7", activity: "Arrive in Leh by late afternoon" },
    { day: "Day 7", activity: "Shopping time at Leh Market" },
    { day: "Day 7", activity: "Special farewell dinner at organic restaurant" },

    // Day 8
    { day: "Day 8", activity: "Breakfast at hotel" },
    { day: "Day 8", activity: "Free time for shopping or photography" },
    { day: "Day 8", activity: "Transfer to Leh airport for departure" }
  ],
  includes: [
    "3 nights' accommodation in Leh, 2 nights in Nubra Valley, 1 night at Pangong Lake, 1 night at Tso Moriri (3-star hotels/deluxe camps with breakfast and dinner)",
    "Airport transfers and all ground transportation in private vehicle",
    "English-speaking local guide throughout the tour",
    "All monument/monastery entrance fees as per itinerary",
    "Inner Line Permits for all restricted areas (Nubra, Pangong, Tso Moriri, Turtuk)",
    "Cultural performance in Nubra Valley",
    "Special farewell dinner on final night",
    "Bottled oxygen available in vehicle for emergency use",
    "Bottled water during sightseeing tours",
    "All applicable taxes"
  ],
  excludes: [
    "Airfare to/from Leh",
    "Meals not mentioned (lunches during sightseeing)",
    "Camel safari in Hunder (optional activity)",
    "Personal expenses (telephone calls, laundry, beverages)",
    "Travel insurance (strongly recommended)",
    "Tips for guides and drivers",
    "Any activities not mentioned in the itinerary",
    "Personal oxygen cylinders or medical supplies",
    "Additional expenses arising due to weather, roadblocks, or factors beyond our control"
  ]
},

{
  id: 6,
  mini_title: "Ladakh Cultural Circuit",
  title: "Ladakh Cultural Circuit (8 Nights | 9 Days)",
  description: `Embark on a comprehensive cultural odyssey through Ladakh with this carefully crafted 9-day journey that takes you deep into the region's spiritual and historical heritage. From ancient monasteries and traditional villages to nomadic settlements and sacred lakes, this thoughtfully designed circuit reveals the rich tapestry of cultures that make Ladakh unique.

This expertly sequenced itinerary combines essential acclimatization with immersive cultural experiences while ensuring comfortable adaptation to high altitudes. Perfect for those seeking a deeper understanding of Ladakh's Buddhist heritage, traditional lifestyles, and living cultural traditions.`,
  photos: [
    "images/Packages/discover/heritage-leh.jpg",
    "images/Packages/discover/lamayuru-monastery.jpeg",
    "images/Packages/discover/turtuk-culture.png",
    "images/Packages/discover/korzok-monastery.jpg"
  ],
  itinerary: [
    // Day 1
    { day: "Day 1", activity: "Arrival at Leh airport (11,500 ft)" },
    { day: "Day 1", activity: "Traditional Ladakhi greeting and heritage hotel transfer" },
    { day: "Day 1", activity: "Check-in and essential acclimatization period" },
    { day: "Day 1", activity: "Rest and hydration period (essential for adaptation)" },
    { day: "Day 1", activity: "Optional gentle stroll through Leh's old town" },
    { day: "Day 1", activity: "Visit to Leh Jokhang temple (optional)" },
    { day: "Day 1", activity: "Dinner and comprehensive cultural briefing at hotel" },

    // Day 2
    { day: "Day 2", activity: "Breakfast at heritage hotel" },
    { day: "Day 2", activity: "Visit Leh Palace with guided historical tour" },
    { day: "Day 2", activity: "Explore Namgyal Tsemo Gompa and 16th-century fort" },
    { day: "Day 2", activity: "Traditional Ladakhi lunch at authentic kitchen" },
    { day: "Day 2", activity: "Visit Central Asian Museum in restored caravan serai" },
    { day: "Day 2", activity: "Shanti Stupa at sunset" },
    { day: "Day 2", activity: "Evening visit to Sankar Gompa" },
    { day: "Day 2", activity: "Dinner with traditional Ladakhi music performance" },

    // Day 3
    { day: "Day 3", activity: "Early breakfast at hotel" },
    { day: "Day 3", activity: "Drive to western Ladakh" },
    { day: "Day 3", activity: "Visit Basgo Monastery with ancient murals" },
    { day: "Day 3", activity: "Explore Likir Monastery and its towering Buddha statue" },
    { day: "Day 3", activity: "Lunch at local restaurant" },
    { day: "Day 3", activity: "Visit UNESCO-listed Alchi Monastery Complex" },
    { day: "Day 3", activity: "Arrive at Lamayuru's moonland landscape" },
    { day: "Day 3", activity: "Evening prayers at Lamayuru Monastery" },
    { day: "Day 3", activity: "Dinner and overnight at Lamayuru guesthouse" },

    // Day 4
    { day: "Day 4", activity: "Sunrise prayers at Lamayuru Monastery" },
    { day: "Day 4", activity: "Breakfast at guesthouse" },
    { day: "Day 4", activity: "Drive to Nubra Valley via Khardung La (18,380 ft)" },
    { day: "Day 4", activity: "Tea break at world's highest motorable pass" },
    { day: "Day 4", activity: "Arrive at Diskit Monastery" },
    { day: "Day 4", activity: "Visit 32-meter Buddha statue and viewpoint" },
    { day: "Day 4", activity: "Check-in at Nubra Valley accommodation" },
    { day: "Day 4", activity: "Evening stargazing in clear mountain skies" },
    { day: "Day 4", activity: "Dinner at accommodation" },

    // Day 5
    { day: "Day 5", activity: "Breakfast at accommodation" },
    { day: "Day 5", activity: "Drive to Turtuk village" },
    { day: "Day 5", activity: "Explore traditional Balti architecture" },
    { day: "Day 5", activity: "Home-hosted lunch with Balti family" },
    { day: "Day 5", activity: "Visit village mosque and royal house" },
    { day: "Day 5", activity: "Interaction with local Balti community" },
    { day: "Day 5", activity: "Return to Nubra accommodation" },
    { day: "Day 5", activity: "Cultural performance by local artists" },
    { day: "Day 5", activity: "Dinner with traditional Ladakhi dishes" },

    // Day 6
    { day: "Day 6", activity: "Breakfast at accommodation" },
    { day: "Day 6", activity: "Drive to Pangong Lake via Shyok River route" },
    { day: "Day 6", activity: "Photography stops at dramatic landscapes" },
    { day: "Day 6", activity: "Arrive at Pangong Lake (14,270 ft)" },
    { day: "Day 6", activity: "Walk along the shores of this sacred lake" },
    { day: "Day 6", activity: "Check-in to lake-view accommodation" },
    { day: "Day 6", activity: "Sunset photography session" },
    { day: "Day 6", activity: "Dinner with panoramic lake views" },

    // Day 7
    { day: "Day 7", activity: "Sunrise viewing at Pangong Lake" },
    { day: "Day 7", activity: "Breakfast with lake views" },
    { day: "Day 7", activity: "Drive to Tso Moriri through Changthang" },
    { day: "Day 7", activity: "Visit nomadic Changpa settlements (seasonal)" },
    { day: "Day 7", activity: "Picnic lunch amid dramatic landscapes" },
    { day: "Day 7", activity: "Arrive at Tso Moriri Lake (15,075 ft)" },
    { day: "Day 7", activity: "Visit 400-year-old Korzok Monastery" },
    { day: "Day 7", activity: "Evening prayers with monastery monks" },
    { day: "Day 7", activity: "Dinner and overnight at Korzok village" },

    // Day 8
    { day: "Day 8", activity: "Breakfast with Tso Moriri views" },
    { day: "Day 8", activity: "Return journey to Leh" },
    { day: "Day 8", activity: "Visit to Tso Kar Lake" },
    { day: "Day 8", activity: "Cross Tanglang La Pass (17,582 ft)" },
    { day: "Day 8", activity: "Stop at Chumathang hot springs" },
    { day: "Day 8", activity: "Visit LAMO Center in restored heritage building" },
    { day: "Day 8", activity: "Special farewell dinner with cultural program" },
    { day: "Day 8", activity: "Return to Leh hotel" },

    // Day 9
    { day: "Day 9", activity: "Breakfast at hotel" },
    { day: "Day 9", activity: "Morning visit to Tibetan Refugee Market" },
    { day: "Day 9", activity: "Free time for last-minute shopping" },
    { day: "Day 9", activity: "Transfer to Leh airport for departure" }
  ],
  includes: [
    "3 nights in Leh, 1 night in Lamayuru, 2 nights in Nubra Valley, 1 night at Pangong Lake, 1 night at Tso Moriri (heritage hotels/deluxe camps with breakfast and dinner)",
    "Airport transfers and all ground transportation in private vehicle",
    "English-speaking local guide specialized in Ladakhi culture and Buddhism",
    "All monument/monastery entrance fees as per itinerary",
    "Special cultural experiences: traditional music performance, monastery prayer ceremonies, nomadic settlement visit",
    "Inner Line Permits for all restricted areas",
    "Special farewell dinner with cultural performance",
    "Bottled oxygen available in vehicle for emergency use",
    "Bottled water during sightseeing tours",
    "All applicable taxes"
  ],
  excludes: [
    "Airfare to/from Leh",
    "Meals not mentioned (lunches during sightseeing)",
    "Optional activities (camel safari, etc.)",
    "Personal expenses (telephone calls, laundry, beverages)",
    "Photography fees at certain monasteries",
    "Travel insurance (strongly recommended)",
    "Tips for guides and drivers",
    "Any activities not mentioned in the itinerary",
    "Personal oxygen cylinders or medical supplies",
    "Additional expenses arising due to weather, roadblocks, or factors beyond our control"
  ]
},

{
  id: 7,
  mini_title: "Complete Ladakh",
  title: "Complete Ladakh (9 Nights | 10 Days)",
  description: `Embark on the ultimate Ladakh odyssey with this meticulously crafted 10-day expedition that takes you through the region's most spectacular landscapes, from ancient monasteries to the highest astronomical observatory in India. This comprehensive journey combines essential acclimatization with in-depth exploration of Ladakh's remarkable terrains, living traditions, and celestial wonders.

This expertly sequenced itinerary ensures safe adaptation to high altitudes while maximizing your experience of the region's Buddhist heritage, nomadic cultures, dramatic mountain passes, and pristine lakes. Perfect for those seeking the most complete exploration of Ladakh's diverse attractions, including restricted areas rarely visited by tourists.`,
  photos: [
    "images/Packages/discover/ladakh-complete.jpg",
    "images/Packages/discover/hanle-observatory.jpg",
    "images/Packages/discover/changthang-wilderness.jpeg",
    "images/Packages/discover/ladakh-culture.jpg"
  ],
  itinerary: [
    // Day 1
    { day: "Day 1", activity: "Arrival at Kushok Bakula Rimpochee Airport, Leh (11,500 ft)" },
    { day: "Day 1", activity: "Traditional khatag ceremony welcome" },
    { day: "Day 1", activity: "Transfer to boutique hotel in Leh" },
    { day: "Day 1", activity: "Essential acclimatization and medical briefing" },
    { day: "Day 1", activity: "Rest and increased fluid intake (4-5 liters recommended)" },
    { day: "Day 1", activity: "Optional gentle walk through Leh's old town" },
    { day: "Day 1", activity: "Early dinner and comprehensive trip briefing" },

    // Day 2
    { day: "Day 2", activity: "Breakfast at hotel" },
    { day: "Day 2", activity: "Visit Leh Palace and guided tour" },
    { day: "Day 2", activity: "Explore Namgyal Tsemo Gompa with panoramic views" },
    { day: "Day 2", activity: "Traditional Ladakhi lunch at rooftop restaurant" },
    { day: "Day 2", activity: "Visit Central Asian Museum in restored caravan serai" },
    { day: "Day 2", activity: "Explore Shanti Stupa at sunset" },
    { day: "Day 2", activity: "Visit Sankar Gompa with precious artifacts" },
    { day: "Day 2", activity: "Dinner featuring Ladakhi specialties" },

    // Day 3
    { day: "Day 3", activity: "Early breakfast at hotel" },
    { day: "Day 3", activity: "Drive to western Ladakh" },
    { day: "Day 3", activity: "Visit Basgo Monastery with ancient murals" },
    { day: "Day 3", activity: "Explore Likir Monastery and Buddha statue" },
    { day: "Day 3", activity: "Lunch at local restaurant" },
    { day: "Day 3", activity: "Visit UNESCO-listed Alchi Monastery Complex" },
    { day: "Day 3", activity: "Arrive at Lamayuru's moonland landscape" },
    { day: "Day 3", activity: "Evening prayers at Lamayuru Monastery" },
    { day: "Day 3", activity: "Overnight at heritage guesthouse" },

    // Day 4
    { day: "Day 4", activity: "Witness sunrise prayers at Lamayuru" },
    { day: "Day 4", activity: "Breakfast at guesthouse" },
    { day: "Day 4", activity: "Drive to Nubra via Khardung La (18,380 ft)" },
    { day: "Day 4", activity: "Tea break at world's highest cafeteria" },
    { day: "Day 4", activity: "Panoramic views of Karakoram Range" },
    { day: "Day 4", activity: "Visit Diskit Monastery and Buddha statue" },
    { day: "Day 4", activity: "Check-in at Nubra accommodation" },
    { day: "Day 4", activity: "Stargazing with astronomy guide" },

    // Day 5
    { day: "Day 5", activity: "Breakfast amidst Nubra's serenity" },
    { day: "Day 5", activity: "Drive to Turtuk village" },
    { day: "Day 5", activity: "Explore Balti architecture and culture" },
    { day: "Day 5", activity: "Authentic lunch with local family" },
    { day: "Day 5", activity: "Visit 16th-century mosque and fort ruins" },
    { day: "Day 5", activity: "Explore royal house of Yagbo dynasty" },
    { day: "Day 5", activity: "Return to Nubra accommodation" },
    { day: "Day 5", activity: "Cultural program with local artists" },

    // Day 6
    { day: "Day 6", activity: "Breakfast at accommodation" },
    { day: "Day 6", activity: "Drive to Pangong via Shyok River route" },
    { day: "Day 6", activity: "Photography stops at dramatic landscapes" },
    { day: "Day 6", activity: "Visit sacred Yarab Tso Lake" },
    { day: "Day 6", activity: "Arrive at Pangong Lake (14,270 ft)" },
    { day: "Day 6", activity: "Check-in to lake-view accommodation" },
    { day: "Day 6", activity: "Evening walk along crystal-clear waters" },
    { day: "Day 6", activity: "Sunset photography session" },

    // Day 7
    { day: "Day 7", activity: "Sunrise photography at Pangong Lake" },
    { day: "Day 7", activity: "Breakfast with lake views" },
    { day: "Day 7", activity: "Drive to Hanle through Changthang" },
    { day: "Day 7", activity: "Wildlife spotting in sanctuary" },
    { day: "Day 7", activity: "Visit nomadic Changpa settlements" },
    { day: "Day 7", activity: "Arrive at Hanle (14,764 ft)" },
    { day: "Day 7", activity: "Special visit to Astronomical Observatory" },
    { day: "Day 7", activity: "Stargazing with research telescopes" },

    // Day 8
    { day: "Day 8", activity: "Breakfast in Hanle" },
    { day: "Day 8", activity: "Drive to Tso Moriri Lake" },
    { day: "Day 8", activity: "Cross scenic mountain passes" },
    { day: "Day 8", activity: "Visit Korzok Monastery" },
    { day: "Day 8", activity: "Explore Tso Moriri Lake shore" },
    { day: "Day 8", activity: "Check-in at Korzok village" },
    { day: "Day 8", activity: "Evening prayers with monastery monks" },
    { day: "Day 8", activity: "Dinner with lake views" },

    // Day 9
    { day: "Day 9", activity: "Breakfast with Tso Moriri views" },
    { day: "Day 9", activity: "Return journey to Leh" },
    { day: "Day 9", activity: "Visit to Tso Kar Lake" },
    { day: "Day 9", activity: "Cross Tanglang La Pass (17,582 ft)" },
    { day: "Day 9", activity: "Stop at Chumathang hot springs" },
    { day: "Day 9", activity: "Visit LAMO Center in Leh" },
    { day: "Day 9", activity: "Special farewell dinner" },
    { day: "Day 9", activity: "Return to Leh hotel" },

    // Day 10
    { day: "Day 10", activity: "Breakfast at hotel" },
    { day: "Day 10", activity: "Visit Tibetan Refugee Market (optional)" },
    { day: "Day 10", activity: "Final reflection and souvenir shopping" },
    { day: "Day 10", activity: "Transfer to Leh airport for departure" }
  ],
  includes: [
    "4 nights' accommodation in Leh, 1 night in Lamayuru, 2 nights in Nubra Valley, 1 night at Pangong Lake, 1 night in Hanle (premium hotels/deluxe camps with breakfast and dinner)",
    "Airport transfers and all ground transportation in private vehicle",
    "English-speaking local guide specialized in Ladakhi culture, Buddhism, and astronomy",
    "All monument/monastery entrance fees as per itinerary",
    "Special cultural experiences: traditional music performances, monastery prayer ceremonies, astronomical observatory visit",
    "Inner Line Permits for all restricted areas including special permits for Hanle",
    "Special farewell dinner with cultural performance",
    "Bottled oxygen available in vehicle for emergency use",
    "Medical kit with altitude sickness medication",
    "Bottled water and snacks during sightseeing tours",
    "All applicable taxes"
  ],
  excludes: [
    "Airfare to/from Leh",
    "Meals not mentioned (lunches during sightseeing)",
    "Optional activities (camel safari in Hunder, etc.)",
    "Personal expenses (telephone calls, laundry, beverages)",
    "Photography fees at certain monasteries and the observatory",
    "Travel insurance (strongly recommended)",
    "Tips for guides and drivers",
    "Any activities not mentioned in the itinerary",
    "Personal oxygen cylinders or specialized medical supplies",
    "Additional expenses arising due to weather, roadblocks, or factors beyond our control"
  ]
}
];

packageSets.activities.packages = [
  {
    id: 1,
    mini_title: "Adventure Activities",
    title: "Adventure Activities",
    description: `
      Experience Ladakh's unparalleled adventure with a range of activities specially designed for thrill‑seekers. Choose your challenge among our curated segments below.
    `,

    photos: [
      "images/Packages/adventure/trekking.jpg",
      "images/Packages/adventure/biking.jpg",
      "images/Packages/adventure/rafting.jpeg",
      "images/Packages/adventure/mountaineering.jpg"
    ],
    // Use "day" as the subheading for the toggle buttons.
    itinerary: [
      // Trekking Expeditions
      { day: "Trekking Expeditions", activity: "Markha Valley Trek – A moderate 7‑day journey through traditional Ladakhi villages, high mountain passes, and stunning valleys" },
      { day: "Trekking Expeditions", activity: "Chadar Trek – The legendary winter trek across the frozen Zanskar River (January‑February only)" },
      { day: "Trekking Expeditions", activity: "Stok Kangri Trek – For experienced trekkers seeking the thrill of summiting a 6,153m peak" },
      { day: "Trekking Expeditions", activity: "Hemis National Park Trails – Chance to spot the elusive snow leopard while exploring diverse terrains" },
      
      // Mountain Biking
      { day: "Mountain Biking", activity: "Experience the rush of cycling through some of the world's highest motorable passes" },
      { day: "Mountain Biking", activity: "Khardung La (18,380 ft)" },
      { day: "Mountain Biking", activity: "Chang La (17,688 ft)" },
      { day: "Mountain Biking", activity: "Tanglang La (17,582 ft)" },
      { day: "Mountain Biking", activity: "Routes ranging from beginner‑friendly day trips to challenging multi‑day expeditions" },
      
      // River Rafting
      { day: "River Rafting", activity: "Navigate the mighty Indus and Zanskar rivers through spectacular gorges" },
      { day: "River Rafting", activity: "Beginner routes: Phey to Nimmo" },
      { day: "River Rafting", activity: "Intermediate routes: Alchi to Khaltse" },
      { day: "River Rafting", activity: "Advanced routes: The thrilling Zanskar river expedition (July‑August)" },
      
      // Mountaineering
      { day: "Mountaineering", activity: "Guided climbs on peaks ranging from 5,000m to 6,000m" },
      { day: "Mountaineering", activity: "Training courses for beginners at the Ladakh Mountaineering Center" },
      { day: "Mountaineering", activity: "Equipment rentals and expert guidance available" }
    ],
    includes: [
      "Professional guides for all activities",
      "Quality equipment and safety gear",
      "All necessary permits and fees",
      "Meals and refreshments as specified in each activity"
    ],
    excludes: [
      "Personal expenses",
      "Travel insurance",
      "Optional equipment rentals not specified",
      "Additional services beyond the package itinerary"
    ],
  },

  {
    id: 2,
    mini_title: "Cultural Immersion",
    title: "Cultural Immersion",
    description: `
      Immerse yourself in Ladakh’s rich cultural tapestry through authentic experiences, from spiritual monastery stays to local village life. This curated selection allows you to engage with traditions, festivals, and crafts that define the soul of Ladakh.
    `,
    photos: [
      "images/Packages/culture/monastery-life.jpg",
      "images/Packages/culture/village-homestay.jpg",
      "images/Packages/culture/cultural-workshops.jpg",
      "images/Packages/culture/hemis-festival.jpg"
    ],
    itinerary: [
      // Monastery Experiences
      { day: "Monastery Experiences", activity: "Meditation retreats at Hemis, Thiksey, or Lamayuru monasteries" },
      { day: "Monastery Experiences", activity: "Festival participation - witness the colorful masked dances during Hemis Festival, Losar celebrations, or Gustor" },
      { day: "Monastery Experiences", activity: "Monk interactions - learn about Buddhist philosophy and daily monastic life" },
  
      // Village Homestays
      { day: "Village Homestays", activity: "Experience authentic Ladakhi hospitality" },
      { day: "Village Homestays", activity: "Participate in daily farming activities" },
      { day: "Village Homestays", activity: "Learn traditional cooking methods" },
      { day: "Village Homestays", activity: "Connect with local families in villages like Stok, Alchi, and Turtuk" },
  
      // Cultural Workshops
      { day: "Cultural Workshops", activity: "Traditional Ladakhi cooking classes" },
      { day: "Cultural Workshops", activity: "Thangka painting lessons" },
      { day: "Cultural Workshops", activity: "Pottery making in Likir village" },
      { day: "Cultural Workshops", activity: "Music and dance sessions with local artists" }
    ],
    includes: [
      "Guided monastery visits and festival entries",
      "Accommodation in family-run homestays with meals",
      "All workshop materials and expert instructors",
      "Transportation between villages and monasteries"
    ],
    excludes: [
      "Airfare to/from Leh",
      "Personal donations at monasteries (optional)",
      "Travel insurance",
      "Tips for hosts and local artists",
      "Any extra activities not listed in the package"
    ]
  },

  {
    id: 3,
    mini_title: "Nature & Wildlife",
    title: "Nature & Wildlife Encounters",
    description: `
      Discover the untamed side of Ladakh through tranquil lakes, rare high-altitude wildlife, and the most breathtaking night skies on Earth. This journey is perfect for nature lovers, birdwatchers, and stargazers seeking awe-inspiring encounters.
    `,
    photos: [
      "images/Packages/culture/pangong-lake.jpeg",
      "images/Packages/culture/hemis-national-park.jpg",
      "images/Packages/culture/stargazing-ladakh.jpeg",
      "images/Packages/culture/tso-moriri-birdwatching.jpeg"
    ],
    itinerary: [
      // High-Altitude Lakes
      { day: "High-Altitude Lakes", activity: "Pangong Lake – Marvel at the changing colors of this iconic lake" },
      { day: "High-Altitude Lakes", activity: "Tso Moriri – Bird watching and camping by this pristine lake" },
      { day: "High-Altitude Lakes", activity: "Tso Kar – Spot rare wildlife around this salt lake" },
  
      // Wildlife Safaris
      { day: "Wildlife Safaris", activity: "Guided tours through Hemis National Park – home to the elusive snow leopard" },
      { day: "Wildlife Safaris", activity: "Bird watching expeditions in Changthang Wildlife Sanctuary" },
      { day: "Wildlife Safaris", activity: "Photography tours focused on capturing Ladakh's unique biodiversity" },
  
      // Stargazing
      { day: "Stargazing", activity: "Experience some of the clearest night skies on Earth" },
      { day: "Stargazing", activity: "Guided astronomy sessions away from light pollution" },
      { day: "Stargazing", activity: "Astrophotography workshops under the Milky Way" }
    ],
    includes: [
      "Guided wildlife and birdwatching safaris with expert naturalists",
      "Accommodation near lakes and wildlife zones (deluxe camps or eco-lodges)",
      "Stargazing equipment and expert-led astronomy sessions",
      "All transportation during the program",
      "Park entry fees and required permits"
    ],
    excludes: [
      "Airfare to/from Leh",
      "Personal photography equipment",
      "Meals not mentioned in the itinerary",
      "Travel insurance",
      "Tips for guides and naturalists",
      "Optional astrophotography gear rental"
    ]
  },  

  {
    id: 4,
    mini_title: "Wellness Journeys",
    title: "Wellness Journeys",
    description: `
      Find balance and rejuvenation in Ladakh’s serene landscapes. Our wellness journeys offer natural healing experiences, mindful movement, and spiritual renewal through hot springs, yoga, and breathwork—set amidst the Himalayan silence.
    `,
    photos: [
      "images/Packages/wellness/panamik-hot-springs.jpg",
      "images/Packages/wellness/yoga-himalayas.jpg",
      "images/Packages/wellness/chumathang-retreat.jpg",
      "images/Packages/wellness/breathwork-session.jpg"
    ],
    itinerary: [
      // Hot Springs
      { day: "Hot Springs", activity: "Rejuvenate in the natural hot springs of Panamik" },
      { day: "Hot Springs", activity: "Experience the healing mineral waters of Chumathang" },
      { day: "Hot Springs", activity: "Combine hot spring visits with guided meditation practices for holistic wellness" },
  
      // Yoga Retreats
      { day: "Yoga Retreats", activity: "Sunrise yoga sessions against breathtaking Himalayan backdrops" },
      { day: "Yoga Retreats", activity: "Multi-day wellness retreats combining yoga, meditation, and local nutritional guidance" },
      { day: "Yoga Retreats", activity: "Specialized breathing workshops tailored for high-altitude adaptation and inner clarity" }
    ],
    includes: [
      "Daily yoga and meditation sessions led by certified instructors",
      "Access to Panamik and Chumathang hot springs",
      "Accommodation in wellness-focused retreats or eco-lodges",
      "All vegetarian meals and herbal infusions during retreats",
      "Workshops on mindfulness, nutrition, and breathwork",
      "Transportation between wellness sites"
    ],
    excludes: [
      "Airfare to/from Leh",
      "Personal wellness equipment (mats, towels, etc.)",
      "Spa treatments not mentioned in the itinerary",
      "Travel insurance",
      "Tips for instructors and retreat staff",
      "Any other personal expenses"
    ]
  },

  {
    id: 5,
    mini_title: "Seasonal Experiences",
    title: "Seasonal Experiences",
    description: `
      Discover the magic of Ladakh across seasons. Whether you seek lush green valleys and vibrant festivals in summer or the ethereal stillness and snow leopards of winter, Ladakh offers distinct wonders year-round.
    `,
    photos: [
      "images/Packages/seasonal/summer-valley-bloom.jpg",
      "images/Packages/seasonal/chadar-trek-winter.jpg",
      "images/Packages/seasonal/snow-leopard.jpg",
      "images/Packages/seasonal/winter-festival.jpg"
    ],
    itinerary: [
      // Summer Highlights (May–September)
      { day: "Summer Highlights (May–September)", activity: "All major trekking routes open for adventure seekers" },
      { day: "Summer Highlights (May–September)", activity: "Vibrant green valleys and flower blooms in full glory" },
      { day: "Summer Highlights (May–September)", activity: "Attend most festivals and cultural events, including Hemis and Sindhu Darshan" },
      { day: "Summer Highlights (May–September)", activity: "Perfect weather for camping, rafting, and outdoor photography" },
  
      // Winter Magic (October–April)
      { day: "Winter Magic (October–April)", activity: "Experience the surreal Chadar Trek across frozen Zanskar River" },
      { day: "Winter Magic (October–April)", activity: "Greater chance of spotting elusive snow leopards in the wild" },
      { day: "Winter Magic (October–April)", activity: "Fewer tourists and tranquil snow-covered landscapes" },
      { day: "Winter Magic (October–April)", activity: "Celebrate authentic winter festivals like Losar and Spituk Gustor" }
    ],
    includes: [
      "Customized itinerary based on travel season",
      "Guides with expertise in seasonal trekking and wildlife",
      "Accommodation suited to weather conditions (heated rooms in winter)",
      "Festival access and cultural experiences depending on month of visit",
      "All entry permits and environmental fees"
    ],
    excludes: [
      "Flights to/from Leh",
      "Seasonal gear rentals (e.g., insulated boots, crampons)",
      "Personal expenses",
      "Travel insurance (especially important in winter)",
      "Optional winter camping equipment",
      "Tips for guides and support staff"
    ]
  },

  {
  id: 6,
  mini_title: "Unique Ladakhi Experiences",
  title: "Unique Ladakhi Experiences",
  description: `
    Go beyond sightseeing with immersive, offbeat experiences that connect you deeply with Ladakh's people, traditions, and environment. These meaningful interactions are designed to offer both cultural enrichment and responsible travel.
  `,
  photos: [
    "images/Packages/unique/farm-tour-ladakh.jpg",
    "images/Packages/unique/skyu-cooking.jpg",
    "images/Packages/unique/apricot-drying.jpeg",
    "images/Packages/unique/community-tourism.jpg"
  ],
  itinerary: [
    // Sustainable Tourism Initiatives
    { day: "Sustainable Tourism Initiatives", activity: "Join eco-friendly farm tours and learn about Ladakh’s sustainable agriculture" },
    { day: "Sustainable Tourism Initiatives", activity: "Participate in local conservation projects such as reforestation or water conservation efforts" },
    { day: "Sustainable Tourism Initiatives", activity: "Engage in community-based tourism initiatives that directly support local livelihoods" },

    // Culinary Adventures
    { day: "Culinary Adventures", activity: "Learn to make traditional butter tea in a Ladakhi kitchen" },
    { day: "Culinary Adventures", activity: "Participate in apricot harvesting and sun-drying during the summer season" },
    { day: "Culinary Adventures", activity: "Hands-on cooking sessions: prepare skyu, thukpa, and momos with local families" },
    { day: "Culinary Adventures", activity: "Enjoy farm-to-table meals with seasonal local ingredients and age-old culinary wisdom" }
  ],
  includes: [
    "Local guides and facilitators for each experience",
    "All ingredients and materials for culinary sessions",
    "Transportation to experience sites",
    "Refreshments and meals during activities",
    "Opportunities to interact directly with Ladakhi artisans and farmers"
  ],
  excludes: [
    "Travel to/from Leh",
    "Personal purchases during farm or community visits",
    "Travel insurance",
    "Tips for local hosts and guides",
    "Optional donations to local NGOs or community groups"
  ]
}
]
// Display Package List
function displayAllPackageSets() {
  // For each set of packages in our collection
  Object.keys(packageSets).forEach(setKey => {
    const packageSet = packageSets[setKey];
    const container = document.getElementById(packageSet.containerId);

    // Skip if container doesn't exist in the DOM
    if (!container) return;

    container.innerHTML = '';

    // Add packages to container
    packageSet.packages.forEach((pkg, index) => {
      // For packages at positions that need offset (like the 4th in a 5-package set)
      let offsetClass = '';
      if (packageSet.packages.length === 5 && index === 3) {
        offsetClass = 'offset-lg-2 offset-md-2';
      }

      container.innerHTML += `
        <div class="col-lg-4 col-md-4 ${offsetClass}">
          <div class="tour-box">
            <figure><img src="${pkg.photos[0]}" alt="Image"></figure>
            <div class="tour-content">
              <h3 class="tour-title">${pkg.mini_title}</h3>
              <a href="#" class="explore-more" data-package="${pkg.title}" 
                 onclick="openModal('${setKey}', ${pkg.id})">READ MORE</a>
            </div>
          </div>
        </div>
      `;
    });
  });
}

// Open Modal - updated for multiple package sets
function openModal(setKey, id) {
  const packageSet = packageSets[setKey];
  if (!packageSet) return;

  const pkg = packageSet.packages.find(p => p.id === id);
  if (!pkg) return;

  // Populate Photos - Modified to display only photos 2-4 (skipping the first image)
  document.getElementById('modal-photos').innerHTML = pkg.photos
    .slice(1) // Skip the first image (which is already shown in the card)
    .map(photo => `<img src="${photo}" alt="Photo">`)
    .join('');

  // Populate Title & Description
  document.getElementById('modal-title').innerText = pkg.title;
  document.getElementById('modal-description').innerText = pkg.description;

  // Generate Day Toggle Buttons
  const days = [...new Set(pkg.itinerary.map(item => item.day))];

  const dayToggle = document.getElementById('day-toggle');

  // Only show day toggle if there's more than one day
  if (days.length > 1) {
    dayToggle.innerHTML = days.map((day, index) =>
      `<button class="${index === 0 ? 'active' : ''}" 
         onclick="showDay('${setKey}', ${id}, '${day}', this)">${day}</button>`
    ).join('');
    dayToggle.style.display = 'flex'; // Show the day toggle
  } else {
    dayToggle.style.display = 'none'; // Hide the day toggle
  }

  // Show Itinerary
  const firstDay = days[0];
  showItinerary(pkg.itinerary, firstDay);

  // Populate Includes without tick marks
  document.getElementById('modal-includes').innerHTML = pkg.includes.map(item =>
    `<li>${item}</li>`).join('');

  // Add Excludes without cross marks
  document.getElementById('modal-excludes').innerHTML = pkg.excludes.map(item =>
    `<li>${item}</li>`).join('');

  // Show Modal
  document.getElementById('packageModal').style.display = 'block';
}

// Show Activities for a Specific Day
function showDay(setKey, packageId, day, element) {
  const packageSet = packageSets[setKey];
  if (!packageSet) return;

  const pkg = packageSet.packages.find(p => p.id === packageId);
  if (!pkg) return;

  // Update Active Button State
  document.querySelectorAll('#day-toggle button').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');

  // Show the filtered itinerary for the selected day
  showItinerary(pkg.itinerary, day);
}

// Show Itinerary
function showItinerary(itinerary, day) {
  const filteredItinerary = itinerary.filter(item => item.day === day);
  document.getElementById('modal-itinerary').innerHTML = filteredItinerary.map(item =>
    `<tr>
      <td>${item.time}</td>
      <td>${item.activity}</td>
    </tr>`
  ).join('');
}

// Close Modal
function closeModal() {
  document.getElementById('packageModal').style.display = 'none';
}

// Enhance the modal closing functionality
function setupModalEvents() {
  const modal = document.getElementById('packageModal');
  const modalContent = document.querySelector('.modal-content');

  // Close modal when clicking outside the content area
  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };

  // Close modal with ESC key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  displayAllPackageSets();
  setupModalEvents();
});