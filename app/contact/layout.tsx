import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell us about your ministry. The first consultation is free.',
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
