import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design Services for Churches',
  description: 'Beautiful, user-friendly web designs that reflect your church\'s values and mission, creating engaging experiences that connect visitors with your community.',
};

export default function WebDesignPage() {
  const pricingPlans = [
    {
      name: 'Basic Design',
      price: '$750',
      period: 'one-time',
      description: 'Perfect for churches needing a simple, clean design',
      features: [
        'Up to 5 page designs',
        'Responsive design mockups',
        'Basic UI/UX design',
        'Design revisions (2 rounds)',
        'Design files (Figma/Sketch)',
        'Email support',
      ],
      popular: false,
    },
    {
      name: 'Standard Design',
      price: '$1,500',
      period: 'one-time',
      description: 'Ideal for churches wanting comprehensive design solutions',
      features: [
        'Up to 10 page designs',
        'Fully responsive mockups',
        'Advanced UI/UX design',
        'Wireframing & prototyping',
        'Design system',
        'Unlimited revisions',
        'All design files',
        'Priority email support',
      ],
      popular: true,
    },
    {
      name: 'Premium Design',
      price: 'Custom',
      period: '',
      description: 'Fully customized design solution for your church',
      features: [
        'Unlimited page designs',
        'Fully responsive design',
        'Custom UI/UX design',
        'Complete wireframing',
        'Interactive prototypes',
        'Full design system',
        'Brand guidelines',
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
            Web Design Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Beautiful, user-friendly web designs that reflect your church's values and mission, creating engaging experiences that connect visitors with your community.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-50">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  User-centered designs that create intuitive and engaging experiences for your visitors.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">Wireframing</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Plan your website structure and layout before design to ensure optimal user flow.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">Prototyping</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Interactive prototypes to test and refine your design before development.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-50">Design Systems</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Consistent design systems that ensure cohesive branding across all pages.
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

