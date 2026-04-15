import type { Destination } from "../types";

type DestinationSeed = {
  name: string;
  baseSlug: string;
  description: string;
  longDescription: string;
  history: string;
  location: string;
  address: string;
  image: string;
  category: string[];
  lat: number;
  lng: number;
  rating: number;
  reviewCount: number;
  price: number;
};

const DESTINATION_SEEDS: DestinationSeed[] = [
  {
    name: "Ubud Traditional Village",
    baseSlug: "ubud-traditional-village",
    description:
      "A cultural village where traditional dance, artisan studios, and lush rice terraces converge.",
    longDescription:
      "Ubud Traditional Village is a creative heartland where temple courtyards, family compounds, and rice-terrace paths shape daily life. Visitors can follow artisan lanes, observe ceremonial preparations, and enjoy a slower rhythm guided by local hosts.",
    history:
      "The settlement developed around royal patronage and community temples, blending ritual heritage with artistic practice. Over generations, residents sustained carving, painting, and dance traditions while adapting to cultural tourism.",
    location: "Ubud, Bali",
    address: "Jalan Raya Ubud, Kecamatan Ubud, Gianyar, Bali",
    image:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=1400&auto=format&fit=crop",
    category: ["Cultural"],
    lat: -8.5069,
    lng: 115.2625,
    rating: 4.9,
    reviewCount: 342,
    price: 820000,
  },
  {
    name: "Sidemen Valley",
    baseSlug: "sidemen-valley",
    description:
      "River valleys, weaving workshops, and peaceful trails beneath Mount Agung.",
    longDescription:
      "Sidemen Valley offers layered landscapes of terraced paddies, river bends, and weaving homes where time moves gently. The area is ideal for travelers seeking community-led activities, nature walks, and calm mountain scenery.",
    history:
      "Known historically for songket weaving and agricultural life, Sidemen preserved its village texture despite nearby tourism growth. Local households continue to pass weaving and farming knowledge across generations.",
    location: "Karangasem, Bali",
    address: "Desa Sidemen, Kecamatan Sidemen, Karangasem, Bali",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1400&auto=format&fit=crop",
    category: ["Nature", "Craft"],
    lat: -8.4666,
    lng: 115.4438,
    rating: 4.7,
    reviewCount: 198,
    price: 450000,
  },
  {
    name: "Penglipuran Heritage",
    baseSlug: "penglipuran-heritage",
    description:
      "A preserved bamboo village known for clean lanes, ritual spaces, and heritage homes.",
    longDescription:
      "Penglipuran Heritage is one of Bali's most carefully preserved traditional villages, celebrated for its linear layout, bamboo gardens, and communal order. The village experience highlights architecture, ritual space, and local storytelling.",
    history:
      "The community traces roots to Bayung Gede and maintains customary laws that protect settlement form and environmental cleanliness. Penglipuran has received international recognition for stewardship and cultural continuity.",
    location: "Bangli, Bali",
    address: "Jalan Penglipuran, Kubu, Bangli, Bali",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop",
    category: ["Cultural"],
    lat: -8.4635,
    lng: 115.3581,
    rating: 4.8,
    reviewCount: 276,
    price: 380000,
  },
  {
    name: "Sembalun Highlands",
    baseSlug: "sembalun-highlands",
    description:
      "Cool mountain air, volcanic landscapes, and farms with sunrise viewpoints.",
    longDescription:
      "Sembalun Highlands sits on the eastern slopes of Mount Rinjani, where broad meadows meet volcanic ridges. Visitors can explore farm villages, sunrise points, and scenic trails with local guides.",
    history:
      "Sembalun villages evolved as highland farming communities with strong ecological traditions. In recent years, trekking and agro-tourism have grown while residents continue to protect watershed landscapes.",
    location: "Lombok, NTB",
    address: "Desa Sembalun Lawang, Sembalun, Lombok Timur, NTB",
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1400&auto=format&fit=crop",
    category: ["Nature"],
    lat: -8.3724,
    lng: 116.5354,
    rating: 4.6,
    reviewCount: 149,
    price: 520000,
  },
  {
    name: "Wae Rebo Village",
    baseSlug: "wae-rebo-village",
    description:
      "An iconic hilltop village of cone-shaped homes and rich Manggarai traditions.",
    longDescription:
      "Wae Rebo Village is a highland cultural settlement renowned for its cone-roofed mbaru niang houses and dramatic mountain backdrop. The village invites respectful immersion through homestays, stories, and traditional music.",
    history:
      "Local oral history recounts ancestral migration into this mountain basin. Restoration efforts led by the community have protected architecture and revitalized ceremonial life.",
    location: "Flores, NTT",
    address: "Desa Satar Lenda, Satarmese Barat, Manggarai, NTT",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1400&auto=format&fit=crop",
    category: ["Cultural", "Nature"],
    lat: -8.7714,
    lng: 120.2907,
    rating: 4.9,
    reviewCount: 401,
    price: 600000,
  },
  {
    name: "Baduy Inner Trail",
    baseSlug: "baduy-inner-trail",
    description:
      "Experience traditional living and sacred forest paths with local guidance.",
    longDescription:
      "Baduy Inner Trail introduces visitors to one of Indonesia's most distinctive customary communities. Guided walks emphasize respectful learning, forest ethics, and non-intrusive cultural exchange.",
    history:
      "The Baduy people have maintained customary governance and ecological discipline for centuries. Access norms are community-led and prioritize cultural protection.",
    location: "Banten, Java",
    address: "Desa Kanekes, Leuwidamar, Lebak, Banten",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1400&auto=format&fit=crop",
    category: ["Cultural", "Nature"],
    lat: -6.647,
    lng: 106.3027,
    rating: 4.5,
    reviewCount: 110,
    price: 300000,
  },
  {
    name: "Batik Laweyan",
    baseSlug: "batik-laweyan",
    description:
      "Historic batik district with craft houses and hands-on dyeing classes.",
    longDescription:
      "Batik Laweyan is a heritage district where boutique workshops and historic lanes reveal the craft economy of Solo. Visitors can join short classes and meet artisans preserving wax-resist traditions.",
    history:
      "Laweyan rose as a major batik trade center in the colonial era and remains a symbolic craft neighborhood. Conservation efforts now combine heritage architecture with creative entrepreneurship.",
    location: "Solo, Central Java",
    address: "Kampung Batik Laweyan, Laweyan, Surakarta, Jawa Tengah",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1400&auto=format&fit=crop",
    category: ["Craft"],
    lat: -7.5705,
    lng: 110.797,
    rating: 4.4,
    reviewCount: 90,
    price: 250000,
  },
  {
    name: "Kintamani Agro Village",
    baseSlug: "kintamani-agro-village",
    description:
      "Coffee gardens, crater views, and local farm-to-table culinary tours.",
    longDescription:
      "Kintamani Agro Village combines volcanic views with coffee and citrus farms managed by local families. Travelers can visit plantations, tasting spots, and community kitchens featuring highland produce.",
    history:
      "Agricultural cooperatives in Kintamani have long balanced cultivation and soil conservation near the caldera. Specialty coffee development has strengthened local livelihoods.",
    location: "Bangli, Bali",
    address: "Desa Batur Selatan, Kintamani, Bangli, Bali",
    image:
      "https://images.unsplash.com/photo-1501556424050-d4816356b73e?q=80&w=1400&auto=format&fit=crop",
    category: ["Culinary", "Nature"],
    lat: -8.2442,
    lng: 115.3775,
    rating: 4.8,
    reviewCount: 233,
    price: 560000,
  },
  {
    name: "Toraja Highlands",
    baseSlug: "toraja-highlands",
    description:
      "Wood-carved tongkonan villages, highland valleys, and ceremonial heritage.",
    longDescription:
      "Toraja Highlands features dramatic mountain villages marked by tongkonan houses and deeply rooted ceremonial culture. Experiences include architectural walks, local cuisine, and guided storytelling.",
    history:
      "Toraja communities are known for rich woodcarving and elaborate social ceremonies. Village tourism has grown around heritage interpretation and cultural preservation.",
    location: "Tana Toraja, South Sulawesi",
    address: "Rantepao, Tana Toraja, Sulawesi Selatan",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1400&auto=format&fit=crop",
    category: ["Cultural", "Nature"],
    lat: -3.0824,
    lng: 119.8986,
    rating: 4.9,
    reviewCount: 420,
    price: 900000,
  },
  {
    name: "Sade Sasak Village",
    baseSlug: "sade-sasak-village",
    description:
      "A living Sasak village with weaving traditions and earthen architecture.",
    longDescription:
      "Sade Sasak Village offers insight into Sasak home layouts, weaving craft, and local customs in Lombok. Guided visits are designed around cultural etiquette and direct community benefit.",
    history:
      "The village has sustained vernacular construction using natural materials and family-based weaving economies. Cultural tours now support preservation initiatives led by residents.",
    location: "Lombok, NTB",
    address: "Desa Sade, Rambitan, Pujut, Lombok Tengah, NTB",
    image:
      "https://images.unsplash.com/photo-1493244040629-496f6d136cc3?q=80&w=1400&auto=format&fit=crop",
    category: ["Cultural", "Craft"],
    lat: -8.8397,
    lng: 116.2898,
    rating: 4.5,
    reviewCount: 134,
    price: 290000,
  },
];

const TOTAL_DESTINATIONS = 50;

const DETAIL_GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501556424050-d4816356b73e?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1400&auto=format&fit=crop",
];

const FACILITY_TEMPLATES = [
  { id: "f1", icon: "wc", label: "Toilets" },
  { id: "f2", icon: "local_parking", label: "Parking" },
  { id: "f3", icon: "person_check", label: "Guide" },
  { id: "f4", icon: "restaurant", label: "Warung" },
  { id: "f5", icon: "temple_hindu", label: "Prayer" },
  { id: "f6", icon: "local_mall", label: "Souvenirs" },
];

const EVENT_TEMPLATES = [
  {
    day: "15",
    month: "AUG",
    title: "Galungan Celebration",
    description:
      "The most significant Balinese celebration, marked by ritual offerings and village processions.",
  },
  {
    day: "22",
    month: "SEP",
    title: "Village Craft Workshop",
    description:
      "Learn bamboo and fiber craft techniques with local artisans in a community-led session.",
  },
];

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function buildItinerary(seed: DestinationSeed, index: number) {
  return [
    {
      id: `${seed.baseSlug}-${index}-it-1`,
      time: "08:00",
      title: "Arrival and welcome briefing",
      description:
        "Meet your host family and get an introduction to village etiquette and the day itinerary.",
    },
    {
      id: `${seed.baseSlug}-${index}-it-2`,
      time: "10:00",
      title: `${seed.category[0] ?? "Village"} experience walk`,
      description:
        "Join a guided route through key community spots, local houses, and traditional activity areas.",
    },
    {
      id: `${seed.baseSlug}-${index}-it-3`,
      time: "13:00",
      title: "Local lunch and storytelling",
      description:
        "Enjoy village cuisine while hearing stories about local customs, heritage, and daily life.",
    },
    {
      id: `${seed.baseSlug}-${index}-it-4`,
      time: "15:30",
      title: "Hands-on workshop and wrap-up",
      description:
        "Participate in a short craft or farming activity before reflection and return transfer.",
    },
  ];
}

function buildGallery(seed: DestinationSeed, index: number): string[] {
  const first = DETAIL_GALLERY_IMAGES[index % DETAIL_GALLERY_IMAGES.length];
  const second =
    DETAIL_GALLERY_IMAGES[(index + 2) % DETAIL_GALLERY_IMAGES.length];
  const third =
    DETAIL_GALLERY_IMAGES[(index + 4) % DETAIL_GALLERY_IMAGES.length];

  return [seed.image, first, second, third].filter(
    (value, position, array) => array.indexOf(value) === position,
  );
}

function buildAttractions(seed: DestinationSeed, index: number) {
  const imageA = DETAIL_GALLERY_IMAGES[index % DETAIL_GALLERY_IMAGES.length];
  const imageB =
    DETAIL_GALLERY_IMAGES[(index + 1) % DETAIL_GALLERY_IMAGES.length];
  const imageC =
    DETAIL_GALLERY_IMAGES[(index + 2) % DETAIL_GALLERY_IMAGES.length];

  return [
    {
      id: `${seed.baseSlug}-${index}-at-1`,
      title: "Sacred Bamboo Forest",
      description: "A peaceful trail through towering bamboo and ritual paths.",
      image: imageA,
      tag: "Nature",
    },
    {
      id: `${seed.baseSlug}-${index}-at-2`,
      title: "Village Main Gateway",
      description:
        "A landmark entry point that reflects traditional village identity.",
      image: imageB,
      tag: "Architecture",
    },
    {
      id: `${seed.baseSlug}-${index}-at-3`,
      title: "Community Temple Courtyard",
      description:
        "A spiritual gathering space where major ceremonies are held.",
      image: imageC,
      tag: "Spiritual",
    },
  ];
}

function buildEvents(seed: DestinationSeed, index: number) {
  return EVENT_TEMPLATES.map((item, eventIndex) => ({
    id: `${seed.baseSlug}-${index}-ev-${eventIndex + 1}`,
    ...item,
  }));
}

function buildLocalProducts(seed: DestinationSeed, index: number) {
  const imageA =
    DETAIL_GALLERY_IMAGES[(index + 2) % DETAIL_GALLERY_IMAGES.length];
  const imageB =
    DETAIL_GALLERY_IMAGES[(index + 3) % DETAIL_GALLERY_IMAGES.length];
  const imageC =
    DETAIL_GALLERY_IMAGES[(index + 4) % DETAIL_GALLERY_IMAGES.length];

  return [
    {
      id: `${seed.baseSlug}-${index}-prd-1`,
      name: "Traditional Bamboo Basket",
      description: "Hand-woven by local women artisans.",
      image: imageA,
    },
    {
      id: `${seed.baseSlug}-${index}-prd-2`,
      name: "Organic Forest Honey",
      description: "Pure highland honey sourced by local beekeepers.",
      image: imageB,
    },
    {
      id: `${seed.baseSlug}-${index}-prd-3`,
      name: "Loloh Herbal Mix",
      description: "Traditional herbal blend from village gardens.",
      image: imageC,
    },
  ];
}

function buildHomestays(seed: DestinationSeed, index: number) {
  const basePrice = Math.max(250000, Math.floor(seed.price * 0.55));
  const imageA =
    DETAIL_GALLERY_IMAGES[(index + 1) % DETAIL_GALLERY_IMAGES.length];
  const imageB =
    DETAIL_GALLERY_IMAGES[(index + 4) % DETAIL_GALLERY_IMAGES.length];
  const imageC =
    DETAIL_GALLERY_IMAGES[(index + 5) % DETAIL_GALLERY_IMAGES.length];

  return [
    {
      id: `${seed.baseSlug}-${index}-stay-1`,
      name: `${seed.name} Bamboo Haven`,
      description:
        "Traditional homestay with open-air living space and garden views.",
      image: imageA,
      location: seed.location,
      price: basePrice,
      rating: Number((seed.rating - 0.1).toFixed(1)),
      amenities: ["Breakfast", "Free WiFi", "Village Host"],
    },
    {
      id: `${seed.baseSlug}-${index}-stay-2`,
      name: `${seed.name} Family Lodge`,
      description:
        "A cozy heritage stay managed by local families near cultural hotspots.",
      image: imageB,
      location: seed.location,
      price: basePrice + 90000,
      rating: Number((seed.rating - 0.05).toFixed(1)),
      amenities: ["Dinner", "Guided Tour", "Private Bathroom"],
    },
    {
      id: `${seed.baseSlug}-${index}-stay-3`,
      name: `${seed.name} Eco Sanctuary`,
      description: "Comfort-focused eco stay with mountain or valley views.",
      image: imageC,
      location: seed.location,
      price: basePrice + 160000,
      rating: seed.rating,
      amenities: ["Scenic View", "Shuttle", "Welcome Tea"],
    },
  ];
}

export const MOCK_DESTINATIONS: Destination[] = Array.from(
  { length: TOTAL_DESTINATIONS },
  (_, index) => {
    const seed = DESTINATION_SEEDS[index % DESTINATION_SEEDS.length];
    const cycle = Math.floor(index / DESTINATION_SEEDS.length);
    const cycleNumber = cycle + 1;

    const name = cycle === 0 ? seed.name : `${seed.name} ${cycleNumber}`;
    const slug =
      cycle === 0 ? seed.baseSlug : `${seed.baseSlug}-${cycleNumber}`;

    const rating = clamp(
      seed.rating - cycle * 0.08 + (index % 3) * 0.03,
      4.1,
      5,
    );

    return {
      id: `d${index + 1}`,
      name,
      slug,
      badge: "Cleanest Village in Bali",
      description:
        cycle === 0
          ? seed.description
          : `${seed.description} Seasonal edition ${cycleNumber} offers refreshed local activities and village-hosted experiences.`,
      longDescription: seed.longDescription,
      history: seed.history,
      location: seed.location,
      address: seed.address,
      image: seed.image,
      gallery: buildGallery(seed, index),
      map: {
        lat: seed.lat,
        lng: seed.lng,
        label: seed.name,
      },
      itinerary: buildItinerary(seed, index),
      booking: {
        duration: "7-8 hours",
        groupSize: "Up to 10 people",
        includes: [
          "Round-trip local transfer",
          "Village host and local guide",
          "Traditional lunch",
          "Workshop materials",
        ],
      },
      practicalInfo: {
        address: seed.address,
        phone: "+62 812-3456-7890",
        socials: [
          { label: "Instagram", href: "#" },
          { label: "Facebook", href: "#" },
        ],
      },
      facilities: FACILITY_TEMPLATES.map((item) => ({
        ...item,
        id: `${seed.baseSlug}-${index}-${item.id}`,
      })),
      highlightedAttractions: buildAttractions(seed, index),
      upcomingEvents: buildEvents(seed, index),
      localProducts: buildLocalProducts(seed, index),
      homestays: buildHomestays(seed, index),
      category: seed.category,
      rating: Number(rating.toFixed(1)),
      reviewCount: seed.reviewCount + cycle * 37 + (index % 5) * 11,
      isFeatured: index < 8,
      price: seed.price + cycle * 45000 + (index % 4) * 20000,
    };
  },
);

export function getMockDestinationBySlug(slug: string): Destination | null {
  return (
    MOCK_DESTINATIONS.find((destination) => destination.slug === slug) ?? null
  );
}
