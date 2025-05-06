import React from 'react';
import styles from './blog.module.css';

function Blog() {
  return (
    <div className={styles['blog-page']}>
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
          <a href="/faqs" className={[styles['cta-button'], styles['secondary']].join(' ')}>
            Check our FAQs
          </a>
          <a href="tel:1234567890" className={[styles['cta-button'], styles['primary']].join(' ')}>
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
