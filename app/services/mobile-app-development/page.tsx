import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development Services for Churches',
  description: 'Native and cross-platform mobile applications that help your church stay connected with members, share content, manage events, and enhance engagement on-the-go.',
};

export default function MobileAppDevelopmentPage() {
  const pricingPlans = [
    {
      name: 'Basic App',
      price: '$2,500',
      period: 'one-time',
      description: 'Perfect for churches wanting a simple mobile presence',
      features: [
        'iOS or Android app',
        'Basic content display',
        'Event calendar',
        'Sermon audio/video',
        'Push notifications',
        'Basic support',
      ],
      popular: false,
    },
    {
      name: 'Standard App',
      price: '$5,000',
      period: 'one-time',
      description: 'Ideal for churches needing full-featured mobile apps',
      features: [
        'iOS & Android apps',
        'Full content management',
        'Event management & RSVP',
        'Sermon library with downloads',
        'Push notifications',
        'Offline capabilities',
        'App Store optimization',
        '6 months support',
      ],
      popular: true,
    },
    {
      name: 'Premium App',
      price: 'Custom',
      period: '',
      description: 'Fully customized solution with advanced features',
      features: [
        'iOS & Android apps',
        'Custom functionality',
        'Advanced event management',
        'Full media library',
        'Member portal integration',
        'Donation integration',
        'Live streaming',
        'Advanced push notifications',
        'Offline sync',
        'Analytics dashboard',
        '12 months support',
        'Dedicated project manager',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
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
            Mobile Application Development
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Native and cross-platform mobile applications that help your church stay connected with members, share content, manage events, and enhance engagement on-the-go.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-50">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">iOS & Android Apps</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Native apps for both platforms or cross-platform solutions for maximum reach.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">Push Notifications</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Keep your congregation informed with timely notifications about events and updates.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">Offline Capabilities</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Access content and features even without an internet connection.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">App Store Optimization</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Optimize your app listing to maximize visibility and downloads.
                </p>
              </div>
            </div>
          </div>
        </div>

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
                    {plan.period && (
                      <span className="text-gray-600 dark:text-gray-400 ml-2 text-sm">{plan.period}</span>
                    )}
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

