import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Graphic Design Services for Churches',
  description: 'Professional graphic design services for churches and faith-based organizations, including logos, banners, social media graphics, print materials, and branding.',
};

export default function GraphicDesignPage() {
  const pricingPlans = [
    {
      name: 'Single Project',
      price: '$150',
      period: 'per project',
      description: 'Perfect for one-time design needs',
      features: [
        '1 design deliverable',
        '2 revision rounds',
        'Source files included',
        'Standard formats (PNG, JPG, PDF)',
        'Email support',
      ],
      popular: false,
    },
    {
      name: 'Monthly Package',
      price: '$400',
      period: '/month',
      description: 'Ideal for churches needing regular design work',
      features: [
        'Up to 10 design deliverables',
        'Unlimited revisions',
        'Source files included',
        'All formats (AI, PSD, PNG, JPG, PDF)',
        'Social media graphics',
        'Print materials',
        'Priority email support',
      ],
      popular: true,
    },
    {
      name: 'Brand Package',
      price: 'Custom',
      period: '',
      description: 'Complete branding solution for your church',
      features: [
        'Logo design',
        'Brand identity system',
        'Brand guidelines',
        'Business cards & letterhead',
        'Social media templates',
        'Print materials',
        'Unlimited revisions',
        'All source files',
        'Dedicated designer',
        'Priority support',
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
            Graphic Design Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional graphic design services for churches and faith-based organizations, including logos, banners, social media graphics, print materials, and branding.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-50">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">Logo Design</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Create memorable logos that represent your church's identity and mission.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">Brand Identity</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Develop a cohesive brand identity that reflects your values and mission.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">Print Design</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Design flyers, brochures, banners, and other print materials for your events and programs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">Social Media Graphics</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Eye-catching graphics optimized for social media platforms to engage your audience.
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

