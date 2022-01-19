import React from 'react'
import LineButton from '../../../LineButton'
import './index.css'

const ViewAllSection1 = ({ href = '#speakers-section' }) => (
  <div className='section1-grid-cta-parent'>
      <LineButton
        className='section1-grid-cta-btn'
        text='See more details about the conference program'
        href={href}
      />
  </div>
)

export default ViewAllSection1
