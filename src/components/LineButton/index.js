import React from 'react'
import Link from '../Link'
import './index.css'

const LineButton = ({ className, text, href = '#', isExternalLink = false, target = '_self' }) => (
  <Link
    target={target}
    isExternal={isExternalLink}
    href={href}
    text={text}
    className={`reactathon-line-btn ${className}`}
  />
)

export default LineButton
