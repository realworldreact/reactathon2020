import React from 'react'
import './index.css'

const HeaderDot = ({ className = '' }) => (
  <span className={`header-dot ${className}`}>.</span>
)

const Header = ({
  text,
  className = '',
  showDot = false,
  dotClassName = '',
}) => (
  <div className="header-wrap">
    <div className={`header ${className}`}>
      {text}
      {showDot ? <HeaderDot className={dotClassName} /> : null}
    </div>
  </div>
)

export default Header
