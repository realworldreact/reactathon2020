import React from 'react'
import styles from './index.module.css'

const HiringMixer = (props) => (
  <section className={styles.hiringMixer} style={{ height: 300}}>
    <h1 className={styles.hiringMixerHeaderText}>Hiring Mixer</h1>
    <p className={styles.hiringMixerHeaderSubtext}>Friday evening, March  27</p>
    <p className={styles.description}>
    Join us and mingle with some of the SF Bay’s hottest companies and startups! Registration free for hireable developers. We even have an option for remote candidates!
    <br/>
    <br/>
    Hiring companies: contact sponsors@reactathon.com to join and connect with over 500 hireable developers!
    </p>
    <button className={styles.hiringMixerRegisterButton}>Register Free</button>
  </section>
)

export default HiringMixer
