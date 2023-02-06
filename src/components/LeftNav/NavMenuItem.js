import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link'

const NavMenuItem = ({ idx, item, isActive }) => {
  return (
    <li key={idx} className={item?.isActive || isActive ? 'is-active' : ''}>
      <Link
        href={item.page}
        isExternal={false}
        text={<span>{item.name}</span>}
      />
    </li>
  )
}

NavMenuItem.propTypes = {
  idx: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
}

export default NavMenuItem
