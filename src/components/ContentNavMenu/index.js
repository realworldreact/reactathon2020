import React from 'react'
import Link from '../Link'
import Divider from '../Divider'
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
    <div className='content-nav-menu-items-wrap'>
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
    </div>
    {showDivider && (
      <Divider
        className={`content-nav-menu-divider ${dividerClassName}`}
      />
    )}
  </div>
)

export default ContentNavMenu
