import React from 'react'
import Link from '../Link'
import './index.css'

const ContentNavMenuItem = ({ href = '#', text, isActive, activeLinkClassName = '', wrapperClassName = '',  wrapperActiveLinkClassName = '', linkClassName = '', isLinkExternal = false }) => (
  <div className={`content-nav-menu-item ${wrapperClassName} ${isActive ? wrapperActiveLinkClassName : ''}`}>
    <Link
      href={href}
      text={text}
      isActive={isActive}
      activeClassName={activeLinkClassName}
      className={linkClassName}
    />
  </div>

)

const ContentNavMenu = ({ items, className = '', showDivider = true, dividerClassName = '' }) => (
  <div className={`content-nav-menu ${className}`}>
    {items.map((item, idx) => (
      <ContentNavMenuItem
        key={idx}
        href={item.href}
        wrapperClassName={item.className}
        wrapperActiveLinkClassName={item.activeLinkClassName}
        text={item.text}
        isActive={item.isActiveHandler ? item.isActiveHandler() : (item.isActive || false)}
      />
    ))}
    {showDivider && (
      <NavDivider className={dividerClassName} />
    )}
  </div>
)


const NavDivider = ({ className = '' }) => (
  <hr className={`section-divider content-nav-divider ${className}`} />
)

export default ContentNavMenu
