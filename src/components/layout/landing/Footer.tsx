'use client';

import React from 'react';
import classes from './Footer.module.css';

import { Typography } from '@/components/ui/typography/typography';
import { Group } from '@/components/ui/group/group';

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export function Footer() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    console.log('Scrolling to section:', id, element);

    if (element) {
      const yOffset = -80; // اگر navbar داری تنظیم کن
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>

        {/* Column 1 */}
        <div className={classes.column}>
          <div className={classes.logo}>NOVARA</div>

          <Typography size="sm" className={classes.description}>
            We turn your ideas into elegant digital solutions
            with precision and care.
          </Typography>

          <Group mt="md" gap="sm">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </Group>
        </div>

        {/* Column 2 */}
        <div className={classes.column}>
          <Typography className={classes.title}>Navigation</Typography>

          

            <ul className={classes.links}>

  <li>
    <a href="#HomeSection">Home</a>
  </li>

  <li>
    <a href="#ServiceSection">Service</a>
  </li>

  <li>
    <a href="#AboutSection">About us</a>
  </li>

  <li>
    <a href="#PortfolioSection">Portfolio</a>
  </li>

  <li>
    <a href="#ContactSection">Contact</a>
  </li>



          </ul>
        </div>

        {/* Column 3 */}
        <div className={classes.column}>
          <Typography className={classes.title}>Contact</Typography>

          <ul className={classes.contactList}>
            <li>novara.engineering25@gmail.com</li>
            <li>moazeniroya1373@gmail.com</li>
            <li>n.vaheb.nv@gmail.com</li>
            <li>Germany</li>
          </ul>
        </div>

      </div>

      <div className={classes.bottom}>
        ©️ {new Date().getFullYear()} novara. All rights reserved.
      </div>
    </footer>
  );
}