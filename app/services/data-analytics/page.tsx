import type { Metadata } from 'next';
import ServicePage, { type Offering, type PricingPlan } from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Data Analytics Services for Churches',
  description: 'Advanced data analytics and reporting to help you understand your congregation, track engagement, measure growth, and make data-driven decisions for your ministry.',
};

const offerings: Offering[] = [
  {
    title: 'Performance Dashboards',
    description:
      "Real-time dashboards to monitor key metrics and track your ministry's performance.",
  },
  {
    title: 'Engagement Metrics',
    description:
      'Track how your congregation engages with your content, events, and communications.',
  },
  {
    title: 'Growth Tracking',
    description:
      "Monitor your church's growth trends and identify opportunities for expansion.",
  },
  {
    title: 'Custom Reports',
    description:
      "Tailored reports that provide insights specific to your ministry's goals and needs.",
  },
];

const plans: PricingPlan[] = [
  {
    name: 'Basic Analytics',
    price: '$150',
    period: '/month',
    description: 'Perfect for churches starting with data tracking',
    features: [
      'Basic performance dashboard',
      'Monthly engagement reports',
      'Website analytics',
      'Social media metrics',
      'Email campaign analytics',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Advanced Analytics',
    price: '$300',
    period: '/month',
    description: 'When attendance, giving, and the site should show up in one view',
    features: [
      'Advanced performance dashboard',
      'Weekly engagement reports',
      'Multi-channel analytics',
      'Growth tracking & forecasting',
      'Custom reports',
      'Data visualization',
      'Priority email support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise Analytics',
    price: 'Custom',
    period: '',
    description: 'Tailored analytics solutions for large organizations',
    features: [
      'Real-time analytics dashboard',
      'Custom metrics & KPIs',
      'Advanced data visualization',
      'Predictive analytics',
      'Multi-site tracking',
      'API integrations',
      'Dedicated analyst',
      '24/7 priority support',
    ],
    popular: false,
  },
];

export default function DataAnalyticsPage() {
  return (
    <ServicePage
      slug="data-analytics"
      kicker="Data Analytics"
      title="Turn ministry data into clear decisions"
      intro="Advanced data analytics and reporting to help you understand your congregation, track engagement, measure growth, and make data-driven decisions for your ministry."
      offerings={offerings}
      plans={plans}
    />
  );
}
