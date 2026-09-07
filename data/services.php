<?php
/**
 * Shared content: ported verbatim from the Next.js site's lib/site.ts.
 * Keep this file's data in sync with that source if the copy changes there.
 */

function unsplash(string $id, int $w = 1200, int $q = 75): string
{
    return "https://images.unsplash.com/photo-{$id}?q={$q}&w={$w}&auto=format&fit=crop";
}

$images = [
    'hero' => [
        'src' => unsplash('1438232992991-995b7058bbb3', 2000, 80),
        'alt' => 'Worshippers with hands raised during a church service at golden hour',
    ],
    'teamLaughing' => [
        'src' => unsplash('1522202176988-66273c2fd55f', 1200),
        'alt' => 'Team members smiling while collaborating around laptops',
    ],
    'teamWorkshop' => [
        'src' => unsplash('1552664730-d307ca884978', 1200),
        'alt' => 'Team planning a project with sticky notes on a whiteboard',
    ],
    'community' => [
        'src' => unsplash('1511632765486-a01980e01a18', 1000),
        'alt' => 'Friends standing arm in arm watching the sunset together',
    ],
    'cathedral' => [
        'src' => unsplash('1473177104440-ffee2f376098', 2000, 80),
        'alt' => 'Sunlight filling the nave of a grand cathedral',
    ],
];

$services = [
    [
        'slug' => 'digital-marketing',
        'title' => 'Digital Marketing',
        'description' => 'Social, search, and campaigns that get Sunday and midweek in front of people who have never sat in the room.',
        'features' => ['Social Media Marketing', 'Content Strategy', 'SEO Optimization', 'Campaign Management'],
    ],
    [
        'slug' => 'email-marketing',
        'title' => 'Email Marketing',
        'description' => 'Weekly notes, event reminders, and giving follow-ups that land in the inbox instead of getting lost in a Facebook post.',
        'features' => ['Newsletter Design', 'Automated Campaigns', 'Segmentation', 'Analytics & Reporting'],
    ],
    [
        'slug' => 'website-development',
        'title' => 'Website Development',
        'description' => 'A church site that holds sermons, events, giving, and a way to say you are new, without five plugins fighting each other.',
        'features' => ['Responsive Design', 'Event Management', 'Donation Integration', 'Member Portals'],
    ],
    [
        'slug' => 'mobile-app-development',
        'title' => 'Mobile App Development',
        'description' => 'A phone app for sermons, events, and push notes when service time or a prayer request actually matters.',
        'features' => ['iOS & Android Apps', 'Push Notifications', 'Offline Capabilities', 'App Store Optimization'],
    ],
    [
        'slug' => 'data-analytics',
        'title' => 'Data Analytics',
        'description' => 'Attendance, giving, and site traffic in one view so you can see what grew and what stalled.',
        'features' => ['Performance Dashboards', 'Engagement Metrics', 'Growth Tracking', 'Custom Reports'],
    ],
    [
        'slug' => 'church-crm',
        'title' => 'Church CRM Systems',
        'description' => 'Members, attendance, donations, and pastoral follow-up in one system instead of a spreadsheet and three inboxes.',
        'features' => ['Member Management', 'Attendance Tracking', 'Donation Management', 'Event Scheduling'],
    ],
    [
        'slug' => 'graphic-design',
        'title' => 'Graphic Design',
        'description' => 'Sunday slides, social posts, print, and a mark that still looks like your church at phone size.',
        'features' => ['Logo Design', 'Brand Identity', 'Print Design', 'Social Media Graphics'],
    ],
    [
        'slug' => 'web-design',
        'title' => 'Web Design',
        'description' => 'Layouts for first-time visitors: where to park, when you meet, and how to ask for prayer without hunting.',
        'features' => ['UI/UX Design', 'Wireframing', 'Prototyping', 'Design Systems'],
    ],
    [
        'slug' => 'video-editing',
        'title' => 'Video Editing & Production',
        'description' => 'Sermon cuts, event recaps, and short clips ready for YouTube and the lobby screen.',
        'features' => ['Sermon Editing', 'Event Highlights', 'Social Media Videos', 'Motion Graphics'],
    ],
    [
        'slug' => 'system-automation',
        'title' => 'System Automation',
        'description' => 'Connect giving, email, and the CRM so a new visitor is not typed in by hand three times.',
        'features' => ['Workflow Automation', 'API Integrations', 'Data Synchronization', 'Process Optimization'],
    ],
];

$serviceGroups = [
    [
        'title' => 'Reach people who are not in the room yet',
        'slugs' => ['digital-marketing', 'email-marketing', 'video-editing'],
    ],
    [
        'title' => 'Give the church a place to live online',
        'slugs' => ['website-development', 'web-design', 'mobile-app-development', 'graphic-design'],
    ],
    [
        'title' => 'Run members, giving, and follow-up in one system',
        'slugs' => ['church-crm', 'data-analytics', 'system-automation'],
    ],
];

$projects = [
    [
        'title' => 'Joshua Project',
        'description' => 'Maps, stats, and prayer guides for unreached people groups, used by mission teams worldwide.',
        'tech' => ['Data Visualization', 'Interactive Maps', 'Mission Resources'],
        'url' => 'https://joshuaproject.net',
        'image' => ['src' => unsplash('1524661135-423995f22d0b', 900), 'alt' => 'Vintage world map representing global missions'],
    ],
    [
        'title' => 'Word and Life Church',
        'description' => 'A Pittsburgh-based church connecting people to God through His Word, reaching thousands in Nepal through media and Bible training.',
        'tech' => ['Church Website', 'Media Integration', 'E-commerce'],
        'url' => 'https://wordandlifechurch.com',
        'image' => ['src' => unsplash('1438032005730-c779502df39b', 900), 'alt' => 'Church sanctuary with stained glass windows'],
    ],
    [
        'title' => 'Spirit of Life Ministries',
        'description' => 'Sunday services, sermons, events, a bookstore, and a blog.',
        'tech' => ['Ministry Platform', 'Content Management', 'Event Calendar'],
        'url' => 'https://spiritoflifeministries.co',
        'image' => ['src' => unsplash('1473177104440-ffee2f376098', 900), 'alt' => 'Light-filled cathedral nave'],
    ],
    [
        'title' => 'Winback Church',
        'description' => 'A church with the mission to "Win Back The World in Christ" — Sunday services, sermons, worship songs, and church events.',
        'tech' => ['Church Website', 'Worship Resources', 'Event Management'],
        'url' => 'https://winbackchurch.com',
        'image' => ['src' => unsplash('1529156069898-49953e39b3ac', 900), 'alt' => 'Group of friends with arms around each other'],
    ],
    [
        'title' => 'Train and Motivate',
        'description' => 'Leadership coaching and training platform led by Brian Ward, offering programs for purpose, resilience, and team building.',
        'tech' => ['Coaching Platform', 'Training Programs', 'Booking System'],
        'url' => 'https://trainandmotivate.com.au',
        'image' => ['src' => unsplash('1475721027785-f74eccf877e2', 900), 'alt' => 'Microphone at a live speaking event'],
    ],
    [
        'title' => 'ARR Remodeling LLC',
        'description' => 'A remodeling company specializing in kitchen and bathroom renovations, room additions, and home improvement services.',
        'tech' => ['Portfolio Gallery', 'Service Showcase', 'Client Testimonials'],
        'url' => 'https://arrremodelingllc.com',
        'image' => ['src' => unsplash('1556911220-bff31c812dba', 900), 'alt' => 'Bright modern kitchen with white cabinetry'],
    ],
    [
        'title' => 'SBMMS',
        'description' => 'A reliable medical instruments supplier in Nepal — an e-commerce site with product catalogs and ordering for healthcare facilities.',
        'tech' => ['E-commerce', 'Product Catalog', 'Medical Equipment'],
        'url' => 'https://sbmms.com.np',
        'image' => ['src' => unsplash('1505751172876-fa1923c5c528', 900), 'alt' => 'Stethoscope on a table'],
    ],
    [
        'title' => 'Life Line Enterprises',
        'description' => 'A nutraceutical and pharmaceutical marketing company in Kathmandu, supplying pharmacies across Nepal with a certified, clearly labelled product range.',
        'tech' => ['Product Catalog', 'Corporate Website', 'Pharmaceutical Marketing'],
        'url' => 'https://lifelineenterprisesnepal.com',
        'image' => ['src' => unsplash('1584308666744-24d5c474f2ae', 900), 'alt' => 'Blister packs of pharmaceutical tablets and capsules'],
    ],
    [
        'title' => 'Ealiza Brows',
        'description' => 'A beauty service provider specializing in eyebrow shaping and treatments, with services, pricing, booking, and a work portfolio.',
        'tech' => ['Booking System', 'Service Gallery', 'E-commerce'],
        'url' => 'https://ealizabrows.com',
        'image' => ['src' => '/assets/images/ealiza-brows-storefront.webp', 'alt' => 'Ealiza Brows Beauty Salon storefront in a shopping mall'],
    ],
];

$serviceImages = [
    'digital-marketing' => ['src' => unsplash('1460925895917-afdab827c52f', 1400), 'alt' => 'Laptop showing marketing analytics dashboards'],
    'email-marketing' => ['src' => unsplash('1563986768609-322da13575f3', 1400), 'alt' => 'Person managing email on a laptop and phone'],
    'website-development' => ['src' => unsplash('1498050108023-c5249f4df085', 1400), 'alt' => 'MacBook with program code on the screen'],
    'mobile-app-development' => ['src' => unsplash('1512941937669-90a1b58e7e9c', 1400), 'alt' => 'Smartphone displaying a grid of mobile apps'],
    'data-analytics' => ['src' => unsplash('1551288049-bebda4e38f71', 1400), 'alt' => 'Analytics dashboards with charts on a dark screen'],
    'church-crm' => ['src' => unsplash('1519389950473-47ba0277781c', 1400), 'alt' => 'Team collaborating around a table with laptops'],
    'graphic-design' => ['src' => unsplash('1626785774573-4b799315345d', 1400), 'alt' => 'Designer workspace with creative software shortcut keys'],
    'web-design' => ['src' => unsplash('1581291518857-4e27b48ff24e', 1400), 'alt' => 'Hand sketching website wireframes on paper'],
    'video-editing' => ['src' => unsplash('1574717024653-61fd2cf4d44d', 1400), 'alt' => 'Video editing timeline on a computer screen'],
    'system-automation' => ['src' => unsplash('1518770660439-4636190af475', 1400), 'alt' => 'Close-up of an electronic circuit board'],
];

/** Look up a service by slug from $services. */
function find_service(array $services, string $slug): ?array
{
    foreach ($services as $service) {
        if ($service['slug'] === $slug) {
            return $service;
        }
    }
    return null;
}
