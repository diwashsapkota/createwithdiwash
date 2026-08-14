import type { Metadata } from 'next';
import ServicePage, { type Offering, type PricingPlan } from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'System Automation Services for Churches',
  description: 'Streamline your operations with powerful automation solutions using n8n, Zapier, Power Automate, and other integration platforms to connect your tools and eliminate manual tasks.',
};

const offerings: Offering[] = [
  {
    title: 'Workflow Automation',
    description:
      'Automate repetitive tasks and workflows to save time and reduce errors.',
  },
  {
    title: 'API Integrations',
    description:
      'Connect your tools and systems through custom API integrations.',
  },
  {
    title: 'Data Synchronization',
    description:
      'Keep your data synchronized across multiple platforms automatically.',
  },
  {
    title: 'Process Optimization',
    description:
      'Identify and optimize inefficient processes to improve productivity.',
  },
];

const plans: PricingPlan[] = [
  {
    name: 'Basic Automation',
    price: '$250',
    period: 'one-time',
    description: 'Perfect for churches wanting to automate simple workflows',
    features: [
      'Up to 5 automation workflows',
      'Basic integrations',
      'Workflow documentation',
      'Email support',
      '30 days support',
    ],
    popular: false,
  },
  {
    name: 'Standard Automation',
    price: '$750',
    period: 'one-time',
    description: 'When giving, email, calendar, and the CRM should talk to each other',
    features: [
      'Up to 15 automation workflows',
      'Advanced integrations',
      'Custom API connections',
      'Data synchronization',
      'Workflow optimization',
      'Complete documentation',
      '3 months support',
      'Priority email support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise Automation',
    price: 'Custom',
    period: '',
    description: 'Fully customized automation solution for large organizations',
    features: [
      'Unlimited automation workflows',
      'Custom integrations',
      'Advanced API development',
      'Multi-system synchronization',
      'Process optimization',
      'Custom reporting',
      'Training & documentation',
      '12 months support',
      'Dedicated automation specialist',
      '24/7 priority support',
    ],
    popular: false,
  },
];

export default function SystemAutomationPage() {
  return (
    <ServicePage
      slug="system-automation"
      kicker="System Automation"
      title="Automate the busywork, focus on ministry"
      intro="Streamline your operations with powerful automation solutions using n8n, Zapier, Power Automate, and other integration platforms to connect your tools and eliminate manual tasks."
      offerings={offerings}
      plans={plans}
    />
  );
}
