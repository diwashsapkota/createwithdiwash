import type { Metadata } from 'next';
import ServicePage, { type Offering, type PricingPlan } from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Email Marketing Services for Churches',
  description: 'Effective email marketing campaigns to keep your congregation informed, engaged, and connected with regular updates, newsletters, and event announcements.',
};

const offerings: Offering[] = [
  {
    title: 'Newsletter Design',
    description:
      "Professionally designed newsletters that reflect your church's brand and effectively communicate your message.",
  },
  {
    title: 'Automated Campaigns',
    description:
      'Set up automated email sequences for new members, event reminders, and follow-ups.',
  },
  {
    title: 'Segmentation',
    description:
      'Target specific groups within your congregation with personalized content and messaging.',
  },
  {
    title: 'Analytics & Reporting',
    description:
      'Track open rates, click-through rates, and engagement to optimize your email strategy.',
  },
];

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$150',
    period: '/month',
    description: 'Perfect for small churches starting with email marketing',
    features: [
      'Up to 1,000 subscribers',
      '2 newsletters per month',
      'Basic email templates',
      'Email scheduling',
      'Basic analytics',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: '$300',
    period: '/month',
    description: 'Ideal for churches with growing email lists',
    features: [
      'Up to 5,000 subscribers',
      '4 newsletters per month',
      'Custom email templates',
      'Automated campaigns',
      'Segmentation & personalization',
      'Advanced analytics',
      'Priority email support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large congregations',
    features: [
      'Unlimited subscribers',
      'Unlimited newsletters',
      'Fully custom email design',
      'Advanced automation workflows',
      'Advanced segmentation',
      'A/B testing',
      'Real-time analytics dashboard',
      'Dedicated account manager',
      '24/7 priority support',
    ],
    popular: false,
  },
];

export default function EmailMarketingPage() {
  return (
    <ServicePage
      slug="email-marketing"
      kicker="Email Marketing"
      title="Keep your congregation connected every week"
      intro="Effective email marketing campaigns to keep your congregation informed, engaged, and connected with regular updates, newsletters, and event announcements."
      offerings={offerings}
      plans={plans}
    />
  );
}
