import React from 'react'
import './index.css'

const SectionTitleDot = () => (
  <span className='home-section-title-dot'>.</span>
)

const SectionTitle = ({ text, className, showDot = true }) => (
  <div className={`home-section-title ${className}`}>
    {text}{showDot && <SectionTitleDot />}
  </div>
)

export default SectionTitle
