import type { Metadata } from 'next';
import ServicePage, { type Offering, type PricingPlan } from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Video Editing & Production Services for Churches',
  description: 'Professional video editing and design services for sermons, events, promotional content, and social media, helping you share your message effectively.',
};

const offerings: Offering[] = [
  {
    title: 'Sermon Editing',
    description:
      'Professional editing of your sermons with graphics, transitions, and enhancements.',
  },
  {
    title: 'Event Highlights',
    description:
      'Create engaging highlight reels from your church events and special services.',
  },
  {
    title: 'Social Media Videos',
    description:
      'Short-form videos optimized for social media platforms to maximize engagement.',
  },
  {
    title: 'Motion Graphics',
    description:
      'Custom animated graphics and titles to enhance your video content.',
  },
];

const plans: PricingPlan[] = [
  {
    name: 'Single Video',
    price: '$100',
    period: 'per video',
    description: 'Perfect for one-time video editing needs',
    features: [
      'Up to 10 minutes of footage',
      'Basic editing & color correction',
      'Music & sound effects',
      'Text overlays & graphics',
      '1 revision round',
      'HD delivery (1080p)',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Monthly Package',
    price: '$750',
    period: '/month',
    description: 'Ideal for churches producing regular video content',
    features: [
      'Up to 4 videos per month',
      'Up to 30 minutes per video',
      'Advanced editing & color grading',
      'Custom graphics & motion design',
      'Music & sound design',
      'Unlimited revisions',
      'HD & 4K delivery',
      'Priority email support',
    ],
    popular: true,
  },
  {
    name: 'Production Package',
    price: 'Custom',
    period: '',
    description: 'Complete video production solution',
    features: [
      'Unlimited videos',
      'Full production services',
      'Professional editing',
      'Advanced motion graphics',
      'Color grading & audio mixing',
      'Live streaming support',
      'Multiple format delivery',
      'Unlimited revisions',
      'Dedicated editor',
      'Priority support',
    ],
    popular: false,
  },
];

export default function VideoEditingPage() {
  return (
    <ServicePage
      slug="video-editing"
      kicker="Video Editing"
      title="Share your message through compelling video"
      intro="Professional video editing and design services for sermons, events, promotional content, and social media, helping you share your message effectively."
      offerings={offerings}
      plans={plans}
    />
  );
}
