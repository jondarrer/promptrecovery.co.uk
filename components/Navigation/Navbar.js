'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/images/logo.png';
import styles from './navbar.module.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const phoneNumber = '07799525650';

  useEffect(() => {
    const handleScroll = () => {
      const shouldShrink = window.scrollY > 50;

      if (shouldShrink !== isShrunk) {
        setIsShrunk(shouldShrink);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isShrunk]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className={[styles['navbar'], isShrunk ? styles['shrink'] : ''].join(' ')}>
        <div className={styles['logo']}>
          <Link href="/">
            <Image src={logo} alt="Logo" className={styles['logo-image']} />
          </Link>
        </div>

        <div className={styles['desktop-menu']}>
          <Link className={styles['home-link']} href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link href="/faqs" onClick={closeMenu}>
            FAQ's
          </Link>
          <Link href="/reviews" onClick={closeMenu}>
            Reviews
          </Link>
          <Link href="/blog" onClick={closeMenu}>
            Blog
          </Link>
        </div>

        <div className={styles['call-button']}>
          <a href={`tel:${phoneNumber}`}>CALL NOW</a>
        </div>

        <div
          className={[styles['burger-button'], isMenuOpen ? styles['active'] : ''].join(' ')}
          onClick={toggleMenu}
          ref={burgerRef}
        >
          <div className={styles['burger-line']}></div>
          <div className={styles['burger-line']}></div>
          <div className={styles['burger-line']}></div>
        </div>
      </div>

      <div
        className={[styles['mobile-menu'], isMenuOpen ? styles['show'] : ''].join(' ')}
        style={{ top: isShrunk ? '80px' : '120px' }}
        ref={menuRef}
      >
        <Link className={styles['home-link']} href="/" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/about" onClick={closeMenu}>
          About
        </Link>
        <Link href="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link href="/faqs" onClick={closeMenu}>
          FAQ's
        </Link>
        <Link href="/reviews" onClick={closeMenu}>
          Reviews
        </Link>
        <Link href="/blog" onClick={closeMenu}>
          Blog
        </Link>
        <a href={`tel:${phoneNumber}`} className={styles['mobile-call']}>
          CALL NOW
        </a>
      </div>
    </>
  );
}

export default Navbar;
