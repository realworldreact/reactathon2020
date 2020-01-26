import React from 'react'
import InternalLink from './internal-link'
import ExternalLink from './external-link'

const Link = ({ text, href, className, isExternal = false }) => {
  return isExternal
    ? <ExternalLink text={text} href={href} className={className} />
    : <InternalLink text={text} href={href} className={className} />
}

export default Link
