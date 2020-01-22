import React from 'react'
import './index.css'

const SubPageSectionHeader = ({ text, className = '' }) => (
  <h2 className={`subpage-section-header ${className}`}>
    {text}
  </h2>
)

export default SubPageSectionHeader
