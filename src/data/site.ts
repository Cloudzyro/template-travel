// Everything the site says lives here: the company, destinations, tours with
// their day-by-day itineraries, departure dates and prices. Change it and rebuild.

export const site = {
  name: "Farline Journeys",
  tagline: "Small-group walking and rail journeys",
  description:
    "Small-group walking and rail journeys in Scotland, the Dolomites, Portugal, Japan and Norway. Twelve travelers at most, a guide who lives there, and luggage that goes ahead without you.",
  email: "trips@farline.example",
  phone: "(503) 555-0163",
  phoneHref: "+15035550163",
  address: { street: "418 Northrup Street, Suite 2", city: "Portland", region: "OR", postal: "97209", country: "US" },
  hours: "Monday to Friday, 9 am to 5 pm Pacific",
  nav: [
    { href: "/tours", label: "Tours" },
    { href: "/destinations", label: "Destinations" },
    { href: "/how-we-travel", label: "How we travel" },
  ],
};

export const hero = {
  title: "Walk the long way through places worth the time",
  intro:
    "Small-group journeys on foot and by train, for twelve travelers at most. A guide who lives there, quiet inns, and your luggage sent ahead each morning.",
};

// What the home page says about traveling with us
export const principles = [
  { title: "Twelve at most", text: "Small enough for a family-run inn and a single table at dinner." },
  { title: "Guides who live there", text: "Each route is led by someone who walks it out of season too." },
  { title: "Luggage goes ahead", text: "You carry a day pack. Your bag is waiting in your room each evening." },
  { title: "Trains between the walks", text: "No coach days. Long transfers are by rail, with seats reserved." },
];

export const destinations = [
  { id: "scotland", name: "Scotland", blurb: "Glens, sea lochs and island ferries, walked in late spring and early autumn." },
  { id: "dolomites", name: "The Dolomites", blurb: "Hut-to-village walking under limestone towers, from late June to September." },
  { id: "portugal", name: "Portugal", blurb: "Terraced vineyards and river towns in the north, best in spring and at harvest." },
  { id: "japan", name: "Japan", blurb: "Old pilgrimage roads through cedar forest, and slow trains between them." },
  { id: "norway", name: "Norway", blurb: "Fjord-side paths and the mountain railway, under long summer light." },
];

export type Day = { title: string; text: string; walk?: string; stay: string };
export type Departure = { date: string; price: number; spaces: number };
export type Tour = {
  slug: string;
  name: string;
  destination: string;
  summary: string;
  days: number;
  level: "Easy" | "Moderate" | "Challenging";
  levelNote: string;
  group: number;
  from: string;
  to: string;
  included: string[];
  notIncluded: string[];
  itinerary: Day[];
  departures: Departure[];
  // Points of the route on the drawn map, one per stop, in a 600 x 400 box
  route: [number, number][];
  // A seed for the map's contour lines, so each tour gets its own terrain
  terrain: number;
};

export const tours: Tour[] = [
  {
    slug: "highland-glens-and-sea-lochs",
    name: "Highland Glens and Sea Lochs",
    destination: "scotland",
    summary: "Seven days from Fort William to the Isle of Skye, on old drove roads and lochside paths, with two ferry crossings.",
    days: 7,
    level: "Moderate",
    levelNote: "4 to 6 hours of walking a day, up to 500 m of climb, some rough ground",
    group: 12,
    from: "Fort William",
    to: "Portree",
    included: [
      "6 nights in small inns and guesthouses, private bathrooms",
      "All breakfasts, 4 dinners and packed lunches on walking days",
      "A Farline guide for the whole journey",
      "Luggage moved each day",
      "Train and ferry tickets on the route",
    ],
    notIncluded: ["Flights to and from Scotland", "Travel insurance", "Drinks and 2 dinners"],
    itinerary: [
      { title: "Meet in Fort William", text: "Meet your guide and group at the inn at 5 pm, with a short walk along the loch before dinner.", stay: "Fort William" },
      { title: "Into Glen Nevis", text: "Up the glen past the waterfall at Steall, then back along the river to town.", walk: "14 km, 4.5 hours", stay: "Fort William" },
      { title: "The road to the isles", text: "The morning train over the viaduct to Glenfinnan, then a lochside walk to the coast.", walk: "11 km, 3.5 hours", stay: "Arisaig" },
      { title: "Sands of Morar", text: "White beaches and a coast path north to Mallaig, then the afternoon ferry to Skye.", walk: "13 km, 4 hours", stay: "Armadale" },
      { title: "Sleat peninsula", text: "Moorland tracks to a ruined township and a sea loch, with otters if we're quiet.", walk: "16 km, 5.5 hours", stay: "Broadford" },
      { title: "Under the Cuillin", text: "The path into Glen Sligachan between the black and red hills, the longest day of the trip.", walk: "18 km, 6 hours", stay: "Portree" },
      { title: "Portree", text: "A slow breakfast and goodbyes. Buses connect to Inverness for trains south.", stay: "Departure day" },
    ],
    departures: [
      { date: "2027-05-16", price: 3890, spaces: 4 },
      { date: "2027-06-06", price: 3990, spaces: 9 },
      { date: "2027-09-05", price: 3890, spaces: 12 },
      { date: "2027-09-19", price: 3790, spaces: 0 },
    ],
    route: [[90, 300], [150, 260], [230, 230], [300, 170], [370, 200], [440, 140], [510, 90]],
    terrain: 3,
  },
  {
    slug: "dolomites-hut-to-village",
    name: "Dolomites: Hut to Village",
    destination: "dolomites",
    summary: "Eight days through the Alta Badia and Val Gardena, alternating high mountain huts and village hotels.",
    days: 8,
    level: "Challenging",
    levelNote: "5 to 7 hours a day, up to 900 m of climb, some steep and exposed paths with cables",
    group: 10,
    from: "Bolzano",
    to: "Ortisei",
    included: [
      "7 nights: 2 in mountain huts (shared dormitory rooms), 5 in family hotels",
      "All breakfasts and dinners, packed lunches on walking days",
      "A mountain guide and an assistant guide",
      "Luggage moved between hotels (huts are reached with a day pack)",
      "Lift tickets and the train from Bolzano",
    ],
    notIncluded: ["Flights to and from Italy", "Travel insurance with mountain rescue cover", "Drinks"],
    itinerary: [
      { title: "Bolzano", text: "Meet at the hotel at 6 pm for a kit check and dinner in the old town.", stay: "Bolzano" },
      { title: "Up to Alta Badia", text: "Train and local bus into the valley, then a warm-up walk through larch meadows.", walk: "9 km, 3 hours", stay: "Corvara" },
      { title: "Sella pass", text: "A lift to the plateau and a long traverse under the Sella towers.", walk: "15 km, 6 hours", stay: "Corvara" },
      { title: "To the first hut", text: "Through the Puez nature park to a hut at 2,475 m, with the sunset on the walls.", walk: "13 km, 6.5 hours", stay: "Puez hut" },
      { title: "Across the Puez plateau", text: "A stony moonscape of a plateau, then down past alpine lakes.", walk: "12 km, 6 hours", stay: "Firenze hut" },
      { title: "Seceda ridge", text: "Up to the grassy ridge with its knife-edge view, and down into Val Gardena.", walk: "14 km, 6 hours", stay: "Ortisei" },
      { title: "Alpe di Siusi", text: "The highest alpine meadow in Europe, a gentle loop on the last walking day.", walk: "12 km, 4 hours", stay: "Ortisei" },
      { title: "Ortisei", text: "Breakfast and goodbyes. Buses run to Bolzano for trains to Verona and Venice.", stay: "Departure day" },
    ],
    departures: [
      { date: "2027-06-27", price: 4650, spaces: 6 },
      { date: "2027-07-18", price: 4790, spaces: 2 },
      { date: "2027-08-29", price: 4790, spaces: 10 },
    ],
    route: [[80, 330], [170, 280], [250, 250], [320, 180], [400, 150], [470, 200], [520, 260], [540, 320]],
    terrain: 7,
  },
  {
    slug: "douro-vineyards-on-foot",
    name: "Douro Vineyards on Foot",
    destination: "portugal",
    summary: "Six days through the terraced Douro valley, between quintas and river towns, with the river train to Porto at the end.",
    days: 6,
    level: "Easy",
    levelNote: "3 to 4 hours a day on farm tracks, some steady climbs between terraces",
    group: 12,
    from: "Peso da Regua",
    to: "Porto",
    included: [
      "5 nights in wine estates and a riverside hotel",
      "All breakfasts, 3 dinners and 2 lunches at quintas",
      "A Farline guide and a wine tasting at three estates",
      "Luggage moved each day",
      "The Douro line train back to Porto",
    ],
    notIncluded: ["Flights to and from Portugal", "Travel insurance", "2 dinners"],
    itinerary: [
      { title: "Peso da Regua", text: "Meet at the hotel at 5 pm, then a short walk to the river for the evening light.", stay: "Peso da Regua" },
      { title: "Terraces to Covelinhas", text: "Up through the schist terraces to a chapel viewpoint, and lunch at a family quinta.", walk: "12 km, 4 hours", stay: "Quinta near Covelinhas" },
      { title: "The Pinhao valley", text: "Along the Pinhao river past old wine presses, with a tasting at the end of the day.", walk: "11 km, 3.5 hours", stay: "Pinhao" },
      { title: "Up to Casal de Loivos", text: "A steady climb to the village balcony over the river bend, then down through olive groves.", walk: "10 km, 4 hours", stay: "Pinhao" },
      { title: "Harvest day", text: "Join a quinta's working day in season, or walk the riverside path to Tua.", walk: "9 km, 3 hours", stay: "Quinta near Tua" },
      { title: "Train to Porto", text: "The slow train down the river to Porto, arriving by early afternoon.", stay: "Departure day" },
    ],
    departures: [
      { date: "2027-04-18", price: 2690, spaces: 8 },
      { date: "2027-05-09", price: 2790, spaces: 11 },
      { date: "2027-09-26", price: 2890, spaces: 3 },
      { date: "2027-10-10", price: 2790, spaces: 7 },
    ],
    route: [[90, 220], [190, 250], [290, 210], [380, 240], [470, 200], [540, 230]],
    terrain: 11,
  },
  {
    slug: "kumano-kodo-and-kyoto",
    name: "Kumano Kodo and Kyoto",
    destination: "japan",
    summary: "Eight days on the Nakahechi pilgrimage route through the Kii mountains, with two nights in Kyoto at the end.",
    days: 8,
    level: "Moderate",
    levelNote: "4 to 6 hours a day on stone steps and forest paths, up to 600 m of climb",
    group: 12,
    from: "Tanabe",
    to: "Kyoto",
    included: [
      "7 nights in family-run inns, a temple lodging and a Kyoto hotel",
      "All breakfasts, 5 dinners and packed lunches on walking days",
      "A bilingual Farline guide for the whole journey",
      "Luggage forwarded between inns",
      "Limited express train tickets and a 7-day local transport pass",
    ],
    notIncluded: ["Flights to and from Japan", "Travel insurance", "Lunches in Kyoto"],
    itinerary: [
      { title: "Tanabe", text: "Meet at the hotel at 4 pm for a walk to the old shrine and a first dinner together.", stay: "Tanabe" },
      { title: "Takijiri to Chikatsuyu", text: "The trail head shrine, then cedar ridges and tea stalls to a hot spring village.", walk: "13 km, 6 hours", stay: "Chikatsuyu" },
      { title: "Into the Kii mountains", text: "Through quiet hamlets to a river valley and a guesthouse with an outdoor bath.", walk: "12 km, 5 hours", stay: "Kawayu Onsen" },
      { title: "Hongu Taisha", text: "The last stretch to the grand shrine, then the giant torii in the rice fields.", walk: "7 km, 3 hours", stay: "Yunomine Onsen" },
      { title: "Kogumotori-goe", text: "Mossy steps and a ridge over a sea of hills, the most beautiful day on the road.", walk: "15 km, 6 hours", stay: "Koguchi" },
      { title: "Nachi falls", text: "A steep climb and long descent to the waterfall and its red pagoda.", walk: "15 km, 7 hours", stay: "Nachi" },
      { title: "Train to Kyoto", text: "Limited express trains north along the coast, arriving mid afternoon.", stay: "Kyoto" },
      { title: "Kyoto", text: "A morning walk through the eastern hills with your guide, then the afternoon to yourself.", walk: "8 km, 3 hours", stay: "Departure day" },
    ],
    departures: [
      { date: "2027-04-04", price: 5290, spaces: 1 },
      { date: "2027-05-23", price: 5190, spaces: 8 },
      { date: "2027-10-24", price: 5390, spaces: 12 },
      { date: "2027-11-14", price: 5390, spaces: 6 },
    ],
    route: [[70, 300], [140, 250], [220, 220], [280, 260], [350, 210], [420, 250], [490, 150], [540, 90]],
    terrain: 5,
  },
  {
    slug: "fjords-and-the-mountain-railway",
    name: "Fjords and the Mountain Railway",
    destination: "norway",
    summary: "Six days from Bergen to the head of the Aurlandsfjord, on foot and by the mountain railway, under long summer light.",
    days: 6,
    level: "Moderate",
    levelNote: "4 to 5 hours a day, one long descent of 800 m, good paths",
    group: 12,
    from: "Bergen",
    to: "Flam",
    included: [
      "5 nights in small hotels and a mountain lodge",
      "All breakfasts, 4 dinners and packed lunches on walking days",
      "A Farline guide for the whole journey",
      "Luggage moved each day",
      "Train and fjord ferry tickets",
    ],
    notIncluded: ["Flights to and from Norway", "Travel insurance", "Drinks and 1 dinner"],
    itinerary: [
      { title: "Bergen", text: "Meet at the hotel at 5 pm and walk up the hill above the harbor before dinner.", stay: "Bergen" },
      { title: "Train to Finse", text: "The railway climbs above the tree line to the highest station on the line, and an afternoon walk to the glacier's edge.", walk: "8 km, 3 hours", stay: "Finse" },
      { title: "Across the plateau", text: "A long day on the old navvy road beside the railway, past lakes still edged with snow.", walk: "18 km, 6 hours", stay: "Myrdal lodge" },
      { title: "Down the Flam valley", text: "Hairpins beside a waterfall, then down the green valley to the fjord.", walk: "20 km, 6 hours", stay: "Flam" },
      { title: "Aurlandsfjord", text: "A fjord ferry to a farm reached only by boat, and a walk along the shore.", walk: "10 km, 3.5 hours", stay: "Flam" },
      { title: "Flam", text: "Breakfast and goodbyes. The mountain railway connects to trains for Oslo and Bergen.", stay: "Departure day" },
    ],
    departures: [
      { date: "2027-06-20", price: 4190, spaces: 5 },
      { date: "2027-07-11", price: 4290, spaces: 0 },
      { date: "2027-08-08", price: 4290, spaces: 9 },
    ],
    route: [[70, 180], [180, 150], [300, 130], [400, 210], [470, 300], [540, 320]],
    terrain: 2,
  },
];

export const howWeTravel = {
  intro:
    "Farline started in 2011 with one walking route in the Highlands and a borrowed minibus. We now run five journeys, each one walked by its guide in every season before a group ever sees it.",
  sections: [
    {
      title: "Small groups",
      text: "Twelve travelers at most, ten in the Dolomites. We confirm a departure once six people have booked, and tell you at least 60 days before if one can't run.",
    },
    {
      title: "Levels, honestly",
      text: "Easy means farm tracks and a few climbs. Moderate means full days on rougher paths. Challenging means long, steep days, some on exposed ground. Ask us if you're unsure; we'd rather talk it through than have you struggle.",
    },
    {
      title: "Where we stay",
      text: "Family-run inns, guesthouses and huts, chosen for their kitchens and their owners. Every room has a private bathroom except in the mountain huts.",
    },
    {
      title: "Getting there",
      text: "Flights aren't included, so you can use your own miles and arrive early. Each tour page says where it starts and ends, and the nearest airport and station.",
    },
    {
      title: "Deposits and cancelling",
      text: "A $500 deposit holds your place, and the balance is due 70 days before departure. Cancel more than 70 days out and we refund everything except $150.",
    },
  ],
};

export const levels = ["Easy", "Moderate", "Challenging"] as const;
