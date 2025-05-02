import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from './reviews.module.css';
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export const metadata = {
  title: 'Reviews | Prompt Recovery Ltd | Rapid Response, Prompt Recovery',
};

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Jason T., Bushey',
      rating: 5,
      date: 'March 15, 2025',
      text: 'Locked wheels, stuck on a slope, and I thought I was screwed. Nick came with skates, sorted it without a scratch. Honest pricing too. Would use again without a doubt.',
    },
    {
      id: 2,
      name: 'Laura R., Watford',
      rating: 5,
      date: 'February 28, 2025',
      text: 'Nick showed up in under 30 minutes after my car broke down outside Watford. Super professional and made the whole thing way less stressful than I expected. Highly recommend.',
    },
    {
      id: 3,
      name: 'Amir K., Rickmansworth',
      rating: 4,
      date: 'April 2, 2025',
      text: 'Had an accident on the A41 and wasn’t sure what to do. Found Prompt Recovery online, called Nick, and he was there within the hour. Calm, helpful, and knew exactly what to do. Lifesaver.',
    },
    {
      id: 4,
      name: 'Emma M., Croxley Green',
      rating: 5,
      date: 'January 17, 2025',
      text: 'Most recovery companies I called didn’t answer or quoted ridiculous prices. Nick picked up straight away and gave a fair quote on the spot. Turned up exactly when he said he would.',
    },
    {
      id: 5,
      name: 'Dan S., North Watford',
      rating: 5,
      date: 'March 21, 2025',
      text: 'I had to move a car that hadn’t started in over a year. Nick managed to load and tow it from my driveway without any issue. Polite, on time, and really knew what he was doing.',
    },
    {
      id: 6,
      name: 'Sophie L., Garston',
      rating: 5,
      date: 'February 10, 2025',
      text: 'You don’t realize how important quick recovery is until you’re stuck. Nick handled everything — no drama, no surprises. Good guy, good service.',
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={
            i < rating ? [styles['star'], styles['filled']].join(' ') : [styles['star'], styles['empty']].join(' ')
          }
        />
      );
    }
    return stars;
  };

  return (
    <div className={styles['reviews-page']}>
      <Head>
        <title>Reviews | Prompt Recovery Ltd | Rapid Response, Prompt Recovery</title>
      </Head>
      <div className={styles['reviews-header']}>
        <h1>Customer Reviews</h1>
        <p>
          Don't just take our word for it. Here's what our customers have to say about our vehicle recovery services.
        </p>
      </div>

      <div className={styles['overall-rating']}>
        <div className={styles['rating-number']}>4.9</div>
        <div className={styles['rating-stars']}>{renderStars(5)}</div>
        <p>Based on {reviews.length} verified reviews</p>
      </div>

      <div className={styles['reviews-grid']}>
        {reviews.map((review) => (
          <div key={review.id} className={styles['review-card']}>
            <div className={styles['review-header']}>
              <h3>{review.name}</h3>
              <span className={styles['review-date']}>{review.date}</span>
            </div>
            <div className={styles['review-stars']}>{renderStars(review.rating)}</div>
            <div className={styles['review-content']}>
              <FaQuoteLeft className={[styles['quote-icon'], styles['left']].join(' ')} />
              <p>{review.text}</p>
              <FaQuoteRight className={[styles['quote-icon'], styles['right']].join(' ')} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles['reviews-cta']}>
        <h2>Need our services?</h2>
        <Link href="tel:1234567890" className={styles['cta-button']}>
          Call Now
        </Link>
      </div>
    </div>
  );
}

export default Reviews;
