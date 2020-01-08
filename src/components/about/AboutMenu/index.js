import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'

const AboutMenu = (props) => (
  <section className={styles.menu} style={{ height: 45}}>
    <div className={styles.menuContent}>
    <ul>
        <li><Link className={props.page === 'topic-tables' ? styles.selectedListItem : styles.listItem} to="/about/topic-tables">Topic Tables</Link></li>
        <li><Link className={props.page === 'ask-the-react-team' ? styles.selectedListItem : styles.listItem} to="/about/ask-the-react-team">Ask React Team</Link></li>
        <li><Link className={props.page === 'unconference' ? styles.selectedListItem : styles.listItem} to="/about/unconference">Unconference</Link></li>
        <li><Link className={props.page === 'venue-and-hotel' ? styles.selectedListItem : styles.listItem} to="/about/venue-and-hotel">Venue & Hotel</Link></li>
        <li><Link className={props.page === 'jobs' ? styles.selectedListItem : styles.listItem} to="/about/jobs">Jobs</Link></li>
        <li><Link className={props.page === 'city-guide' ? styles.selectedListItem : styles.listItem} to="/about/city-guide">City Guide</Link></li>
        <li><Link className={props.page === 'diversity-and-safety' ? styles.selectedListItem : styles.listItem} to="/about/diversity-and-safety">Diversity & Safety</Link></li>
    </ul>
    </div>
  </section>
)

export default AboutMenu
