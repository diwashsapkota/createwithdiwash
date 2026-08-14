import type { Metadata } from 'next';
import ServicePage, { type Offering, type PricingPlan } from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Graphic Design Services for Churches',
  description: 'Professional graphic design services for churches and faith-based organizations, including logos, banners, social media graphics, print materials, and branding.',
};

const offerings: Offering[] = [
  {
    title: 'Logo Design',
    description:
      "Create memorable logos that represent your church's identity and mission.",
  },
  {
    title: 'Brand Identity',
    description:
      'Develop a cohesive brand identity that reflects your values and mission.',
  },
  {
    title: 'Print Design',
    description:
      'Design flyers, brochures, banners, and other print materials for your events and programs.',
  },
  {
    title: 'Social Media Graphics',
    description:
      'Eye-catching graphics optimized for social media platforms to engage your audience.',
  },
];

const plans: PricingPlan[] = [
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

export default function GraphicDesignPage() {
  return (
    <ServicePage
      slug="graphic-design"
      kicker="Graphic Design"
      title="Design that makes your message stand out"
      intro="Professional graphic design services for churches and faith-based organizations, including logos, banners, social media graphics, print materials, and branding."
      offerings={offerings}
      plans={plans}
    />
  );
}
