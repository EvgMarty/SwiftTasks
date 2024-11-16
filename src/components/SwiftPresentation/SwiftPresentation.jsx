import React, { useState, useEffect } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { ROUTES } from '../../routes/routes';
import ButtonLink from '../../UI/ButtonLink/ButtonLink';
import styles from './SwiftPresentation.module.scss';

const SwiftPresentation = () => {
  const slogans = ['Achieve goals ', 'Task Creation', 'Project Tracking'];

  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.swift}>
      <h1 className={styles.title}>Swift Simplifies</h1>
      <div className={styles.sloganContainer}>
        <h2 className={styles.slogan}>{slogans[currentSloganIndex]}</h2>
      </div>
      <p className={styles.text}>
        Free tool for managing
        <span className={styles.text__gray}> plans and projects.</span>
      </p>
      <ButtonLink link={ROUTES.SIGN_UP} variant="gradient">
        Get Started <FiArrowUpRight className={styles.icon} />
      </ButtonLink>
    </section>
  );
};

export default SwiftPresentation;
