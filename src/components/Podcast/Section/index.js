import React from 'react'
import sectionData from '../../../assets/data/podcast/content.json'
import './index.css'

const PodcastSection = ({ title, subtext }) => (
  <div className='podcast-section-content'>
    <h2 className='podcast-section-content-title'>
      {title}
    </h2>
    <div className='podcast-section-content-subtext'>
      {subtext}
    </div>
  </div>
)

PodcastSection.defaultProps = {
  title: sectionData.sectionTitle,
  subtext: sectionData.sectionSubtext
}

export default PodcastSection
