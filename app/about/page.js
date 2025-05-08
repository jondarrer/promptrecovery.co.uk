import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import styles from './about.module.css';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import logo from '../../assets/images/recovery-truck.jpg';

/**
 * @type {Metadata}
 */
export const metadata = {
  title: 'About | Prompt Recovery Ltd | Rapid Response, Prompt Recovery',
  alternates: { canonical: 'https://promptrecovery.co.uk/about' },
  openGraph: {
    type: 'website',
    url: 'https://promptrecovery.co.uk/about',
    title: 'About | Prompt Recovery',
    description: "Hi, I'm Nick - Founder of Prompt Recovery",
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

function About() {
  const phoneNumber = '07799525650';

  return (
    <div className={styles['about-container']}>
      <div className={styles['about-hero']}>
        <div className={styles['about-hero-content']}>
          <h1>Meet Prompt Recovery — Watford's Trusted Recovery Specialist</h1>
          <p>
            Prompt Recovery Ltd was built on one mission: to provide fast, friendly and reliable roadside recovery
            across Watford and nearby areas. Get to know the person behind the wheel and what drives our services.
          </p>
        </div>
      </div>

      <div className={styles['about-founder']}>
        <div className={styles['founder-content']}>
          <div className={styles['founder-text']}>
            <h2>Hi, I'm Nick - Founder of Prompt Recovery</h2>
            <p>
              I have over 20 years of experience as a professional truck driver, and I’ve built this business to offer
              fast, honest, and reliable towing for inoperable vehicles. I recover cars, SUVs, and small vans (under 4
              tonnes) across Watford, Bushey, Rickmansworth, and nearby areas. Whether it’s a breakdown, accident, or
              stuck vehicle, I’ll handle it with care, like I’m helping a neighbor.
            </p>
            <p>
              I'm local to Watford, and I treat every call like I'm helping a neighbor because most of the time, I am.
            </p>
          </div>
          <div className={styles['founder-image']}>
            <Image src={logo} alt="Nick - Founder of Prompt Recovery" />
          </div>
        </div>
      </div>

      <div className={styles['about-values']}>
        <h2>Our Values</h2>
        <div className={styles['values-grid']}>
          <div className={styles['value-card']}>
            <div className={styles['value-icon']}>⚡</div>
            <h3>Speed and Efficiency</h3>
            <p>
              We know your time is valuable. Our quick response times and efficient service get you back on the road as
              soon as possible.
            </p>
          </div>
          <div className={styles['value-card']}>
            <div className={styles['value-icon']}>🤝</div>
            <h3>Honesty and Transparency</h3>
            <p>No hidden fees or surprise costs. We're upfront about our services and prices from the first call.</p>
          </div>
          <div className={styles['value-card']}>
            <div className={styles['value-icon']}>🏠</div>
            <h3>Local Commitment</h3>
            <p>
              As Watford locals, we're invested in our community and dedicated to providing exceptional service to our
              neighbors.
            </p>
          </div>
          <div className={styles['value-card']}>
            <div className={styles['value-icon']}>👤</div>
            <h3>Customer First Mentality</h3>
            <p>
              Your satisfaction is our priority. We tailor our approach to meet your specific needs with care and
              attention.
            </p>
          </div>
        </div>
      </div>

      <div className={styles['about-location']}>
        <h2>Find Us</h2>
        <p>Serving Watford and surrounding areas:</p>
        <GoogleMap />
      </div>

      <div className={styles['about-cta']}>
        <div className={styles['cta-text']}>
          <h2>Need help or want to know more?</h2>
          <p>Give Nick a call directly, we're always here for you</p>
        </div>
        <Link href={`tel:${phoneNumber}`} className={styles['cta-button']}>
          CALL NOW
        </Link>
      </div>
    </div>
  );
}

export default About;
