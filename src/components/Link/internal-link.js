import React from 'react'
import { Link } from 'gatsby'

const InternalLink = ({ text, href, className }) => (
  <Link to={href} className={className}>
    {text}
  </Link>
)

export default InternalLink
