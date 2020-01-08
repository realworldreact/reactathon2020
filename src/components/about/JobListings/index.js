import React from 'react'
import styles from './index.module.css'

const JobListings = (props) => (
  <section className={styles.jobListings} style={{ height: 300}}>
    <h1 className={styles.jobListingsHeaderText}>Job Listings</h1>
    <p className={styles.description}>
    There are many open positions from our wonderful sponsors. Apply online or meet the team at the conference and/or the hiring mixer.
    </p>
    
  </section>
)

export default JobListings
