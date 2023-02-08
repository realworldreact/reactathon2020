import React from 'react'
import LineButton from '../../LineButton'
import './index.css'

const ViewAllSpeakers = ({ href = '/speakers' }) => (
  <div className='speaker-grid-cta-parent'>
      <LineButton
        className='speaker-grid-cta-btn'
        text='View All Speakers'
        href={href}
      />
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeMC-a-Irfqs1w_kMTZTl-b8l5RfOjdCjbsaZbPkhyyYtSdfQ/viewform" target="_blank" className="cfp-link">Submit your own talk</a>
  </div>
)

export default ViewAllSpeakers
