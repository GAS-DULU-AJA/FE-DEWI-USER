import type { Experience } from "../types";

export const MOCK_EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    slug: "sacred-bamboo-walk",
    name: "Sacred Bamboo Walk",
    description:
      "A slow meditative walk through a cathedral of bamboo with local storytelling along the path.",
    longDescription: [
      "Deep within the mist-shrouded valleys of Sidemen lies a path less traveled. The Sacred Bamboo Walk is not just a destination; it is a sensory immersion into the heart of rural Bali. As you step beneath the towering, arching stalks of giant bamboo, the outside world fades into a rhythmic rustle of leaves and distant temple bells.",
      "For generations, this forest has served as a natural cathedral for the local community. The walk is timed for golden hour, when the setting sun pierces through the emerald canopy and casts long shadows across the earthen path. Your journey concludes at a hidden clearing where the view of Mount Agung opens in a breathtaking silhouette.",
    ],
    location: "Sidemen Village",
    address: "Sidemen, Karangasem Regency, Bali",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFlIsUXKw1O6cTTK-hci1P-F_Va_092JJGsq2V1w-9xjDF8T2iWfVvY5EzqGTgRn5iUq5qYZ16KceWfJxShGSkE9H3Ng7Ynf9kf8Wal5FgRs371tV5V11UJlF-ZIXanpWcNM2lBjPBDv-HsAHvThzTn3ND8bXJ4gmFo3uQOu3tQPR9OeCVfm2NDNxh8W0ZmhuLX4J9lnLGO90zwIP_h1DmCSRcnCvPe53i6fQL08bWZPjXNeQmijVTELU0jy4twX0rrZl0KQBONVw",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2nWj7Xkjm9G_37NjbkJUI_6U6mZPd0zY8jDNG86ezuc37QJvAlAv-kCML-6LeStZ6zvAmrt3r5NrQ8I3NYxKLl8zvWvsihEaidOtNR2opIScJHrdPssXmeGLaa17pfkAwkEPujq4bb0mftMBczQ00l1tWeweZ-HNXBJ1t9MM0R5LINvmMseIroLJjTLeoYtn_xYrLa960aFgUjxJOHKqNWdWnEjLahlviCw-mqBHvOnS_7NMxFGUM7laB6KQVgihS4G8XdMpYPDY",
    map: {
      lat: -8.4667,
      lng: 115.45,
      zoom: 13,
    },
    rating: 4.9,
    price: 350000,
    category: "eco-trails",
    facilities: [
      { id: "guided-tour", icon: "guide", label: "Guided Tour" },
      { id: "refreshments", icon: "coffee", label: "Refreshments" },
      { id: "photography", icon: "camera", label: "Photography" },
      { id: "restrooms", icon: "restroom", label: "Restrooms" },
    ],
    bookingHighlights: [
      {
        id: "instant-confirmation",
        icon: "verified",
        label: "Instant confirmation",
      },
      {
        id: "free-cancellation",
        icon: "calendar-x",
        label: "Free cancellation (24h)",
      },
      { id: "local-guide", icon: "guide", label: "Local guide included" },
    ],
    sustainabilityNote: {
      title: "Eco-Conscious Travel",
      description:
        "This experience follows plastic-free guidelines and supports local bamboo artisans.",
    },
    contributionNote:
      "By booking, you contribute to the Sidemen Community Forest Fund.",
  },
  {
    id: "exp-2",
    slug: "ubud-craft-journey",
    name: "Ubud Craft Journey",
    description:
      "A hands-on artisan visit with pottery, weaving, and a private studio conversation.",
    location: "Tegallalang Village",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5GXCi3zQGVWnrZnQNGPuGhuJbiiipnPiRfgOtI5oJU7BWHorTddfqSOiQrBZPUmVE7HglM-IKel3nHDuJ4mP1AwSdz8AcYhRgccxcW3qp2W9yXqeBCsrGTKKT9Dr3LyNzkv03BbtoChpOu5EjEdfdL1jSduhqUjZB3-gWCAuyOBLEHn_5S_5Xe78jcDmoRO0XTq4UF7wI6MTaJqK4wLLb5nAluByifTMWc6ruNAorCS2qgiqNWAVpfbFTOYZ7vLfzqCPhrj-SE9Q",
    rating: 4.8,
    price: 550000,
    category: "craft-workshops",
  },
  {
    id: "exp-3",
    slug: "temple-dance-ritual",
    name: "Temple Dance Ritual",
    description:
      "Witness a dusk ceremony and learn the cultural meaning behind each movement.",
    location: "Batubulan Village",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5RGZa4KKIwvFWuPj9-0hwSg-xWtXry36lmvGQJRDfd6dxxM45rHrSXnjWC5q0ZRhZAZNduPC-97KfPZLTSp0Z035N0RVwTo2e7BFc9khPYpTRDg10y5QhsWZJSHC9UvJvbndezuV0d9WDUnOY0rsLCJm7wfHlKPyPr-lrGe_1KfphJhlk2Dici2DVHnF7HfVvHk1p7ogmHAV3WzsUSJFn_jCGghUzt93XUuE-aoGNJ28LqWP6eggGOcNfnCQVLe2v3_won9gBAOA",
    rating: 5,
    price: 400000,
    category: "heritage-sites",
  },
  {
    id: "exp-4",
    slug: "eco-paddy-trail",
    name: "Eco Paddy Trail",
    description:
      "Explore living rice terraces with farmers who explain irrigation, planting, and harvest rituals.",
    location: "Jatiluwih Village",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    price: 250000,
    category: "eco-trails",
  },
  {
    id: "exp-5",
    slug: "heritage-stone-carving",
    name: "Heritage Stone Carving",
    description:
      "Learn traditional carving motifs in a workshop led by a family of master sculptors.",
    location: "Singapadu Village",
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80",
    rating: 4.6,
    price: 450000,
    category: "craft-workshops",
  },
  {
    id: "exp-6",
    slug: "village-culinary-class",
    name: "Village Culinary Class",
    description:
      "Cook a full village lunch from market ingredients with home-kitchen techniques.",
    location: "Penglipuran Village",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    price: 600000,
    category: "local-dining",
  },
  {
    id: "exp-7",
    slug: "forest-herbal-foraging",
    name: "Forest Herbal Foraging",
    description:
      "Collect medicinal herbs with a local guide and prepare a traditional wellness tonic.",
    location: "Munduk Village",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    price: 500000,
    category: "eco-trails",
  },
  {
    id: "exp-8",
    slug: "bamboo-weaving-circle",
    name: "Bamboo Weaving Circle",
    description:
      "Join a communal weaving session and bring home a hand-finished basket.",
    location: "Tenganan Village",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    price: 480000,
    category: "craft-workshops",
  },
  {
    id: "exp-9",
    slug: "heritage-water-temple-tour",
    name: "Water Temple Heritage Tour",
    description:
      "A guided temple route focused on ritual architecture and village water traditions.",
    location: "Tampaksiring Village",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    price: 700000,
    category: "heritage-sites",
  },
  {
    id: "exp-10",
    slug: "smoke-fire-kitchen-night",
    name: "Smoke & Fire Kitchen Night",
    description:
      "Share an evening meal around a wood-fire kitchen with village cooks and musicians.",
    location: "Amed Village",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    rating: 4.5,
    price: 850000,
    category: "local-dining",
  },
  {
    id: "exp-11",
    slug: "sunrise-ridge-trek",
    name: "Sunrise Ridge Trek",
    description:
      "A pre-dawn climb above the valley with breakfast served at a village lookout.",
    location: "Kintamani Village",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    price: 950000,
    category: "eco-trails",
  },
  {
    id: "exp-12",
    slug: "royal-court-storytelling",
    name: "Royal Court Storytelling",
    description:
      "An intimate heritage evening with oral histories, archival objects, and tea.",
    location: "Klungkung Village",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    rating: 4.6,
    price: 1200000,
    category: "heritage-sites",
  },
];
