'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '', // Honeypot field
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formStartTime] = useState(Date.now()); // Track when form was loaded

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Check honeypot field
    if (formData.website) {
      // Bot detected - silently fail
      setStatus('error');
      return;
    }

    // Calculate time spent on form (minimum 3 seconds to prevent bots)
    const timeSpent = (Date.now() - formStartTime) / 1000;
    if (timeSpent < 3) {
      setStatus('error');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          timestamp: formStartTime,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', website: '' });
      } else {
        const errorData = await response.json();
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Structured data for SEO
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "Service",
      "position": index + 1,
      "name": service.title,
      "description": service.description,
      "provider": {
        "@type": "Organization",
        "name": "Create with Diwash"
      }
    }))
  };

  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "CreativeWork",
      "position": index + 1,
      "name": project.title,
      "description": project.description,
      "url": project.url
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioStructuredData) }}
      />
      <div>
        {/* Floating CTA Button */}
      <a
        href="#contact"
        onClick={scrollToContact}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 px-4 py-3 sm:px-6 sm:py-4 btn-primary rounded-full font-semibold shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-110 transition-all duration-300 flex items-center gap-2 animate-bounce hover:animate-none"
        aria-label="Get in touch"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="hidden sm:inline">Get Started</span>
      </a>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center max-w-7xl mx-auto px-6 py-20 md:py-32" itemScope itemType="https://schema.org/WebPage">
        <div className="w-full">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Empowering Churches</span>
              <br />
              <span className="text-gray-900 dark:text-gray-50">Faith-Based Organizations</span>
          </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed specifically for churches and faith-based organizations. 
              From digital marketing to custom CRM systems, system automations, and creative services, we help you reach your community and grow your mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-20 animate-slide-up">
            <div className="group p-8 glass rounded-2xl card-hover border border-gray-200/50 dark:border-gray-800/50">
              <div className="w-12 h-12 rounded-xl gradient-bg mb-6 flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-50">
                Digital Marketing & Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Strategic digital marketing campaigns, email marketing, and data analytics to help you connect with your congregation and measure your impact.
              </p>
            </div>

            <div className="group p-8 glass rounded-2xl card-hover border border-gray-200/50 dark:border-gray-800/50">
              <div className="w-12 h-12 rounded-xl gradient-bg mb-6 flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-50">
                Website & Mobile Apps
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Custom websites and mobile applications built to serve your community, share your message, and engage members effectively.
          </p>
        </div>

            <div className="group p-8 glass rounded-2xl card-hover border border-gray-200/50 dark:border-gray-800/50">
              <div className="w-12 h-12 rounded-xl gradient-bg mb-6 flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-50">
                Church CRM & Automation
            </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Specialized Church CRM systems, workflow automations using n8n, Zapier, and Power Automate, plus professional graphic design, video editing, and creative services for your ministry.
              </p>
            </div>
          </div>

          <div className="mt-20 p-10 glass rounded-3xl border border-gray-200/50 dark:border-gray-800/50 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center gradient-text">
              Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start group">
                <div className="w-10 h-10 rounded-lg gradient-bg mr-4 flex items-center justify-center text-white font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-gray-50 mb-2">Experienced Team</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Highly skilled graphic designers, web designers, and video editors dedicated to your success
                  </p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-10 h-10 rounded-lg gradient-bg mr-4 flex items-center justify-center text-white font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-gray-50 mb-2">Faith-Focused</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Specialized understanding of churches and faith-based organizations' unique needs
                  </p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-10 h-10 rounded-lg gradient-bg mr-4 flex items-center justify-center text-white font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-gray-50 mb-2">Comprehensive Solutions</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    From marketing to development to creative services - everything you need in one place
                  </p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-10 h-10 rounded-lg gradient-bg mr-4 flex items-center justify-center text-white font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-gray-50 mb-2">Data-Driven Results</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Advanced analytics to track engagement, growth, and measure your ministry's impact
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-block px-10 py-4 btn-primary rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('services');
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="inline-block px-10 py-4 glass border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-xl font-semibold text-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20 md:py-32" itemScope itemType="https://schema.org/AboutPage">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About</span>
            <br />
            <span className="text-gray-900 dark:text-gray-50">Create with Diwash</span>
          </h2>
        </div>

        <div className="space-y-8 mb-16 animate-slide-up">
          <div className="p-10 glass rounded-3xl border border-gray-200/50 dark:border-gray-800/50">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Welcome to <span className="font-semibold gradient-text">Create with Diwash</span>, where faith meets technology. We are passionate
              about empowering churches and faith-based organizations with comprehensive digital solutions 
              that help them reach their communities and fulfill their missions.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Our mission is to help churches and faith-based organizations thrive in the digital age. 
              We understand the unique needs of ministries and provide specialized services including 
              digital marketing, website and mobile app development, Church CRM systems, system automations 
              using n8n, Zapier, and Power Automate, data analytics, and creative services like graphic design and video editing.
            </p>
          </div>

          <div className="p-10 glass rounded-3xl border border-gray-200/50 dark:border-gray-800/50">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              With a team of experienced and highly skilled professionals—including graphic designers, 
              web designers, and video editors—we combine modern design principles with cutting-edge 
              technology to create solutions that are both beautiful and functional, specifically 
              tailored for churches and faith-based organizations.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="p-10 glass rounded-3xl border border-gray-200/50 dark:border-gray-800/50 card-hover">
            <div className="w-16 h-16 rounded-2xl gradient-bg mb-6 flex items-center justify-center text-white text-2xl font-bold">
              ✨
            </div>
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              What We Offer
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="w-6 h-6 rounded-lg gradient-bg mr-4 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 group-hover:scale-110 transition-transform">✓</div>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">Digital marketing and email marketing campaigns to grow your reach</span>
              </li>
              <li className="flex items-start group">
                <div className="w-6 h-6 rounded-lg gradient-bg mr-4 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 group-hover:scale-110 transition-transform">✓</div>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">Custom website and mobile application development</span>
              </li>
              <li className="flex items-start group">
                <div className="w-6 h-6 rounded-lg gradient-bg mr-4 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 group-hover:scale-110 transition-transform">✓</div>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">Specialized Church CRM systems for member and donation management</span>
              </li>
              <li className="flex items-start group">
                <div className="w-6 h-6 rounded-lg gradient-bg mr-4 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 group-hover:scale-110 transition-transform">✓</div>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">Data analytics to track engagement and measure your ministry's impact</span>
              </li>
              <li className="flex items-start group">
                <div className="w-6 h-6 rounded-lg gradient-bg mr-4 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 group-hover:scale-110 transition-transform">✓</div>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">Professional graphic design, web design, and video editing services</span>
              </li>
              <li className="flex items-start group">
                <div className="w-6 h-6 rounded-lg gradient-bg mr-4 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 group-hover:scale-110 transition-transform">✓</div>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">System automations using n8n, Zapier, Power Automate, and other integration platforms</span>
              </li>
            </ul>
          </div>

          <div className="p-10 glass rounded-3xl border border-gray-200/50 dark:border-gray-800/50 card-hover">
            <div className="w-16 h-16 rounded-2xl gradient-bg mb-6 flex items-center justify-center text-white text-2xl font-bold">
              👥
            </div>
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Our Team
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              We have a dedicated team of experienced professionals who understand the unique needs 
              of churches and faith-based organizations:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="w-6 h-6 rounded-lg gradient-bg mr-4 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 group-hover:scale-110 transition-transform">✓</div>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">Highly skilled graphic designers specializing in faith-based content</span>
              </li>
              <li className="flex items-start group">
                <div className="w-6 h-6 rounded-lg gradient-bg mr-4 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 group-hover:scale-110 transition-transform">✓</div>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">Expert web designers creating beautiful, functional church websites</span>
              </li>
              <li className="flex items-start group">
                <div className="w-6 h-6 rounded-lg gradient-bg mr-4 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 group-hover:scale-110 transition-transform">✓</div>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">Professional video editors for sermons, events, and promotional content</span>
              </li>
              <li className="flex items-start group">
                <div className="w-6 h-6 rounded-lg gradient-bg mr-4 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 group-hover:scale-110 transition-transform">✓</div>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">Digital marketing specialists focused on growing your ministry</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-block px-10 py-4 gradient-bg text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
          >
            Let's Work Together
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20 md:py-32" itemScope itemType="https://schema.org/Service">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
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
              <div className="mt-6">
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-block w-full text-center px-6 py-3 glass border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-700 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
                >
                  Get This Service
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="p-10 glass rounded-3xl border border-gray-200/50 dark:border-gray-800/50">
            <h3 className="text-3xl font-bold mb-4 gradient-text">
              Ready to Transform Your Ministry?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive digital solutions can help you reach your community and grow your mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-block px-10 py-4 btn-primary rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
              >
                Get a Free Consultation
              </a>
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('portfolio');
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="inline-block px-10 py-4 glass border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-xl font-semibold text-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="max-w-7xl mx-auto px-6 py-20 md:py-32" itemScope itemType="https://schema.org/CollectionPage">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Portfolio</span>
          </h2>
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
          <div className="p-10 glass rounded-3xl border border-gray-200/50 dark:border-gray-800/50">
            <h3 className="text-3xl font-bold mb-4 gradient-text">
              Inspired by Our Work?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch to discuss your project.
            </p>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-block px-10 py-4 gradient-bg text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 md:py-32" itemScope itemType="https://schema.org/ContactPage">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-3 text-gray-900 dark:text-gray-50"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 glass border border-gray-200/50 dark:border-gray-800/50 rounded-xl text-gray-900 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-3 text-gray-900 dark:text-gray-50"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 glass border border-gray-200/50 dark:border-gray-800/50 rounded-xl text-gray-900 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-3 text-gray-900 dark:text-gray-50"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-4 glass border border-gray-200/50 dark:border-gray-800/50 rounded-xl text-gray-900 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none transition-all"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Honeypot field - hidden from users but visible to bots */}
            <div className="absolute left-[-9999px] opacity-0 pointer-events-none" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-10 py-4 btn-primary rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="p-5 glass border border-green-200 dark:border-green-800 rounded-xl text-green-700 dark:text-green-300 animate-fade-in">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="p-5 glass border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-300 animate-fade-in">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✕</span>
                  <span>Something went wrong. Please try again later.</span>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="mt-16 text-center animate-slide-up">
          <div className="p-10 glass rounded-3xl border border-gray-200/50 dark:border-gray-800/50">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Other Ways to Reach Us
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Email us directly or connect with us on social media
            </p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
