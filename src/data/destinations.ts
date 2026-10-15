import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'kalsubai',
    name: 'Kalsubai Peak',
    marathiName: 'काळसूबाई शिखर',
    district: 'Ahmednagar',
    region: 'Igatpuri-Bhandardara Range',
    category: 'Mountain Peaks',
    difficulty: 'Moderate',
    duration: '6 – 7 Hours',
    durationHours: 6.5,
    elevationMeters: 1646,
    elevationFeet: 5400,
    bestSeason: 'Monsoon (Jul–Sep) & Winter (Oct–Feb)',
    image: '/src/assets/images/kalsubai_peak_sunrise_1792070068175.jpg',
    alt: 'Golden sunrise illuminating the rocky summit and temple of Kalsubai Peak',
    tagline: 'The Crown of Maharashtra',
    summary: 'Standing at 1,646 meters, Kalsubai is the undisputed highest summit in Maharashtra, offering breathtaking 360-degree views across Bhandardara reservoir, Arthur Lake, and surrounding forts.',
    description: 'Trekking to Kalsubai is a quintessential rite of passage for every Sahyadri wanderer. The trail winds through rustic agricultural terraced fields from Bari village before climbing up jagged basalt ridges. In the steeper vertical portions, well-anchored steel ladders assist trekkers. The summit is crowned by a modest shrine dedicated to Kalsubai Devi, offering sweeping vistas of Arthur Lake, Alang-Madan-Kulang, Ratangad, and Harishchandragad.',
    baseVillage: 'Bari Village, Akole Taluka',
    distanceFromMumbai: '155 km via NH160 (Igatpuri)',
    distanceFromPune: '175 km via Sangamner / Alephata',
    highlights: [
      'Highest geographical elevation in Maharashtra (1,646m)',
      'Four iron ladders bolted into sheer vertical rock faces',
      'Panoramic view of Bhandardara reservoir and Arthur Lake',
      'Historic summit shrine of deity Kalsubai Devi',
      'Famous night trek destination for spectacular sunrise over monsoon clouds'
    ],
    routeDetails: {
      trailType: 'Steep ridge trail with 4 iron ladders and rocky switchbacks',
      totalDistanceKm: 6.6,
      waterSourceAvailable: true,
      waterSourceNote: 'Local tea stalls along ladder sections during monsoon and weekends; carry at least 2.5L water in winter.',
      technicalSections: 'Exposed ladder ascents with winds; slippery basalt steps during monsoon rains.'
    },
    packingChecklist: [
      'Trekking shoes with high grip lugs',
      'Windproof rain poncho / jacket',
      'Headlamp or flashlight with spare batteries (for night treks)',
      'Minimum 2.5 liters of drinking water and electrolyte sachets',
      'Energy bars, dry fruits, and bananas',
      'Personal basic first aid and anti-blister tape'
    ],
    safetyGuidelines: [
      'Ascend ladders one person at a time; never crowd on a single ladder span.',
      'High wind velocity on the summit ridge; secure loose belongings and hats.',
      'In heavy fog, keep strictly to the worn trail marked by paint marks.'
    ],
    historicalSignificance: 'According to local folklore, Kalsubai was a young village woman who fled her tormentors into the high peaks and vanished into the mountain, leaving her spirit to protect shepherds and wanderers.',
    isFeatured: true
  },
  {
    id: 'harishchandragad',
    name: 'Harishchandragad & Konkan Kada',
    marathiName: 'हरिश्चंद्रगड आणि कोकण कडा',
    district: 'Ahmednagar',
    region: 'Malshej Ghat Range',
    category: 'Mountain Peaks',
    difficulty: 'Challenging',
    duration: '1 – 2 Days',
    durationHours: 12,
    elevationMeters: 1424,
    elevationFeet: 4672,
    bestSeason: 'Post-Monsoon (Oct–Nov) & Winter (Dec–Feb)',
    image: '/src/assets/images/konkan_kada_cliff_1792070032805.jpg',
    alt: 'Colossal semicircular Konkan Kada cliff overlooking clouds and lush valleys',
    tagline: 'The Majestic Semicircular Precipice',
    summary: 'A 6th-century hill fort renowned for the awe-inspiring Konkan Kada—a colossal concave cliff that drops sheer into the Konkan plains, creating natural vertical cloud inversions.',
    description: 'Harishchandragad is arguably the most dramatic geological formation in the Western Ghats. Its crowning jewel, the Konkan Kada, bows outward like a gigantic cobra hood overlooking a vertical abyss. On misty afternoons, updrafts create the rare circular rainbow phenomenon called the Brocken Spectre. The plateau also preserves the ancient 11th-century Hemadpanthi-style Harishchandreshwar temple, ancient water cisterns, and the Kedareshwar cave containing a monolithic Shivling submerged in ice-cold mountain water.',
    baseVillage: 'Khireshwar (via Tolar Khind) or Pachnai (easy route)',
    distanceFromMumbai: '135 km via Kalyan - Malshej Ghat',
    distanceFromPune: '160 km via Narayangaon - Otur',
    highlights: [
      'Konkan Kada: 1,800-foot concave vertical basalt cliff',
      'Ancient Kedareshwar Cave with submerged Shivalinga supported by 1 pillar',
      '11th-century Hemadpanthi Harishchandreshwar stone temple',
      'Taramati Peak (1,429m) offering sunset over the Konkan coastline',
      'Natural reverse waterfall effect caused by strong valley updrafts'
    ],
    routeDetails: {
      trailType: 'Rugged mountain ascent with rocky gulley climbs and plateau traverse',
      totalDistanceKm: 14.0,
      waterSourceAvailable: true,
      waterSourceNote: 'Perennial natural spring water at Manganga tank and near Kedareshwar cave.',
      technicalSections: 'Rock steps at Tolar Khind; steep drops near the Konkan Kada edge.'
    },
    packingChecklist: [
      'Sturdy high-traction boots',
      'Warm fleece layer (night temperature drops significantly on the plateau)',
      'Tent or sleeping bag if camping in caves',
      'Torch with minimum 300 lumens',
      'Water purification tablets or LifeStraw'
    ],
    safetyGuidelines: [
      'Maintain at least 15 feet distance from the unfenced cliff rim of Konkan Kada.',
      'During monsoon, the Tolar Khind route becomes a gushing torrent; prefer Pachnai route.',
      'Do not light fires inside archaeological caves containing historical carvings.'
    ],
    historicalSignificance: 'Mentioned in ancient Puranas including the Matsyapurana and Agnipurana. The fort dates back to the 6th century Kalachuri dynasty, later held by Yadavas, Marathas, and British.',
    isFeatured: true
  },
  {
    id: 'harihar',
    name: 'Harihar Fort',
    marathiName: 'हरिहर किल्ला (हर्षगड)',
    district: 'Nashik',
    region: 'Trimbakeshwar Range',
    category: 'Historic Forts',
    difficulty: 'Challenging',
    duration: '4 – 5 Hours',
    durationHours: 4.5,
    elevationMeters: 1120,
    elevationFeet: 3675,
    bestSeason: 'Monsoon (Jul–Sep) & Winter (Oct–Jan)',
    image: '/src/assets/images/harihar_rock_steps_1792070032229.jpg',
    alt: 'Trekkers climbing the sheer 80-degree stone-cut stairs of Harihar Fort',
    tagline: 'The 80-Degree Rock-Cut Staircase',
    summary: 'World-renowned for its thrilling rock-cut stairway carved directly into a sheer triangular prism of basalt stone with grooved thumbholds.',
    description: 'Harihar Fort (also called Harshagad) rises as a monolithic pyramid above the rural Nashik plains. What makes this trek globally renowned is the final vertical climb: 117 stone steps carved at an inclination of nearly 80 degrees straight into the living rock face. Each step features carved recesses on both sides for hand grip. Reaching the upper Mahadarwaja rewards adventurers with pristine views of Vaitarna reservoir, Basgad, and Utwad forts.',
    baseVillage: 'Harshewadi or Nirgudpada',
    distanceFromMumbai: '170 km via Kasara - Ghoti - Trimbak',
    distanceFromPune: '240 km via Nashik Highway',
    highlights: [
      '117 near-vertical stone steps chiseled into volcanic basalt bedrock',
      'Carved hand-slots offering firm three-point contact',
      'Upper cave storage chambers and rock-cut water cisterns',
      'Panoramic perspective over Vaitarna backwaters and Brahmagiri hills',
      'Unique Scottish-pipe architectural gateway design'
    ],
    routeDetails: {
      trailType: 'Jungle approach followed by steep rock-cut steps',
      totalDistanceKm: 4.5,
      waterSourceAvailable: true,
      waterSourceNote: 'Cistern water on summit should be filtered; carry bottled water from base.',
      technicalSections: 'Climbing and especially descending the 80-degree exposed stone stairway.'
    },
    packingChecklist: [
      'Trail boots with immaculate rubber grip',
      'Rope gloves with rubberized palm for rock handholds',
      'Streamlined backpack that doesn’t swing out during ladder-like climbs',
      'Minimum 2 liters water',
      'Action camera with chest/head strap'
    ],
    safetyGuidelines: [
      'Never climb in a hurry. Always observe strict three-point contact (two hands, one foot or two feet, one hand).',
      'Do not attempt climbing when overcrowded or during thunderstorm lightning.',
      'Trekkers with severe vertigo should exercise extreme caution.'
    ],
    historicalSignificance: 'Built during the Yadava dynasty between the 9th and 14th centuries to safeguard the ancient trade route connecting Konkan ports to the Deccan plateau via Gonda Ghat.',
    isFeatured: true
  },
  {
    id: 'andharban',
    name: 'Andharban Dark Forest Trek',
    marathiName: 'अंधारबन घनदाट जंगल ट्रेक',
    district: 'Pune',
    region: 'Tamhini Ghat Wildlife Sanctuary',
    category: 'Forest Trails',
    difficulty: 'Easy',
    duration: '5 – 6 Hours',
    durationHours: 5.5,
    elevationMeters: 650,
    elevationFeet: 2132,
    bestSeason: 'Monsoon (Jul–Sep)',
    image: '/src/assets/images/andharban_forest_trail_1792070033387.jpg',
    alt: 'Misty rainforest trail in Andharban with mossy ancient trees and ferns',
    tagline: 'The Enchanted Canopy of Tamhini',
    summary: 'A gentle descending trail traversing an ancient, misty rainforest so dense that sunlight barely penetrates the thick monsoon tree canopy.',
    description: 'Literally translating to "The Dark Dense Forest", Andharban is one of the rare descending treks in Maharashtra. Starting high up at Pimpri near Tamhini Ghat, the trail slopes downward along the rim of the Kundalika Valley toward Bhira Dam. You walk under towering ancient fig and jamun trees draped in emerald moss, orchids, and wild lichens, crossing crystal-clear gurgling forest streams every few hundred meters.',
    baseVillage: 'Pimpri Village (Start) to Bhira Dam (End)',
    distanceFromMumbai: '130 km via Mumbai-Pune Expressway & Khopoli-Pali',
    distanceFromPune: '70 km via Mulshi Dam & Paud',
    highlights: [
      'Continuous walking under a dark, lush tropical rainforest canopy',
      'Breathtaking cliff-edge views over Kundalika River valley',
      'Numerous pristine stream crossings and miniature cascading waterfalls',
      'Vibrant biodiversity: Malabar giant squirrels, hornbills, and tree frogs',
      'Pleasant downhill gradient suitable for nature lovers and families'
    ],
    routeDetails: {
      trailType: 'Forest floor trail with gentle descent, muddy paths, and stream fords',
      totalDistanceKm: 13.0,
      waterSourceAvailable: true,
      waterSourceNote: 'Forest streams are abundant during monsoon; carry water purification tablets.',
      technicalSections: 'Slippery roots, water-logged mud patches, and swollen streams after heavy downpours.'
    },
    packingChecklist: [
      'Waterproof backpack cover and dry bags for electronics',
      'Quick-drying trekking trousers and synthetic shirts',
      'Waterproof trekking shoes with mud cleats',
      'Insect and leech repellent spray or salt pouch',
      'Walking stick for balance over wet stones'
    ],
    safetyGuidelines: [
      'Forest department permits are mandatory; register at the Pimpri check post.',
      'Never wander off marked forest trails; dense fog makes navigation confusing.',
      'Check feet regularly for forest leeches; avoid pulling them forcefully.'
    ],
    historicalSignificance: 'Used historically by villagers and horse caravans as an ancient bypass trail between the Deccan plateau and the maritime trading ports of the Konkan coast.',
    isFeatured: true
  },
  {
    id: 'devkund',
    name: 'Devkund Waterfall Trek',
    marathiName: 'देवकुंड धबधबा ट्रेक',
    district: 'Raigad',
    region: 'Bhira - Kundalika Valley',
    category: 'Waterfalls',
    difficulty: 'Easy',
    duration: '4 – 5 Hours',
    durationHours: 4.5,
    elevationMeters: 350,
    elevationFeet: 1148,
    bestSeason: 'Monsoon (Jul–Sep) & Post-Monsoon (Oct–Nov)',
    image: '/src/assets/images/devkund_waterfall_lagoon_1792070033254.jpg',
    alt: 'Natural waterfall cascading into crystal clear turquoise pool surrounded by dark basalt rocks',
    tagline: 'The Secret Turquoise Plunge Pool',
    summary: 'A secluded amphitheater where three mountain streams converge into a stunning 250-foot waterfall plunging into a deep azure natural rock basin.',
    description: 'Hidden deep inside the thick woodlands of the Western Ghats near Bhira, Devkund (the Bath of the Gods) is considered one of the most picturesque natural waterfalls in India. The trek passes alongside the still waters of Bhira Dam reservoir, crosses open boulder fields, and penetrates moist deciduous forests before opening into a breathtaking volcanic amphitheater. The water falls with gentle thunder into a crystal-clear turquoise natural swimming pool.',
    baseVillage: 'Bhira Village, Mangaon Taluka',
    distanceFromMumbai: '125 km via Khalapur - Pali - Bhira',
    distanceFromPune: '105 km via Mulshi - Tamhini Ghat - Bhira',
    highlights: [
      'Dramatic 250-foot plunge into a pristine emerald-turquoise rock pool',
      'Confluence of three mountain rivers: Kundalika, Kund, and Bhira stream',
      'Peaceful forest trail through dense trees and wooden footbridges',
      'Picturesque views across the Bhira reservoir catchment area',
      'Ideal day trek for friends and nature photographers'
    ],
    routeDetails: {
      trailType: 'Flat forest trail with gradual rocky riverbed sections',
      totalDistanceKm: 6.5,
      waterSourceAvailable: true,
      waterSourceNote: 'Streams along the way; carry 2L of clean drinking water.',
      technicalSections: 'River crossing over bamboo/log bridges; slippery boulders near waterfall.'
    },
    packingChecklist: [
      'Light waterproof footwear with good traction',
      'Change of dry clothes and microfiber towel',
      'Waterproof phone pouch or dry bag',
      'Energy snacks and electrolytic drinks',
      'Biodegradable garbage bag for trash'
    ],
    safetyGuidelines: [
      'Swimming is strictly prohibited near the deep center vortex where water churns.',
      'Wear life jackets if mandated by the local forest village conservation committee.',
      'Check weather forecast: sudden flash floods can occur after upstream heavy rain.'
    ],
    historicalSignificance: 'Regarded by local tribal communities as a sacred water spring where legendary sages performed austerities in seclusion centuries ago.',
    isFeatured: true
  },
  {
    id: 'rajmachi',
    name: 'Rajmachi Fort (Twin Forts)',
    marathiName: 'राजमाची किल्ला (श्रीवर्धन व मनरंजन)',
    district: 'Pune',
    region: 'Lonavala - Khandala Hills',
    category: 'Historic Forts',
    difficulty: 'Moderate',
    duration: '1 – 2 Days',
    durationHours: 8,
    elevationMeters: 826,
    elevationFeet: 2710,
    bestSeason: 'Monsoon (Jun–Sep) for fireflies & greenery; Winter for camping',
    image: '/src/assets/images/rajmachi_twin_forts_1792070070329.jpg',
    alt: 'Rajmachi twin forts Shrivardhan and Manaranjan surrounded by mist and green mountains',
    tagline: 'The Twin Citadels of the Ghats',
    summary: 'Comprising two strategic hill forts—Shrivardhan and Manaranjan—overlooking the historic Borghat pass, famed for pre-monsoon firefly festivals and misty bastions.',
    description: 'Rajmachi is one of the most celebrated trekking destinations in Maharashtra. Situated high on a promontory of the Sahyadris between Lonavala and Karjat, it features two distinct hilltops: Shrivardhan Balekilla (the higher citadel) and Manaranjan (the western outpost). The path from Udhewadi base village winds through lush orchards, old stone water tanks, and the sacred Shiva temple at Kalbhairav. In late May and early June, the forests around Rajmachi light up with billions of glowing fireflies.',
    baseVillage: 'Udhewadi Village (approachable via Lonavala or Kondivade / Karjat)',
    distanceFromMumbai: '95 km via Karjat or 100 km via Lonavala',
    distanceFromPune: '80 km via Lonavala Expressway',
    highlights: [
      'Twin fortifications: Shrivardhan Balekilla and Manaranjan Fort',
      'Scenic plateau village of Udhewadi with warm homestays and rural cuisine',
      'Ancient Kalbhairav temple beside a tranquil lotus water pond',
      'Kondana Buddhist rock-cut caves located along the Karjat trek route',
      'Spectacular pre-monsoon bioluminescent firefly phenomenon'
    ],
    routeDetails: {
      trailType: 'Scenic dirt road from Lonavala (15km) or steep forest climb from Karjat (4km)',
      totalDistanceKm: 14.0,
      waterSourceAvailable: true,
      waterSourceNote: 'Clean drinking water and fresh pitla-bhakri meals available in Udhewadi village.',
      technicalSections: 'Rocky staircase on the final climb up Shrivardhan peak.'
    },
    packingChecklist: [
      'Comfortable broken-in hiking shoes',
      'Rain jacket or poncho',
      'Insect repellent lotion',
      'Camping gear if spending the night at Udhewadi',
      'Cash in small denominations for village food and parking'
    ],
    safetyGuidelines: [
      'Drive slow if taking SUVs to Udhewadi; the monsoon dirt track is heavily rutted.',
      'Do not disturb fireflies with bright white flashlights; use dim red light modes.',
      'Stay off high parapets during strong gusty winds.'
    ],
    historicalSignificance: 'Constructed by the Satavahanas and later fortified extensively by Chhatrapati Shivaji Maharaj in 1657 to control the vital Borghat trade highway connecting Pune to the sea.',
    isFeatured: true
  },
  {
    id: 'sandhan-valley',
    name: 'Sandhan Valley (Valley of Shadows)',
    marathiName: 'सांधण दरी (द व्हॅली ऑफ शॅडोज)',
    district: 'Ahmednagar',
    region: 'Bhandardara - Kalsubai Range',
    category: 'Weekend Escapes',
    difficulty: 'Challenging',
    duration: '1 – 2 Days',
    durationHours: 10,
    elevationMeters: 910,
    elevationFeet: 2985,
    bestSeason: 'Winter (Nov–Feb)',
    image: '/src/assets/images/sandhan_valley_canyon_1792070068212.jpg',
    alt: 'Trekkers navigating deep 300-foot vertical basalt canyon with shafts of sunlight',
    tagline: 'The Grand Canyon of Maharashtra',
    summary: 'A breathtaking 300-foot deep, naturally carved basalt rock canyon where the gorge narrows so tightly that sunlight never touches the canyon floor.',
    description: 'Sandhan Valley is Maharashtra’s grandest geological wonder—a colossal 2-kilometer chasm sliced between the towering cliffs of Ratangad and Ajoba mountains. As you descend from Samrad village, the canyon walls soar upwards to 300 feet, creating perpetual shadow. The full traverse involves scrambling across giant rounded basalt boulders, wading through chest-deep freezing pools of natural spring water, and executing technical rappelling drops with certified climbing ropes.',
    baseVillage: 'Samrad Village, Akole',
    distanceFromMumbai: '180 km via Igatpuri - Ghoti - Bhandardara',
    distanceFromPune: '200 km via Sangamner - Rajur',
    highlights: [
      '300-foot deep natural rock canyon carved over millions of years',
      'Thrilling technical rappelling pitches over polished rock faces',
      'Chest-deep natural natural water pool crossings inside the gorge',
      'Starlit wilderness camping at the canyon exit near Dehne village',
      'Spectacular geological sheer rock amphitheater'
    ],
    routeDetails: {
      trailType: 'Canyon descent over massive boulder fields, water pools, and rock drops',
      totalDistanceKm: 8.0,
      waterSourceAvailable: true,
      waterSourceNote: 'Pool water is stagnant in late season; carry 3L water from Samrad village.',
      technicalSections: '3 rappelling sections (25ft, 45ft, and 60ft drops) requiring certified gear.'
    },
    packingChecklist: [
      'High-ankle hiking boots with drainage and rugged Vibram sole',
      'Dry bag / double plastic wrapping for all clothes and electronics',
      'Headlamp with waterproofing rating IPX6',
      'Climbing harness, carabiners, and helmet (if traversing self-guided)',
      'Extra set of warm dry clothes packed in sealed bags'
    ],
    safetyGuidelines: [
      'Strictly prohibited during monsoon due to deadly sudden flash flood currents.',
      'Must be attempted only with experienced mountaineering guides and certified ropes.',
      'Keep your hands free of gear while scrambling boulders to prevent wrist sprains.'
    ],
    historicalSignificance: 'Carved over millennia by ancient mountain streams eroding volcanic Deccan trap basalts, forming an impassable natural barrier between Ghats and Konkan.',
    isFeatured: true
  },
  {
    id: 'sinhagad',
    name: 'Sinhagad Fort (The Lion Fort)',
    marathiName: 'सिंहगड किल्ला (कोंढाणा)',
    district: 'Pune',
    region: 'Haveli Range',
    category: 'Historic Forts',
    difficulty: 'Easy',
    duration: '3 – 4 Hours',
    durationHours: 3.5,
    elevationMeters: 1312,
    elevationFeet: 4304,
    bestSeason: 'All Year (Monsoon for lush clouds, Winter for pleasant walks)',
    image: '/src/assets/images/sinhagad_fort_gates_1792070322442.jpg',
    alt: 'Pune Darwaza stone gate of Sinhagad Fort perched on mountain plateau above valleys',
    tagline: 'The Citadel of Tanaji Malusare',
    summary: 'Pune’s most legendary hill fort, famous for the heroic 1670 battle of Tanaji Malusare, stone bastions, and mouthwatering hot pitla-bhakri and matka dahi.',
    description: 'Perched 1,312 meters high on an isolated cliff of the Bhuleshwar range south of Pune, Sinhagad commands an impregnable view of Khadakwasla Dam and the Sahyadri horizon. The trek from Donje / Atkarwadi village climbs through rocky forest paths with fresh cool breezes. At the plateau, explore the memorial samadhi of Tanaji Malusare, Kalyan Darwaza, the horse stables (Ghodyanchi Paga), and sample authentic village cuisine freshly prepared on chulha stoves.',
    baseVillage: 'Atkarwadi / Donje Village',
    distanceFromMumbai: '180 km via Pune Bypass',
    distanceFromPune: '30 km south of Pune city center',
    highlights: [
      'Historic Kalyan Darwaza and Pune Darwaza stone gateways',
      'Memorial Samadhi of brave commander Tanaji Malusare',
      'Authentic Sahyadri village food: hot pithla-bhakri, kanda bhaji, and fresh clay-pot curd',
      'Khadakwasla reservoir panoramic overlook',
      'Ancient carved water cisterns (Dev Taki) with sweet cold water'
    ],
    routeDetails: {
      trailType: 'Steep earthen and stone trail from Atkarwadi, or motorable road up to top',
      totalDistanceKm: 3.2,
      waterSourceAvailable: true,
      waterSourceNote: 'Perennial sweet water at Dev Taki cisterns and numerous village stalls.',
      technicalSections: 'Loose scree on the lower unpaved trail; uneven ancient stone stairs.'
    },
    packingChecklist: [
      'Comfortable walking shoes with good tread',
      'Light daypack with water bottle',
      'Sun hat or umbrella depending on season',
      'Cash for local food and heritage entry fee'
    ],
    safetyGuidelines: [
      'Beware of troops of wild monkeys near food stalls; keep snacks packed.',
      'Walk carefully on wet stone ramps near the gateways during rain.',
      'Dispose of paper plates and kulhads only in designated bins.'
    ],
    historicalSignificance: 'Originally Kondhana, the fort was captured in 1670 by Subedar Tanaji Malusare scaling sheer cliffs at night. Upon hearing of Tanaji’s demise in victory, Shivaji Maharaj proclaimed: "Gad aala, pan Sinha gela" (We have won the fort, but lost the lion).',
    isFeatured: false
  },
  {
    id: 'ratangad',
    name: 'Ratangad Fort (Jewel of Sahyadris)',
    marathiName: 'रतनगड किल्ला (नेढे आणि अमृतेश्वर)',
    district: 'Ahmednagar',
    region: 'Bhandardara - Kalsubai Range',
    category: 'Historic Forts',
    difficulty: 'Moderate',
    duration: '5 – 6 Hours',
    durationHours: 5.5,
    elevationMeters: 1297,
    elevationFeet: 4255,
    bestSeason: 'Monsoon (Jul–Sep) & Post-Monsoon (Oct–Nov)',
    image: '/src/assets/images/ratangad_nedhe_rock_1792070323303.jpg',
    alt: 'The famous Nedhe natural needle hole in the basalt rock summit of Ratangad Fort',
    tagline: 'The Fortress of the Needle Eye',
    summary: 'A 2000-year-old fort perched above Bhandardara Lake, celebrated for its natural geological needle hole (Nedhe) where ferocious winds howl through stone.',
    description: 'Rising like an ancient stone crown overlooking Arthur Lake, Ratangad (the Jewel Fort) is one of the most romantic treks in the Sahyadris. The trail from Ratanwadi village passes the ornate 12th-century Amruteshwar Shiva temple before ascending through thick bamboo groves and across iron ladders. On the summit ridge, trekkers can sit inside the Nedhe—a natural hole eroded completely through the mountain crest—with gales of wind whistling through the opening.',
    baseVillage: 'Ratanwadi or Samrad Village',
    distanceFromMumbai: '185 km via Igatpuri - Bhandardara',
    distanceFromPune: '190 km via Otur - Bramhanwada',
    highlights: [
      'Nedhe: Natural wind tunnel cavity eroded through the solid summit rock ridge',
      '1,200-year-old Hemadpanthi Amruteshwar temple with intricate stone sculptures',
      'Mesmerizing vistas of Bhandardara reservoir, Alang, Madan, and Kulang forts',
      'Well-preserved Rani Mahal bastion and underground water tanks',
      'Vast meadows of wild purple Sonki flowers in late September'
    ],
    routeDetails: {
      trailType: 'Forest trail followed by steep ladder sections and rock-cut stairs',
      totalDistanceKm: 6.0,
      waterSourceAvailable: true,
      waterSourceNote: 'Potable water tanks on the fort plateau; clean water at Ratanwadi base.',
      technicalSections: 'Exposed metal ladder climbs on sheer rock walls.'
    },
    packingChecklist: [
      'Sturdy hiking shoes with ankle support',
      'Light jacket (wind speed at Nedhe is very high)',
      'Camera with wide lens for Bhandardara lake reflections',
      'Minimum 2 liters water and snacks'
    ],
    safetyGuidelines: [
      'Take extreme care while sitting inside the Nedhe; drop on both sides is sheer.',
      'Climb the metal ladders one by one, keeping your backpack snug.',
      'Check local boat timings if taking the lake boat ferry from Shendi to Ratanwadi.'
    ],
    historicalSignificance: 'An ancient hill fort captured by Chhatrapati Shivaji Maharaj in 1665 and later used as a crucial observation post guarding the trade routes over the Sahyadri crest.',
    isFeatured: false
  },
  {
    id: 'visapur',
    name: 'Visapur Fort & Waterfall Trail',
    marathiName: 'विसापूर किल्ला आणि धबधबा पायऱ्या',
    district: 'Pune',
    region: 'Lonavala - Malavali Range',
    category: 'Waterfalls',
    difficulty: 'Moderate',
    duration: '4 – 5 Hours',
    durationHours: 4.5,
    elevationMeters: 1084,
    elevationFeet: 3556,
    bestSeason: 'Monsoon (Jul–Sep)',
    image: '/src/assets/images/visapur_waterfall_steps_1792070323553.jpg',
    alt: 'Trekkers walking up Visapur fort stone steps with a gushing monsoon waterfall flowing down',
    tagline: 'The Stairway Waterfall Odyssey',
    summary: 'A world-famous monsoon spectacle where rainwater flows directly down the ancient stone stairways, turning the trek into an exhilarating uphill waterfall climb.',
    description: 'Visapur Fort is higher and larger than its twin, Lohagad. During the peak monsoon months, the ancient carved stone stairway turns into a vibrant, gushing waterfall. Trekkers wade knee-deep up the foaming cascade against cool mountain currents, enveloped in thick swirling fog. At the sprawling summit plateau, explore historic gun bastions, ancient cannon ruins, and expansive views of the Indrayani river valley.',
    baseVillage: 'Malavali or Patan Village',
    distanceFromMumbai: '98 km via Expressway to Malavali',
    distanceFromPune: '62 km via Old Highway / Expressway',
    highlights: [
      'Trekking up an active flowing waterfall through ancient stone stairs',
      'Huge plateau offering views of neighboring Lohagad and Tung forts',
      'Ancient stone ruins of the British garrison and stone water tanks',
      'Historic 10-foot long cannons resting on weathered stone bastions',
      'Proximity to Bhaja Buddhist caves'
    ],
    routeDetails: {
      trailType: 'Forest trail transitioning into wet stone staircase with running water',
      totalDistanceKm: 5.0,
      waterSourceAvailable: true,
      waterSourceNote: 'Streams are everywhere during monsoon; carry drinking water from base.',
      technicalSections: 'Slippery algae on submerged stone stairs; continuous water resistance.'
    },
    packingChecklist: [
      'Shoes with high-tack rubber soles (grippy wet traction)',
      'Waterproof backpack with double polythene liner',
      'Synthetic quick-dry clothes',
      'Waterproof phone case',
      'Towel and warm dry set for changing after the trek'
    ],
    safetyGuidelines: [
      'Do not jump into unverified plunge pools on the plateau; depth varies unexpectedly.',
      'Step firmly on the center of stone treads, avoiding slippery moss on side margins.',
      'Stay away from the exposed outer fort wall edges in heavy cloud cover.'
    ],
    historicalSignificance: 'Built by Balaji Vishwanath, the first Peshwa of the Maratha Empire, between 1713 and 1720 CE. It was subsequently captured by the British in 1818.',
    isFeatured: true
  },
  {
    id: 'lohagad',
    name: 'Lohagad Fort (The Iron Fort)',
    marathiName: 'लोहगड किल्ला (विंचूकाटा)',
    district: 'Pune',
    region: 'Lonavala Range',
    category: 'Historic Forts',
    difficulty: 'Easy',
    duration: '3 – 4 Hours',
    durationHours: 3.5,
    elevationMeters: 1033,
    elevationFeet: 3389,
    bestSeason: 'Monsoon (Jul–Sep) & Winter (Oct–Feb)',
    image: '/src/assets/images/lohagad_scorpion_tail_1792070323624.jpg',
    alt: 'The magnificent fortified Vinchukata scorpion tail ridge of Lohagad fort in the clouds',
    tagline: 'The Impregnable Iron Bastion',
    summary: 'One of the best-preserved forts in Maharashtra, known for four massive successive stone gateways and the dramatic 1.5-km long Vinchu Kata (Scorpion’s Tail) ridge.',
    description: 'Lohagad ("Iron Fort") stands as an unbroken monument of Maratha military engineering. Accessed via four formidable stone gates—Ganesh, Narayan, Hanuman, and Maha Darwaja—its ramparts remain remarkably intact. The signature feature is the Vinchu Kata: a razor-thin, 1,500-meter long fortified promontory shaped like a scorpion’s stinger, projecting out into the clouds with sheer drops on both sides.',
    baseVillage: 'Lohagadwadi Village',
    distanceFromMumbai: '100 km via Lonavala',
    distanceFromPune: '65 km via Kamshet / Malavali',
    highlights: [
      'Four intact grand stone entrance gates with ancient iron spikes',
      'Vinchu Kata (Scorpion’s Tail): 1.5 km long dramatic narrow fortified ridge',
      'Laxmi Kothi underground cavern and grain storage vaults',
      'Panoramic perspective over Pawna Dam reservoir and Tikona Fort',
      'Beginner-friendly paved stairs suitable for children and families'
    ],
    routeDetails: {
      trailType: 'Paved stone stairway with protective railings',
      totalDistanceKm: 3.5,
      waterSourceAvailable: true,
      waterSourceNote: 'Local village stalls sell bottled water and hot bhutta (corn) at base and mid-way.',
      technicalSections: 'Walking along the narrow unrailed end of Vinchu Kata during strong winds.'
    },
    packingChecklist: [
      'Walking shoes with good grip',
      'Windbreaker / light rain jacket',
      'Water bottle and light snacks',
      'Camera / phone with strap'
    ],
    safetyGuidelines: [
      'Exercise caution along the unrailed edges of Vinchu Kata; high wind gusts can disbalance you.',
      'Keep personal food items inside bags to avoid monkey snatching.',
      'Respect the heritage structures; do not engrave names on stone walls.'
    ],
    historicalSignificance: 'Under Shivaji Maharaj, Lohagad was used to store the immense treasury amassed from the successful expeditions to Surat. It remained an impregnable treasury vault throughout the 18th century.',
    isFeatured: false
  },
  {
    id: 'torna',
    name: 'Torna Fort (Prachandagad)',
    marathiName: 'तोरणा किल्ला (प्रचंडगड)',
    district: 'Pune',
    region: 'Velhe Range',
    category: 'Historic Forts',
    difficulty: 'Challenging',
    duration: '6 – 7 Hours',
    durationHours: 6.5,
    elevationMeters: 1403,
    elevationFeet: 4603,
    bestSeason: 'Monsoon (Jul–Sep) & Winter (Oct–Feb)',
    image: '/src/assets/images/torna_fort_prachandagad_1792070378374.jpg',
    alt: 'Sweeping view of Torna fort Prachandagad with vast green ridges and stone walls',
    tagline: 'The First Fort of Swarajya',
    summary: 'The first fort captured by Chhatrapati Shivaji Maharaj in 1646 at the age of sixteen, earning the title "Prachandagad" (The Massive Fort) for its colossal scale.',
    description: 'Torna is the highest hill fort in Pune district, soaring to 1,403 meters. Its scale is colossal, featuring two enormous fortified ridges: the Zunjar Machi to the west and the Budhla Machi (resembling a reclining owl) to the east. The trek from Velhe village ascends through steep grassy slopes, rocky gullies with safety chains, and opens to breathtaking vistas of Rajgad, Sinhagad, and Bhatghar Dam.',
    baseVillage: 'Velhe Village',
    distanceFromMumbai: '205 km via Pune - Nasrapur - Velhe',
    distanceFromPune: '65 km via Sinhagad Road - Nasrapur Phata',
    highlights: [
      'The historic birthplace of the Maratha Empire (Swarajya) in 1646',
      'Zunjar Machi: A sheer, fortified cliff ridge testing balance and courage',
      'Budhla Machi: Unique natural basalt outcrop resembling an owl',
      'Mengai Devi temple offering shelter for overnight trekkers',
      'Colossal viewpoints overlooking neighboring Rajgad Fort'
    ],
    routeDetails: {
      trailType: 'Steep hill ascent over rocky ridges with anchored steel safety cables',
      totalDistanceKm: 8.5,
      waterSourceAvailable: true,
      waterSourceNote: 'Potable water springs near Mengai temple; carry sufficient water for the 3-hour climb.',
      technicalSections: 'Climbing rock bands near Bini Darwaja where rock grip and balance are required.'
    },
    packingChecklist: [
      'Ankle-length hiking boots with stiff sole',
      'Trekking poles for descending the long steep gradient',
      'Minimum 3 liters of water and oral rehydration salts',
      'High-calorie snacks and energy bars'
    ],
    safetyGuidelines: [
      'The descent from Torna is notoriously taxing on knees; pace your steps.',
      'Zunjar Machi path is exposed; avoid going to the absolute tip during monsoon winds.',
      'Start early in the morning by 6:30 AM to avoid scorching midday sun on the climb.'
    ],
    historicalSignificance: 'Captured in 1646 by 16-year-old Shivaji Maharaj from the Adilshahi Sultanate. Treasure found during renovations of Torna was used to construct the nearby grand capital fortress of Rajgad.',
    isFeatured: true
  },
  {
    id: 'raigad',
    name: 'Raigad Fort',
    marathiName: 'रायगड किल्ला (राजधानी)',
    district: 'Raigad',
    region: 'Mahad Range',
    category: 'Historic Forts',
    difficulty: 'Moderate',
    duration: '4 – 5 Hours',
    durationHours: 4.5,
    elevationMeters: 820,
    elevationFeet: 2690,
    bestSeason: 'Monsoon (Jul–Sep) & Winter (Oct–Mar)',
    image: '/src/assets/images/raigad_fort_capital_1792070380125.jpg',
    alt: 'Grand stone ruins of Raigad Fort and Maha Darwaja perched on vertical mountain cliff',
    tagline: 'The Capital of the Maratha Empire',
    summary: 'The sacred royal capital of Chhatrapati Shivaji Maharaj, perched upon an isolated tabular mountain with 1,737 stone steps and the magnificent royal throne ruins.',
    description: 'Raigad ("The King’s Fort") rises as a wedge-shaped basalt citadel isolated from the main Sahyadri spine by deep river valleys. Here in 1674, Shivaji Maharaj was coronated as Chhatrapati. The trek climbs 1,737 historic stone stairs through the towering Maha Darwaja. On the expansive plateau, one walks through the royal palace court (Raj Darbar), the Jagdishwar Temple, Shivaji Maharaj’s Samadhi, and the terrifying Takmak Tok cliff.',
    baseVillage: 'Pachad Village, Mahad',
    distanceFromMumbai: '165 km via Mumbai-Goa Highway (NH66)',
    distanceFromPune: '130 km via Varandha Ghat or Tamhini Ghat',
    highlights: [
      'Raj Darbar (Royal Throne Room) with acoustics engineered for whispering gallery effects',
      'The sacred Samadhi memorial of Chhatrapati Shivaji Maharaj',
      'Maha Darwaja: Massive double-bastion gate with curved defensive approach',
      'Takmak Tok: A 1,200-foot vertical execution precipice over the Konkan abyss',
      'Modern ropeway available for elderly visitors and families'
    ],
    routeDetails: {
      trailType: '1,737 wide historic stone steps with hand railings and rest points',
      totalDistanceKm: 5.5,
      waterSourceAvailable: true,
      waterSourceNote: 'Multiple drinking water booths and tea shops along the steps and plateau.',
      technicalSections: 'Physical endurance required for continuous step climbing.'
    },
    packingChecklist: [
      'Comfortable walking shoes with cushioned insoles',
      'Sun hat and UV sunglasses',
      'Water bottle (refillable at clean water stations)',
      'Camera to photograph historical stone carvings'
    ],
    safetyGuidelines: [
      'Do not cross safety fences at Takmak Tok; the drop is a direct 1,200ft vertical abyss.',
      'Stay hydrated; take short pauses at every 300 steps.',
      'Maintain solemn respect across the samadhi and temple grounds.'
    ],
    historicalSignificance: 'Chosen by Shivaji Maharaj in 1670 as his royal capital due to its strategic impregnability. The royal coronation took place here on June 6, 1674.',
    isFeatured: true
  },
  {
    id: 'amk',
    name: 'Alang Madan Kulang (AMK)',
    marathiName: 'अलंग-मदन-कुलंग (AMK ट्रेक)',
    district: 'Nashik',
    region: 'Igatpuri - Kalsubai Range',
    category: 'Mountain Peaks',
    difficulty: 'Difficult',
    duration: '3 Days',
    durationHours: 24,
    elevationMeters: 1479,
    elevationFeet: 4852,
    bestSeason: 'Post-Monsoon (Oct–Nov) & Winter (Dec–Feb)',
    image: '/src/assets/images/amk_trio_peaks_1792070380184.jpg',
    alt: 'Intimidating basalt towers of Alang Madan Kulang enveloped in swirling mountain mist',
    tagline: 'The Ultimate Sahyadri Test',
    summary: 'Universally recognized as the most arduous and thrilling trek in Maharashtra, requiring technical rock climbing, rappelling, and traversing sheer cliff ledges.',
    description: 'The legendary AMK trio stands as three colossal basalt pillars in the heart of the Sahyadris: Alang (1,479m), Madan (1,470m), and Kulang (1,470m). Conquering all three over three days is the gold standard of Sahyadri trekking. The expedition requires technical rock-climbing up exposed 60-foot rock faces, traversing knife-edge ridges with 2,000-foot drops, rappelling down rock walls, and sleeping in ancient rock-hewn caves under star-studded skies.',
    baseVillage: 'Ambewadi / Udhadawane Village',
    distanceFromMumbai: '160 km via Kasara - Ghoti',
    distanceFromPune: '210 km via Sangamner - Bhandardara',
    highlights: [
      'The toughest and most revered multi-day trekking expedition in Maharashtra',
      'Technical rock climbing and 3 adrenaline-pumping rappelling descents',
      'Overnight stay inside vast ancient water cisterns and rock-cut caves',
      'Kulang Fort’s longest continuous rock-cut staircase in the Sahyadris',
      'Unobstructed vistas of Kalsubai, Ratangad, and Harishchandragad'
    ],
    routeDetails: {
      trailType: 'Multi-peak technical traverse requiring mountaineering ropes, harnesses, and anchors',
      totalDistanceKm: 28.0,
      waterSourceAvailable: true,
      waterSourceNote: 'Cistern water on fort plateaus is drinkable after boiling/filtering.',
      technicalSections: 'Climbing Madan rock face; rappelling down Alang; exposed cliff edge traverses.'
    },
    packingChecklist: [
      'Certified climbing harness, helmet, and descent devices',
      'High-traction alpine trekking boots',
      'Warm sleeping bag (temperatures drop below 8°C in winter)',
      'Water purification kit and high-calorie trail meals',
      'Heavy-duty headlamp and first-aid trauma kit'
    ],
    safetyGuidelines: [
      'Strictly forbidden for beginners; must be accompanied by certified mountain instructors.',
      'Check all anchors and fixed ropes prior to weighting yourself on rappels.',
      'Never attempt in active monsoon rains due to dangerously slick basalt slime.'
    ],
    historicalSignificance: 'These forts possessed supreme military significance due to their sheer inaccessibility. British forces in 1818 could only capture them after artillery bombardments breached the rock-cut stairs.',
    isFeatured: true
  },
  {
    id: 'kalavantin',
    name: 'Kalavantin Durg & Prabalgad',
    marathiName: 'कलावंतीण दुर्ग आणि प्रबळगड',
    district: 'Raigad',
    region: 'Panvel Range',
    category: 'Weekend Escapes',
    difficulty: 'Challenging',
    duration: '5 – 6 Hours',
    durationHours: 5.5,
    elevationMeters: 686,
    elevationFeet: 2250,
    bestSeason: 'Monsoon (Jul–Sep) & Winter (Oct–Mar)',
    image: '/src/assets/images/kalavantin_durg_pinnacle_1792070380689.jpg',
    alt: 'Zigzag stone stairs cut into the sharp needle summit of Kalavantin Durg',
    tagline: 'The Needle of the Western Ghats',
    summary: 'A breathtaking 686-meter volcanic rock pinnacle famous for steep zigzag stone stairs carved into the exposed spine with no handrails and vertical valley drops.',
    description: 'Visible clearly from the Mumbai-Pune Expressway, Kalavantin Durg is a sheer monolithic pinnacle jutting out from the massive plateau of Prabalgad. The trek ascends from Thakurwadi village through dense forest to the Machi plateau, before beginning the heart-stopping final climb: wide stone stairs carved in a continuous zigzag pattern directly into the vertical cliff spine. The summit pinnacle offers panoramic views of Matheran, Chanderi, and Karnala.',
    baseVillage: 'Thakurwadi Village, Panvel',
    distanceFromMumbai: '50 km via Shedung toll plaza',
    distanceFromPune: '115 km via Expressway',
    highlights: [
      'Iconic zigzag stone stairs carved along the knife-edge rock spine',
      'The breathtaking rock scramble to the final flagpole summit',
      'Panoramic 360-degree vista of Matheran plateau and Morbe Dam',
      'Prabalmachi plateau: A peaceful mid-way village with rural meals and camping',
      'Easy accessibility from Mumbai and Navi Mumbai'
    ],
    routeDetails: {
      trailType: 'Forest trail to Prabalmachi, followed by steep exposed rock-cut stairs',
      totalDistanceKm: 6.0,
      waterSourceAvailable: true,
      waterSourceNote: 'Food and bottled water plentiful at Prabalmachi village.',
      technicalSections: 'Climbing the final 30 feet of vertical rock with small hand/toe slots.'
    },
    packingChecklist: [
      'Shoes with high-friction sticky rubber soles',
      'Light daypack that hugs the body',
      'Minimum 2 liters water',
      'Gloves for gripping wet rock during monsoon'
    ],
    safetyGuidelines: [
      'Climb slowly and steadily; look forward and not down if prone to vertigo.',
      'Only one climber should traverse the narrowest stair bottlenecks at a time.',
      'Do not attempt in torrential rainstorms with gusty crosswinds.'
    ],
    historicalSignificance: 'Built for Queen Kalavantin in the 15th century, serving as an invincible watchtower to monitor the naval waterways and land routes of the Panvel valley.',
    isFeatured: true
  },
  {
    id: 'vasota',
    name: 'Vasota Fort & Koyna Wildlife Sanctuary',
    marathiName: 'वासोटा किल्ला (व्याघ्रगड)',
    district: 'Satara',
    region: 'Koyna Wild Reserve - Mahabaleshwar Range',
    category: 'Forest Trails',
    difficulty: 'Moderate',
    duration: 'Full Day (Boat + 4 Hours Trek)',
    durationHours: 7,
    elevationMeters: 1120,
    elevationFeet: 3675,
    bestSeason: 'Post-Monsoon (Oct–Nov) & Winter (Dec–Mar)',
    image: '/src/assets/images/vasota_koyna_jungle_1792070380381.jpg',
    alt: 'Remote forest fortress of Vasota surrounded by blue Koyna backwaters and dense jungle',
    tagline: 'The Jungle Fortress of Koyna',
    summary: 'A thrilling wilderness expedition combining a scenic boat ride across the vast blue Koyna backwaters and a jungle trek through deep tiger reserve rainforest.',
    description: 'Vasota (also known as Vyaghragad or "The Tiger Fort") is situated in the pristine, dense evergreen wilderness of Koyna Wildlife Sanctuary. The journey is an adventure in itself: trekkers board motorized boats at Bamnoli to cross the serene waters of Shivsagar Lake for over an hour before reaching the secluded forest base. The trail climbs through thick, untouched rainforest with giant trees, ferns, and exotic birdlife to reach ancient ramparts overlooking the Konkan drop.',
    baseVillage: 'Bamnoli Village, Satara',
    distanceFromMumbai: '290 km via Satara - Bamnoli',
    distanceFromPune: '145 km via Satara - Medha - Bamnoli',
    highlights: [
      'Scenic 1.5-hour boat cruise across the pristine blue waters of Shivsagar Lake',
      'Trek through dense, protected tiger reserve evergreen forest',
      'Babu Kada: A dramatic vertical cliff drop into the Konkan valley',
      'Abundant wildlife: Barking deer, Malabar giant squirrels, hornbills, and leopards',
      'True untouched wilderness experience preserved by strict forest conservation'
    ],
    routeDetails: {
      trailType: 'Forest boat journey + 5 km jungle trail under thick tree canopy',
      totalDistanceKm: 10.0,
      waterSourceAvailable: true,
      waterSourceNote: 'Carry all drinking water; no water available on the fort.',
      technicalSections: 'Tree roots and mud banks; strict daily entry and exit timings enforced by forest guards.'
    },
    packingChecklist: [
      'Sturdy closed trekking shoes',
      'Minimum 3 liters of water per person (mandatory)',
      'Packed lunch (no shops or stalls inside the sanctuary)',
      'Binoculars and telephoto camera for bird watching',
      'Government photo ID for forest checkpost permits'
    ],
    safetyGuidelines: [
      'Strict forest entry timings: must start return trek by 2:00 PM to catch boat by 4:00 PM.',
      'Plastics are strictly audited at Bamnoli; count your plastic wrappers on entry and exit.',
      'Do not litter or play loud music inside the tiger sanctuary.'
    ],
    historicalSignificance: 'Built by King Bhoja II of the Shilahara dynasty in 1178 CE. It was defended fiercely by the Marathas and later named Vyaghragad by Shivaji Maharaj because of its wild, tiger-like defense.',
    isFeatured: false
  }
];
