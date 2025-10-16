import React from 'react';
import styles from './styles/About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>About Us</h1>
          <p className={styles.subtitle}>Learn more about our mission and values</p>
        </header>

        <section className={styles.content}>
          <div className={styles.textSection}>
            <h2>Our Story</h2>
            <p>
              Founded in 2020, we started as a small team with a big vision: to create 
              exceptional digital experiences that make a difference in people's lives. 
              Our journey began in a cozy home office, fueled by passion and countless 
              cups of coffee.
            </p>
            <p>
              Today, we've grown into a diverse team of designers, developers, and 
              innovators who share a common goal: building solutions that are not only 
              functional but also beautiful and user-friendly.
            </p>
          </div>

          <div className={styles.mission}>
            <h2>Our Mission</h2>
            <p>
              To empower businesses and individuals through cutting-edge technology 
              and thoughtful design. We believe that great software should be 
              accessible, intuitive, and make everyday tasks simpler.
            </p>
          </div>

          <div className={styles.team}>
            <h2>Meet Our Team</h2>
            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <h3>Sarah Johnson</h3>
                <p className={styles.role}>CEO & Founder</p>
                <p>Visionary leader with 10+ years in tech industry</p>
              </div>
              <div className={styles.teamMember}>
                <h3>Mike Chen</h3>
                <p className={styles.role}>CTO</p>
                <p>Full-stack developer and system architect</p>
              </div>
              <div className={styles.teamMember}>
                <h3>Emily Davis</h3>
                <p className={styles.role}>Lead Designer</p>
                <p>Creating beautiful and functional user interfaces</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;