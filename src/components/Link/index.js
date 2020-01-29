import React from 'react'
import InternalLink from './internal-link'
import ExternalLink from './external-link'

const Link = ({ isActive = false, text, href, className, activeClassName = '', isExternal = false, target = '_self' }) => {
  return isExternal
    ? <ExternalLink isActive={isActive} text={text} href={href} className={className} activeClassName={activeClassName} target={target} />
    : <InternalLink isActive={isActive} text={text} href={href} className={className} activeClassName={activeClassName} />
}

export default Link
