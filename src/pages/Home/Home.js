import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

function Home() {
  const phoneNumber = "07799525650";

  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const teamImages = [image2, image1, image2, image3];

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>ROADSIDE RECOVERY YOU CAN RELY ON</h1>
          <h2>SERVING WATFORD & SOURROUNDING AREAS </h2>
          <p>Fast, friendly and affordable help for vehicles under 4 tonnes</p>
          <button className="call-now-btn" onClick={handleCallNow}>
            CALL NOW
          </button>
        </div>
      </section>

      <section className="about-section">
        <div className="section-heading">
          <h2>About</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Prompt Recovery Ltd is a locally trusted roadside recovery company
              based in Watford. With experience and a commitment to fast,
              reliable service, we're the first call you make when you're stuck.
            </p>
            <Link to="/about" className="learn-more-btn">
              Learn more about us
            </Link>
          </div>
        </div>
      </section>
      <section className="team-slider-section">
        <div className="section-heading">
          <h2>Our Team</h2>
        </div>
        <div className="team-slider-content">
          <ImageSlider images={teamImages} />
        </div>
      </section>

      <section className="services-section">
        <div className="section-heading">
          <h2>Services</h2>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">✓</div>
            <h3>Fast response times</h3>
            <p>
              We pride ourselves on quick arrivals to get you back on the road
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">✓</div>
            <h3>Affordable pricing</h3>
            <p>Fair and transparent pricing with no hidden fees</p>
          </div>
          <div className="service-card">
            <div className="service-icon">✓</div>
            <h3>Local Watford business</h3>
            <p>Supporting our local community with trusted service</p>
          </div>
        </div>
        <Link to="/services" className="view-all-btn">
          View all services
        </Link>
      </section>

      <section className="testimonials-section">
        <div className="section-heading">
          <h2>What our clients say</h2>
        </div>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="rating">★★★★★</div>
            <p className="testimonial-text">
              "Excellent service! They arrived within 20 minutes when my car
              broke down on the highway. Highly recommend!"
            </p>
            <p className="client-name">- Maria D.</p>
          </div>
          <div className="testimonial-card">
            <div className="rating">★★★★☆</div>
            <p className="testimonial-text">
              "Professional and friendly. Quick to respond and got me back on
              the road in no time."
            </p>
            <p className="client-name">- Alex T.</p>
          </div>
        </div>
        <Link to="/reviews" className="read-more-btn">
          Read more reviews
        </Link>
      </section>

      <section className="why-choose-section">
        <div className="section-heading">
          <h2>Why Choose Us</h2>
        </div>
        <div className="features-list">
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <p>Fast Response Times</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <p>Affordable Pricing</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <p>Local Watford Business</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <p>Friendly & Professional</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <p>Fully Insured</p>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="section-heading">
          <h2>Find Us</h2>
        </div>
        <div className="custom-google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2473.8808874690703!2d-0.3993128247120907!3d51.68032329805768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766aa72b074801%3A0xe657911851b4dd51!2s18%20Leggatts%20Wood%20Ave%2C%20Watford%20WD24%206RR%2C%20Regatul%20Unit!5e0!3m2!1sro!2sro!4v1745574085016!5m2!1sro!2sro"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Need Roadside Assistance?</h2>
          <p>We're available 24/7 for emergency roadside recovery</p>
          <button className="cta-call-btn" onClick={handleCallNow}>
            CALL NOW
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
