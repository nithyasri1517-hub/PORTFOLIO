import { CaseStudyItem, SavoirSection, ExperimentalProject, SocialMediaProject, ProjectCardMeta, PageAsset } from '../types/portfolio';

// ==========================================
// 1. CASE STUDIES (Strict order: 1 to 4)
// ==========================================
export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'quite-pressure',
    order: 1,
    title: 'Quite Pressure',
    tag: 'Editorial Artwork 01',
    concept: 'Society pressures people through unrealistic expectations.',
    image: '/generated/casestudy/quite-pressure.webp',
  },
  {
    id: 'loud-silence',
    order: 2,
    title: 'Loud Silence',
    tag: 'Editorial Artwork 02',
    concept: 'People can become depressed and trapped in internal suffering while the people around them may not notice or care.',
    image: '/generated/casestudy/loud-silence.webp',
  },
  {
    id: 'leave-though',
    order: 3,
    title: 'Leave Though',
    tag: 'Editorial Artwork 03',
    concept: 'Fighting back toward a normal life, leaving behind what pulls you backward, and learning to stop living according to other people’s opinions.',
    image: '/generated/casestudy/leave-though.webp',
  },
  {
    id: 'here-enough',
    order: 4,
    title: 'Here Enough',
    tag: 'Editorial Artwork 04',
    concept: 'The idea that simply being alive and still being here can be enough.',
    image: '/generated/casestudy/here-enough.webp',
  },
];

// ==========================================
// 2. SAVOIR (Strict 10 sections in exact order)
// ==========================================
export const SAVOIR_SECTIONS: SavoirSection[] = [
  {
    id: 'logo',
    order: 1,
    title: 'Logo',
    subtitle: 'Logotype, Monogram & Identity Marks',
    description: 'Primary wordmark, secondary seals, and responsiveness across monochrome, inverted, and gilded colorways.',
    pages: [
      { src: '/generated/pdf-pages/brand identity/Logo/page-001.webp', width: 2200, height: 2200 },
      { src: '/generated/pdf-pages/brand identity/Logo/page-002.webp', width: 2200, height: 2200 },
      { src: '/generated/pdf-pages/brand identity/Logo/page-003.webp', width: 2200, height: 2200 },
      { src: '/generated/pdf-pages/brand identity/Logo/page-004.webp', width: 2200, height: 2200 },
      { src: '/generated/pdf-pages/brand identity/Logo/page-005.webp', width: 2200, height: 2200 },
    ],
  },
  {
    id: 'patterns',
    order: 2,
    title: 'Patterns',
    subtitle: 'Geometric & Botanical Identity Motifs',
    description: 'Custom repeating pattern systems showcasing both the warm cream and deep forest green brand colorways for packaging, stationery, and architectural touchpoints.',
    pages: [
      { src: '/generated/pdf-pages/brand identity/patterns/page-001.webp', width: 2200, height: 2200 },
      { src: '/generated/pdf-pages/brand identity/patterns/page-002.webp', width: 2200, height: 2200 },
    ],
  },
  {
    id: 'moodboard',
    order: 3,
    title: 'Moodboard',
    subtitle: 'Sensory Direction & Visual Universe',
    description: 'Foundational mood curation anchoring the warmth, tactile materials, earthy palette, and gentle Mediterranean light of Savoir.',
    pages: [
      { src: '/generated/pdf-pages/brand identity/Moodboard/page-001.webp', width: 1920, height: 1080 },
    ],
  },
  {
    id: 'business-card',
    order: 4,
    title: 'Business Card',
    subtitle: 'Physical Brand Signature',
    description: 'Double-sided tactile card design balancing generous negative space on front with an elegant identity lockup on reverse.',
    pages: [
      { src: '/generated/pdf-pages/brand identity/Business card (1)/page-001.webp', width: 1050, height: 600 },
      { src: '/generated/pdf-pages/brand identity/Business card (1)/page-002.webp', width: 1050, height: 600 },
    ],
  },
  {
    id: 'receipt',
    order: 5,
    title: 'Receipt',
    subtitle: 'Bespoke Point of Sale Experience',
    description: 'Even transaction documents are treated with typographic grace, ensuring the brand voice resonates through the entire customer journey.',
    pages: [
      { src: '/generated/pdf-pages/brand identity/Receipt/page-001.webp', width: 800, height: 1400 },
    ],
  },
  {
    id: 'menu',
    order: 6,
    title: 'Menu',
    subtitle: 'Culinary & Service Editorial Layout',
    description: 'Clean typographic layout with airy margins, delicate rule-lines, and deliberate hierarchical classification for an effortless dining experience.',
    pages: [
      { src: '/generated/pdf-pages/brand identity/menu/page-001.webp', width: 1200, height: 1800 },
    ],
  },
  {
    id: 'thank-you-card',
    order: 7,
    title: 'Thank You Card',
    subtitle: 'Client Unboxing Collateral',
    description: 'Intimate, warm unboxing touchpoints reinforcing brand devotion, personalized notes, and refined letterpress typography.',
    pages: [
      { src: '/generated/pdf-pages/brand identity/Thank You Card/page-001.webp', width: 1000, height: 750 },
      { src: '/generated/pdf-pages/brand identity/Thank You Card/page-002.webp', width: 1000, height: 750 },
    ],
  },
  {
    id: 'photos-and-package',
    order: 8,
    title: 'Photos & Packages',
    subtitle: 'Physical Product Packaging & Spatial Presence',
    description: 'Tactile packaging exploration across boxes, glass vessels, and bags with metallic foil stamping, alongside warm atelier spatial photography.',
    pages: [
      { src: '/generated/pdf-pages/brand identity/photos and package/page-001.webp', width: 1616, height: 903 },
      { src: '/generated/pdf-pages/brand identity/photos and package/page-002.webp', width: 1616, height: 903 },
      { src: '/generated/pdf-pages/brand identity/photos and package/page-003.webp', width: 1616, height: 903 },
      { src: '/generated/pdf-pages/brand identity/photos and package/page-004.webp', width: 1616, height: 903 },
    ],
  },
  {
    id: 'posts',
    order: 9,
    title: 'Posts',
    subtitle: 'Curated Social Campaign Grid',
    description: 'A harmonious multi-slide social presence calibrated with editorial negative space, deliberate typography, and product storytelling.',
    pages: [
      { src: '/generated/pdf-pages/brand identity/posts/page-001.webp', width: 1080, height: 1080 },
      { src: '/generated/pdf-pages/brand identity/posts/page-002.webp', width: 1080, height: 1080 },
      { src: '/generated/pdf-pages/brand identity/posts/page-003.webp', width: 1080, height: 1080 },
      { src: '/generated/pdf-pages/brand identity/posts/page-004.webp', width: 1080, height: 1080 },
      { src: '/generated/pdf-pages/brand identity/posts/page-005.webp', width: 1080, height: 1080 },
    ],
  },
  {
    id: 'ads',
    order: 10,
    title: 'Ads',
    subtitle: 'High-Impact Promotional Compositions',
    description: 'Targeted visual advertising banners combining high-contrast editorial photography, strong typographic accents, and clear conversion hierarchy.',
    pages: [
      { src: '/generated/pdf-pages/brand identity/Ads/page-001.webp', width: 1347, height: 1743 },
      { src: '/generated/pdf-pages/brand identity/Ads/page-002.webp', width: 1347, height: 1743 },
      { src: '/generated/pdf-pages/brand identity/Ads/page-003.webp', width: 1347, height: 1743 },
      { src: '/generated/pdf-pages/brand identity/Ads/page-004.webp', width: 1347, height: 1743 },
    ],
  },
];

// ==========================================
// 3. EDITORIAL: _RED (8 Pages)
// ==========================================
export const RED_EDITORIAL_PAGES: PageAsset[] = [
  { src: '/generated/pdf-pages/editorial/_RED/page-001.webp', width: 1200, height: 1600 },
  { src: '/generated/pdf-pages/editorial/_RED/page-002.webp', width: 1200, height: 1600 },
  { src: '/generated/pdf-pages/editorial/_RED/page-003.webp', width: 1200, height: 1600 },
  { src: '/generated/pdf-pages/editorial/_RED/page-004.webp', width: 1200, height: 1600 },
  { src: '/generated/pdf-pages/editorial/_RED/page-005.webp', width: 1200, height: 1600 },
  { src: '/generated/pdf-pages/editorial/_RED/page-006.webp', width: 1200, height: 1600 },
  { src: '/generated/pdf-pages/editorial/_RED/page-007.webp', width: 1200, height: 1600 },
  { src: '/generated/pdf-pages/editorial/_RED/page-008.webp', width: 1200, height: 1600 },
];

// ==========================================
// 4. EXPERIMENTAL PROJECTS
// ==========================================
export const EXPERIMENTAL_PROJECTS: Record<string, ExperimentalProject> = {
  ash: {
    id: 'ash',
    title: 'Ash',
    subtitle: 'Texture, Decay & Typography',
    concept: 'Exploring raw texture, degradation, and the rebirth of form through smoky, monochromatic typography and ethereal grain.',
    pages: [
      { src: '/generated/pdf-pages/experimental/ash/page-001.webp', width: 1400, height: 1980 },
    ],
  },
  euphoria: {
    id: 'euphoria',
    title: 'Euphoria',
    subtitle: 'Sensory Chromatics & Tension',
    concept: 'A sensory immersion into heightened emotion, vibrant tension, and electric typographic harmony that challenges perceptual boundaries.',
    pages: [
      { src: '/generated/pdf-pages/experimental/euphoria/page-001.webp', width: 1400, height: 1980 },
    ],
  },
  fashion: {
    id: 'fashion',
    title: 'Fashion',
    subtitle: 'Avant-Garde Silhouette Study',
    concept: 'Avant-garde editorial study balancing high-contrast silhouettes, architectural draping, and contemporary typographic rhythm.',
    pages: [
      { src: '/generated/pdf-pages/experimental/fashion/page-001.webp', width: 1400, height: 1980 },
    ],
  },
  book: {
    id: 'book',
    title: 'Book',
    subtitle: 'Deconstructed Grid & Prose',
    concept: 'An experimental editorial inquiry into grid deconstruction, negative space, and intimate literary flow across printed surfaces.',
    pages: [
      { src: '/generated/pdf-pages/experimental/book/page-001.webp', width: 1400, height: 1980 },
    ],
  },
};

// ==========================================
// 5. SOCIAL MEDIA PROJECTS (Icon + Work Mappings)
// ==========================================
export const SOCIAL_MEDIA_PROJECTS: Record<string, SocialMediaProject> = {
  rmc: {
    id: 'rmc',
    name: 'RMC',
    displayName: 'RMC Studio',
    category: 'Social Media Strategy & Visual Identity',
    description: 'Dynamic editorial social feeds with athletic poise, high-energy framing, and consistent typographic systems.',
    iconPages: [
      { src: '/generated/pdf-pages/social media/rmc/rmc icon/page-001.webp', width: 800, height: 800 },
    ],
    workPages: [
      { src: '/generated/pdf-pages/social media/rmc/rmc (2)/page-001.webp', width: 1080, height: 1350 },
      { src: '/generated/pdf-pages/social media/rmc/rmc (2)/page-002.webp', width: 1080, height: 1350 },
      { src: '/generated/pdf-pages/social media/rmc/rmc (2)/page-003.webp', width: 1080, height: 1350 },
      { src: '/generated/pdf-pages/social media/rmc/rmc (2)/page-004.webp', width: 1080, height: 1350 },
      { src: '/generated/pdf-pages/social media/rmc/rmc (2)/page-005.webp', width: 1080, height: 1350 },
    ],
  },
  zion: {
    id: 'zion',
    name: 'Zion',
    displayName: 'Zion Lifestyle',
    category: 'Content Curation & Digital Storytelling',
    description: 'Clean Scandinavian-inspired grid design blending warm organic lifestyle imagery with understated luxury captions.',
    iconPages: [
      { src: '/generated/pdf-pages/social media/zion/zion icon/page-001.webp', width: 800, height: 800 },
    ],
    workPages: [
      { src: '/generated/pdf-pages/social media/zion/zion/page-001.webp', width: 1080, height: 1350 },
      { src: '/generated/pdf-pages/social media/zion/zion/page-002.webp', width: 1080, height: 1350 },
      { src: '/generated/pdf-pages/social media/zion/zion/page-003.webp', width: 1080, height: 1350 },
      { src: '/generated/pdf-pages/social media/zion/zion/page-004.webp', width: 1080, height: 1350 },
    ],
  },
  hod: {
    id: 'hod',
    name: 'HOD',
    displayName: 'House of Design (HOD)',
    category: 'Branded Social Presence & Architecture',
    description: 'Curated architectural showcases emphasizing scale, monolithic silhouettes, and sophisticated dark-mode layouts.',
    iconPages: [
      { src: '/generated/pdf-pages/social media/hod/hod icon/page-001.webp', width: 800, height: 800 },
    ],
    workPages: [
      { src: '/generated/pdf-pages/social media/hod/hod/page-001.webp', width: 1080, height: 1350 },
      { src: '/generated/pdf-pages/social media/hod/hod/page-002.webp', width: 1080, height: 1350 },
      { src: '/generated/pdf-pages/social media/hod/hod/page-003.webp', width: 1080, height: 1350 },
      { src: '/generated/pdf-pages/social media/hod/hod/page-004.webp', width: 1080, height: 1350 },
      { src: '/generated/pdf-pages/social media/hod/hod/page-005.webp', width: 1080, height: 1350 },
    ],
  },
  'vivere-arte': {
    id: 'vivere-arte',
    name: 'Vivere Arte',
    displayName: 'Vivere Arte',
    category: 'Artistic Direction & Gallery Collateral',
    description: 'Fine art curation celebrating sculptural grace, timeless classical craftsmanship, and museum-grade social presentations.',
    iconPages: [
      { src: '/generated/pdf-pages/social media/vivere arte/vivere arte icon/page-001.webp', width: 800, height: 800 },
    ],
    workPages: [
      { src: '/generated/pdf-pages/social media/vivere arte/vivere arte/page-001.webp', width: 1080, height: 1350 },
      { src: '/generated/pdf-pages/social media/vivere arte/vivere arte/page-002.webp', width: 1080, height: 1350 },
      { src: '/generated/pdf-pages/social media/vivere arte/vivere arte/page-003.webp', width: 1080, height: 1350 },
      { src: '/generated/pdf-pages/social media/vivere arte/vivere arte/page-004.webp', width: 1080, height: 1350 },
    ],
  },
};

// ==========================================
// 6. FASHION: PCERA (8 Pages)
// ==========================================
export const PCERA_PROJECT = {
  title: 'WEAR PCERA',
  tagline: 'Fashion Communication',
  role: 'I worked from the existing brand identity to develop fresh creative treatments, exploring scale, pacing, hierarchy, framing and graphic accents.',
  visualDirection: 'Feminine · Refined · Contemporary',
  pages: [
    { src: '/generated/pdf-pages/fashion/pcera (1)/page-001.webp', width: 1200, height: 1700 },
    { src: '/generated/pdf-pages/fashion/pcera (1)/page-002.webp', width: 1200, height: 1700 },
    { src: '/generated/pdf-pages/fashion/pcera (1)/page-003.webp', width: 1200, height: 1700 },
    { src: '/generated/pdf-pages/fashion/pcera (1)/page-004.webp', width: 1200, height: 1700 },
    { src: '/generated/pdf-pages/fashion/pcera (1)/page-005.webp', width: 1200, height: 1700 },
    { src: '/generated/pdf-pages/fashion/pcera (1)/page-006.webp', width: 1200, height: 1700 },
    { src: '/generated/pdf-pages/fashion/pcera (1)/page-007.webp', width: 1200, height: 1700 },
    { src: '/generated/pdf-pages/fashion/pcera (1)/page-008.webp', width: 1200, height: 1700 },
  ],
};

// ==========================================
// 7. CONTENT & SOCIAL MEDIA: QUICKZAPS (6 Pages)
// ==========================================
export const QUICKZAPS_PROJECT = {
  title: 'QuickZaps',
  category: 'CONTENT & SOCIAL MEDIA MANAGEMENT',
  subtitle: 'High-Impact Brand Growth Collateral',
  description: 'Creative content and social media management system crafted to boost digital engagement, deliver striking branded visuals, and sustain an energetic, cohesive social presence.',
  pages: [
    { src: '/generated/pdf-pages/content and social media management/quickzaps (4)/page-001.webp', width: 1080, height: 1080 },
    { src: '/generated/pdf-pages/content and social media management/quickzaps (4)/page-002.webp', width: 1080, height: 1080 },
    { src: '/generated/pdf-pages/content and social media management/quickzaps (4)/page-003.webp', width: 1080, height: 1080 },
    { src: '/generated/pdf-pages/content and social media management/quickzaps (4)/page-004.webp', width: 1080, height: 1080 },
    { src: '/generated/pdf-pages/content and social media management/quickzaps (4)/page-005.webp', width: 1080, height: 1080 },
    { src: '/generated/pdf-pages/content and social media management/quickzaps (4)/page-006.webp', width: 1080, height: 1080 },
  ],
};

// ==========================================
// 8. PROJECTS OVERVIEW CARDS
// ==========================================
export const PROJECT_CARDS: ProjectCardMeta[] = [
  {
    id: 'savoir',
    title: 'Savoir',
    subtitle: 'Artisanal Patisserie Brand Identity',
    category: 'BRAND IDENTITY',
    tag: '10 Core Deliverables',
    route: '/projects/savoir',
    coverImage: '/generated/pdf-pages/brand identity/Logo/page-001.webp',
    pageCount: 26,
    description: 'Comprehensive luxury identity encompassing custom patterns, social campaigns, ads, packaging, stationery, and physical menu collateral.',
  },
  {
    id: 'red',
    title: 'RED',
    subtitle: 'Tactile Editorial Magazine',
    category: 'EDITORIAL',
    tag: 'Interactive Page-Turn Experience',
    route: '/projects/red',
    coverImage: '/generated/pdf-pages/editorial/_RED/page-001.webp',
    pageCount: 8,
    description: 'An editorial publication rendered through a physical realistic page-turning volume celebrating high-fashion typography and scarlet tension.',
  },
  {
    id: 'experimental',
    title: 'Experimental Studies',
    subtitle: 'Ash · Euphoria · Fashion · Book',
    category: 'EXPERIMENTAL',
    tag: '4 Conceptual Explorations',
    route: '/projects/experimental/ash',
    coverImage: '/generated/pdf-pages/experimental/fashion/page-001.webp',
    pageCount: 4,
    description: 'Avant-garde typographic explorations exploring degradation, sensory chroma, sculptural silhouettes, and deconstructed grids.',
  },
  {
    id: 'social-media',
    title: 'Social Media Direction',
    subtitle: 'RMC · Zion · HOD · Vivere Arte',
    category: 'SOCIAL MEDIA',
    tag: 'Interactive Brand Showcase',
    route: '/projects/social/rmc',
    coverImage: '/generated/pdf-pages/social media/hod/hod/page-001.webp',
    pageCount: 18,
    description: 'Bespoke social architectures engineered for diverse brands, marrying distinct brand icons with captivating carousel narratives.',
  },
  {
    id: 'pcera',
    title: 'WEAR PCERA',
    subtitle: 'Contemporary Fashion Communication',
    category: 'FASHION',
    tag: 'Feminine · Refined · Contemporary',
    route: '/projects/pcera',
    coverImage: '/generated/pdf-pages/fashion/pcera (1)/page-001.webp',
    pageCount: 8,
    description: 'Pacing, framing, and typographic accents tailored for a modern womenswear house, exploring scale and refined aesthetic rhythm.',
  },
  {
    id: 'quickzaps',
    title: 'QuickZaps',
    subtitle: 'Digital Content & Engagement Suite',
    category: 'CONTENT & SOCIAL MEDIA MANAGEMENT',
    tag: 'Campaign Narrative',
    route: '/projects/quickzaps',
    coverImage: '/generated/pdf-pages/content and social media management/quickzaps (4)/page-001.webp',
    pageCount: 6,
    description: 'Vibrant content creation and strategic social asset delivery designed to maintain relentless audience momentum.',
  },
];
