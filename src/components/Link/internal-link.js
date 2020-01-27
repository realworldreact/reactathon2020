import React from 'react'
import { Link } from 'gatsby'

const InternalLink = ({ text, href, isActive = false, className, activeClassName = 'int-link-is-active' }) => (
  <Link to={href} className={`${className} ${isActive ? activeClassName : ''}`}>
    {text}
  </Link>
)

export default InternalLink
