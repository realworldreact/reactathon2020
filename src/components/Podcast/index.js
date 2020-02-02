import React from 'react'
import PodcastBanner from './Banner'
import PodcastSection from './Section'
import headerData from '../../assets/data/podcast/header.json'
import './index.css'

const Podcast = ({ header, description }) => (
  <section className='section-podcast'>
    <PodcastBanner title={header} description={description} />
    <section className='section-content section-podcast-content'>
      <PodcastSection />
    </section>
  </section>
)

Podcast.defaultProps = {
  header: headerData.title,
  description: headerData.description
}

export default Podcast
