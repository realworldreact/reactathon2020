import React from 'react'
import Link from '../Link'

const NavMenuItem = ({ idx, item, isActive, className = '' }) => {
  return (
    <li key={idx} className={`className ${isActive ? 'is-active' : ''}`}>
      <Link
        href={item.page}
        isExternal={false}
        text={(<span>{item.name}</span>)}
      />
    </li>
  )
}

export default NavMenuItem
