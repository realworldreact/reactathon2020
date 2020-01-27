import React from 'react'

const ExternalLink = ({ text, href, className, activeClassName = 'ext-link-is-active', isActive = false, target = '_self' }) => (
  <a target={target} href={href} className={`${className} ${isActive ? activeClassName : ''}`}>
    {text}
  </a>
)

export default ExternalLink
