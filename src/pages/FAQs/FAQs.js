import React, { useState } from "react";
import { Helmet } from "react-helmet";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import "./FAQs.css";

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What areas do you cover?",
      answer:
        "We provide towing services in Watford, Bushey, Rickmansworth, Croxley Green, and nearby towns. If you’re unsure whether we cover your area, feel free to give us a call.",
    },
    {
      question: "What types of vehicles can you tow?",
      answer:
        "We specialize in towing cars, SUVs, and small vans under 4 tonnes. If your vehicle is non-operable, we can safely transport it to your chosen destination.",
    },
    {
      question: "Do you offer roadside assistance?",
      answer:
        "We focus strictly on towing non-drivable vehicles. While we don’t offer on-site repairs or breakdown assistance, we can tow your vehicle to a trusted garage or your preferred location.",
    },
    {
      question: "How quickly can you arrive?",
      answer:
        "Our average response time in the Watford area is 30–60 minutes, depending on traffic and your location.",
    },
    {
      question: "Can you tow vehicles with locked wheels or stuck handbrakes?",
      answer:
        "Yes. We use professional wheel skates to safely move vehicles with locked tyres or jammed handbrakes, even in tight or difficult spaces.",
    },
    {
      question: "What should I do if I’ve been in an accident?",
      answer:
        "If your vehicle is non-drivable, call us immediately. We’ll safely tow it from the scene to your home, a body shop, or your insurer’s preferred garage.",
    },
    {
      question: "Do you operate on weekends?",
      answer:
        "Our standard hours are Monday to Friday, 06:00–17:00. However, you can still call us on weekends to check availability we’ll help if we can.",
    },
  ];

  const phoneNumber = "07799525650";

  return (
    <div className="faqs-page">
      <Helmet>
        <title>Frequently Asked Questions - Prompt Recovery</title>
        <meta
          name="description"
          content="Find answers to common questions about our vehicle recovery services in Watford and surrounding areas."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                ${faqData
                  .map(
                    (faq) => `{
                  "@type": "Question",
                  "name": "${faq.question}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${faq.answer}"
                  }
                }`
                  )
                  .join(",")}
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="faqs-container">
        <header className="faqs-header">
          <h1>Frequently Asked Questions</h1>
          <p className="faqs-intro">
            Got a question before booking? Here are answers to the most common
            things customers ask about our vehicle recovery services in Watford
            and the surrounding area.
          </p>
        </header>

        <div className="faqs-accordion">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              <div
                className={`faq-answer ${activeIndex === index ? "open" : ""}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faqs-cta-buttons">
          <a
            href={`tel:${phoneNumber}`}
            className="faqs-cta-button faqs-call-button"
          >
            Call Now
          </a>
        </div>

        <div className="faqs-map-section">
          <h2>Find Us</h2>
          <p>We operate throughout Watford and surrounding areas.</p>
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}

export default FAQs;
