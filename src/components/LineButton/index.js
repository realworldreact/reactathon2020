import React from 'react'
import Link from '../Link'
import './index.css'

const LineButton = ({ className, text, href = '#', isExternalLink = false, target }) => (
  <Link
    target={target || isExternalLink ? '_blank' : '_self'}
    isExternal={isExternalLink}
    href={href}
    text={text}
    className={`reactathon-line-btn ${className}`}
  />
)

export default LineButton
