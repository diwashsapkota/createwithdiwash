import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Services for Churches',
  description: 'Comprehensive digital marketing strategies designed to help churches and faith-based organizations reach their community, increase engagement, and grow their mission.',
};

export default function DigitalMarketingPage() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$250',
      period: '/month',
      description: 'Perfect for small churches getting started with digital marketing',
      features: [
        'Social media management (3 platforms)',
        '8 posts per month',
        'Basic content strategy',
        'Monthly analytics report',
        'Email support',
      ],
      popular: false,
    },
    {
      name: 'Growth',
      price: '$500',
      period: '/month',
      description: 'Ideal for growing churches wanting to expand their reach',
      features: [
        'Social media management (5 platforms)',
        '16 posts per month',
        'Advanced content strategy',
        'SEO optimization',
        'Campaign management',
        'Weekly analytics reports',
        'Priority email support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations and multi-site churches',
      features: [
        'Unlimited social media platforms',
        'Unlimited posts per month',
        'Custom content strategy',
        'Advanced SEO & SEM',
        'Multi-channel campaign management',
        'Real-time analytics dashboard',
        'Dedicated account manager',
        '24/7 priority support',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <Link
          href="/#services"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Services
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-50">
            Digital Marketing Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital marketing strategies designed to help churches and faith-based organizations reach their community, increase engagement, and grow their mission.
          </p>
        </div>

        {/* Service Details */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-50">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">Social Media Marketing</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Strategic social media management across platforms to engage your community and share your message effectively.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">Content Strategy</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Develop compelling content that resonates with your audience and aligns with your ministry's mission.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">SEO Optimization</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Improve your online visibility and help people find your church when searching for faith-based resources.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">Campaign Management</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Plan, execute, and optimize marketing campaigns for events, services, and special initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-gray-50">
            Pricing Plans
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Choose the plan that best fits your church's needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`glass rounded-2xl p-8 relative ${
                  plan.popular ? 'ring-2 ring-blue-500 dark:ring-blue-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-50">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900 dark:text-gray-50">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/#contact"
                  className="block w-full text-center btn-primary py-3 rounded-xl font-semibold transition-all hover:scale-105"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

