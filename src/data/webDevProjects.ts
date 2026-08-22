import { WebDevProject } from "../types";

export const WEB_DEV_CATEGORIES = [
  "All",
  "Digital Marketing",
  "Fashion & Luxury",
  "Restaurant & Food",
  "Healthcare & Medical",
  "Real Estate & Hospitality",
  "Animal Hospital",
  "Swimming Academy",
  "Interior Design",
  "Gym & Fitness",
  "Wellness & Beauty",
  "Education & Coaching",
  "Events & Weddings",
  "Legal & Corporate",
  "Automotive"
] as const;

export const WEB_DEV_PROJECTS: WebDevProject[] = [
  {
    id: "adfinity-digital",
    title: "Adfinity Digital",
    url: "https://adfinitydigital.netlify.app/",
    status: "Live",
    category: "Digital Marketing",
    description: "High-converting digital marketing & performance growth agency website with real-time lead capture & service catalog.",
    tags: ["Digital Marketing", "SEO & PPC", "Agency", "Growth"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "dine-culture",
    title: "Dine Culture",
    url: "https://dineculture.dharmesh98787.workers.dev/",
    status: "Live",
    category: "Restaurant & Food",
    description: "Luxury fine-dining restaurant platform with interactive food menu, online table reservation & chef specials.",
    tags: ["Fine Dining", "Reservations", "Culinary", "Interactive Menu"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "midnight-brew-cafe",
    title: "Midnight Brew Cafe",
    url: "https://midnightbrewcafe.dharmesh98787.workers.dev/",
    status: "Live",
    category: "Restaurant & Food",
    description: "Artisanal specialty coffee shop & late-night cafe web app featuring craft brews & online takeout booking.",
    tags: ["Coffee Shop", "Artisanal Brews", "Late-Night Cafe", "Ordering"],
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "viralcraft-media",
    title: "ViralCraft Media",
    url: "https://viralcraftmedia.dharmesh98787.workers.dev/",
    status: "Live",
    category: "Digital Marketing",
    description: "Full-service social media & creative content agency website specializing in viral campaigns & influencer growth.",
    tags: ["Social Media", "Content Production", "Viral Marketing", "Agency"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "aarohi-jewellers",
    title: "Aarohi Jewellers",
    url: "https://aarohi.dk3891315.workers.dev/",
    status: "Live",
    category: "Fashion & Luxury",
    description: "Luxury handcrafted gold & diamond jewelry boutique featuring bespoke bridal collection gallery & gold rates.",
    tags: ["Luxury Jewelry", "Gold & Diamonds", "Boutique", "Bespoke"],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "pawcare-hospital",
    title: "Pawcare Hospital",
    url: "https://pawcare.dk3891315.workers.dev/",
    status: "Live",
    category: "Animal Hospital",
    description: "Advanced veterinary medical center & emergency pet care hospital platform with online vet appointment booking.",
    tags: ["Veterinary", "Pet Care", "Emergency Vet", "Appointments"],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "bluewave-swimming-academy",
    title: "Bluewave Swimming Academy",
    url: "https://bluewave.dk3891315.workers.dev/",
    status: "Live",
    category: "Swimming Academy",
    description: "Premier aquatic training institute website with certified coaching programs, slot bookings & pool schedules.",
    tags: ["Aquatics", "Swimming Academy", "Coaching", "Fitness"],
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "galaxy-interiors",
    title: "Galaxy Interiors",
    url: "https://galaxy.dk3891315.workers.dev/",
    status: "Live",
    category: "Interior Design",
    description: "Architectural & luxury interior design portfolio showcasing bespoke residential, commercial & 3D space transformations.",
    tags: ["Architecture", "Interior Design", "Bespoke", "3D Rendering"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "royal-threads",
    title: "Royal Threads",
    url: "https://royalthreads.up.railway.app/",
    status: "Live",
    category: "Fashion & Luxury",
    description: "High-end ethnic fashion store & bespoke couture studio featuring digital lookbooks & online collection orders.",
    tags: ["High Fashion", "Ethnic Wear", "Couture", "Lookbook"],
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "spice-garden",
    title: "Spice Garden",
    url: "https://spicegarden.up.railway.app/",
    status: "Live",
    category: "Restaurant & Food",
    description: "Authentic Indian fine dining restaurant website with interactive spice menu & online takeaway ordering.",
    tags: ["Indian Cuisine", "Spices", "Takeaway", "Restaurant"],
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "royal-stay-hotel",
    title: "Royal Stay Hotel",
    url: "https://royalstay.dj074694.workers.dev/",
    status: "Live",
    category: "Real Estate & Hospitality",
    description: "5-Star luxury resort & boutique hotel reservation web app with room suites, amenities & banquet booking.",
    tags: ["Luxury Hotel", "Hospitality", "Resort", "Bookings"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "sanctuary-spa",
    title: "Sanctuary Spa",
    url: "https://sanctuary.dj074694.workers.dev/",
    status: "Live",
    category: "Wellness & Beauty",
    description: "Holistic wellness, aromatherapy & luxury day spa retreat website with service packages & therapist appointments.",
    tags: ["Wellness & Spa", "Aromatherapy", "Relaxation", "Therapy"],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ironpulse-muscle",
    title: "Ironpulse Muscle",
    url: "https://ironpulse.dj074694.workers.dev/",
    status: "Live",
    category: "Gym & Fitness",
    description: "Elite strength training, bodybuilding gym & athletic performance center web app with membership plans.",
    tags: ["Gym & Fitness", "Strength", "Bodybuilding", "Memberships"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "medicure-healthcare",
    title: "Medicure Healthcare",
    url: "https://medicure.dj074694.workers.dev/",
    status: "Live",
    category: "Healthcare & Medical",
    description: "Comprehensive medical diagnostics, telehealth consultation & digital healthcare portal for online lab bookings.",
    tags: ["Telehealth", "Medical", "Diagnostics", "Doctors"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "careplus-multispeciality-hospital",
    title: "Careplus Multispeciality Hospital",
    url: "https://careplus.wasmer.app/",
    status: "Live",
    category: "Healthcare & Medical",
    description: "Multispecialty tertiary hospital website featuring 24/7 ICU, emergency services & doctor department finder.",
    tags: ["Hospital", "Multispeciality", "24/7 Care", "Emergency"],
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "urban-nest-reality",
    title: "Urban Nest Reality",
    url: "https://urbannest.wasmer.app/",
    status: "Live",
    category: "Real Estate & Hospitality",
    description: "Premium residential real estate portal showcasing luxury apartments, villas & investment property listings.",
    tags: ["Real Estate", "Luxury Properties", "Villas", "Rentals"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "success-point-academy",
    title: "Success Point Academy",
    url: "https://successpoint.wasmer.app/",
    status: "Live",
    category: "Education & Coaching",
    description: "Premier competitive examination coaching institute offering live batches, test series & study materials.",
    tags: ["Education", "Coaching", "Exams", "Test Series"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "aarogyam-family-clinic",
    title: "Aarogyam Family Clinic",
    url: "https://aarogyam.wasmer.app/",
    status: "Live",
    category: "Healthcare & Medical",
    description: "Trusted family healthcare clinic platform providing preventive health checkups, vaccinations & online consultation.",
    tags: ["Family Clinic", "Preventive Care", "Consultation", "Doctor"],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dreamday-weddings",
    title: "Dreamday Weddings",
    url: "https://dreamday.dj074694.workers.dev/",
    status: "Live",
    category: "Events & Weddings",
    description: "Bespoke destination wedding planning agency, royal decor management & bridal photography portfolio.",
    tags: ["Wedding Planner", "Events", "Luxury Decor", "Bridal"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "thakur-legal-associates",
    title: "Thakur Legal Associates",
    url: "https://thakurlegalassociates.dj074694.workers.dev/",
    status: "Live",
    category: "Legal & Corporate",
    description: "Premier corporate legal counsel, litigation & intellectual property law firm portal with consultation booking.",
    tags: ["Law Firm", "Legal Counsel", "Litigation", "Advocates"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "good-luck-automobiles",
    title: "Good Luck Automobiles",
    url: "https://goodluckautomobiles.wasmer.app/",
    status: "Live",
    category: "Automotive",
    description: "Multi-brand automobile dealership, authorized car servicing center & genuine spare parts showcase.",
    tags: ["Automobile", "Car Servicing", "Dealership", "Vehicles"],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ragnar-perfumes",
    title: "Ragnar Perfumes",
    url: "https://ragnar.wasmer.app/",
    status: "Live",
    category: "Fashion & Luxury",
    description: "Luxury niche fragrance house & artisanal eau de parfum e-commerce website with fragrance profiling.",
    tags: ["Fragrances", "Luxury Perfume", "Artisanal", "D2C"],
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "the-spice-courtyard",
    title: "The Spice Courtyard",
    url: "https://thespicecourtyard.zite.so/",
    status: "Live",
    category: "Restaurant & Food",
    description: "Exquisite fine dining & authentic culinary destination featuring handcrafted spices, courtyard ambiance & interactive menu.",
    tags: ["Fine Dining", "Authentic Spices", "Courtyard", "Interactive Menu"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "nightwing",
    title: "Nightwing",
    url: "https://nightwing.zite.so/",
    status: "Live",
    category: "Digital Marketing",
    description: "Sleek dark-aesthetic digital agency & creative design showcase platform with high-impact visuals & modern interactive UX.",
    tags: ["Creative Agency", "Dark Aesthetic", "UI/UX", "Digital Strategy"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "bright-horizon",
    title: "Bright Horizon",
    url: "https://brighthorizon.zite.so/",
    status: "Live",
    category: "Education & Coaching",
    description: "Innovative education & career coaching platform empowering learners with future-ready skills, mentorship & interactive courses.",
    tags: ["Education", "Career Coaching", "Mentorship", "EdTech"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    featured: true
  }
];
