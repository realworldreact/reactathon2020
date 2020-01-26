import React from 'react'

const ExternalLink = ({ text, href, className, target = '_self' }) => (
  <a target={target} href={href} className={className}>
    {text}
  </a>
)

export default ExternalLink
