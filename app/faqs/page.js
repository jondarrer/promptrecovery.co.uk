import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

import GoogleMap from '../../components/GoogleMap/GoogleMap';
import Accordion from '../../components/Accordion/Accordion';
import styles from './faqs.module.css';

/**
 * @type {Metadata}
 */
export const metadata = {
  title: 'FAQs | Prompt Recovery Ltd | Rapid Response, Prompt Recovery',
  description:
    'Got a question before booking? Here are answers to the most common things customers ask about our vehicle recovery services in Watford and the surrounding area.',
  alternates: { canonical: 'https://promptrecovery.co.uk/faqs' },
  openGraph: {
    type: 'website',
    url: 'https://promptrecovery.co.uk/faqs',
    title: 'FAQs | Prompt Recovery',
    description:
      'Got a question before booking? Here are answers to the most common things customers ask about our vehicle recovery services in Watford and the surrounding area.',
    siteName: 'Prompt Recovery',
    images: [
      {
        url: 'https://promptrecovery.co.uk/images/image2-1185x593.jpg',
        width: 1185,
        height: 593,
        type: 'image/jpeg',
        alt: 'Nick, Founder of Prompt Recovery',
      },
    ],
  },
};

function FAQs() {
  const faqData = [
    {
      question: 'What areas do you cover?',
      answer:
        'We provide towing services in Watford, Bushey, Rickmansworth, Croxley Green, and nearby towns. If you’re unsure whether we cover your area, feel free to give us a call.',
    },
    {
      question: 'What types of vehicles can you tow?',
      answer:
        'We specialize in towing cars, SUVs, and small vans under 4 tonnes. If your vehicle is non-operable, we can safely transport it to your chosen destination.',
    },
    {
      question: 'Do you offer roadside assistance?',
      answer:
        'We focus strictly on towing non-drivable vehicles. While we don’t offer on-site repairs or breakdown assistance, we can tow your vehicle to a trusted garage or your preferred location.',
    },
    {
      question: 'How quickly can you arrive?',
      answer: 'Our average response time in the Watford area is 30–60 minutes, depending on traffic and your location.',
    },
    {
      question: 'Can you tow vehicles with locked wheels or stuck handbrakes?',
      answer:
        'Yes. We use professional wheel skates to safely move vehicles with locked tyres or jammed handbrakes, even in tight or difficult spaces.',
    },
    {
      question: 'What should I do if I’ve been in an accident?',
      answer:
        'If your vehicle is non-drivable, call us immediately. We’ll safely tow it from the scene to your home, a body shop, or your insurer’s preferred garage.',
    },
    {
      question: 'Do you operate on weekends?',
      answer:
        'Our standard hours are Monday to Friday, 06:00–17:00. However, you can still call us on weekends to check availability we’ll help if we can.',
    },
  ];

  const phoneNumber = '07799525650';

  return (
    <div className={styles['faqs-page']}>
      <div className={styles['faqs-container']}>
        <header className={styles['faqs-header']}>
          <h1>Frequently Asked Questions</h1>
          <p className={styles['faqs-intro']}>
            Got a question before booking? Here are answers to the most common things customers ask about our vehicle
            recovery services in Watford and the surrounding area.
          </p>
        </header>

        <Accordion data={faqData} />

        <div className={styles['faqs-cta-buttons']}>
          <Link
            href={`tel:${phoneNumber}`}
            className={[styles['faqs-cta-button'], styles['faqs-call-button']].join(' ')}
          >
            Call Now
          </Link>
        </div>

        <div className={styles['faqs-map-section']}>
          <h2>Find Us</h2>
          <p>We operate throughout Watford and surrounding areas.</p>
        </div>
      </div>
      <GoogleMap />
    </div>
  );
}

export default FAQs;
