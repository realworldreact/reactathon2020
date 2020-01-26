import React from 'react'
import Link from '../Link'
import './index.css'

const ContentNavMenuItem = ({ href = '#', text, wrapperClassName = '', linkClassName = '', isLinkExternal = false }) => (
  <div className={`content-nav-menu-item ${wrapperClassName}`}>
    <Link
      href={href}
      text={text}
      className={linkClassName}
    />
  </div>

)

const ContentNavMenu = ({ items, className = '', showDivider = true }) => (
  <div className={`content-nav-menu ${className}`}>
    {items.map((item, idx) => (
      <ContentNavMenuItem
        href={item.href}
        wrapperClassName={item.className}
        text={item.text}
      />
    ))}
    {showDivider && (
      <NavDivider />
    )}
  </div>
)


const NavDivider = ({ className = '' }) => (
  <hr className={`section-divider content-nav-divider ${className}`} />
)

export default ContentNavMenu
