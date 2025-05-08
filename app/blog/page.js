import React from 'react';
import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import styles from './blog.module.css';

/**
 * @type {Metadata}
 */
export const metadata = {
  title: 'Blog | Prompt Recovery Ltd | Rapid Response, Prompt Recovery',
  alternates: { canonical: 'https://promptrecovery.co.uk/blog' },
  openGraph: {
    type: 'website',
    url: 'https://promptrecovery.co.uk/blog',
    title: 'Blog | Prompt Recovery',
    description: 'Our Blog is Coming Soon!',
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

function Blog() {
  return (
    <div className={styles['blog-page']}>
      <Head>
        <title>Blog | Prompt Recovery Ltd | Rapid Response, Prompt Recovery</title>
      </Head>
      <div className={styles['blog-construction']}>
        <div className={styles['construction-icon']}>🚧</div>
        <h1>Our Blog is Coming Soon!</h1>
        <p>We're working hard to create valuable content for you.</p>
        <p>Please check back in a few days to see our latest articles and tips.</p>
        <div className={styles['construction-emoji']}>✍️ 👨‍💻 📝</div>
      </div>

      <div className={styles['blog-cta']}>
        <h2>Have questions in the meantime?</h2>
        <div className={styles['cta-buttons']}>
          <Link href="/faqs" className={[styles['cta-button'], styles['secondary']].join(' ')}>
            Check our FAQs
          </Link>
          <Link href="tel:1234567890" className={[styles['cta-button'], styles['primary']].join(' ')}>
            Call Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
