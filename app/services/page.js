import React from 'react';
import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import styles from './services.module.css';

/**
 * @type {Metadata}
 */
export const metadata = {
  title: 'Services | Prompt Recovery Ltd | Rapid Response, Prompt Recovery',
  description:
    "We provide safe, fast, and affordable towing for cars and vans that can't be driven — whether you're at home, at work, or stuck after a breakdown.",
  alternates: { canonical: 'https://promptrecovery.co.uk/services' },
  openGraph: {
    type: 'website',
    url: 'https://promptrecovery.co.uk/services',
    title: 'Services | Prompt Recovery',
    description:
      "We provide safe, fast, and affordable towing for cars and vans that can't be driven — whether you're at home, at work, or stuck after a breakdown.",
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

function Services() {
  const services = [
    {
      id: 1,
      title: 'Vehicle Breakdown Recovery',
      icon: '🚗',
      description: 'Stranded on a roadside? We offer fast and reliable car and van recovery for vehicles under 4t',
    },
    {
      id: 2,
      title: 'Accident Recovery',
      icon: '🚗💥',
      description:
        'Involved in a collision? We can safely recover your vehicle from the scene and transport it to chosen garage or home',
    },
    {
      id: 3,
      title: 'Jump Start Assistance',
      icon: '🔋',
      description:
        'Battery died? Our quick jumpstart service is available throughout Watford to get you moving as soon as possible',
    },
    {
      id: 4,
      title: 'Flat Tyre Help',
      icon: '🛞',
      description:
        "Got a puncture? We'll help swap your tyre with your backup one or transport you to the nearest tyre shop",
    },
    {
      id: 5,
      title: 'Locked Tyre',
      icon: '🔒',
      description:
        'Locked wheels or handbrake stuck? No problem. We use professional wheel skates to safely lift and move vehicles with locked tyres or stuck handbrakes perfect for tight spots or non-rolling cars.',
    },
    {
      id: 6,
      title: 'Long & Short Distance Towing',
      icon: '🚚',
      description:
        'Whether its across Watford or further afield, we offer safe, insured towing services you can count on',
    },
  ];

  return (
    <div className={styles['services-container']}>
      <Head>
        <title>Services | Prompt Recovery Ltd | Rapid Response, Prompt Recovery</title>
      </Head>
      <div className={styles['services-content']}>
        <div className={styles['services-intro']}>
          <h1>The Services That We Offer</h1>
          <p>
            We provide safe, fast, and affordable towing for cars and vans that can't be driven — whether you're at
            home, at work, or stuck after a breakdown.
          </p>
        </div>

        <div className={styles['services-grid']}>
          {services.map((service) => (
            <div className={styles['service-card']} key={service.id}>
              <div className={styles['service-icon']}>{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className={styles['services-cta']}>
          <div className={styles['cta-question']}>
            <p>Need Help Right Now?</p>
          </div>
          <div className={styles['cta-action']}>
            <Link href="tel:07799525650">CALL NOW!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
