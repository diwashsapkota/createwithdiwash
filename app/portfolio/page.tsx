export default function Portfolio() {
  const projects = [
    {
      title: 'Joshua Project',
      description: 'A mission-focused initiative providing comprehensive data on unreached people groups worldwide. Features interactive maps, statistics, infographics, and prayer guides to support global mission efforts.',
      tech: ['Data Visualization', 'Interactive Maps', 'Mission Resources'],
      url: 'https://joshuaproject.net',
    },
    {
      title: 'Word and Life Church',
      description: 'A Pittsburgh-based church connecting people to God through His Word, transforming lives locally and reaching thousands in Nepal through media and Bible training. Features sermons, bookstore, and event information.',
      tech: ['Church Website', 'Media Integration', 'E-commerce'],
      url: 'https://wordandlifechurch.com',
    },
    {
      title: 'Spirit of Life Ministries',
      description: 'Established in July 2022, this ministry equips and empowers individuals through the Word of God and the Holy Spirit. Website includes Sunday services, sermons, events, bookstore, and blog resources.',
      tech: ['Ministry Platform', 'Content Management', 'Event Calendar'],
      url: 'https://spiritoflifeministries.co',
    },
    {
      title: 'Winback Church',
      description: 'A church with the mission to "Win Back The World in Christ." Features Sunday services (1:00 PM - 3:00 PM), sermons, worship songs, church events, and vision/mission information.',
      tech: ['Church Website', 'Worship Resources', 'Event Management'],
      url: 'https://winbackchurch.com',
    },
    {
      title: 'Train and Motivate',
      description: 'Leadership coaching and training platform led by Brian Ward with 35+ years of military and civilian experience. Offers programs based on eight principles for purpose, resilience, and positivity, including leadership development and team building.',
      tech: ['Coaching Platform', 'Training Programs', 'Booking System'],
      url: 'https://trainandmotivate.com.au',
    },
    {
      title: 'ARR Remodeling LLC',
      description: 'A remodeling company specializing in kitchen and bathroom renovations, room additions, and home improvement services. Showcases project galleries, client testimonials, and service information.',
      tech: ['Portfolio Gallery', 'Service Showcase', 'Client Testimonials'],
      url: 'https://arrremodelingllc.com',
    },
    {
      title: 'SBMMS',
      description: 'A popular and reliable medical instruments supplier in Nepal. E-commerce website showcasing medical equipment and instruments, featuring product catalogs, specifications, and ordering capabilities for healthcare facilities.',
      tech: ['E-commerce', 'Product Catalog', 'Medical Equipment'],
      url: 'https://sbmms.com.np',
    },
    {
      title: 'Ealiza Brows',
      description: 'A beauty service provider specializing in eyebrow shaping and treatments. Features service details, pricing information, booking options, and work portfolio showcasing their expertise.',
      tech: ['Booking System', 'Service Gallery', 'E-commerce'],
      url: 'https://ealizabrows.ca',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore some of our recent projects and creative work for churches, faith-based organizations, and businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 glass rounded-2xl card-hover border border-gray-200/50 dark:border-gray-800/50 animate-slide-up block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl gradient-bg mb-6 flex items-center justify-center text-white text-2xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-50 group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm glass border border-gray-200/50 dark:border-gray-800/50 rounded-full text-gray-700 dark:text-gray-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                <span>Visit Website</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-20">
          <a
            href="/contact"
            className="inline-block px-10 py-4 btn-primary rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}

