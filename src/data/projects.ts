export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Portrait' | 'Commercial' | 'Documentary' | 'Landscape' | 'Editorial' | 'Event';
  location: string;
  year: string;
  camera: string;
  format: string;
  description: string;
  narrative: string;
  heroImage: string;
  images: string[];
  featured: boolean;
  client?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "studio-portrait-series",
    title: "The Silent Gaze",
    subtitle: "A study of quiet expressions in the studio.",
    category: "Portrait",
    location: "London, UK",
    year: "2024",
    camera: "Medium Format Digital",
    format: "4:3 / Color",
    description: "An intimate exploration of human vulnerability and strength, captured through minimalist studio lighting.",
    narrative: "This series strips away environmental context to focus entirely on the micro-expressions of the subjects. By employing a single, deeply shaped light source, we create an atmosphere of profound stillness. The intention was not just to record faces, but to map the psychological terrain of each individual sitting before the lens. Every session was unscripted, allowing genuine moments of contemplation to emerge.",
    heroImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=2000&q=80",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: true,
    client: "Personal Work"
  },
  {
    id: 2,
    slug: "architecture-and-space",
    title: "Concrete & Light",
    subtitle: "Brutalist forms intersecting with natural illumination.",
    category: "Commercial",
    location: "Berlin, Germany",
    year: "2023",
    camera: "Technical Camera",
    format: "16:9 / Monochromatic Focus",
    description: "Documenting the stark, unapologetic beauty of brutalist architecture under shifting weather conditions.",
    narrative: "Architecture is fundamentally about the manipulation of space and light. In this series, I spent three weeks documenting a singular brutalist complex, observing how the concrete facades absorbed and reflected light at different times of day. The rigid geometry of the buildings stands in stark contrast to the organic, ephemeral nature of the light that graces them, creating a dialogue between permanence and fleeting moments.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
    images: [
      "https://images.unsplash.com/photo-1508852951744-beaa3faeb28b?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: true,
    client: "Architecture Review"
  },
  {
    id: 3,
    slug: "documentary-monsoon-roads",
    title: "Monsoon Roads",
    subtitle: "Life along the water-logged arteries of South Asia.",
    category: "Documentary",
    location: "Kerala, India",
    year: "2023",
    camera: "35mm Rangefinder",
    format: "3:2 / Color Film",
    description: "A photo essay capturing the rhythm of daily life during the intense seasonal monsoons.",
    narrative: "The monsoon is not just a weather event; it is an atmospheric condition that dictates the pace of life. Traveling through the coastal roads of Kerala, I documented the resilience and grace of communities navigating the deluge. The saturated colors of the landscape, slick with rain, provided a cinematic backdrop to everyday scenes of perseverance and adaptation.",
    heroImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=2000&q=80",
    images: [
      "https://images.unsplash.com/photo-1601614749303-34e40247df60?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1541819519183-b0e6e76ddde1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605333502579-24b5952c20ce?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583389441113-000c8b67b1cb?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: false
  },
  {
    id: 4,
    slug: "commercial-jewellery-campaign",
    title: "Aura",
    subtitle: "High-end jewellery campaign emphasizing texture and form.",
    category: "Commercial",
    location: "Paris, France",
    year: "2024",
    camera: "Medium Format Digital",
    format: "4:5 / Color",
    description: "Showcasing artisanal craftsmanship through macro photography and deliberate, moody lighting.",
    narrative: "Working closely with the artisans at Maison V, we aimed to highlight not just the final pieces, but the inherent beauty of the materials themselves. By using extreme macro lenses and directional light, we revealed the microscopic textures of hammered gold and the deep, internal fires of the cut stones. The resulting images treat the jewellery as sculptural landscapes rather than mere accessories.",
    heroImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=80",
    images: [
      "https://images.unsplash.com/photo-1599643478514-4a4aa8ed6168?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: true,
    client: "Maison V"
  },
  {
    id: 5,
    slug: "editorial-the-unbuilt-city",
    title: "The Unbuilt City",
    subtitle: "Conceptual editorial on urban expansion and forgotten spaces.",
    category: "Editorial",
    location: "Tokyo, Japan",
    year: "2022",
    camera: "Medium Format Film",
    format: "6x7 / B&W Film",
    description: "An architectural fashion editorial set against the backdrop of unfinished infrastructural projects.",
    narrative: "This editorial narrative contrasts the fluid, dynamic lines of avant-garde fashion with the rigid, skeletal remains of stalled construction sites on the periphery of Tokyo. The intention was to create a tension between the human form and the concrete void, asking questions about the spaces we design and the spaces we abandon.",
    heroImage: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=2000&q=80",
    images: [
      "https://images.unsplash.com/photo-1542051812871-75f83cb3e9bf?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517650862521-d580d5348145?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554189097-ffe88e998a2b?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: false,
    client: "Volume Magazine"
  },
  {
    id: 6,
    slug: "landscape-western-ghats",
    title: "Ancient Elevations",
    subtitle: "Aerial and ground studies of the Western Ghats.",
    category: "Landscape",
    location: "Western Ghats, India",
    year: "2023",
    camera: "Digital Medium Format & Drone",
    format: "Panorama / Color",
    description: "A sweeping visual survey of one of the world's oldest mountain ranges, emphasizing scale and texture.",
    narrative: "The Western Ghats predate the Himalayas, carrying an ancient, quiet weight. This project required a dual approach: aerial photography to understand the vast, undulating typography, and intimate, ground-level studies of the unique endemic flora. The resulting series is a tribute to a delicate ecosystem that is as monumental as it is fragile.",
    heroImage: "https://images.unsplash.com/photo-1625834317364-b32c140fd360?auto=format&fit=crop&w=2000&q=80",
    images: [
      "https://images.unsplash.com/photo-1596769062322-263023028290?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1574215902047-9dc476903ee5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555502931-31422791e2b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582200366627-c10f81d11342?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: true
  },
  {
    id: 7,
    slug: "food-and-product",
    title: "Culinary Geometries",
    subtitle: "Abstracting fine dining through tight crops and harsh light.",
    category: "Commercial",
    location: "Copenhagen, Denmark",
    year: "2024",
    camera: "Full Frame Digital",
    format: "1:1 / Color",
    description: "A departure from traditional food photography, treating culinary creations as architectural models.",
    narrative: "Collaborating with a Michelin-starred kitchen, we completely reimagined how their dishes were documented. By using extreme close-ups, deep shadows, and geometric compositions, we abstracted the food into pure shape and texture. This approach forces the viewer to look at the ingredients not just as sustenance, but as meticulously designed objects.",
    heroImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512152596508-ba39151e18e8?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: false,
    client: "Restaurant N"
  },
  {
    id: 8,
    slug: "wedding-and-celebration",
    title: "The Italian Villa",
    subtitle: "A documentary approach to a three-day celebration.",
    category: "Event",
    location: "Tuscany, Italy",
    year: "2023",
    camera: "35mm & Medium Format Film",
    format: "Mixed / B&W and Color",
    description: "Capturing the unfiltered, cinematic moments of a grand celebration in the Italian countryside.",
    narrative: "Moving away from posed, traditional wedding photography, this commission was approached as a pure documentary assignment. Operating silently in the background, the goal was to capture the peripheral moments—the quiet glances, the chaotic joy of the dance floor, the shifting light on the ancient villa walls. The result is a deeply atmospheric record of human connection.",
    heroImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=80",
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: true,
    client: "Private Client"
  }
];
