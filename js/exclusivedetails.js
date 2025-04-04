// Create a package collection object to hold all package sets
const packageSets = {
  // trekking: {
  //   title: "Goa Trekking Packages",
  //   containerId: "trekking-package-list",
  //   packages: [
  //     // Trekking packages
  //   ]
  // },
  // adventure: {
  //   title: "Exclusive Goa Adventure & Active Packages: Thrill-Seeker's Paradise",
  //   containerId: "adventure-package-list",
  //   packages: [
  //     // Adventure packages
  //   ]
  // },
  discover: {
    title: "Discover Leh with Let’s Ladakh: Expertly Crafted Itineraries",
    containerId: "dicover-package-list",
    packages: [
      // Discover packages
    ]
  },
  // wildlife: {
  //   title: "Exclusive Goa Wildlife & Nature Packages: Biodiversity Discovery Journeys",
  //   containerId: "wildlife-package-list",
  //   packages: [
  //     // Wellness packages
  //   ]
  // }
};

// packageSets.trekking.packages = [
//   {
//     id: 1,
//     mini_title: "Dudhsagar Falls Adventure Trek",
//     title: "Dudhsagar Falls Adventure Trek - The Waterfall Explorer's Dream",
//     description: "Embark on an unforgettable journey through the heart of Goa's spectacular Western Ghats with our signature Dudhsagar Falls Adventure Trek. This immersive 2-day experience takes you deep into Goa's lush wilderness to witness India's fifth tallest waterfall in all its magnificent glory. As you traverse verdant forest trails teeming with exotic flora and fauna, expert guides will share fascinating insights about the unique ecosystem that makes this region a biodiversity hotspot.\n\nDay one begins with a scenic drive to Kulem railway station, followed by an exhilarating trek through dense forest canopies, crossing bubbling streams and encountering diverse wildlife. The moment the magnificent 310-meter-high Dudhsagar Falls comes into view—its milky white cascades thundering down the mountainside—will leave you breathless. Spend the afternoon swimming in crystal-clear natural pools beneath the falls, where the refreshing mist creates a magical atmosphere unlike anywhere else in Goa.\n\nAs twilight approaches, our team will set up a comfortable campsite where you'll enjoy an authentic Goan dinner under starlit skies. The night spent in quality tents amid the sounds of the forest and the distant roar of the waterfall creates memories that will last a lifetime. Wake to a spectacular sunrise illuminating the falls, followed by a hearty breakfast before exploring upper viewpoints that offer panoramic vistas perfect for photography enthusiasts.\n\nThe descent trek brings new perspectives of the landscape, culminating in a visit to a traditional spice plantation where you'll learn about Goa's agricultural heritage while enjoying a delicious lunch surrounded by aromatic spices. This comprehensive package includes all necessary equipment, meals featuring local cuisine, professional guides trained in wilderness first aid, and comfortable transportation—everything designed to make your Dudhsagar adventure both safe and unforgettable.",
//     photos: ["images/Packages/trekking/1.jpg", "images/Packages/trekking/1.1.jpg",
//       "images/Packages/trekking/1.2.jpg",
//       "images/Packages/trekking/1.3.jpg",],
//     itinerary: [
//       { day: "Day 1", time: "6:00 AM", activity: "Pickup from hotel in North Goa" },
//       { day: "Day 1", time: "8:00 AM", activity: "Arrive at Kulem railway station, trek briefing and safety instructions" },
//       { day: "Day 1", time: "9:00 AM", activity: "Begin trek through the lush Western Ghats forest trails" },
//       { day: "Day 1", time: "12:30 PM", activity: "Packed lunch at a scenic viewpoint" },
//       { day: "Day 1", time: "2:30 PM", activity: "Reach Dudhsagar Falls base" },
//       { day: "Day 1", time: "3:00 PM", activity: "Swimming and relaxation at the natural pool beneath the falls" },
//       { day: "Day 1", time: "5:00 PM", activity: "Setup camp near the falls" },
//       { day: "Day 1", time: "7:00 PM", activity: "Bonfire dinner and overnight stay in tents" },
//       { day: "Day 2", time: "6:00 AM", activity: "Sunrise viewing and morning tea" },
//       { day: "Day 2", time: "7:30 AM", activity: "Breakfast at campsite" },
//       { day: "Day 2", time: "9:00 AM", activity: "Trek to the upper viewpoints of Dudhsagar Falls" },
//       { day: "Day 2", time: "12:00 PM", activity: "Begin descent trek" },
//       { day: "Day 2", time: "2:00 PM", activity: "Lunch at local spice plantation" },
//       { day: "Day 2", time: "3:30 PM", activity: "Spice plantation tour" },
//       { day: "Day 2", time: "5:00 PM", activity: "Return journey to hotel" }
//     ],
//     includes: [
//       "Professional trekking guide",
//       "Camping equipment",
//       "All meals",
//       "Transportation from/to hotel",
//       "Spice plantation visit",
//       "Photography service"
//     ]
//   },
//   {
//     id: 2,
//     mini_title: "Netravali Wildlife Sanctuary Trek",
//     title: "Netravali Wildlife Sanctuary Trek - A Hidden Gem of Goa",
//     description: "Discover one of Goa's best-kept secrets with our exclusive 3-day Netravali Wildlife Sanctuary Trek. This immersive wilderness journey takes you deep into the sanctuary's 211 square kilometers of protected biodiversity—a pristine haven for nature enthusiasts seeking an authentic connection with Goa's inland treasures. Far from the coastal crowds, Netravali offers a rare glimpse into the untouched Western Ghats ecosystem, recognized as a UNESCO World Heritage site for its exceptional biodiversity.\n\nYour adventure begins with a scenic drive through rural Goan villages to reach the sanctuary's entrance, where experienced naturalists will introduce you to the ecological significance of this remarkable habitat. The first day's trek winds through diverse ecosystems—from dense evergreen forests to open grasslands—bringing you to the mesmerizing Bubbling Lake (Vajrashakti), a natural phenomenon where gas bubbles continuously rise from the lakebed, creating a mystical atmosphere steeped in local legends.\n\nAccommodations at the historic forest rest house immerse you in nature while ensuring comfort after each day's exploration. Day two offers exceptional wildlife opportunities with a dawn bird watching excursion—where over 130 species including the Malabar pied hornbill and Indian pitta may be spotted—followed by a trek to the secluded Savari Waterfall, where you'll enjoy a gourmet picnic lunch amid nature's symphony. The afternoon nature interpretation walk with a wildlife expert reveals fascinating insights into the sanctuary's ecosystem, including medicinal plants used by local communities for generations.\n\nThe final day combines natural and cultural heritage with a visit to the ancient Mainapi rock carvings, followed by an authentic lunch in a Konkani home where you'll taste traditional dishes prepared with local ingredients. The journey concludes at Tanshikar Spice Farm, where sustainable organic farming practices preserve Goa's agricultural heritage. Throughout the expedition, our expert guides enhance your experience with their profound knowledge of local ecology, ensuring this trek delivers not just adventure but a deeper understanding of Goa's incredible biodiversity.",
//     photos: ["images/Packages/trekking/2.jpg", "images/Packages/trekking/2.1.jpg",
//       "images/Packages/trekking/2.2.jpg",
//       "images/Packages/trekking/2.3.jpg",],
//     itinerary: [
//       { day: "Day 1", time: "7:00 AM", activity: "Pickup from hotel in South Goa" },
//       { day: "Day 1", time: "9:30 AM", activity: "Arrive at Netravali Wildlife Sanctuary" },
//       { day: "Day 1", time: "10:00 AM", activity: "Trek briefing and equipment check" },
//       { day: "Day 1", time: "10:30 AM", activity: "Begin trek through the sanctuary's diverse ecosystems" },
//       { day: "Day 1", time: "1:00 PM", activity: "Packed lunch amid nature" },
//       { day: "Day 1", time: "2:30 PM", activity: "Visit to Bubbling Lake (Vajrashakti)" },
//       { day: "Day 1", time: "4:30 PM", activity: "Arrive at base camp" },
//       { day: "Day 1", time: "6:00 PM", activity: "Dinner and night stay in forest rest house" },
//       { day: "Day 2", time: "5:30 AM", activity: "Early morning bird watching tour" },
//       { day: "Day 2", time: "8:00 AM", activity: "Breakfast at camp" },
//       { day: "Day 2", time: "9:30 AM", activity: "Trek to Savari Waterfall" },
//       { day: "Day 2", time: "12:30 PM", activity: "Picnic lunch at waterfall" },
//       { day: "Day 2", time: "2:00 PM", activity: "Nature interpretation walk with wildlife expert" },
//       { day: "Day 2", time: "5:00 PM", activity: "Return to camp" },
//       { day: "Day 2", time: "7:00 PM", activity: "Dinner and stargazing session" },
//       { day: "Day 3", time: "6:30 AM", activity: "Breakfast at camp" },
//       { day: "Day 3", time: "8:00 AM", activity: "Trek to Mainapi Heritage Site" },
//       { day: "Day 3", time: "11:00 AM", activity: "Explore ancient rock carvings" },
//       { day: "Day 3", time: "1:00 PM", activity: "Lunch at local Konkani home" },
//       { day: "Day 3", time: "2:30 PM", activity: "Visit Tanshikar Spice Farm" },
//       { day: "Day 3", time: "4:00 PM", activity: "Return journey to hotel" }
//     ],
//     includes: [
//       "Expert naturalist guide",
//       "Accommodation in forest rest house",
//       "All meals (including authentic Goan cuisine)",
//       "Wildlife spotting equipment",
//       "Entry fees to all sites"
//     ]
//   },
//   {
//     id: 3,
//     mini_title: "Coastal Cliffs Trek - A One-Day Adventure",
//     title: "Coastal Cliffs Trek - A One-Day Adventure Along Goa’s Stunning Shores",
//     description: "Experience the dramatic beauty of Goa's southern coastline with our Coastal Cliffs Trek, a perfect single-day adventure showcasing the stunning contrast between golden beaches and towering sea cliffs. This carefully crafted journey begins at the historic Cabo de Rama Fort—named after the Hindu mythological figure Lord Rama—where Portuguese colonial architecture meets breathtaking ocean views. After exploring the fort's ancient ramparts and hearing tales of its colorful history spanning over 500 years, you'll begin the coastal trek along paths less traveled by typical tourists.\n\nAs you traverse the cliff-top trails, the panoramic vistas of the Arabian Sea stretching to the horizon create perfect photo opportunities at every turn. Your knowledgeable guide will point out unique geological formations, endemic coastal plants that thrive in this challenging environment, and seabirds soaring on thermal currents rising from the cliffs. The first segment of the trek leads to the hidden paradise of Cola Beach—a pristine crescent of golden sand accessible primarily by sea or foot, ensuring an uncrowded experience unlike Goa's more popular beaches.\n\nMidday brings a special treat: a freshly prepared seafood lunch featuring the day's catch, served directly on the beach under swaying palms. After time to relax and swim in the turquoise waters, the journey continues to the spectacular Agonda viewpoint, where lucky trekkers often spot dolphins playing in the bay below. The afternoon light casts an enchanting glow across the coastline as you make your way down to award-winning Agonda Beach, consistently rated among Asia's finest shores.\n\nThe day culminates with a guided sunset meditation session on the beach, allowing you to connect deeply with the natural rhythm of the ocean and sky before returning to your hotel refreshed and inspired. This trek perfectly balances physical activity with cultural insights and natural beauty, making it ideal for travelers seeking to experience Goa's coastal splendor beyond the typical beach experience.",
//     photos: ["images/Packages/trekking/3.jpg", "images/Packages/trekking/3.1.jpg",
//       "images/Packages/trekking/3.2.jpg",
//       "images/Packages/trekking/3.3.jpg",],
//     itinerary: [
//       { day: "Day 1", time: "7:00 AM", activity: "Pickup from hotel" },
//       { day: "Day 1", time: "8:00 AM", activity: "Arrive at Cabo de Rama Fort" },
//       { day: "Day 1", time: "8:30 AM", activity: "Historical tour of the Portuguese fort" },
//       { day: "Day 1", time: "9:30 AM", activity: "Begin coastal cliff trek along the Arabian Sea" },
//       { day: "Day 1", time: "11:30 AM", activity: "Reach secluded Cola Beach" },
//       { day: "Day 1", time: "12:30 PM", activity: "Freshly prepared seafood lunch on beach" },
//       { day: "Day 1", time: "2:00 PM", activity: "Continue trek to Agonda viewpoint" },
//       { day: "Day 1", time: "3:30 PM", activity: "Dolphin watching from clifftop" },
//       { day: "Day 1", time: "4:30 PM", activity: "Descend to Agonda Beach" },
//       { day: "Day 1", time: "5:30 PM", activity: "Sunset meditation session" },
//       { day: "Day 1", time: "6:30 PM", activity: "Return to hotel" }
//     ],
//     includes: [
//       "Experienced local guide",
//       "Seafood lunch and refreshments",
//       "Transfer from/to hotel",
//       "Beach activities",
//       "Photography service"
//     ]
//   },
//   {
//     id: 4,
//     mini_title: "Bhagwan Mahavir Wildlife Sanctuary",
//     title: "Bhagwan Mahavir Wildlife Sanctuary Multi-Day Trek - 4 Days",
//     description: "Our premium 4-Day Bhagwan Mahavir Wildlife Sanctuary Trek represents the ultimate deep-dive into Goa's magnificent inland wilderness. Covering Goa's largest protected area—spanning over 240 square kilometers of pristine Western Ghats—this expedition offers serious nature enthusiasts an unparalleled opportunity to disconnect from civilization and reconnect with nature's grandeur. The sanctuary, home to diverse wildlife including the elusive black panther, Indian bison, and over 200 bird species, provides the perfect backdrop for this transformative journey.\n\nThe adventure begins near Mollem, where our wildlife specialists provide comprehensive orientation about the sanctuary's ecological significance and the sustainable trekking practices we'll follow. The first day's journey traverses deciduous forests bursting with biodiversity, culminating at the dramatic Devil's Canyon viewpoint where the Mhadei River has carved a spectacular gorge through ancient rock. Each night features carefully selected campsites in clearings that optimize both comfort and immersion in nature, with quality equipment and hearty meals prepared by our experienced trek team.\n\nDay two's highlight is the visit to Tambdi Surla Temple—a 12th-century architectural marvel and Goa's oldest Hindu temple. Built from basalt in the Kadamba-Yadava style, this remote temple survived Portuguese destruction due to its hidden location deep within the forest. The afternoon trek follows ancient pilgrimage routes to a secluded campsite beside a pristine stream, where the evening brings a unique guided experience focusing on the fascinating nocturnal sounds of the forest.\n\nThe journey continues to Sonsogor waterfall on day three—a hidden cascade rarely visited by tourists—where you'll enjoy swimming in natural pools surrounded by pristine forest. The trek then ascends to the sanctuary's highest accessible point, offering breathtaking panoramic views across Goa's verdant hinterland. The final day combines natural and cultural experiences with visits to a specialist butterfly conservatory and a medicinal plant garden, where you'll learn how traditional knowledge of forest plants continues to influence modern medicine.\n\nThroughout this immersive expedition, our professional guides—trained in wilderness first aid, wildlife tracking, and forest ecology—ensure both your safety and a profound educational experience. This trek is ideal for those seeking a genuine wilderness adventure that reveals Goa's lesser-known natural treasures far beyond its famous beaches.",
//     photos: ["images/Packages/trekking/4.jpg", "images/Packages/trekking/4.1.jpg",
//       "images/Packages/trekking/4.2.jpg",
//       "images/Packages/trekking/4.3.jpg",],
//     itinerary: [
//       { day: "Day 1", time: "6:30 AM", activity: "Pickup from hotel in Panjim" },
//       { day: "Day 1", time: "8:30 AM", activity: "Arrive at sanctuary entrance near Mollem" },
//       { day: "Day 1", time: "9:00 AM", activity: "Trek briefing and wildlife spotting introduction" },
//       { day: "Day 1", time: "10:00 AM", activity: "Begin trek through deciduous forests" },
//       { day: "Day 1", time: "1:00 PM", activity: "Lunch at forest clearing" },
//       { day: "Day 1", time: "3:30 PM", activity: "Reach Devil's Canyon viewpoint" },
//       { day: "Day 1", time: "5:00 PM", activity: "Arrive at first camp" },
//       { day: "Day 1", time: "7:00 PM", activity: "Dinner and wildlife presentation" },

//       { day: "Day 2", time: "6:00 AM", activity: "Sunrise trek to bird watching point" },
//       { day: "Day 2", time: "8:00 AM", activity: "Breakfast at camp" },
//       { day: "Day 2", time: "9:30 AM", activity: "Trek to ancient temple ruins" },
//       { day: "Day 2", time: "12:30 PM", activity: "Packed lunch at scenic spot" },
//       { day: "Day 2", time: "2:00 PM", activity: "Continue trek to Tambdi Surla Temple" },
//       { day: "Day 2", time: "4:00 PM", activity: "Explore 12th-century temple architecture" },
//       { day: "Day 2", time: "6:00 PM", activity: "Camp setup near stream" },
//       { day: "Day 2", time: "7:30 PM", activity: "Dinner and night forest sounds experience" },

//       { day: "Day 3", time: "6:30 AM", activity: "Morning meditation and yoga" },
//       { day: "Day 3", time: "8:00 AM", activity: "Breakfast at camp" },
//       { day: "Day 3", time: "9:30 AM", activity: "Trek to Sonsogor waterfall" },
//       { day: "Day 3", time: "12:00 PM", activity: "Swimming and relaxation at waterfall" },
//       { day: "Day 3", time: "2:00 PM", activity: "Packed lunch" },
//       { day: "Day 3", time: "3:30 PM", activity: "Continue trek to highest point of sanctuary" },
//       { day: "Day 3", time: "6:00 PM", activity: "Reach final campsite" },
//       { day: "Day 3", time: "7:30 PM", activity: "Special Goan dinner and cultural stories" },

//       { day: "Day 4", time: "7:00 AM", activity: "Breakfast at camp" },
//       { day: "Day 4", time: "8:30 AM", activity: "Begin descending trek" },
//       { day: "Day 4", time: "11:00 AM", activity: "Visit to butterfly conservatory" },
//       { day: "Day 4", time: "1:00 PM", activity: "Lunch at eco-resort" },
//       { day: "Day 4", time: "2:30 PM", activity: "Short trek to medicinal plant garden" },
//       { day: "Day 4", time: "4:00 PM", activity: "Return journey to hotel" }
//     ],

//     includes: [
//       "Professional wildlife guide and trekking expert",
//       "All camping equipment (tents, sleeping bags)",
//       "All meals (vegetarian and non-vegetarian options)",
//       "Wildlife spotting equipment (binoculars, field guides)",
//       "First aid and emergency support",
//       "Transportation from/to hotel"
//     ]
//   },
//   {
//     id: 5,
//     mini_title: "Moonlight Trek to Chapora Fort",
//     title: "Moonlight Trek to Chapora Fort - Evening Special",
//     description: "Experience Goa's coastal majesty from a completely different perspective with our exclusive Moonlight Trek to Chapora Fort, an enchanting evening journey combining history, breathtaking views, and the magical ambiance of twilight on the Arabian Sea. This specialized trek transforms the familiar into the extraordinary by exploring one of North Goa's iconic landmarks during the most atmospheric hours of the day—sunset through moonrise.\n\nThe adventure begins at vibrant Vagator Beach in the golden afternoon light, with a brief introduction to the historical significance of Chapora Fort in Goa's complex past. As you ascend the winding path up Chapora Hill during 'magic hour,' the warm light bathes the landscape in a photographer's dream palette of gold and amber. Your expert guide will pause at strategic viewpoints, revealing how this strategic position controlled maritime access to the Chapora River—a crucial advantage fought over by successive rulers including the Adil Shahi dynasty and Portuguese colonizers.\n\nUpon reaching the fort's imposing ruins just before sunset, you'll explore the centuries-old fortifications while your guide brings history to life with tales of naval battles, political intrigue, and the fort's famous recent appearance in iconic Indian cinema. The carefully timed arrival positions you perfectly for the main attraction: watching the sun melt into the Arabian Sea horizon from the fort's western ramparts—a spectacle that transforms the sky into a canvas of spectacular colors reflected on the ocean below.\n\nAs twilight deepens into dusk, enjoy an exclusive dining experience unlike any other—a specially prepared traditional Goan dinner served at a private setting within the fort grounds, featuring authentic dishes that connect you to the region's rich culinary heritage. After dinner, as moonlight bathes the landscape in silver, begin the magical descent trek illuminated by traditional lanterns, creating a mystical atmosphere that connects you to travelers of centuries past who navigated these same paths by similar light.\n\nThe evening culminates with a private beach bonfire under star-filled skies, where your guide will point out constellations and share local legends associated with the night sky. This uniquely timed trek offers a completely different experience of Goa's landscape, revealing how the changing light transforms familiar terrain into something magical and mysterious—perfect for couples seeking romance, photographers chasing unique light, or anyone wanting to experience Goa's beauty from a different perspective.",
//     photos: [
//       "images/Packages/trekking/5.jpg",
//       "images/Packages/trekking/5.1.jpg",
//       "images/Packages/trekking/5.2.jpg",
//       "images/Packages/trekking/5.3.jpg",
//     ],
//     itinerary: [
//       { day: "Day 1", time: "3:00 PM", activity: "Pickup from hotel in North Goa" },
//       { day: "Day 1", time: "4:00 PM", activity: "Arrive at Vagator Beach base point" },
//       { day: "Day 1", time: "4:30 PM", activity: "Begin trek up Chapora Hill during golden hour" },
//       { day: "Day 1", time: "5:30 PM", activity: "Reach Chapora Fort" },
//       { day: "Day 1", time: "6:00 PM", activity: "Historical tour of the fort" },
//       { day: "Day 1", time: "6:30 PM", activity: "Sunset viewing from fort walls" },
//       { day: "Day 1", time: "7:30 PM", activity: "Special dinner setup on fort grounds" },
//       { day: "Day 1", time: "8:30 PM", activity: "Begin moonlight descent trek with lanterns" },
//       { day: "Day 1", time: "9:30 PM", activity: "Beach bonfire and stargazing session" },
//       { day: "Day 1", time: "10:30 PM", activity: "Return to hotel" }
//     ],
//     includes: [
//       "Expert guide with knowledge of fort history",
//       "Special sunset dinner with Goan delicacies",
//       "Traditional lanterns for night trek",
//       "Photography service",
//       "Beach bonfire arrangement",
//       "Transportation from/to hotel"
//     ]
//   }
// ];

// packageSets.cultural.packages = [
//   {
//     id: 1,
//     mini_title: "Portuguese Colonial Legacy Tour",
//     title: "Portuguese Colonial Legacy Tour - Architectural Marvels & European Heritage",
//     description: `Immerse yourself in Goa's fascinating Portuguese colonial history with our comprehensive Portuguese Colonial Legacy Tour—a meticulously crafted 3-day journey through magnificent churches, historic mansions, and cultural landmarks that reveal the profound European influence that shaped Goa over 451 years of colonial rule.

// Unlike typical sightseeing tours, this thoughtfully designed experience goes beyond famous facades to provide meaningful context through expert narration, private access to restricted areas, and authentic interactions with keepers of Portuguese-Goan heritage.

// Throughout this immersive cultural experience, our expert guides—trained in colonial history, architecture, and Indo-Portuguese cultural fusion—provide scholarly context while ensuring comfortable logistics between sites. This package delivers far deeper understanding than standard tours, revealing how four and a half centuries of Portuguese presence created Goa's unique cultural landscape that remains distinct from the rest of India.`,
//     photos: [
//       "images/Packages/cultural/1.jpg",
//       "images/Packages/cultural/1.1.jpg",
//       "images/Packages/cultural/1.2.jpg",
//       "images/Packages/cultural/1.3.jpg",
//     ],
//     itinerary: [
//       // Day 1: Old Goa's Sacred Heritage
//       { day: "Day 1", time: "8:30 AM", activity: "Pickup from your hotel in Goa" },
//       { day: "Day 1", time: "9:30 AM", activity: "Arrive at UNESCO World Heritage Site of Old Goa" },
//       { day: "Day 1", time: "10:00 AM", activity: "Guided exploration of Basilica of Bom Jesus with special access" },
//       { day: "Day 1", time: "11:30 AM", activity: "Visit to Sé Cathedral - Asia's largest church" },
//       { day: "Day 1", time: "1:00 PM", activity: "Traditional Portuguese-Goan lunch at heritage restaurant" },
//       { day: "Day 1", time: "2:30 PM", activity: "Archaeological Museum tour with specialist guide" },
//       { day: "Day 1", time: "4:00 PM", activity: "Ferry to Divar Island" },
//       { day: "Day 1", time: "4:30 PM", activity: "Visit to traditional Portuguese-Goan home" },
//       { day: "Day 1", time: "6:00 PM", activity: "Authentic family dinner with cultural stories" },
//       { day: "Day 1", time: "8:00 PM", activity: "Return to hotel" },

//       // Day 2: Fontainhas - The Latin Quarter
//       { day: "Day 2", time: "9:00 AM", activity: "Breakfast at hotel" },
//       { day: "Day 2", time: "10:00 AM", activity: "Walking tour of Fontainhas Latin Quarter" },
//       { day: "Day 2", time: "12:00 PM", activity: "Traditional bakery visit with bread-making demonstration" },
//       { day: "Day 2", time: "1:00 PM", activity: "Authentic Portuguese-Goan lunch experience" },
//       { day: "Day 2", time: "3:00 PM", activity: "Visit to private collection of colonial artifacts" },
//       { day: "Day 2", time: "4:30 PM", activity: "Azulejos tile appreciation workshop" },
//       { day: "Day 2", time: "6:00 PM", activity: "Fado music performance with wine tasting" },
//       { day: "Day 2", time: "7:30 PM", activity: "Dinner at contemporary Portuguese-influenced restaurant" },
//       { day: "Day 2", time: "9:00 PM", activity: "Return to hotel" },

//       // Day 3: Heritage Mansions & Colonial Lifestyle
//       { day: "Day 3", time: "8:30 AM", activity: "Breakfast at hotel" },
//       { day: "Day 3", time: "9:30 AM", activity: "Departure to Chandor village" },
//       { day: "Day 3", time: "10:30 AM", activity: "Exclusive tour of Menezes Braganza Mansion" },
//       { day: "Day 3", time: "12:30 PM", activity: "Traditional lunch at heritage property" },
//       { day: "Day 3", time: "2:00 PM", activity: "Visit to Quepem's Palácio do Deão" },
//       { day: "Day 3", time: "3:30 PM", activity: "Guided garden tour with botanical heritage" },
//       { day: "Day 3", time: "4:30 PM", activity: "Portuguese-Goan tea experience with traditional sweets" },
//       { day: "Day 3", time: "6:00 PM", activity: "Cultural heritage reflection session" },
//       { day: "Day 3", time: "7:30 PM", activity: "Return to hotel" }
//     ],
//     includes: [
//       "Specialist architectural historian guide throughout the tour",
//       "All entrance fees to historical sites and museums",
//       "Special access to restricted areas in heritage buildings",
//       "Private visit to traditional Portuguese-Goan home",
//       "Authentic Portuguese-influenced Goan meals as specified in itinerary",
//       "All transportation in comfortable air-conditioned vehicle",
//       "Azulejos tile appreciation workshop with materials",
//       "Fado music performance with wine tasting",
//       "Heritage mansion visits with special private access",
//       "Portuguese-Goan tea experience with traditional sweets",
//       "Professional photography of architectural highlights (digital copies provided)",
//       "Detailed cultural heritage information booklet",
//       "Bottled water throughout the journey",
//       "All applicable taxes, GST and heritage conservation contributions"
//     ]
//   },
//   {
//     id: 2,
//     mini_title: "Sacred Goa Spiritual Journey",
//     title: "Sacred Goa Spiritual Journey - Temples, Churches & Beyond",
//     description: `Embark on a profound exploration of Goa's remarkably diverse spiritual landscape with our Sacred Goa Spiritual Journey—a thoughtfully designed 3-day experience that transcends ordinary religious tourism to reveal the deep spiritual connections that have shaped this unique region for centuries.
    
//     This carefully balanced itinerary explores sacred sites across multiple faiths, providing meaningful insights into how Hinduism, Catholicism, and other spiritual traditions have coexisted and influenced each other to create Goa's distinctive spiritual character.

//     Throughout this carefully crafted journey, our knowledgeable guides—with backgrounds in comparative religion and local spiritual traditions—provide thoughtful context that helps you understand both historical significance and living spiritual practices. This package offers genuine opportunities for spiritual appreciation across traditions, revealing how Goa's unique religious landscape contributes to its distinctive identity and continuing heritage.`,
//     photos: [
//       "images/Packages/cultural/2.jpg",
//       "images/Packages/cultural/2.1.jpg",
//       "images/Packages/cultural/2.2.jpg",
//       "images/Packages/cultural/2.3.jpg",
//     ],
//     itinerary: [
//       // Day 1: Ancient Roots & Colonial Faith
//       { day: "Day 1", time: "8:00 AM", activity: "Pickup from your hotel in Goa" },
//       { day: "Day 1", time: "9:30 AM", activity: "Visit to 12th-century Mahadeva Temple in Tambdi Surla" },
//       { day: "Day 1", time: "11:00 AM", activity: "Traditional Hindu blessing ceremony" },
//       { day: "Day 1", time: "12:00 PM", activity: "Visit to Brahma temple at Carambolim" },
//       { day: "Day 1", time: "1:30 PM", activity: "Vegetarian lunch prepared according to temple traditions" },
//       { day: "Day 1", time: "3:00 PM", activity: "Exploration of Basilica of Bom Jesus in Old Goa" },
//       { day: "Day 1", time: "4:30 PM", activity: "Visit to adjacent Se Cathedral" },
//       { day: "Day 1", time: "5:30 PM", activity: "Interfaith discussion with local religious representatives" },
//       { day: "Day 1", time: "7:00 PM", activity: "Dinner featuring dishes from different Goan communities" },
//       { day: "Day 1", time: "8:30 PM", activity: "Return to hotel" },

//       // Day 2: Diverse Spiritual Expressions
//       { day: "Day 2", time: "8:30 AM", activity: "Breakfast at hotel" },
//       { day: "Day 2", time: "9:30 AM", activity: "Visit to Safa Masjid with cultural expert" },
//       { day: "Day 2", time: "11:00 AM", activity: "Exploration of Shantadurga Temple" },
//       { day: "Day 2", time: "12:30 PM", activity: "Traditional Saraswat lunch experience" },
//       { day: "Day 2", time: "2:30 PM", activity: "Visit to Konkani household with ancestral shrine" },
//       { day: "Day 2", time: "4:00 PM", activity: "Participation in traditional spiritual ceremonies" },
//       { day: "Day 2", time: "5:30 PM", activity: "Evening aarti ceremony at riverside temple" },
//       { day: "Day 2", time: "7:00 PM", activity: "Dinner with cultural performance" },
//       { day: "Day 2", time: "8:30 PM", activity: "Return to hotel" },

//       // Day 3: Personal Spiritual Connection
//       { day: "Day 3", time: "6:00 AM", activity: "Optional sunrise yoga and meditation (beach location)" },
//       { day: "Day 3", time: "8:00 AM", activity: "Breakfast at hotel" },
//       { day: "Day 3", time: "9:30 AM", activity: "Visit to Shri Mangeshi Temple" },
//       { day: "Day 3", time: "11:30 AM", activity: "Meeting with temple scholars" },
//       { day: "Day 3", time: "1:00 PM", activity: "Traditional Goan-Hindu lunch" },
//       { day: "Day 3", time: "2:30 PM", activity: "Visit to Reis Magos Church" },
//       { day: "Day 3", time: "4:00 PM", activity: "Sunset reflection ceremony" },
//       { day: "Day 3", time: "5:30 PM", activity: "Closing spiritual discussion" },
//       { day: "Day 3", time: "7:00 PM", activity: "Farewell dinner with cultural elements" },
//       { day: "Day 3", time: "8:30 PM", activity: "Return to hotel" }
//     ],
//     includes: [
//       "Expert theological guide with knowledge of multiple faith traditions",
//       "All entrance fees to temples, churches, mosques and sacred sites",
//       "Traditional Hindu blessing ceremony",
//       "Interfaith discussion with local religious representatives",
//       "All meals as specified in itinerary (vegetarian options always available)",
//       "Transportation in comfortable air-conditioned vehicle",
//       "Donations to all religious sites visited",
//       "Participation in traditional spiritual ceremonies",
//       "Sunrise yoga and meditation session with instructor (optional)",
//       "Meeting with temple scholars and religious leaders",
//       "Sunset reflection ceremony materials",
//       "Spiritual guidebook covering Goa's religious diversity",
//       "Prayer materials appropriate for different faiths",
//       "Bottled water throughout the journey",
//       "All applicable taxes and religious site conservation contributions"
//     ]
//   },
//   {
//     id: 3,
//     mini_title: "Goan Culinary Heritage Expedition",
//     title: "Goan Culinary Heritage Expedition - Flavors Through Time",
//     description: `Embark on a sensory journey through Goa's extraordinary gastronomic landscape with our Goan Culinary Heritage Expedition—an immersive 3-day exploration that reveals how history, cultural exchange, and local ingredients have created one of India's most distinctive regional cuisines.

// Unlike typical food tours focusing only on famous dishes, this comprehensive experience traces culinary evolution through Portuguese colonial influence, indigenous Konkani traditions, and the fascinating fusion that occurred over centuries of cultural intermingling, all while providing hands-on cooking experiences with master chefs and home cooks preserving ancestral recipes.

// Throughout this gastronomic adventure, our culinary experts—including food historians, professional chefs, and community cooks—provide rich context connecting each dish to Goa's complex cultural tapestry. This package delivers both immediate sensory pleasure and deeper cultural understanding, revealing how Goa's extraordinary history can be tasted in every bite of its distinctive cuisine.`,
//     photos: [
//       "images/Packages/cultural/3.jpg",
//       "images/Packages/cultural/3.1.jpg",
//       "images/Packages/cultural/3.2.jpg",
//       "images/Packages/cultural/3.3.jpg",
//     ],
//     itinerary: [
//       // Day 1: Portuguese-Goan Fusion
//       { day: "Day 1", time: "7:00 AM", activity: "Pickup from your hotel in Goa" },
//       { day: "Day 1", time: "7:30 AM", activity: "Guided exploration of Mapusa Market with chef" },
//       { day: "Day 1", time: "9:30 AM", activity: "Visit to traditional spice plantation" },
//       { day: "Day 1", time: "11:00 AM", activity: "Interactive spice identification workshop" },
//       { day: "Day 1", time: "12:30 PM", activity: "Traditional plantation lunch with spice education" },
//       { day: "Day 1", time: "2:30 PM", activity: "Cooking class in heritage Portuguese-Goan home" },
//       { day: "Day 1", time: "5:30 PM", activity: "Enjoy feast of prepared Portuguese-influenced dishes" },
//       { day: "Day 1", time: "7:00 PM", activity: "Feni and port wine appreciation session" },
//       { day: "Day 1", time: "8:30 PM", activity: "Return to hotel" },

//       // Day 2: Hindu-Goan Traditions & Local Specialties
//       { day: "Day 2", time: "8:30 AM", activity: "Breakfast at hotel" },
//       { day: "Day 2", time: "9:30 AM", activity: "Saraswat Brahmin cooking class" },
//       { day: "Day 2", time: "12:00 PM", activity: "Lunch featuring prepared vegetarian specialties" },
//       { day: "Day 2", time: "2:00 PM", activity: "Visit to traditional poder (baker)" },
//       { day: "Day 2", time: "3:30 PM", activity: "Bread-making workshop" },
//       { day: "Day 2", time: "5:00 PM", activity: "Visit to fishing village" },
//       { day: "Day 2", time: "6:00 PM", activity: "Seafood preparation demonstration" },
//       { day: "Day 2", time: "7:00 PM", activity: "Traditional seafood feast in village home" },
//       { day: "Day 2", time: "9:00 PM", activity: "Return to hotel" },

//       // Day 3: Artisanal Heritage & Contemporary Innovations
//       { day: "Day 3", time: "9:00 AM", activity: "Breakfast at hotel" },
//       { day: "Day 3", time: "10:00 AM", activity: "Visit to cashew feni distillery with tasting" },
//       { day: "Day 3", time: "11:30 AM", activity: "Artisanal food producer visits (chorizo, balchão, vinegar)" },
//       { day: "Day 3", time: "1:30 PM", activity: "Traditional pickle and preserve making workshop" },
//       { day: "Day 3", time: "3:00 PM", activity: "Sweet-making demonstration (bebinca, dodol, pinaca)" },
//       { day: "Day 3", time: "5:00 PM", activity: "Rest and refresh at hotel" },
//       { day: "Day 3", time: "7:00 PM", activity: "Curated tasting menu at acclaimed restaurant" },
//       { day: "Day 3", time: "9:30 PM", activity: "Return to hotel" }
//     ],
//     includes: [
//       "Professional chef guide for market tour",
//       "All cooking class sessions with ingredients and equipment",
//       "Market visit with ingredient shopping",
//       "Spice plantation tour with spice identification workshop",
//       "All meals mentioned in itinerary including special dining experiences",
//       "Transportation in comfortable air-conditioned vehicle",
//       "Traditional cooking demonstrations in authentic settings",
//       "Hands-on cooking sessions (3 distinct cuisines)",
//       "Feni and port wine appreciation session with tastings",
//       "Bread-making workshop with traditional baker",
//       "Seafood preparation demonstration with fishing community",
//       "Visit to cashew feni distillery with tasting",
//       "Artisanal food producer visits (chorizo, balchão, vinegar)",
//       "Sweet-making demonstration (bebinca, dodol, pinaca)",
//       "Curated tasting menu at acclaimed restaurant",
//       "Comprehensive recipe collection of all dishes prepared",
//       "Curated selection of Goan spice blends to take home",
//       "Bottled water throughout the journey",
//       "All applicable taxes and service charges"
//     ]
//   },
//   {
//     id: 4,
//     mini_title: "Village Lifestyles of Goa",
//     title: "Village Lifestyles of Goa - Rural Cultural Immersion",
//     description: `Experience the soul of authentic Goa beyond tourist trails with our immersive Village Lifestyles of Goa package—a thoughtfully designed 3-day journey into the heart of rural communities where ancient traditions, sustainable practices, and genuine hospitality reveal a Goa few visitors ever discover.

// This carefully crafted cultural immersion connects you with village artisans, farmers, and families who maintain centuries-old ways of life while adapting to the modern world, offering profound insights into Goan cultural identity through meaningful personal interactions rather than staged tourist demonstrations.

// Throughout this immersive journey, our community facilitators—themselves from local villages—provide thoughtful context while ensuring respectful interaction with host communities. This package transcends superficial cultural tourism to create genuine connections with rural Goans maintaining living traditions that define the region's authentic character beyond beach resorts and tourist attractions.`,
//     photos: [
//       "images/Packages/cultural/4.jpeg",
//       "images/Packages/cultural/4.1.jpg",
//       "images/Packages/cultural/4.2.jpg",
//       "images/Packages/cultural/4.3.jpg",
//     ],
//     itinerary: [
//       // Day 1: Traditional Livelihoods & Sustainable Practices
//       { day: "Day 1", time: "8:00 AM", activity: "Pickup from your hotel in Goa" },
//       { day: "Day 1", time: "9:00 AM", activity: "Visit to traditional pottery village" },
//       { day: "Day 1", time: "10:00 AM", activity: "Hands-on pottery workshop with master artisans" },
//       { day: "Day 1", time: "12:30 PM", activity: "Home-cooked lunch with potter family" },
//       { day: "Day 1", time: "2:00 PM", activity: "Seasonal agricultural experience (cashew/paddy)" },
//       { day: "Day 1", time: "4:00 PM", activity: "Traditional toddy tapping demonstration" },
//       { day: "Day 1", time: "5:30 PM", activity: "Village evening rituals and interactions" },
//       { day: "Day 1", time: "7:00 PM", activity: "Community dinner with local families" },
//       { day: "Day 1", time: "8:30 PM", activity: "Return to hotel or optional homestay" },

//       // Day 2: Village Crafts & Cultural Expression
//       { day: "Day 2", time: "8:30 AM", activity: "Breakfast at accommodation" },
//       { day: "Day 2", time: "9:30 AM", activity: "Traditional kunbi weaving household visit" },
//       { day: "Day 2", time: "11:00 AM", activity: "Natural dyeing and basic weaving experience" },
//       { day: "Day 2", time: "1:00 PM", activity: "Lunch with weaver family" },
//       { day: "Day 2", time: "2:30 PM", activity: "Visit to master coir rope makers" },
//       { day: "Day 2", time: "4:00 PM", activity: "Folk music immersion with village musicians" },
//       { day: "Day 2", time: "5:30 PM", activity: "Participation in village festival preparations (seasonal)" },
//       { day: "Day 2", time: "7:00 PM", activity: "Community dinner with cultural sharing" },
//       { day: "Day 2", time: "8:30 PM", activity: "Return to hotel or continue homestay" },

//       // Day 3: Traditional Wellness & Domestic Arts
//       { day: "Day 3", time: "8:00 AM", activity: "Breakfast at accommodation" },
//       { day: "Day 3", time: "9:00 AM", activity: "Visit to traditional herbal medicine practitioner" },
//       { day: "Day 3", time: "10:30 AM", activity: "Medicinal preparation workshop" },
//       { day: "Day 3", time: "12:30 PM", activity: "Healing foods lunch experience" },
//       { day: "Day 3", time: "2:00 PM", activity: "Village home cooking session" },
//       { day: "Day 3", time: "4:30 PM", activity: "Community service activity (optional)" },
//       { day: "Day 3", time: "6:00 PM", activity: "Traditional farewell ceremony" },
//       { day: "Day 3", time: "7:30 PM", activity: "Final dinner with host community" },
//       { day: "Day 3", time: "9:00 PM", activity: "Return to hotel" }
//     ],
//     includes: [
//       "Community facilitator from local villages",
//       "Hands-on pottery workshop with master artisans",
//       "Seasonal agricultural experience participation",
//       "Traditional toddy tapping demonstration and tasting",
//       "All meals as specified (authentic village cuisine)",
//       "Homestay option (1-2 nights) or return transfers to hotel",
//       "Natural dyeing and basic weaving experience with materials",
//       "Visit to master coir rope makers with demonstration",
//       "Folk music immersion with village musicians",
//       "Participation in village festival preparations (seasonal)",
//       "Traditional herbal medicine practitioner consultation",
//       "Medicinal preparation workshop with materials",
//       "Village home cooking session with ingredients",
//       "Community service activity materials (optional)",
//       "Traditional farewell ceremony",
//       "Handcrafted village souvenir",
//       "Transportation in suitable vehicle (including rural access)",
//       "Translation services for local dialects",
//       "Contribution to village development fund",
//       "All applicable taxes and community fees"
//     ]
//   },
//   {
//     id: 5,
//     mini_title: "Festivals of Goa Experience",
//     title: "Festivals of Goa Experience - Celebration & Tradition",
//     description: `Immerse yourself in the vibrant celebratory spirit of Goa with our exceptional Festivals of Goa Experience—a dynamic cultural journey that synchronizes with the region's most significant celebrations to provide authentic participation rather than mere observation.

// This specialized package adapts to Goa's festival calendar, allowing you to meaningfully engage with celebrations that reveal profound aspects of Goan identity through shared joy, spiritual devotion, and community traditions maintained for generations. Rather than viewing festivals as a tourist spectator, you'll be guided into appropriate participation that respects local customs while creating unforgettable personal connections.

// Throughout the festival period, specially arranged meals showcase traditional festival cuisine—dishes prepared only during specific celebrations that often hold symbolic significance and cultural memory. By synchronizing your visit with these significant cultural moments, you'll experience dimensions of Goan heritage impossible to access during ordinary tourism, creating memories of shared celebration that reveal the true spirit of this extraordinary cultural crossroads.`,
//     photos: [
//       "images/Packages/cultural/5.jpeg",
//       "images/Packages/cultural/5.1.jpg",
//       "images/Packages/cultural/5.2.jpg",
//       "images/Packages/cultural/5.3.jpg",
//     ],
//     itinerary: [
//       // Day 1: Festival Preparation & Cultural Context
//       { day: "Day 1", time: "9:00 AM", activity: "Pickup from your hotel in Goa" },
//       { day: "Day 1", time: "10:00 AM", activity: "Orientation session with cultural expert on Shigmo significance" },
//       { day: "Day 1", time: "11:30 AM", activity: "Visit to village preparing for Shigmo celebrations" },
//       { day: "Day 1", time: "1:00 PM", activity: "Traditional pre-festival lunch with community members" },
//       { day: "Day 1", time: "2:30 PM", activity: "Participation in folk dance rehearsal for procession" },
//       { day: "Day 1", time: "4:00 PM", activity: "Visit to artisans creating Shigmo decorations and floats" },
//       { day: "Day 1", time: "5:30 PM", activity: "Assist with decoration of community celebration space" },
//       { day: "Day 1", time: "7:00 PM", activity: "Dinner with festival committee members" },
//       { day: "Day 1", time: "8:30 PM", activity: "Evening folk music session" },
//       { day: "Day 1", time: "10:00 PM", activity: "Return to hotel" },

//       // Day 2: Main Festival Celebrations
//       { day: "Day 2", time: "10:00 AM", activity: "Late breakfast at hotel" },
//       { day: "Day 2", time: "11:30 AM", activity: "Visit to temple ceremonies marking festival beginning" },
//       { day: "Day 2", time: "1:00 PM", activity: "Festival special lunch with local family" },
//       { day: "Day 2", time: "3:00 PM", activity: "Privileged viewing position for main Shigmo procession" },
//       { day: "Day 2", time: "5:00 PM", activity: "Guided participation in appropriate community celebrations" },
//       { day: "Day 2", time: "7:00 PM", activity: "Traditional festival dinner experience" },
//       { day: "Day 2", time: "8:30 PM", activity: "Evening folk performances and celebrations" },
//       { day: "Day 2", time: "10:30 PM", activity: "Return to hotel" },

//       // Day 3: Spiritual Aspects & Reflection
//       { day: "Day 3", time: "9:00 AM", activity: "Breakfast at hotel" },
//       { day: "Day 3", time: "10:30 AM", activity: "Visit to culminating religious ceremonies" },
//       { day: "Day 3", time: "12:00 PM", activity: "Meeting with community elders to discuss festival significance" },
//       { day: "Day 3", time: "1:30 PM", activity: "Final festival special meal" },
//       { day: "Day 3", time: "3:00 PM", activity: "Participation in closing rituals where appropriate" },
//       { day: "Day 3", time: "4:30 PM", activity: "Cultural reflection session with festival performers" },
//       { day: "Day 3", time: "6:00 PM", activity: "Farewell dinner with festival hosts" },
//       { day: "Day 3", time: "8:00 PM", activity: "Return to hotel" }
//     ],
//     includes: [
//       "Cultural expert specializing in specific festival traditions",
//       "Orientation session on festival significance and etiquette",
//       "Participation in pre-festival preparations with community",
//       "All festival special meals as mentioned in itinerary",
//       "Transportation in comfortable air-conditioned vehicle",
//       "Privileged viewing positions for processions and performances",
//       "Guided participation in appropriate community celebrations",
//       "Meetings with key festival participants and organizers",
//       "Special access to community celebrations not open to tourists",
//       "Festival-specific cultural activities (varies by celebration)",
//       "Traditional clothing rental if required for appropriate participation",
//       "Festival special food tastings",
//       "Cultural reflection sessions with performers",
//       "Festival-specific souvenir",
//       "Festival guidebook with historical and cultural context",
//       "Professional photography of key festival moments",
//       "Contributions to festival community organizations",
//       "All applicable taxes and festival participation fees"
//     ]
//   }
// ];

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
    "images/Packages/discover/leh-palace.jpg",
    "images/Packages/discover/nubra-landscape.jpg",
    "images/Packages/discover/pangong-sunset.jpg",
    "images/Packages/discover/hemis-monastery.jpg"
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
    "images/Packages/discover/evening-pangong.jpg",
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
    "images/Packages/discover/monastery-view.jpg",
    "images/Packages/discover/changthang.jpg"
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
    "images/Packages/discover/lamayuru-monastery.jpg",
    "images/Packages/discover/turtuk-culture.jpg",
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
    "images/Packages/discover/changthang-wilderness.jpg",
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

// packageSets.adventure.packages = [
//   {
//     id: 1,
//     mini_title: "Goa Multi-Sport Adventure",
//     title: "Goa Multi-Sport Adventure - Ultimate Active Experience",
//     description: `Experience Goa's diverse landscapes through exhilarating physical challenges with our comprehensive Goa Multi-Sport Adventure—an action-packed 3-day journey combining water sports, land adventures, and aerial experiences designed for active travelers seeking variety and excitement.

// Unlike single-activity adventures, this thoughtfully sequenced package builds progressive thrills while exploring dramatically different Goan environments—from rushing rivers and dense forests to coastal cliffs and pristine beaches. Whether you're an established adventure enthusiast or newcomer to active travel, our professional guides customize each activity to your experience level while ensuring both safety and genuine adventure across multiple sport disciplines.`,
//     photos: [
//       "images/Packages/adventure/1.jpg",
//       "images/Packages/adventure/1.1.jpg",
//       "images/Packages/adventure/1.2.jpg",
//       "images/Packages/adventure/1.3.jpg",
//     ],
//     itinerary: [
//       // Day 1: Water & Vertical Challenges
//       { day: "Day 1", time: "8:00 AM", activity: "Pickup from your hotel in Goa" },
//       { day: "Day 1", time: "9:00 AM", activity: "Kayaking orientation and safety briefing" },
//       { day: "Day 1", time: "9:30 AM", activity: "Guided kayaking expedition on Mandovi River" },
//       { day: "Day 1", time: "12:30 PM", activity: "Riverside lunch with adventure briefing" },
//       { day: "Day 1", time: "2:00 PM", activity: "Rock climbing at natural formations near Arambol" },
//       { day: "Day 1", time: "5:00 PM", activity: "Sunset rappelling down coastal cliffs" },
//       { day: "Day 1", time: "7:00 PM", activity: "Adventure dinner with day's highlights review" },
//       { day: "Day 1", time: "8:30 PM", activity: "Return to hotel" },

//       // Day 2: Trail & River Adventures
//       { day: "Day 2", time: "7:30 AM", activity: "Breakfast at hotel" },
//       { day: "Day 2", time: "8:30 AM", activity: "Transfer to Western Ghats foothills" },
//       { day: "Day 2", time: "9:30 AM", activity: "Mountain bike fitting and safety orientation" },
//       { day: "Day 2", time: "10:00 AM", activity: "Guided mountain biking expedition" },
//       { day: "Day 2", time: "12:30 PM", activity: "Picnic lunch at scenic viewpoint" },
//       { day: "Day 2", time: "2:30 PM", activity: "Continue biking to pristine river location" },
//       { day: "Day 2", time: "3:30 PM", activity: "Stand-up paddleboarding instruction" },
//       { day: "Day 2", time: "5:00 PM", activity: "Optional SUP yoga session" },
//       { day: "Day 2", time: "6:30 PM", activity: "Dinner at riverside restaurant" },
//       { day: "Day 2", time: "8:00 PM", activity: "Return to hotel" },

//       // Day 3: Sky & Sea Excitement
//       { day: "Day 3", time: "8:00 AM", activity: "Breakfast at hotel" },
//       { day: "Day 3", time: "9:00 AM", activity: "Transfer to beach location" },
//       { day: "Day 3", time: "9:30 AM", activity: "Extended parasailing experience with instruction" },
//       { day: "Day 3", time: "11:00 AM", activity: "Introductory windsurfing lesson" },
//       { day: "Day 3", time: "1:00 PM", activity: "Beachside lunch with water sports briefing" },
//       { day: "Day 3", time: "2:30 PM", activity: "Progressive jet ski adventures" },
//       { day: "Day 3", time: "4:30 PM", activity: "Group banana boat experience" },
//       { day: "Day 3", time: "5:30 PM", activity: "Sunset refreshments and adventure certificate presentation" },
//       { day: "Day 3", time: "7:00 PM", activity: "Farewell dinner at beach restaurant" },
//       { day: "Day 3", time: "8:30 PM", activity: "Return to hotel" }
//     ],
//     includes: [
//       "Certified adventure specialists for each activity (kayaking, climbing, mountain biking, paddleboarding, parasailing, windsurfing, jet ski)",
//       "All necessary activity equipment including safety gear",
//       "Quality mountain bikes with full suspension",
//       "Professional-grade climbing equipment with safety systems",
//       "River kayaks with appropriate safety equipment",
//       "Stand-up paddleboards and instruction",
//       "Extended parasailing experience",
//       "Introductory windsurfing lesson with equipment",
//       "Progressive jet ski adventure with guide",
//       "Banana boat experience",
//       "All transportation between adventure locations",
//       "Meals as specified in itinerary (3 lunches, 3 dinners)",
//       "Energy snacks and hydration during activities",
//       "Adventure certificate of completion",
//       "First aid and safety equipment at all locations",
//       "Activity photos in digital format",
//       "All applicable activity taxes and insurance",
//       "Adventure logbook documenting experiences"
//     ]
//   },
//   {
//     id: 2,
//     mini_title: "Whitewater Rafting & River Adventures",
//     title: "Whitewater Rafting & River Adventures - Monsoon Thrills",
//     description: `Experience the spectacular transformation of Goa's rivers during monsoon season with our exhilarating Whitewater Rafting & River Adventures package—a specialized 3-day journey timed perfectly to capture the thrilling seasonal surge of Goa's inland waterways.

// Unlike typical beach-focused Goan holidays, this unique adventure reveals the dynamic inland water systems that come alive between June and September, when monsoon rains create world-class rafting conditions across multiple river systems. Designed for both rafting enthusiasts and adventurous first-timers, this carefully structured program builds progressive whitewater experiences while incorporating diverse river-based activities that connect you intimately with Goa's monsoon-transformed landscapes.`,
//     photos: [
//       "images/Packages/adventure/2.jpg",
//       "images/Packages/adventure/2.1.jpg",
//       "images/Packages/adventure/2.2.jpg",
//       "images/Packages/adventure/2.3.jpg",
//     ],
//     itinerary: [
//       // Day 1: Introduction to River Adventures
//       { day: "Day 1", time: "8:00 AM", activity: "Pickup from your hotel in Goa" },
//       { day: "Day 1", time: "9:30 AM", activity: "Arrive at Mhadei River base" },
//       { day: "Day 1", time: "10:00 AM", activity: "Comprehensive rafting orientation and safety briefing" },
//       { day: "Day 1", time: "10:30 AM", activity: "Begin Class I-II whitewater rafting expedition" },
//       { day: "Day 1", time: "1:00 PM", activity: "Riverside lunch with river ecology discussion" },
//       { day: "Day 1", time: "2:30 PM", activity: "Introduction to river kayaking with professional instruction" },
//       { day: "Day 1", time: "5:00 PM", activity: "Free time for swimming in safe river sections" },
//       { day: "Day 1", time: "6:30 PM", activity: "Unique riverside dining experience" },
//       { day: "Day 1", time: "8:30 PM", activity: "Return to hotel or riverside accommodation" },

//       // Day 2: Mahadayi River Expedition
//       { day: "Day 2", time: "7:30 AM", activity: "Breakfast at accommodation" },
//       { day: "Day 2", time: "8:30 AM", activity: "Transfer to Mahadayi River start point" },
//       { day: "Day 2", time: "9:30 AM", activity: "Advanced rafting briefing and equipment preparation" },
//       { day: "Day 2", time: "10:00 AM", activity: "Begin full-day Class II-III rafting expedition" },
//       { day: "Day 2", time: "12:30 PM", activity: "Lunch at seasonal waterfall location" },
//       { day: "Day 2", time: "1:30 PM", activity: "Continue rafting through premier rapid sections" },
//       { day: "Day 2", time: "3:30 PM", activity: "Body floating experience in calm river sections" },
//       { day: "Day 2", time: "5:00 PM", activity: "Optional cliff jumping at safe locations" },
//       { day: "Day 2", time: "6:30 PM", activity: "Post-adventure dinner with expedition photos review" },
//       { day: "Day 2", time: "8:30 PM", activity: "Return to accommodation" },

//       // Day 3: Canyoning & Wild Swimming
//       { day: "Day 3", time: "8:00 AM", activity: "Breakfast at accommodation" },
//       { day: "Day 3", time: "9:00 AM", activity: "Transfer to canyoning start point" },
//       { day: "Day 3", time: "9:30 AM", activity: "Canyoning safety briefing and equipment fitting" },
//       { day: "Day 3", time: "10:00 AM", activity: "Begin guided canyoning expedition through monsoon-fed canyon" },
//       { day: "Day 3", time: "1:00 PM", activity: "Picnic lunch in canyon setting" },
//       { day: "Day 3", time: "2:30 PM", activity: "Hike to seasonal plunge waterfall viewpoint" },
//       { day: "Day 3", time: "4:00 PM", activity: "Guided wild swimming experience in natural pools" },
//       { day: "Day 3", time: "6:00 PM", activity: "Farewell celebration with adventure highlights video" },
//       { day: "Day 3", time: "7:30 PM", activity: "Return to hotel" }
//     ],
//     includes: [
//       "Internationally certified whitewater rafting guides",
//       "Professional canyoning instructors",
//       "All specialist river equipment and rafts",
//       "Professional-grade personal flotation devices",
//       "Whitewater helmets and safety equipment",
//       "River kayaking equipment and instruction",
//       "Canyoning gear including harnesses and helmets",
//       "All meals as specified in itinerary (3 lunches, 3 dinners)",
//       "Riverside dining experience",
//       "Transportation to all river locations",
//       "Cliff jumping safety supervision",
//       "Wild swimming guide at natural pools",
//       "Adventure photos and videos in digital format",
//       "River safety instruction and training",
//       "Waterproof containers for personal items",
//       "First aid and swift water rescue equipment",
//       "All applicable permits and river usage fees",
//       "Monsoon season river expedition certificate"
//     ]
//   },
//   {
//     id: 3,
//     mini_title: "Mountain Biking & Cycle Tours",
//     title: "Mountain Biking & Cycle Tours - Two-Wheel Exploration",
//     description: `Discover Goa's hidden landscapes and vibrant cultures through human-powered adventure with our comprehensive Mountain Biking & Cycle Tours package—a perfectly balanced 3-day journey combining thrilling off-road terrain, scenic coastal paths, and charming rural byways impossible to experience through motorized travel.

// Unlike standard bicycle rentals or brief guided rides, this thoughtfully structured program provides progressive cycling experiences across dramatically different Goan environments—from challenging single-track forest trails and plantation paths to serene coastal routes and village backroads. Whether you're an experienced mountain biker seeking technical challenges or casual cyclist wanting scenic exploration, our expert guides customize each ride to create your perfect two-wheeled adventure.`,
//     photos: [
//       "images/Packages/adventure/3.jpg",
//       "images/Packages/adventure/3.1.jpg",
//       "images/Packages/adventure/3.2.jpg",
//       "images/Packages/adventure/3.3.jpg",
//     ],
//     itinerary: [
//       // Day 1: Forest Trails & Natural Wonders
//       { day: "Day 1", time: "7:30 AM", activity: "Pickup from your hotel in Goa" },
//       { day: "Day 1", time: "8:30 AM", activity: "Arrive at cycling base for professional bike fitting" },
//       { day: "Day 1", time: "9:00 AM", activity: "Safety briefing and mountain biking technique instruction" },
//       { day: "Day 1", time: "9:30 AM", activity: "Begin guided forest trail expedition in Western Ghats foothills" },
//       { day: "Day 1", time: "11:30 AM", activity: "Reach panoramic viewpoint for rest and photos" },
//       { day: "Day 1", time: "12:30 PM", activity: "Flowing descent to hidden waterfall" },
//       { day: "Day 1", time: "1:30 PM", activity: "Picnic lunch and swimming at waterfall" },
//       { day: "Day 1", time: "3:00 PM", activity: "Cycle to organic spice plantation" },
//       { day: "Day 1", time: "3:30 PM", activity: "Guided plantation tour with spice tasting" },
//       { day: "Day 1", time: "5:00 PM", activity: "Return ride through scenic plantation trails" },
//       { day: "Day 1", time: "6:30 PM", activity: "Dinner with cycling route review for next day" },
//       { day: "Day 1", time: "8:00 PM", activity: "Return to hotel" },

//       // Day 2: Cultural Heritage Cycle Route
//       { day: "Day 2", time: "8:00 AM", activity: "Breakfast at hotel" },
//       { day: "Day 2", time: "9:00 AM", activity: "Transfer to heritage route starting point" },
//       { day: "Day 2", time: "9:30 AM", activity: "Begin cultural cycling exploration" },
//       { day: "Day 2", time: "10:30 AM", activity: "Visit to traditional pottery village" },
//       { day: "Day 2", time: "11:30 AM", activity: "Cycle to rural feni distillery with demonstration" },
//       { day: "Day 2", time: "12:30 PM", activity: "Continue to weaving cooperative" },
//       { day: "Day 2", time: "1:30 PM", activity: "Special home-cooked lunch at traditional Goan house" },
//       { day: "Day 2", time: "3:00 PM", activity: "Scenic riverside cycling route" },
//       { day: "Day 2", time: "4:00 PM", activity: "Visit to ancient petroglyph site" },
//       { day: "Day 2", time: "5:30 PM", activity: "Cycle to day's endpoint" },
//       { day: "Day 2", time: "6:30 PM", activity: "Dinner at rural restaurant with local musicians" },
//       { day: "Day 2", time: "8:00 PM", activity: "Return to hotel" },

//       // Day 3: Coastal Paradise Cycling
//       { day: "Day 3", time: "6:30 AM", activity: "Early breakfast at hotel" },
//       { day: "Day 3", time: "7:30 AM", activity: "Transfer to coastal route starting point" },
//       { day: "Day 3", time: "8:00 AM", activity: "Begin dawn coastal cycling experience" },
//       { day: "Day 3", time: "9:30 AM", activity: "Visit to traditional boat building village" },
//       { day: "Day 3", time: "11:00 AM", activity: "Cycle through private coastal nature reserve" },
//       { day: "Day 3", time: "12:30 PM", activity: "Arrive at remote beach for seafood lunch" },
//       { day: "Day 3", time: "2:00 PM", activity: "Beach relaxation time with swimming" },
//       { day: "Day 3", time: "3:30 PM", activity: "Begin return journey along coastal paths" },
//       { day: "Day 3", time: "5:30 PM", activity: "Sunset coastal cycling experience" },
//       { day: "Day 3", time: "7:00 PM", activity: "Farewell dinner celebration" },
//       { day: "Day 3", time: "8:30 PM", activity: "Return to hotel" }
//     ],
//     includes: [
//       "Professional cycling guides with local expertise",
//       "Quality mountain bikes with front suspension (full suspension upgrade available)",
//       "Bicycle helmets and safety equipment",
//       "Professional bike fitting session",
//       "Support vehicle throughout the journey",
//       "All meals as specified in itinerary (3 lunches, 3 dinners)",
//       "Water and energy snacks during rides",
//       "Spice plantation guided tour with tasting",
//       "Traditional pottery village demonstration",
//       "Rural feni distillery visit with tasting",
//       "Weaving cooperative cultural experience",
//       "Special home-cooked lunch at traditional Goan house",
//       "Ancient petroglyph site entrance",
//       "Private coastal nature reserve access",
//       "Traditional boat building village visit",
//       "Mechanical support and basic repairs",
//       "First aid and emergency support",
//       "Cycling route maps and elevation profiles",
//       "All applicable entrance fees and permits"
//     ]
//   },
//   {
//     id: 4,
//     mini_title: "Yoga & Wellness Adventure Retreat",
//     title: "Yoga & Wellness Adventure Retreat - Active Rejuvenation",
//     description: `Harmonize mind, body, and spirit while exploring Goa's natural beauty with our transformative Yoga & Wellness Adventure Retreat—a perfectly balanced 3-day journey combining revitalizing yoga practices, mindful adventures in nature, and holistic wellness experiences.

// Unlike conventional yoga retreats confined to single locations or adventure tours lacking mindful elements, this innovative program integrates thoughtfully sequenced yoga sessions in spectacular natural settings with active adventures that become moving meditations—creating a unique mind-body experience that rejuvenates at multiple levels. Whether you're an established yoga practitioner or wellness-curious beginner, our expert instructors customize practices to your experience level while our adventure guides ensure safe, accessible nature experiences that complement the wellness journey.`,
//     photos: [
//       "images/Packages/adventure/4.jpg",
//       "images/Packages/adventure/4.1.jpg",
//       "images/Packages/adventure/4.2.jpg",
//       "images/Packages/adventure/4.3.jpg",
//     ],
//     itinerary: [
//       // Day 1: Coastal Wellness Immersion
//       { day: "Day 1", time: "6:00 AM", activity: "Pickup from your hotel in Goa" },
//       { day: "Day 1", time: "6:30 AM", activity: "Sunrise beach yoga session" },
//       { day: "Day 1", time: "8:00 AM", activity: "Nutritious breakfast with wellness introduction" },
//       { day: "Day 1", time: "9:30 AM", activity: "Guided silent walking meditation along shoreline" },
//       { day: "Day 1", time: "11:00 AM", activity: "Mindful sea kayaking to hidden coves" },
//       { day: "Day 1", time: "1:00 PM", activity: "Organic farm-to-table lunch" },
//       { day: "Day 1", time: "3:00 PM", activity: "Restorative beach yoga session" },
//       { day: "Day 1", time: "4:30 PM", activity: "Guided breathwork workshop" },
//       { day: "Day 1", time: "6:00 PM", activity: "Sunset meditation practice" },
//       { day: "Day 1", time: "7:30 PM", activity: "Holistic dinner with wellness discussion" },
//       { day: "Day 1", time: "9:00 PM", activity: "Return to hotel or wellness accommodation" },

//       // Day 2: Forest Connection & Mindful Nourishment
//       { day: "Day 2", time: "5:30 AM", activity: "Light morning tea" },
//       { day: "Day 2", time: "6:00 AM", activity: "Sunrise hilltop yoga session" },
//       { day: "Day 2", time: "7:30 AM", activity: "Balanced breakfast with mindfulness practice" },
//       { day: "Day 2", time: "9:00 AM", activity: "Forest trail hike with movement meditation" },
//       { day: "Day 2", time: "11:30 AM", activity: "Water yoga at secluded waterfall" },
//       { day: "Day 2", time: "1:00 PM", activity: "Mindful picnic lunch in nature" },
//       { day: "Day 2", time: "2:30 PM", activity: "Visit to organic farm with mindful harvesting" },
//       { day: "Day 2", time: "4:00 PM", activity: "Ayurvedic cooking workshop" },
//       { day: "Day 2", time: "6:30 PM", activity: "Dinner featuring prepared dishes" },
//       { day: "Day 2", time: "8:00 PM", activity: "Evening relaxation practice" },
//       { day: "Day 2", time: "9:00 PM", activity: "Return to accommodation" },

//       // Day 3: Integration & Transformation
//       { day: "Day 3", time: "6:30 AM", activity: "Morning tea with silent sitting" },
//       { day: "Day 3", time: "7:00 AM", activity: "Comprehensive yoga practice" },
//       { day: "Day 3", time: "8:30 AM", activity: "Nourishing breakfast" },
//       { day: "Day 3", time: "10:00 AM", activity: "Sound healing experience" },
//       { day: "Day 3", time: "11:30 AM", activity: "Mindful stand-up paddleboarding" },
//       { day: "Day 3", time: "1:30 PM", activity: "Light lunch with nutrition discussion" },
//       { day: "Day 3", time: "3:00 PM", activity: "Partner yoga and Thai massage workshop" },
//       { day: "Day 3", time: "5:00 PM", activity: "Sunset yoga ceremony at coastal location" },
//       { day: "Day 3", time: "7:00 PM", activity: "Plant-based farewell celebration dinner" },
//       { day: "Day 3", time: "8:30 PM", activity: "Return to hotel" }
//     ],
//     includes: [
//       "Certified yoga instructors specialized in multiple traditions",
//       "Mindfulness coaches for meditation practices",
//       "Wellness-oriented adventure guides",
//       "All yoga equipment (mats, blocks, straps, blankets)",
//       "Sea kayaking equipment and instruction",
//       "Stand-up paddleboarding equipment and guidance",
//       "All meals as specified - organic, locally sourced, nutritionally balanced",
//       "Specialized wellness workshops (breathwork, sound healing, Thai massage)",
//       "Water yoga session at secluded waterfall",
//       "Organic farm visit with mindful harvesting",
//       "Ayurvedic cooking workshop with ingredients",
//       "Plant-based farewell celebration dinner",
//       "Transportation between all wellness locations",
//       "Wellness journal for personal reflections",
//       "Herbal teas and detox waters throughout",
//       "Digital access to recorded meditation sessions",
//       "First aid and safety equipment",
//       "All applicable wellness workshop materials",
//       "Personalized wellness plan to continue practices"
//     ]
//   },
//   {
//     id: 5,
//     mini_title: "Sailing & Nautical Adventures",
//     title: "Sailing & Nautical Adventures - Maritime Exploration",
//     description: `Experience the freedom and excitement of exploring Goa's magnificent coastline under sail with our comprehensive Sailing & Nautical Adventures package—a 3-day journey combining hands-on sailing experiences, nautical skill development, and unforgettable maritime exploration.

// Unlike passive boat tours or brief sailing excursions, this immersive program provides progressive opportunities to actively participate in sailing beautiful vessels while discovering secluded coastal locations accessible only by water. Whether you're an experienced sailor seeking to enhance skills or a complete novice drawn to nautical adventure, our professional instructors ensure appropriate challenges while revealing the special magic of experiencing Goa from offshore perspectives rarely enjoyed by land-bound travelers.`,
//     photos: [
//       "images/Packages/adventure/5.jpg",
//       "images/Packages/adventure/5.1.jpg",
//       "images/Packages/adventure/5.2.jpg",
//       "images/Packages/adventure/5.3.jpg",
//     ],
//     itinerary: [
//       // Day 1: Sailing Yacht Experience
//       { day: "Day 1", time: "8:30 AM", activity: "Pickup from your hotel in Goa" },
//       { day: "Day 1", time: "9:30 AM", activity: "Arrival at premier sailing center" },
//       { day: "Day 1", time: "10:00 AM", activity: "Comprehensive sailing orientation and safety briefing" },
//       { day: "Day 1", time: "11:00 AM", activity: "Board sailing yacht and begin hands-on instruction" },
//       { day: "Day 1", time: "12:30 PM", activity: "Active participation in coastal sailing journey" },
//       { day: "Day 1", time: "2:00 PM", activity: "Anchor at secluded bay for swimming" },
//       { day: "Day 1", time: "2:30 PM", activity: "Gourmet lunch aboard with coastal views" },
//       { day: "Day 1", time: "3:30 PM", activity: "Afternoon sailing with progressive helm experience" },
//       { day: "Day 1", time: "6:00 PM", activity: "Offshore sunset viewing experience" },
//       { day: "Day 1", time: "7:30 PM", activity: "Return to harbor" },
//       { day: "Day 1", time: "8:00 PM", activity: "Dinner at maritime restaurant with sailing discussion" },
//       { day: "Day 1", time: "9:30 PM", activity: "Return to hotel" },

//       // Day 2: Catamaran Adventure & Overnight Experience
//       { day: "Day 2", time: "9:00 AM", activity: "Breakfast at hotel" },
//       { day: "Day 2", time: "10:00 AM", activity: "Transfer to catamaran sailing base" },
//       { day: "Day 2", time: "10:30 AM", activity: "Multihull sailing instruction and orientation" },
//       { day: "Day 2", time: "11:30 AM", activity: "Begin catamaran sailing to Grande Island" },
//       { day: "Day 2", time: "1:00 PM", activity: "Lunch aboard catamaran in marine sanctuary" },
//       { day: "Day 2", time: "2:30 PM", activity: "Guided snorkeling at vibrant reef locations" },
//       { day: "Day 2", time: "4:30 PM", activity: "Continue sailing to overnight anchorage" },
//       { day: "Day 2", time: "6:00 PM", activity: "Anchor in sheltered bay for overnight stay" },
//       { day: "Day 2", time: "7:00 PM", activity: "Seafood barbecue dinner on deck" },
//       { day: "Day 2", time: "8:30 PM", activity: "Navigation and constellation instruction" },
//       { day: "Day 2", time: "10:00 PM", activity: "Overnight accommodation aboard catamaran" },

//       // Day 3: Sport Sailing & Nautical Celebration
//       { day: "Day 3", time: "7:00 AM", activity: "Sunrise coffee and light breakfast aboard" },
//       { day: "Day 3", time: "8:00 AM", activity: "Morning swim in bay waters" },
//       { day: "Day 3", time: "9:30 AM", activity: "Sail back to main harbor" },
//       { day: "Day 3", time: "11:00 AM", activity: "Transfer to sport sailing center" },
//       { day: "Day 3", time: "11:30 AM", activity: "Performance sailing orientation" },
//       { day: "Day 3", time: "12:00 PM", activity: "Begin sport sailing experience with instruction" },
//       { day: "Day 3", time: "1:30 PM", activity: "Lunch break with sailing theory session" },
//       { day: "Day 3", time: "2:30 PM", activity: "Optional trapeze experience for interested participants" },
//       { day: "Day 3", time: "3:30 PM", activity: "Friendly mini-regatta sailing activity" },
//       { day: "Day 3", time: "5:30 PM", activity: "Return to harbor" },
//       { day: "Day 3", time: "6:30 PM", activity: "Traditional sailor's farewell celebration" },
//       { day: "Day 3", time: "8:30 PM", activity: "Return to hotel" }
//     ],
//     includes: [
//       "Internationally certified sailing instructors",
//       "Access to multiple sailing vessels (yacht, catamaran, sport boats)",
//       "All required sailing and safety equipment",
//       "Personal flotation devices",
//       "Overnight catamaran accommodation (1 night)",
//       "All meals as specified in itinerary including gourmet onboard dining",
//       "Seafood barbecue dinner on deck",
//       "Guided snorkeling at Grande Island with equipment",
//       "Sport sailing experience with instruction",
//       "Optional trapeze experience (weather permitting)",
//       "Mini-regatta participation",
//       "Navigation and constellation instruction",
//       "Traditional sailor's farewell celebration",
//       "Personalized sailing logbook",
//       "Snorkeling equipment and guidance",
//       "Marine sanctuary fees and permits",
//       "Professional marine guides for underwater exploration",
//       "First aid and maritime safety equipment",
//       "All applicable harbor fees and sailing permits",
//       "Sailing achievement certificate"
//     ]
//   }
// ];

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