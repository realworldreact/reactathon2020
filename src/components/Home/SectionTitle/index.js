import React from 'react'
import './index.css'

const SectionTitleDot = () => (
  <span className='home-section-title-dot'>.</span>
)

const SectionTitle = ({ text, className }) => (
  <div className={`home-section-title ${className}`}>
    {text}{<SectionTitleDot />}
  </div>
)

export default SectionTitle
