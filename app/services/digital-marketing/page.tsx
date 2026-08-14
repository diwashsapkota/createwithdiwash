import type { Metadata } from 'next';
import ServicePage, { type Offering, type PricingPlan } from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Digital Marketing Services for Churches',
  description:
    'Comprehensive digital marketing strategies designed to help churches and faith-based organizations reach their community, increase engagement, and grow their mission.',
};

const offerings: Offering[] = [
  {
    title: 'Social Media Marketing',
    description:
      'Strategic social media management across platforms to engage your community and share your message effectively.',
  },
  {
    title: 'Content Strategy',
    description:
      "Develop compelling content that resonates with your audience and aligns with your ministry's mission.",
  },
  {
    title: 'SEO Optimization',
    description:
      'Improve your online visibility and help people find your church when searching for faith-based resources.',
  },
  {
    title: 'Campaign Management',
    description:
      'Plan, execute, and optimize marketing campaigns for events, services, and special initiatives.',
  },
];

const plans: PricingPlan[] = [
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

export default function DigitalMarketingPage() {
  return (
    <ServicePage
      slug="digital-marketing"
      kicker="Digital Marketing"
      title="Reach your community where they are"
      intro="Comprehensive digital marketing strategies designed to help churches and faith-based organizations reach their community, increase engagement, and grow their mission."
      offerings={offerings}
      plans={plans}
    />
  );
}
