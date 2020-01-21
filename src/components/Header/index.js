import React from 'react'
import './index.css'

const HeaderDot = ({ className = '' }) => (
  <span className={`header-dot ${className}`}>
    .
  </span>
)

const Header = ({ text, className = '', showDot = false, dotClassName = '' }) => (
  <div className='header-wrap'>
    <div className={`header ${className}`}>
      {text}
      <HeaderDot className={dotClassName} />
    </div>
  </div>
)

export default Header
