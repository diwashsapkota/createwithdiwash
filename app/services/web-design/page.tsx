import type { Metadata } from 'next';
import ServicePage, { type Offering, type PricingPlan } from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Web Design Services for Churches',
  description: 'Beautiful, user-friendly web designs that reflect your church\'s values and mission, creating engaging experiences that connect visitors with your community.',
};

const offerings: Offering[] = [
  {
    title: 'UI/UX Design',
    description:
      'User-centered designs that create intuitive and engaging experiences for your visitors.',
  },
  {
    title: 'Wireframing',
    description:
      'Plan your website structure and layout before design to ensure optimal user flow.',
  },
  {
    title: 'Prototyping',
    description:
      'Interactive prototypes to test and refine your design before development.',
  },
  {
    title: 'Design Systems',
    description:
      'Consistent design systems that ensure cohesive branding across all pages.',
  },
];

const plans: PricingPlan[] = [
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
    description: 'When the site, print, and Sunday slides should look like one church',
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

export default function WebDesignPage() {
  return (
    <ServicePage
      slug="web-design"
      kicker="Web Design"
      title="Beautiful designs that welcome every visitor"
      intro="Beautiful, user-friendly web designs that reflect your church's values and mission, creating engaging experiences that connect visitors with your community."
      offerings={offerings}
      plans={plans}
    />
  );
}
