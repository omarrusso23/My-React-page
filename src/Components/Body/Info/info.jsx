import React, { useState, useEffect } from 'react';
import styles from './Info.module.css';
import imagen from '../../../assets/Foto CV.jpeg';
import Reveal from '../../Utils/reveal';

const Info = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.bodyInfo}>
      <div
        className={`${styles.introContainer} ${
          isSmallScreen ? styles.fullWidth : ''
        }`}
      >
        <div
          className={`${styles.bodyIntro} ${
            isSmallScreen ? styles.fullWidth : ''
          }`}
        >
          <Reveal>
            <div className={styles.infoTitle}>
              <b>
                Hi, I'm Omar<span className={styles.highlight}>.</span>
              </b>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.infoSubtitle}>
              I'm a <b className={styles.highlight}>front-end developer</b>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.infoText}>
              Driven by a relentless curiosity for technology, I thrive on
              bringing ideas to life in the digital realm. I've been working
              with React for 2 years, yet I keep discovering new things about it
              every day —just like how I keep discovering new things about my
              drawing skills (spoiler: they're still not great!).
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.infoText}>
              <p className={styles.highlight}>
                Let’s build something awesome together!
              </p>
            </div>
          </Reveal>
          <a href="mailto:omar.russo23@gmail.com" className={styles.contactButtonInfo}>
            Contact me
          </a>
        </div>
        {!isSmallScreen && (
          <img
            className={styles.bodyImg}
            src={imagen}
            alt="Omar Russo Castillo"
          />
        )}
      </div>
    </div>
  );
};

export default Info;
