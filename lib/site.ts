import type { ServiceSlug } from '@/components/icons';

/** Unsplash CDN helper — all photos are free to use under the Unsplash License. */
export const unsplash = (id: string, w = 1200, q = 75) =>
  `https://images.unsplash.com/photo-${id}?q=${q}&w=${w}&auto=format&fit=crop`;

export const images = {
  hero: {
    src: unsplash('1438232992991-995b7058bbb3', 2000, 80),
    alt: 'Worshippers with hands raised during a church service at golden hour',
  },
  teamLaughing: {
    src: unsplash('1522202176988-66273c2fd55f', 1200),
    alt: 'Team members smiling while collaborating around laptops',
  },
  teamWorkshop: {
    src: unsplash('1552664730-d307ca884978', 1200),
    alt: 'Team planning a project with sticky notes on a whiteboard',
  },
  community: {
    src: unsplash('1511632765486-a01980e01a18', 1000),
    alt: 'Friends standing arm in arm watching the sunset together',
  },
  cathedral: {
    src: unsplash('1473177104440-ffee2f376098', 2000, 80),
    alt: 'Sunlight filling the nave of a grand cathedral',
  },
} as const;

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'Digital Marketing',
    description:
      'Strategies designed to help churches and faith-based organizations reach their community, increase engagement, and grow their mission.',
    features: ['Social Media Marketing', 'Content Strategy', 'SEO Optimization', 'Campaign Management'],
  },
  {
    slug: 'email-marketing',
    title: 'Email Marketing',
    shortTitle: 'Email Marketing',
    description:
      'Campaigns that keep your congregation informed, engaged, and connected with regular updates, newsletters, and event announcements.',
    features: ['Newsletter Design', 'Automated Campaigns', 'Segmentation', 'Analytics & Reporting'],
  },
  {
    slug: 'website-development',
    title: 'Website Development',
    shortTitle: 'Websites',
    description:
      'Custom websites built with modern technologies, designed for ministries to showcase their mission and connect with their community.',
    features: ['Responsive Design', 'Event Management', 'Donation Integration', 'Member Portals'],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortTitle: 'Mobile Apps',
    description:
      'Native and cross-platform apps that keep members connected — share content, manage events, and engage your community on the go.',
    features: ['iOS & Android Apps', 'Push Notifications', 'Offline Capabilities', 'App Store Optimization'],
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    shortTitle: 'Analytics',
    description:
      'Analytics and reporting that help you understand your congregation, track engagement, and make data-driven decisions for your ministry.',
    features: ['Performance Dashboards', 'Engagement Metrics', 'Growth Tracking', 'Custom Reports'],
  },
  {
    slug: 'church-crm',
    title: 'Church CRM Systems',
    shortTitle: 'Church CRM',
    description:
      'CRM systems tailored for churches — manage members, track attendance, handle donations, and streamline day-to-day operations.',
    features: ['Member Management', 'Attendance Tracking', 'Donation Management', 'Event Scheduling'],
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    shortTitle: 'Graphic Design',
    description:
      'Professional design for ministries — logos, banners, social media graphics, print materials, and complete brand identities.',
    features: ['Logo Design', 'Brand Identity', 'Print Design', 'Social Media Graphics'],
  },
  {
    slug: 'web-design',
    title: 'Web Design',
    shortTitle: 'Web Design',
    description:
      "Beautiful, user-friendly designs that reflect your church's values and create engaging experiences that connect visitors with your community.",
    features: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    slug: 'video-editing',
    title: 'Video Editing & Production',
    shortTitle: 'Video',
    description:
      'Editing and production for sermons, events, promotional content, and social media — helping you share your message effectively.',
    features: ['Sermon Editing', 'Event Highlights', 'Social Media Videos', 'Motion Graphics'],
  },
  {
    slug: 'system-automation',
    title: 'System Automation',
    shortTitle: 'Automation',
    description:
      'Streamline operations with n8n, Zapier, Power Automate, and other platforms — connect your tools and eliminate manual tasks.',
    features: ['Workflow Automation', 'API Integrations', 'Data Synchronization', 'Process Optimization'],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  url: string;
  image: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    title: 'Joshua Project',
    description:
      'A mission-focused initiative providing comprehensive data on unreached people groups worldwide, with interactive maps, statistics, and prayer guides.',
    tech: ['Data Visualization', 'Interactive Maps', 'Mission Resources'],
    url: 'https://joshuaproject.net',
    image: { src: unsplash('1524661135-423995f22d0b', 900), alt: 'Vintage world map representing global missions' },
  },
  {
    title: 'Word and Life Church',
    description:
      'A Pittsburgh-based church connecting people to God through His Word, reaching thousands in Nepal through media and Bible training.',
    tech: ['Church Website', 'Media Integration', 'E-commerce'],
    url: 'https://wordandlifechurch.com',
    image: { src: unsplash('1438032005730-c779502df39b', 900), alt: 'Church sanctuary with stained glass windows' },
  },
  {
    title: 'Spirit of Life Ministries',
    description:
      'A ministry equipping and empowering individuals through the Word of God, with Sunday services, sermons, events, a bookstore, and blog resources.',
    tech: ['Ministry Platform', 'Content Management', 'Event Calendar'],
    url: 'https://spiritoflifeministries.co',
    image: { src: unsplash('1473177104440-ffee2f376098', 900), alt: 'Light-filled cathedral nave' },
  },
  {
    title: 'Winback Church',
    description:
      'A church with the mission to "Win Back The World in Christ" — Sunday services, sermons, worship songs, and church events.',
    tech: ['Church Website', 'Worship Resources', 'Event Management'],
    url: 'https://winbackchurch.com',
    image: { src: unsplash('1529156069898-49953e39b3ac', 900), alt: 'Group of friends with arms around each other' },
  },
  {
    title: 'Train and Motivate',
    description:
      'Leadership coaching and training platform led by Brian Ward, offering programs for purpose, resilience, and team building.',
    tech: ['Coaching Platform', 'Training Programs', 'Booking System'],
    url: 'https://trainandmotivate.com.au',
    image: { src: unsplash('1475721027785-f74eccf877e2', 900), alt: 'Microphone at a live speaking event' },
  },
  {
    title: 'ARR Remodeling LLC',
    description:
      'A remodeling company specializing in kitchen and bathroom renovations, room additions, and home improvement services.',
    tech: ['Portfolio Gallery', 'Service Showcase', 'Client Testimonials'],
    url: 'https://arrremodelingllc.com',
    image: { src: unsplash('1556911220-bff31c812dba', 900), alt: 'Bright modern kitchen with white cabinetry' },
  },
  {
    title: 'SBMMS',
    description:
      'A reliable medical instruments supplier in Nepal — an e-commerce site with product catalogs and ordering for healthcare facilities.',
    tech: ['E-commerce', 'Product Catalog', 'Medical Equipment'],
    url: 'https://sbmms.com.np',
    image: { src: unsplash('1505751172876-fa1923c5c528', 900), alt: 'Stethoscope on a table' },
  },
  {
    title: 'Ealiza Brows',
    description:
      'A beauty service provider specializing in eyebrow shaping and treatments, with services, pricing, booking, and a work portfolio.',
    tech: ['Booking System', 'Service Gallery', 'E-commerce'],
    url: 'https://ealizabrows.ca',
    image: { src: unsplash('1487412947147-5cebf100ffc2', 900), alt: 'Beauty professional applying eye makeup' },
  },
];

/** Hero images for each service detail page. */
export const serviceImages: Record<ServiceSlug, { src: string; alt: string }> = {
  'digital-marketing': {
    src: unsplash('1460925895917-afdab827c52f', 1400),
    alt: 'Laptop showing marketing analytics dashboards',
  },
  'email-marketing': {
    src: unsplash('1563986768609-322da13575f3', 1400),
    alt: 'Person managing email on a laptop and phone',
  },
  'website-development': {
    src: unsplash('1498050108023-c5249f4df085', 1400),
    alt: 'MacBook with program code on the screen',
  },
  'mobile-app-development': {
    src: unsplash('1512941937669-90a1b58e7e9c', 1400),
    alt: 'Smartphone displaying a grid of mobile apps',
  },
  'data-analytics': {
    src: unsplash('1551288049-bebda4e38f71', 1400),
    alt: 'Analytics dashboards with charts on a dark screen',
  },
  'church-crm': {
    src: unsplash('1519389950473-47ba0277781c', 1400),
    alt: 'Team collaborating around a table with laptops',
  },
  'graphic-design': {
    src: unsplash('1626785774573-4b799315345d', 1400),
    alt: 'Designer workspace with creative software shortcut keys',
  },
  'web-design': {
    src: unsplash('1581291518857-4e27b48ff24e', 1400),
    alt: 'Hand sketching website wireframes on paper',
  },
  'video-editing': {
    src: unsplash('1574717024653-61fd2cf4d44d', 1400),
    alt: 'Video editing timeline on a computer screen',
  },
  'system-automation': {
    src: unsplash('1518770660439-4636190af475', 1400),
    alt: 'Close-up of an electronic circuit board',
  },
};
