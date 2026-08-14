import type { Metadata } from 'next';
import ServicePage, { type Offering, type PricingPlan } from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Mobile App Development Services for Churches',
  description: 'Native and cross-platform mobile applications that help your church stay connected with members, share content, manage events, and enhance engagement on-the-go.',
};

const offerings: Offering[] = [
  {
    title: 'iOS & Android Apps',
    description:
      'Native apps for both platforms or cross-platform solutions for maximum reach.',
  },
  {
    title: 'Push Notifications',
    description:
      'Keep your congregation informed with timely notifications about events and updates.',
  },
  {
    title: 'Offline Capabilities',
    description:
      'Access content and features even without an internet connection.',
  },
  {
    title: 'App Store Optimization',
    description:
      'Optimize your app listing to maximize visibility and downloads.',
  },
];

const plans: PricingPlan[] = [
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

export default function MobileAppDevelopmentPage() {
  return (
    <ServicePage
      slug="mobile-app-development"
      kicker="Mobile App Development"
      title="Put your church in every pocket"
      intro="Native and cross-platform mobile applications that help your church stay connected with members, share content, manage events, and enhance engagement on-the-go."
      offerings={offerings}
      plans={plans}
    />
  );
}
