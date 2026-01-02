export default function Services() {
  const services = [
    {
      title: 'Digital Marketing',
      description:
        'Comprehensive digital marketing strategies designed to help churches and faith-based organizations reach their community, increase engagement, and grow their mission.',
      features: ['Social Media Marketing', 'Content Strategy', 'SEO Optimization', 'Campaign Management'],
    },
    {
      title: 'Email Marketing',
      description:
        'Effective email marketing campaigns to keep your congregation informed, engaged, and connected with regular updates, newsletters, and event announcements.',
      features: ['Newsletter Design', 'Automated Campaigns', 'Segmentation', 'Analytics & Reporting'],
    },
    {
      title: 'Website Development',
      description:
        'Custom websites built with modern technologies, specifically designed for churches and faith-based organizations to showcase your mission and connect with your community.',
      features: ['Responsive Design', 'Event Management', 'Donation Integration', 'Member Portals'],
    },
    {
      title: 'Mobile Application Development',
      description:
        'Native and cross-platform mobile applications that help your church stay connected with members, share content, manage events, and enhance engagement on-the-go.',
      features: ['iOS & Android Apps', 'Push Notifications', 'Offline Capabilities', 'App Store Optimization'],
    },
    {
      title: 'Data Analytics',
      description:
        'Advanced data analytics and reporting to help you understand your congregation, track engagement, measure growth, and make data-driven decisions for your ministry.',
      features: ['Performance Dashboards', 'Engagement Metrics', 'Growth Tracking', 'Custom Reports'],
    },
    {
      title: 'Church CRM Systems',
      description:
        'Specialized Customer Relationship Management systems tailored for churches to manage members, track attendance, handle donations, schedule events, and streamline operations.',
      features: ['Member Management', 'Attendance Tracking', 'Donation Management', 'Event Scheduling'],
    },
    {
      title: 'Graphic Design',
      description:
        'Professional graphic design services for churches and faith-based organizations, including logos, banners, social media graphics, print materials, and branding.',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Social Media Graphics'],
    },
    {
      title: 'Web Design',
      description:
        'Beautiful, user-friendly web designs that reflect your church\'s values and mission, creating engaging experiences that connect visitors with your community.',
      features: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      title: 'Video Editing & Production',
      description:
        'Professional video editing and design services for sermons, events, promotional content, and social media, helping you share your message effectively.',
      features: ['Sermon Editing', 'Event Highlights', 'Social Media Videos', 'Motion Graphics'],
    },
    {
      title: 'System Automation',
      description:
        'Streamline your operations with powerful automation solutions using n8n, Zapier, Power Automate, and other integration platforms to connect your tools and eliminate manual tasks.',
      features: ['Workflow Automation', 'API Integrations', 'Data Synchronization', 'Process Optimization'],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed specifically for churches and faith-based organizations. 
            From marketing to development, system automations, and creative services, we have everything you need to grow your ministry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 glass rounded-2xl card-hover border border-gray-200/50 dark:border-gray-800/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-bg mb-6 flex items-center justify-center text-white text-xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-50">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-5 h-5 rounded-full gradient-bg mr-3 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <a
            href="/contact"
            className="inline-block px-10 py-4 btn-primary rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
}

