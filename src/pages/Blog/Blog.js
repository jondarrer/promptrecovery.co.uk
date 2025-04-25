import React from "react";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog-page">
      <div className="blog-construction">
        <div className="construction-icon">🚧</div>
        <h1>Our Blog is Coming Soon!</h1>
        <p>We're working hard to create valuable content for you.</p>
        <p>
          Please check back in a few days to see our latest articles and tips.
        </p>
        <div className="construction-emoji">✍️ 👨‍💻 📝</div>
      </div>

      <div className="blog-cta">
        <h2>Have questions in the meantime?</h2>
        <div className="cta-buttons">
          <a href="/faqs" className="cta-button secondary">
            Check our FAQs
          </a>
          <a href="tel:1234567890" className="cta-button primary">
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
