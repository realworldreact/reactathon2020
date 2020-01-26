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
  </div>
)

export default ViewAllSpeakers
