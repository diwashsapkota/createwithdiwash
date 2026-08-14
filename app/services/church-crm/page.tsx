import type { Metadata } from 'next';
import ServicePage, { type Offering, type PricingPlan } from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Church CRM Systems',
  description: 'Specialized Customer Relationship Management systems tailored for churches to manage members, track attendance, handle donations, schedule events, and streamline operations.',
};

const offerings: Offering[] = [
  {
    title: 'Member Management',
    description:
      'Comprehensive member database with profiles, contact information, and relationship tracking.',
  },
  {
    title: 'Attendance Tracking',
    description:
      'Track and analyze attendance patterns to better understand engagement and identify needs.',
  },
  {
    title: 'Donation Management',
    description:
      'Manage donations, generate giving statements, and track financial contributions.',
  },
  {
    title: 'Event Scheduling',
    description:
      'Schedule events, manage RSVPs, and coordinate resources efficiently.',
  },
];

const plans: PricingPlan[] = [
  {
    name: 'Starter CRM',
    price: '$100',
    period: '/month',
    description: 'Perfect for small churches starting with member management',
    features: [
      'Up to 500 members',
      'Member database',
      'Basic attendance tracking',
      'Donation tracking',
      'Event scheduling',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Professional CRM',
    price: '$200',
    period: '/month',
    description: 'When members, attendance, and donations need one record',
    features: [
      'Up to 2,000 members',
      'Advanced member management',
      'Attendance tracking & reports',
      'Donation management & reporting',
      'Event scheduling & RSVP',
      'Communication tools',
      'Basic reporting dashboard',
      'Priority email support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise CRM',
    price: 'Custom',
    period: '',
    description: 'Fully customized solution for large churches and organizations',
    features: [
      'Unlimited members',
      'Advanced member management',
      'Multi-site support',
      'Advanced attendance analytics',
      'Comprehensive donation system',
      'Advanced event management',
      'Automated communications',
      'Custom reporting & analytics',
      'API integrations',
      'Dedicated account manager',
      '24/7 priority support',
    ],
    popular: false,
  },
];

export default function ChurchCRMPage() {
  return (
    <ServicePage
      slug="church-crm"
      kicker="Church CRM"
      title="Know and care for every member"
      intro="Specialized Customer Relationship Management systems tailored for churches to manage members, track attendance, handle donations, schedule events, and streamline operations."
      offerings={offerings}
      plans={plans}
    />
  );
}
