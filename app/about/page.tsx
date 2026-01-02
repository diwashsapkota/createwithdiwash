export default function About() {
  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About</span>
            <br />
            <span className="text-gray-900 dark:text-gray-50">Create with Diwash</span>
          </h1>
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
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              What We Offer
            </h2>
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
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Our Team
            </h2>
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
            href="/contact"
            className="inline-block px-10 py-4 btn-primary rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

