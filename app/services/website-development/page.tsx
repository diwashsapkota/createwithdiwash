import type { Metadata } from 'next';
import ServicePage, { type Offering, type PricingPlan } from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Website Development Services for Churches',
  description: 'Custom websites built with modern technologies, specifically designed for churches and faith-based organizations to showcase your mission and connect with your community.',
};

const offerings: Offering[] = [
  {
    title: 'Responsive Design',
    description:
      'Websites that look great and function perfectly on all devices - desktop, tablet, and mobile.',
  },
  {
    title: 'Event Management',
    description:
      'Integrated event calendars and registration systems to manage your church activities.',
  },
  {
    title: 'Donation Integration',
    description:
      'Secure online donation systems to make giving easy and convenient for your congregation.',
  },
  {
    title: 'Member Portals',
    description:
      'Private member areas for resources, directories, and community engagement.',
  },
];

const plans: PricingPlan[] = [
  {
    name: 'Basic Website',
    price: '$1,250',
    period: 'one-time',
    description: 'Perfect for small churches needing a professional online presence',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Contact form',
      'Event calendar',
      'Sermon archive',
      'Basic SEO setup',
      '3 months support',
    ],
    popular: false,
  },
  {
    name: 'Standard Website',
    price: '$2,500',
    period: 'one-time',
    description: 'Ideal for growing churches with more features and functionality',
    features: [
      'Up to 10 pages',
      'Responsive design',
      'Contact & inquiry forms',
      'Event management system',
      'Sermon library with media',
      'Donation integration',
      'Member portal (basic)',
      'Advanced SEO',
      '6 months support',
    ],
    popular: true,
  },
  {
    name: 'Premium Website',
    price: 'Custom',
    period: '',
    description: 'Fully customized solution for large churches and organizations',
    features: [
      'Unlimited pages',
      'Fully responsive design',
      'Custom functionality',
      'Advanced event management',
      'Full sermon/media library',
      'Multiple donation options',
      'Advanced member portal',
      'E-commerce integration',
      'Content management system',
      'Advanced SEO & analytics',
      '12 months support',
      'Dedicated project manager',
    ],
    popular: false,
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <ServicePage
      slug="website-development"
      kicker="Website Development"
      title="A website that brings your mission online"
      intro="Custom websites built with modern technologies, specifically designed for churches and faith-based organizations to showcase your mission and connect with your community."
      offerings={offerings}
      plans={plans}
    />
  );
}
