'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-3 text-gray-900 dark:text-gray-50"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 glass border border-gray-200/50 dark:border-gray-800/50 rounded-xl text-gray-900 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-3 text-gray-900 dark:text-gray-50"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 glass border border-gray-200/50 dark:border-gray-800/50 rounded-xl text-gray-900 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-3 text-gray-900 dark:text-gray-50"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-4 glass border border-gray-200/50 dark:border-gray-800/50 rounded-xl text-gray-900 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none transition-all"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-10 py-4 btn-primary rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="p-5 glass border border-green-200 dark:border-green-800 rounded-xl text-green-700 dark:text-green-300 animate-fade-in">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="p-5 glass border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-300 animate-fade-in">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✕</span>
                  <span>Something went wrong. Please try again later.</span>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="mt-16 text-center animate-slide-up">
          <div className="p-10 glass rounded-3xl border border-gray-200/50 dark:border-gray-800/50">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Other Ways to Reach Us
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Email us directly or connect with us on social media
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

