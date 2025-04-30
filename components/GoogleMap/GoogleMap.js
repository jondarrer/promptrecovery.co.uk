import React from "react";
import "./GoogleMap.css";

function GoogleMap() {
  return (
    <div className="google-map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2473.8808874690703!2d-0.3993128247120907!3d51.68032329805768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766aa72b074801%3A0xe657911851b4dd51!2s18%20Leggatts%20Wood%20Ave%2C%20Watford%20WD24%206RR%2C%20Regatul%20Unit!5e0!3m2!1sro!2sro!4v1745574085016!5m2!1sro!2sro"
        className="google-map"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Our Location"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
