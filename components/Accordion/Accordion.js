'use client';

import React, { useState } from 'react';

import styles from './accordion.module.css';

function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles['accordion-wrapper']}>
      {data.map((item, index) => (
        <div key={index} className={styles['accordion-item']}>
          <button
            className={[styles['accordion-question'], activeIndex === index ? styles['active'] : ''].join(' ')}
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            <span className={styles['accordion-icon']}>{activeIndex === index ? '-' : '+'}</span>
          </button>
          <div className={[styles['accordion-answer'], activeIndex === index ? styles['open'] : ''].join(' ')}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
