export interface ProjectResult {
  metric: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  category: "Web & Digital" | "UI/UX & Product" | "AI Video Production" | "Full Studio Sprint";
  industry: string;
  role?: string;
  year: string;
  featured: boolean;
  thumbnail: string;
  scrollImage?: string;
  heroImage: string;
  gallery: string[];
  videoUrl?: string;
  liveUrl?: string;
  description: string;
  services: string[];
  platforms: string[];
  tools: string[];
  challenge: string;
  approach: string;
  solution: string;
  designProcess?: string[];
  developmentProcess?: string[];
  beforeAfter?: {
    beforeText: string;
    afterText: string;
    beforeMetric: string;
    afterMetric: string;
  };
  results: ProjectResult[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    slug: "diamond-living",
    title: "Diamond Living",
    subtitle: "Premium Living & Furniture E-Commerce Showcase",
    client: "Diamond Living by Diamond Kleen",
    category: "Web & Digital",
    industry: "Furniture & Home Retail",
    role: "Wix E-Commerce & Web Designer",
    year: "2025",
    featured: true,
    thumbnail: "/images/projects/diamond-living/hero.jpg",
    scrollImage: "/images/projects/diamond-living/scroll-preview.jpg",
    heroImage: "/images/projects/diamond-living/hero.jpg",
    gallery: [
      "/images/projects/diamond-living/hero.jpg",
      "/images/projects/diamond-living/mattresses.jpg",
      "/images/projects/diamond-living/bed.jpg",
      "/images/projects/diamond-living/about-us.jpg",
      "/images/projects/diamond-living/mobile-preview.jpg",
    ],
    liveUrl: "https://www.diamondlivingbydiamondkleen.com/",
    description:
      "An elegant, customer-focused furniture e-commerce website designed in Wix for Diamond Living by Diamond Kleen, an authorised wholesaler delivering premium home furnishings, cosy bedroom sets, sofas, and mattresses nationwide across Ireland.",
    services: [
      "Wix E-Commerce Design",
      "Catalog Architecture",
      "Responsive Web Design",
      "Financing & Payment UX",
      "Brand Presentation",
    ],
    platforms: ["Wix", "JavaScript", "HTML5", "CSS3"],
    tools: ["Wix Studio", "Figma", "Photoshop"],
    challenge:
      "Online furniture purchasing requires immense consumer confidence, clear sizing guidelines, and dependable logistics reassurance. Diamond Living needed a website that presents authentic Irish stock, highlights flexible financing via Humm, and clearly guides buyers through room measurement and mattress selection without the friction of impersonal warehouse listings.",
    approach:
      "We crafted a warm, sophisticated visual layout centered on room collections, high-resolution lifestyle photography, and transparent buying guides. Integrated prominent trust indicators—including nationwide delivery scheduling, white-glove packaging removal, and flexible monthly payment breakdowns.",
    solution:
      "Built a cohesive Wix online store featuring eight structured collections (Beds, Mattresses, Sofas, Dining, Living Room, Hallway), interactive measuring and firmness guides, and seamless mobile catalog browsing.",
    designProcess: [
      "Bespoke Irish Furniture E-Commerce Architecture",
      "Eight Curated Home & Bedroom Collections",
      "Mattress Selection & Tension Advice Framework",
      "Home Measuring & Sizing Interactive Guides",
      "Flexible Financing (Humm) & Payment UX Integration",
      "White-Glove Delivery & Assembly Messaging",
      "Mobile-Optimized Catalog & Cart Experience",
    ],
    developmentProcess: [
      "Wix Studio responsive breakpoint tuning across desktop, tablet, and mobile",
      "High-resolution product card grids with instant collection filtering",
      "Local SEO optimization targeting nationwide furniture delivery across Ireland",
      "Optimized media compression ensuring sub-second collection browsing",
    ],
    beforeAfter: {
      beforeText: "Standard wholesale listings without consumer trust guidance or integrated financing options.",
      afterText: "Polished, welcoming digital showroom with direct financing, sizing guides, and nationwide delivery reassurance.",
      beforeMetric: "Dispersed Wholesale Listings",
      afterMetric: "Curated Digital Furniture Storefront",
    },
    results: [
      { metric: "8+", label: "Curated Furniture Collections" },
      { metric: "32", label: "Irish Counties Delivery Reach" },
      { metric: "Humm", label: "Integrated Flexible Financing" },
    ],
  },
  {
    slug: "trowell-bookkeeping",
    title: "Trowell Bookkeeping",
    subtitle: "Professional Financial Management & MTD Compliance Platform",
    client: "Trowell Bookkeeping and Accounts",
    category: "Web & Digital",
    industry: "Accounting & Financial Services",
    role: "Wix Website Designer & Brand Strategist",
    year: "2025",
    featured: true,
    thumbnail: "/images/projects/trowell-bookkeeping/hero.jpg",
    scrollImage: "/images/projects/trowell-bookkeeping/scroll-preview.jpg",
    heroImage: "/images/projects/trowell-bookkeeping/hero.jpg",
    gallery: [
      "/images/projects/trowell-bookkeeping/hero.jpg",
      "/images/projects/trowell-bookkeeping/serv.jpg",
      "/images/projects/trowell-bookkeeping/mtd.jpg",
      "/images/projects/trowell-bookkeeping/about-us.jpg",
      "/images/projects/trowell-bookkeeping/mobile-preview.jpg",
    ],
    liveUrl: "https://www.trowellbookkeepingandaccounts.co.uk/",
    description:
      "A clean, trustworthy financial services website designed in Wix for Trowell Bookkeeping and Accounts. The platform presents certified bookkeeping (MICB MP.Dip), VAT filing, payroll, and HMRC Making Tax Digital (MTD) compliance for UK sole traders and SMEs.",
    services: [
      "Wix Website Design",
      "Financial UX Design",
      "Information Architecture",
      "MTD Compliance Advisory Layout",
      "Responsive Web Design",
    ],
    platforms: ["Wix", "JavaScript", "HTML5", "CSS3"],
    tools: ["Wix Studio", "Figma", "Photoshop"],
    challenge:
      "Bookkeeping and tax compliance can feel intimidating and confusing for small business owners and sole traders. Trowell Bookkeeping needed a professional digital presence that demystifies complex HMRC MTD regulations, highlights Institute of Certified Bookkeepers (ICB) credentials, and provides a clear 3-step consultation pathway.",
    approach:
      "We designed a balanced, approachable interface with high-contrast navy accents, crisp typography, and structured service breakdowns. Added dedicated sections for Making Tax Digital (MTD) education, bank reconciliation workflows, and bespoke management reporting.",
    solution:
      "Engineered a responsive Wix site with clear service cards for financial record keeping, VAT, and payroll, an MTD knowledge hub, and streamlined contact triggers allowing small business owners to book consultations effortlessly.",
    designProcess: [
      "Certified Financial Practice Credibility & Trust Badging",
      "Clear Service Matrix: Bookkeeping, VAT, Payroll & Reconciliation",
      "Dedicated MTD (Making Tax Digital) Educational Guide for Sole Traders",
      "Three-Stage Client Engagement Flow (Contact, Consultation, Ongoing Support)",
      "Accredited ICB Qualifications & Professional Bio Presentation",
      "Mobile-Friendly Direct Contact & Consultation Scheduling",
    ],
    developmentProcess: [
      "Wix Studio layout optimization with rapid page transitions",
      "Structured content hierarchy distinguishing sole trader vs SME accounting tiers",
      "SEO-targeted local schema for UK bookkeeping and payroll services",
      "Lightweight asset loading ensuring instant consultation booking access",
    ],
    beforeAfter: {
      beforeText: "Unstructured financial service descriptions with little clarity on MTD compliance or client onboarding.",
      afterText: "Authoritative, approachable financial portal with clear compliance guidance and direct consultation booking.",
      beforeMetric: "Generic Financial Presence",
      afterMetric: "Certified ICB Practice Platform",
    },
    results: [
      { metric: "100%", label: "HMRC MTD Ready Architecture" },
      { metric: "MICB", label: "Certified Professional Credibility" },
      { metric: "3-Step", label: "Streamlined Client Onboarding" },
    ],
  },
  {
    slug: "jennette-miller",
    title: "Jennette Miller Therapy",
    subtitle: "Trauma-Informed Clinical Therapy & Telehealth Platform",
    client: "Jennette Miller, LCSW",
    category: "Web & Digital",
    industry: "Mental Health & Clinical Psychotherapy",
    role: "Wix Website Designer & UX Specialist",
    year: "2025",
    featured: true,
    thumbnail: "/images/projects/jennette-miller/hero.jpg",
    scrollImage: "/images/projects/jennette-miller/scroll-preview.jpg",
    heroImage: "/images/projects/jennette-miller/hero.jpg",
    gallery: [
      "/images/projects/jennette-miller/hero.jpg",
      "/images/projects/jennette-miller/blank.jpg",
      "/images/projects/jennette-miller/blank-1.jpg",
      "/images/projects/jennette-miller/blank-3.jpg",
      "/images/projects/jennette-miller/mobile-preview.jpg",
    ],
    liveUrl: "https://www.jennettemiller.com/",
    description:
      "A calming, trauma-informed private practice website designed in Wix for Jennette Miller, LCSW. The site provides a welcoming digital sanctuary for individuals, teens, and families seeking clinical therapy, EMDR, and secure telehealth in Groton, Connecticut.",
    services: [
      "Wix Website Design",
      "Therapeutic UX & Empathy Design",
      "Information Architecture",
      "Inclusive & Affirming Content Strategy",
      "Responsive Web Design",
    ],
    platforms: ["Wix", "JavaScript", "HTML5", "CSS3"],
    tools: ["Wix Studio", "Figma", "Photoshop"],
    challenge:
      "Seeking therapy can evoke vulnerability and hesitation. Jennette Miller needed a web presence that immediately conveys safety, non-judgmental warmth, and clinical expertise across multiple age demographics (children, teens, adults) while presenting specialized modalities like EMDR and LGBTQIA+ affirming care.",
    approach:
      "We utilized an earthy, soothing color palette, organic typography, and gentle nature imagery to cultivate immediate emotional comfort. Structured the practice's disciplines into intuitive categories—Child Therapy, Teen Support, Adult Counseling, and EMDR—supplemented by clear telehealth availability across Connecticut.",
    solution:
      "Built an accessible, responsive Wix platform with clear modality explanations, an honest practice philosophy, and barrier-free contact channels (direct email and phone without intimidating intake portals).",
    designProcess: [
      "Soothing Visual Tone & Trauma-Informed Color Psychology",
      "Age-Specific Therapy Pathways: Children, Adolescents, and Adults",
      "EMDR & Alternating Stimulation Modality Educational Modules",
      "LGBTQIA+ Affirming & Safe Space Endorsement",
      "Secure Telehealth & In-Person Session Accessibility Information",
      "Gentle, Low-Friction Contact Touchpoints",
    ],
    developmentProcess: [
      "Wix Studio responsive layout with gentle scroll pacing",
      "Accessible typography sizing and calm whitespace composition",
      "Local clinical practice SEO for Groton and statewide Connecticut telehealth",
      "Fast, discreet loading on mobile for privacy and peace of mind",
    ],
    beforeAfter: {
      beforeText: "Standard clinical listings lacking warmth, specialized modality descriptions, or age-tailored pathways.",
      afterText: "Empathetic, reassuring digital sanctuary clearly communicating 15+ years of clinical social work expertise.",
      beforeMetric: "Clinical Listing",
      afterMetric: "Trauma-Informed Digital Practice",
    },
    results: [
      { metric: "15+", label: "Years Clinical Experience" },
      { metric: "EMDR", label: "Specialized Trauma Therapy" },
      { metric: "100%", label: "LGBTQIA+ Affirming & Telehealth Ready" },
    ],
  },
  {
    slug: "matriarch-home-services",
    title: "Matriarch Home Services",
    subtitle: "Structured Support for Homes & Businesses Across Toronto",
    client: "Matriarch Home Services",
    category: "Web & Digital",
    industry: "Home Care, Commercial Cleaning & Property Support",
    role: "Wix Website Designer & Brand Architect",
    year: "2025",
    featured: true,
    thumbnail: "/images/projects/matriarch-home-services/hero.jpg",
    scrollImage: "/images/projects/matriarch-home-services/scroll-preview.jpg",
    heroImage: "/images/projects/matriarch-home-services/hero.jpg",
    gallery: [
      "/images/projects/matriarch-home-services/hero.jpg",
      "/images/projects/matriarch-home-services/services.jpg",
      "/images/projects/matriarch-home-services/about-us.jpg",
      "/images/projects/matriarch-home-services/contact-us.jpg",
      "/images/projects/matriarch-home-services/mobile-preview.jpg",
    ],
    liveUrl: "https://www.matriarchhomeservices.com/",
    description:
      "A structured, empowering home and commercial support website designed in Wix for Matriarch Home Services. Based in Toronto, Ontario, the company connects households and busy professionals with vetted, background-checked women delivering cleaning, home assistance, and skilled trades.",
    services: [
      "Wix Website Design",
      "Brand Strategy & Storytelling",
      "Service Matrix Architecture",
      "Trust & Vetting Badging",
      "Responsive Web Design",
    ],
    platforms: ["Wix", "JavaScript", "HTML5", "CSS3"],
    tools: ["Wix Studio", "Figma", "Photoshop"],
    challenge:
      "The residential cleaning and home assistance industry is often transactional and opaque. Matriarch Home Services was founded on a distinct mission: restoring structure for busy women and families by employing vetted professional women. The website needed to elevate this mission, build immediate safety trust, and clearly communicate their multi-tiered service model (Cleaning, Home Assistance, Skilled Trades).",
    approach:
      "We designed a poised, high-trust visual language with crisp typography, thoughtful founder storytelling, and clear service matrices. Highlighted strict vetting, insurance coverage, and 5-star reliability guarantees across all touchpoints.",
    solution:
      "Crafted a responsive Wix website showcasing the founder's letter ('Support is infrastructure'), dedicated service breakdowns for residential/commercial cleaning, home management, and skilled trades, backed by a frictionless inquiry flow.",
    designProcess: [
      "High-Trust Visual System with Verified Credibility Badges",
      "Founder's Philosophy & Mission Storytelling Integration",
      "Three-Pillar Service Model: Cleaning, Home Assistance, Skilled Trades",
      "Rigorous Vetting & Insured Professional Security Signifiers",
      "Toronto & GTA Regional Community Positioning",
      "Mobile-Optimized Booking & Newsletter Engagement Form",
    ],
    developmentProcess: [
      "Wix Studio layout optimization with fluid responsive typography",
      "Structured service tabs for residential vs commercial property care",
      "Local SEO framework targeting Toronto and Greater Toronto Area",
      "Optimized media delivery ensuring rapid page rendering on mobile devices",
    ],
    beforeAfter: {
      beforeText: "Fragmented home service advertisements with no unified mission, vetting transparency, or structured service tiers.",
      afterText: "Empowering, high-trust digital platform uniting women professionals with structured property care.",
      beforeMetric: "Transactional Cleaning Ad",
      afterMetric: "Structured Home Care Brand",
    },
    results: [
      { metric: "100%", label: "Vetted & Fully Insured Staff" },
      { metric: "3 Pillars", label: "Cleaning, Assistance & Skilled Trades" },
      { metric: "5-Star", label: "Client Satisfaction Benchmark" },
    ],
  },
  {
    slug: "purpose-wellness",
    title: "Purpose Wellness",
    subtitle: "Medical Vitality, Hormone Therapy & Weight Loss Clinic",
    client: "Purpose Wellness Clinic",
    category: "Web & Digital",
    industry: "Medical Wellness & Anti-Aging",
    role: "Wix Website Designer & Medical UX Specialist",
    year: "2025",
    featured: true,
    thumbnail: "/images/projects/purpose-wellness/hero.jpg",
    scrollImage: "/images/projects/purpose-wellness/scroll-preview.jpg",
    heroImage: "/images/projects/purpose-wellness/hero.jpg",
    gallery: [
      "/images/projects/purpose-wellness/hero.jpg",
      "/images/projects/purpose-wellness/men-s-trt.jpg",
      "/images/projects/purpose-wellness/erectile-dysfunction.jpg",
      "/images/projects/purpose-wellness/ecswt.jpg",
      "/images/projects/purpose-wellness/mobile-preview.jpg",
    ],
    liveUrl: "https://www.purposewellness.net/",
    description:
      "A physician-guided medical wellness website designed in Wix for Purpose Wellness, an anti-aging and vitality clinic in North Port, Florida. The website presents advanced hormone replacement therapy (TRT & BHRT), medically supervised weight loss, and acoustic wave therapy (ECSWT).",
    services: [
      "Wix Website Design",
      "Medical UX & Patient Journey",
      "Service Hierarchy Architecture",
      "Local Healthcare SEO",
      "Responsive Web Design",
    ],
    platforms: ["Wix", "JavaScript", "HTML5", "CSS3"],
    tools: ["Wix Studio", "Figma", "Photoshop"],
    challenge:
      "Clinical vitality and hormone therapy require discretion, scientific credibility, and approachable education. Purpose Wellness needed a digital platform that explains individualized therapies (TRT, BHRT, Trimix, P-Shot, ECSWT) without overwhelming prospective patients, serving North Port, Sarasota, Wellen Park, and Port Charlotte.",
    approach:
      "We created a clean, clinical yet inviting visual system with deep teal and medical accents, organized condition-focused sub-pages, and patient-centered benefits. Built distinct pathways for men's vitality, women's hormonal balance, and physician-supervised metabolic weight management.",
    solution:
      "Engineered a responsive Wix site with comprehensive therapy guides, clinic location maps, and prominent appointment scheduling triggers.",
    designProcess: [
      "Medical Vitality Visual Identity & High-Trust Clinical Branding",
      "Dual-Pathway Architecture: Men's Health (TRT/ED) & Women's Hormonal Care (BHRT)",
      "Physician-Guided Metabolic Weight Management Showcase",
      "Advanced Acoustic Wave Therapy (ECSWT) Explanatory Modules",
      "Southwest Florida Regional Healthcare Service Area Mapping",
      "Discreet, Confidential Consultation Triggers",
    ],
    developmentProcess: [
      "Wix Studio modular template design with seamless sub-page navigation",
      "Optimized medical copy hierarchy highlighting long-term metabolic vitality",
      "Regional local SEO targeting North Port, Sarasota, and Port Charlotte, FL",
      "Mobile-first appointment booking triggers for prospective patients",
    ],
    beforeAfter: {
      beforeText: "Unfocused clinic presence with complex clinical terms and no dedicated symptom pathways.",
      afterText: "Authoritative, discreet medical wellness portal guiding patients seamlessly to targeted treatments.",
      beforeMetric: "Disorganized Clinic Listing",
      afterMetric: "Comprehensive Medical Wellness Flagship",
    },
    results: [
      { metric: "1-on-1", label: "Physician-Guided Custom Care" },
      { metric: "5+", label: "Specialized Hormonal & Metabolic Therapies" },
      { metric: "SW Florida", label: "Regional Healthcare Footprint" },
    ],
  },
  {
    slug: "vertroue-caregivers",
    title: "Vertroue Caregivers",
    subtitle: "Non-Medical Home Care & Family Support Website",
    client: "Vertroue Caregivers",
    category: "Web & Digital",
    industry: "Healthcare & Home Care",
    role: "Wix Website Designer & UX Specialist",
    year: "2025",
    featured: true,
    thumbnail: "/images/projects/vertroue-caregivers/hero.jpg",
    scrollImage: "/images/projects/vertroue-caregivers/scroll-preview.jpg",
    heroImage: "/images/projects/vertroue-caregivers/hero.jpg",
    gallery: [
      "/images/projects/vertroue-caregivers/hero.jpg",
      "/images/projects/vertroue-caregivers/services-personal-care.jpg",
      "/images/projects/vertroue-caregivers/about-page.jpg",
      "/images/projects/vertroue-caregivers/companionship-page.jpg",
      "/images/projects/vertroue-caregivers/contact-page.jpg",
      "/images/projects/vertroue-caregivers/mobile-preview.jpg",
    ],
    liveUrl: "https://www.vertrouecaregivers.com/",
    description:
      "A compassionate, high-trust healthcare website designed in Wix for Vertroue Caregivers, a licensed Pennsylvania non-medical home care agency. The platform provides families across Philadelphia and surrounding suburbs with transparent care service tiers, caregiver vetting standards, and direct consultation booking.",
    services: [
      "Wix Website Design",
      "Healthcare UX Design",
      "Information Architecture",
      "Responsive Web Design",
      "Content Strategy & FAQ",
    ],
    platforms: ["Wix", "JavaScript", "HTML5", "CSS3"],
    tools: ["Wix Studio", "Figma", "Photoshop"],
    challenge:
      "Families seeking in-home care for elderly relatives or recovering loved ones face emotional stress, complex terminology, and uncertainty around private-pay versus Medicare/Medicaid models. Vertroue Caregivers needed a digital presence that establishes immediate warmth and clinical accountability, demystifies payment options, and makes starting care as simple as a 3-step conversation.",
    approach:
      "We developed a patient-centric, empathetic layout utilizing reassuring typography, soft neutral tones, and genuine caregiver imagery. Key service offerings—personal care assistance, companion engagement, and light physical activities—are structured into scannable cards with clear boundaries. A dedicated 3-step onboarding framework and plain-language FAQ eliminate friction for families making urgent care decisions.",
    solution:
      "Designed the Vertroue Caregivers platform in Wix with dedicated service detail pages, executive leadership & caregiver licensing verification, straightforward payment guidance (credit cards, check, Apple Pay, Zelle), and persistent direct-call touchpoints connecting families immediately to care coordinators across Philadelphia, Montgomery, Chester, and Bucks counties.",
    designProcess: [
      "Compassionate Visual Identity & Accessible Color Contrast",
      "Information Architecture for Non-Medical In-Home Care Tiers",
      "Three-Step Family Onboarding Framework (Conversation, Plan, Connection)",
      "Personal Care Assistance & Medication Reminder Modules",
      "Senior Companionship & Light Physical Activity Showcase",
      "Transparent Private-Pay & Multi-County Service Area FAQ",
      "Caregiver Background Screening & Healthcare Leadership Story",
      "Mobile-Optimized Emergency Call Triggers & Consultation Booking",
    ],
    developmentProcess: [
      "Wix Studio responsive layout engineering with fluid typography across mobile & desktop",
      "Dynamic service routing with dedicated breakdown pages for each care discipline",
      "Interactive FAQ accordion providing instant answers on licensing and payment terms",
      "Local SEO metadata architecture targeting Philadelphia, Montgomery, Chester, and Bucks counties",
    ],
    beforeAfter: {
      beforeText: "Unstructured care inquiry process with unclear private-pay terms and disconnected service descriptions.",
      afterText: "Warm, authoritative healthcare platform with transparent service tiers, 3-step intake, and direct phone booking.",
      beforeMetric: "Basic Care Outreach",
      afterMetric: "Licensed Home Care Digital Presence",
    },
    results: [
      { metric: "4 Counties", label: "Regional Coverage (Philadelphia, Montgomery, Chester, Bucks)" },
      { metric: "100%", label: "Screened & Trained Caregiver Model" },
      { metric: "3-Step", label: "Streamlined Intake & Consultation Process" },
    ],
    testimonial: {
      quote:
        "At Vertroue Caregivers, we don’t just see clients. We see someone’s mother, father, grandmother, grandfather, or loved one—someone who means the world to their family. And that is a responsibility we take to heart.",
      author: "Vertroue Caregivers Leadership",
      role: "Founder & Healthcare Administrator",
    },
  },
  {
    slug: "inkblock-media",
    title: "InkBlock Media",
    subtitle: "Content Writing & SEO Website",
    client: "InkBlock Media",
    category: "Web & Digital",
    industry: "Content Writing & SEO",
    role: "Wix Website Designer",
    year: "2025",
    featured: true,
    thumbnail: "/images/projects/inkblock-media/hero.png",
    scrollImage: "/images/projects/inkblock-media/scroll-preview.jpg",
    heroImage: "/images/projects/inkblock-media/hero.png",
    gallery: [
      "/images/projects/inkblock-media/hero.png",
      "/images/projects/inkblock-media/services.png",
      "/images/projects/inkblock-media/cta.png",
      "/images/projects/inkblock-media/testimonial.png",
    ],
    liveUrl: "https://timmydigitals.wixsite.com/my-site-13",
    description:
      "A professional Wix website designed for InkBlock Media, a content writing and SEO service business. The website presents the company's writing services, SEO content solutions and professional approach through a clean service focused layout designed to help visitors understand the available services and get in touch.",
    services: [
      "Wix Website Design",
      "Website Design",
      "Responsive Web Design",
      "Service Website Design",
      "User Experience Design",
    ],
    platforms: ["Wix Studio", "JavaScript", "HTML5", "CSS3"],
    tools: ["Wix", "Figma", "Photoshop"],
    challenge:
      "Structuring diverse digital content writing services—ranging from website copywriting and press releases to technical SEO and Web3 content—into a clean, intuitive layout that clearly communicates value and drives consultation inquiries.",
    approach:
      "The design combines a strong purple visual identity with structured content sections, clear service descriptions and focused calls to action. The layout was created to make the company's services easy to understand while giving the website a professional and approachable appearance.",
    solution:
      "Designed the InkBlock Media website in Wix with a clear service focused structure for presenting content writing, SEO and digital writing services.",
    designProcess: [
      "Content Writing Services Architecture",
      "SEO & High-Converting Copywriting Modules",
      "Website & Blog Writing Showcase",
      "Professional Service Presentations",
      "About & Philosophy Section",
      "Client Testimonials Carousel",
      "Consultation Inquiry & Lead Capture Form",
      "Responsive Mobile & Tablet Optimization",
    ],
    developmentProcess: [
      "Wix Studio template customization & responsive breakpoint tuning",
      "Brand-aligned purple accent typography & high-contrast button styling",
      "Smooth interactive service accordions & testimonial carousels",
      "Technical on-page SEO metadata and fast loading optimization",
    ],
    beforeAfter: {
      beforeText: "Scattered service descriptions with no unified brand identity or structured lead capture.",
      afterText: "Polished, cohesive Wix digital flagship with clear service tiers and direct quote booking.",
      beforeMetric: "Basic Freelance Presence",
      afterMetric: "Professional Agency Platform",
    },
    results: [
      { metric: "100%", label: "Responsive Layout Across All Devices" },
      { metric: "Wix", label: "Service-Focused CMS Platform" },
      { metric: "100+", label: "Businesses Served by InkBlock" },
    ],
    testimonial: {
      quote:
        "Working with this writer has been a game changer for my business. Every piece of content delivered was clear, engaging, and perfectly aligned with my brand voice. The communication was smooth, the delivery was fast, and the quality exceeded my expectations.",
      author: "Sarah Mitchell",
      role: "Client, InkBlock Media",
    },
  },
  {
    slug: "smith-associates-real-estate",
    title: "Smith & Associates",
    subtitle: "Luxury Real Estate Website Design",
    client: "Smith & Associates Real Estate",
    category: "Web & Digital",
    industry: "Real Estate",
    role: "WordPress Website Designer",
    year: "2025",
    featured: true,
    thumbnail: "/images/projects/smith-associates/smith-card-v2.png",
    scrollImage: "/images/projects/smith-associates/scroll-preview.jpg",
    heroImage: "/images/projects/smith-associates/smith-hero-v2.png",
    gallery: [
      "/images/projects/smith-associates/smith-hero-v2.png",
      "/images/projects/smith-associates/developments.png",
      "/images/projects/smith-associates/testimonial.png",
      "/images/projects/smith-associates/fullpage.png",
    ],
    liveUrl: "https://www.smithandassociates.com/",
    description:
      "A professional real estate website designed in WordPress for Smith & Associates Real Estate. The website combines a premium visual presentation with real estate functionality, allowing visitors to explore properties, featured listings, new developments, neighborhoods and real estate services.",
    services: [
      "WordPress Website Design",
      "Real Estate Website Design",
      "Responsive Web Design",
      "Real Estate Functionality",
      "User Experience Design",
    ],
    platforms: ["WordPress", "PHP", "JavaScript", "HTML5", "CSS3"],
    tools: ["WordPress", "Figma", "Photoshop", "Custom Real Estate Framework"],
    challenge:
      "Smith & Associates needed a sophisticated digital portal to represent Tampa Bay's luxury market, requiring clear property discovery, intuitive navigation across premier neighborhoods, and dedicated spaces for top-tier developments without cluttering the user journey.",
    approach:
      "The website was designed around property discovery and visual presentation. Large property imagery, structured listing sections and clear navigation help visitors explore homes, developments, neighborhoods and real estate services within a polished digital experience.",
    solution:
      "Designed the website in WordPress and implemented the required real estate functionality to create a property focused experience for buyers, sellers and visitors.",
    designProcess: [
      "Property Listings & Real Estate Functionality",
      "Featured Property Listings & Grid Showcase",
      "New Development & Exclusive Tower Listings",
      "Luxury Property Collection & Architecture",
      "Neighborhood & Coastal Community Exploration",
      "Real Estate Agent & Advisory Sections",
      "Property Focused Content Structure & Flow",
      "Responsive Website Design for All Devices",
    ],
    developmentProcess: [
      "WordPress theme implementation & customization",
      "Responsive layout engineering across desktop, tablet & mobile",
      "Structured property listing hierarchy & quick inquiry triggers",
      "Performance and image asset optimization for smooth browsing",
    ],
    beforeAfter: {
      beforeText: "Fragmented property discovery with basic templates and disjointed neighborhood navigation.",
      afterText: "High-end luxury real estate digital experience with seamless listing navigation and developer showcases.",
      beforeMetric: "Standard Brokerage Site",
      afterMetric: "Premier Luxury Destination",
    },
    results: [
      { metric: "100%", label: "Responsive Property Discovery" },
      { metric: "Tampa Bay", label: "Regional Luxury Reach" },
      { metric: "WordPress", label: "Tailored Real Estate CMS" },
    ],
    testimonial: {
      quote:
        "Highly reliable and professional. The team went out of their way to make sure all listing, showings, and settlement went smoothly. Can't thank them enough.",
      author: "Gerard C.",
      role: "Client, St. Petersburg, FL",
    },
  },
  {
    slug: "synthetix-ai-platform",
    title: "Synthetix AI",
    subtitle: "Enterprise Next-Gen Neural Workflow Studio",
    client: "Synthetix Inc.",
    category: "Web & Digital",
    industry: "Artificial Intelligence & SaaS",
    role: "Lead Digital Designer & Web Architect",
    year: "2026",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    ],
    liveUrl: "https://synthetix-preview.example.com",
    description:
      "A dark-mode first, high-performance web platform and marketing site for an enterprise generative AI startup. Features interactive 3D WebGL node graphs, fluid typography, and sub-second page loads.",
    services: ["Web Design", "Next.js Development", "UI/UX Prototyping", "Technical SEO", "Interactive 3D"],
    platforms: ["Next.js 15", "TypeScript", "Tailwind CSS", "Three.js", "Vercel"],
    tools: ["Figma", "VS Code", "Blender", "Framer Motion"],
    challenge:
      "Synthetix was launching their flagship AI orchestration engine and needed a brand-new digital home that could explain complex machine learning workflows to both developers and Fortune 500 decision makers without feeling generic or overwhelming.",
    approach:
      "We established a futuristic yet restrained visual language: deep obsidian canvas, emerald signal lines, and real-time interactive 3D node simulations. We structured the content around intuitive interactive demonstrations rather than walls of text.",
    solution:
      "Delivered a production-ready Next.js web application with 100% PageSpeed scores, dynamic feature reveals, interactive pricing calculator, and automated lead routing directly into their CRM.",
    designProcess: [
      "Conducted 10 stakeholder interviews to distill core value propositions.",
      "Created 4 distinct moodboards exploring technical elegance vs. minimalism.",
      "Engineered a modular Figma design token system with 80+ component variants.",
      "Rapidly prototyped WebGL shader interactions for the hero visualization.",
    ],
    developmentProcess: [
      "Built with Next.js App Router for optimized static generation and instant routing.",
      "Implemented hardware-accelerated Framer Motion scroll triggers.",
      "Integrated automated Lighthouse CI to guarantee 99+ Core Web Vitals.",
    ],
    beforeAfter: {
      beforeText: "Legacy static PDF decks and fragmented slide presentations with zero digital lead capture.",
      afterText: "Award-winning interactive digital flagship with live interactive AI demo and direct booking.",
      beforeMetric: "0% Digital Conversions",
      afterMetric: "47% Demo Signup Rate",
    },
    results: [
      { metric: "+47%", label: "Demo Conversion Rate" },
      { metric: "0.4s", label: "Largest Contentful Paint (LCP)" },
      { metric: "$3.2M", label: "Seed Funding Secured Post-Launch" },
    ],
    testimonial: {
      quote:
        "DammyUX delivered beyond our highest expectations. The 3D interactions and crisp typography elevated our brand perception overnight.",
      author: "Marcus Vance",
      role: "Founder & CEO, Synthetix AI",
    },
  },
  {
    slug: "aura-luxury-ecommerce",
    title: "Aura Haute Horlogerie",
    subtitle: "Immersive Luxury E-Commerce & AI Visuals",
    client: "Aura Timepieces",
    category: "Full Studio Sprint",
    industry: "Luxury Goods & E-Commerce",
    role: "E-Commerce Architect & AI Video Producer",
    year: "2025",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    ],
    liveUrl: "https://aura-luxury.example.com",
    description:
      "A bespoke digital boutique experience combining editorial typography, 360-degree interactive product exploration, and a series of cinematic AI-generated commercial videos.",
    services: ["Shopify Plus Development", "UI/UX Design", "AI Video Production", "Brand Identity", "SEO"],
    platforms: ["Shopify Plus", "Liquid", "Tailwind CSS", "Runway Gen-3"],
    tools: ["Figma", "Midjourney v6", "Adobe Premiere Pro", "After Effects"],
    challenge:
      "Traditional luxury watch retail relies heavily on in-person boutique experiences. Aura needed a digital storefront that replicated the bespoke tactile exclusivity of high-end Swiss watchmaking online.",
    approach:
      "We crafted an editorial layout with high-contrast typography, velvet black backdrops, micro-interactions for timepiece complications, and integrated Hollywood-grade AI video commercial cuts in the hero and story sections.",
    solution:
      "Engineered a custom Shopify Plus headless architecture with dynamic currency switching, custom engraving previewer, and integrated 4K AI video campaigns across Instagram and YouTube.",
    results: [
      { metric: "+35%", label: "Average Order Value (AOV)" },
      { metric: "-28%", label: "Cart Abandonment Drop" },
      { metric: "1.4M", label: "AI Video Commercial Views" },
    ],
    testimonial: {
      quote:
        "The combination of website craftsmanship and AI cinematic commercials gave our boutique a global stage. Flawless execution.",
      author: "Elena Rostova",
      role: "Head of Marketing, Aura",
    },
  },
  {
    slug: "loom-fintech-app",
    title: "Loom Finance",
    subtitle: "Cross-Border Treasury & Asset Management",
    client: "Loom Technologies",
    category: "UI/UX & Product",
    industry: "FinTech & Web3",
    role: "Lead UI/UX Product Designer",
    year: "2026",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    ],
    liveUrl: "https://loom-finance.example.com",
    description:
      "Intuitive web app interface and high-converting marketing site for a modern global treasury management platform managing over $80M in daily liquidity.",
    services: ["UI/UX Product Design", "Design System", "Next.js Frontend", "Animation"],
    platforms: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    tools: ["Figma", "Storybook", "Framer Motion"],
    challenge:
      "Complex financial tables, multi-currency routing rules, and multi-signature authorization flows were creating high onboarding drop-off for corporate clients.",
    approach:
      "We restructured the entire navigation hierarchy into three core streams: Cash Flow, Global Transfers, and Yield Vaults. We introduced a unified design token system with dark and high-contrast modes.",
    solution:
      "Designed and coded a comprehensive web dashboard and landing page with frictionless KYC onboarding steps, automated analytics cards, and instant transaction previews.",
    results: [
      { metric: "62%", label: "Faster User Onboarding" },
      { metric: "99.8%", label: "Crash-Free Session Rate" },
      { metric: "$80M+", label: "Daily Liquidity Processed" },
    ],
    testimonial: {
      quote:
        "DammyUX transformed a very complicated financial workflow into something our enterprise clients actually love using every day.",
      author: "David Chen",
      role: "CTO, Loom Finance",
    },
  },
  {
    slug: "nexus-interactive-trailer",
    title: "Nexus Odyssey",
    subtitle: "Cinematic Sci-Fi Worldbuilding & AI Film Production",
    client: "Nexus Games Studio",
    category: "AI Video Production",
    industry: "Gaming & Entertainment",
    role: "AI Video Director & Motion Designer",
    year: "2025",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    ],
    liveUrl: "https://nexus-odyssey.example.com",
    description:
      "A 90-second cinematic launch trailer and interactive lore microsite created entirely with generative AI video, spatial sound design, and custom typography.",
    services: ["AI Video Production", "Sound Design", "Interactive Microsite", "Copywriting"],
    platforms: ["Runway Gen-3", "Midjourney v6", "Kling AI", "Next.js"],
    tools: ["After Effects", "Premiere Pro", "ElevenLabs", "Figma"],
    challenge:
      "The indie game studio needed a blockbuster-grade teaser trailer on an indie budget to generate hype before their Kickstarter and Steam reveal.",
    approach:
      "We wrote an epic narrative script, generated hyper-consistent character and planetary concept frames in Midjourney, animated dynamic camera motions via Gen-3, and mixed custom orchestral synths and spatial Foley.",
    solution:
      "Delivered a 4K 60fps cinematic trailer along with a responsive lore portal where fans could explore character backstories and join the whitelist.",
    results: [
      { metric: "1.2M+", label: "Viral Views in 5 Days" },
      { metric: "35,000+", label: "Steam Wishlists Added" },
      { metric: "300%", label: "Kickstarter Funding Goal Reached" },
    ],
    testimonial: {
      quote:
        "The trailer blew our entire community away. People couldn't believe this was produced by a lean studio in just two weeks.",
      author: "Tyler Harrison",
      role: "Creative Producer, Nexus Games",
    },
  },
  {
    slug: "aerovox-cleantech-redesign",
    title: "Aerovox Carbon",
    subtitle: "Industrial Decarbonization Web Redesign & SEO",
    client: "Aerovox Systems",
    category: "Web & Digital",
    industry: "CleanTech & Industrial Sustainability",
    role: "Website Redesign & SEO Lead",
    year: "2026",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    ],
    liveUrl: "https://aerovox-systems.example.com",
    description:
      "Complete brand modernization, technical SEO architecture, and Webflow CMS build for a European climate-tech enterprise reducing industrial emissions.",
    services: ["Website Redesign", "Webflow Development", "Technical SEO", "Interactive Data Graphs"],
    platforms: ["Webflow CMS", "JavaScript", "HTML5", "CSS3"],
    tools: ["Figma", "Semrush", "Google Analytics 4"],
    challenge:
      "Aerovox had an 8-year-old WordPress website with broken layouts, poor mobile rendering, and non-existent organic search rankings for their key industrial filtration solutions.",
    approach:
      "We rebuilt the site architecture around specific B2B industrial search intent, created high-contrast clean diagrams of carbon capture hardware, and optimized every asset for sub-second loading.",
    solution:
      "A sleek, accessible Webflow CMS portal with interactive emissions ROI calculators, rich case studies, and automated appointment booking for enterprise consultations.",
    results: [
      { metric: "+180%", label: "Organic Search Traffic Growth" },
      { metric: "+55%", label: "Inbound Enterprise RFP Inquiries" },
      { metric: "100/100", label: "Mobile Accessibility & SEO Score" },
    ],
    testimonial: {
      quote:
        "DammyUX gave Aerovox the high-tech, modern credibility we needed to close deals with multinational manufacturing giants.",
      author: "Chloe Dupont",
      role: "VP of Growth, Aerovox",
    },
  },
  {
    slug: "kroma-creative-studios",
    title: "Kroma Spatial Studio",
    subtitle: "Spatial Computing & Architectural Visualization",
    client: "Kroma Collective",
    category: "Web & Digital",
    industry: "Architecture & Spatial Design",
    role: "Web Design & Motion Developer",
    year: "2025",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    liveUrl: "https://kroma-spatial.example.com",
    description:
      "An avant-garde portfolio website for an architectural studio featuring horizontal gallery scrubbing, smooth page transitions, and dark/light ambient lighting effects.",
    services: ["Web Design", "Next.js Engineering", "Creative Motion", "Brand Strategy"],
    platforms: ["Next.js", "Tailwind CSS", "Framer Motion", "Lenis Smooth Scroll"],
    tools: ["Figma", "Cinema 4D", "VS Code"],
    challenge:
      "Showcasing massive 8K architectural renders without lagging mobile browsers or compromising visual fidelity.",
    approach:
      "We implemented progressive WebP/AVIF responsive image sets, virtualized gallery containers, and subtle smooth magnetic cursor effects.",
    solution:
      "A fluid, ultra-minimal editorial gallery where imagery and typography shine effortlessly, resulting in widespread design community recognition.",
    results: [
      { metric: "3x", label: "Average Session Duration" },
      { metric: "Awwwards", label: "Site of the Day Nominee" },
      { metric: "60fps", label: "Rock-solid Mobile Scrolling" },
    ],
    testimonial: {
      quote:
        "The website feels like a digital art gallery. Our prospective clients constantly praise the elegance and responsiveness.",
      author: "Sophie Martin",
      role: "Creative Director, Kroma Collective",
    },
  },
];