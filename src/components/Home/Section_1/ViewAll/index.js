import React from 'react'
import LineButton from '../../../LineButton'
import './index.css'

const ViewAllSection1 = ({ href = '/schedule' }) => (
  <div className='section1-grid-cta-parent'>
      <LineButton
        className='section1-grid-cta-btn'
        text='See the full schedule'
        href={href}
      />
  </div>
)

export default ViewAllSection1
