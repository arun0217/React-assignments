import React from 'react';
import styles from './styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Our Website</h1>
          <p className={styles.heroSubtitle}>
            Discover amazing features and services tailored for your needs
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Get Started</button>
            <button className={styles.secondaryBtn}>Learn More</button>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <h2>Why Choose Us?</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Fast & Reliable</h3>
              <p>Lightning-fast performance with 99.9% uptime guarantee</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Secure</h3>
              <p>Enterprise-grade security to protect your data</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Easy to Use</h3>
              <p>Intuitive interface that anyone can master quickly</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;