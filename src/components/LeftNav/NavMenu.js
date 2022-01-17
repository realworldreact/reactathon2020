import React from 'react'
import Link from '../Link'
import NavMenuItem from './NavMenuItem'
import { isActive } from '../../utils/nav'

const CTANav = ({ text, href }) => (
  <ul className='utility-nav'>
    <li>
      <Link
        isExternal={true}
        href={href}
        text={(<span>{text}</span>)}
      />
    </li>
  </ul>
)

const AdditionalFooterLinks = ({ items }) => (
  <ul className='nav-footer-list nav-footer-list_additional'>
    {items.map((item, idx) => (
      <li key={idx}>
        <Link
          target={item.target}
          isExternal={item.isExternal || false}
          href={item.href}
          text={item.text}
        />
      </li>
    ))}
  </ul>
)

const NavFooter = ({ header, items, itemsAdditional }) => (
  <div className='nav-footer'>
    <AdditionalFooterLinks items={itemsAdditional} />
    <div className='nav-footer-header'>
      {header}
    </div>
    <ul className='nav-footer-list nav-footer-list_row'>
      {items.map((item, idx) => (
        <li key={idx}>
          <Link
            target={item.target}
            isExternal={item.isExternal || false}
            href={item.href}
            text={item.text}
          />
        </li>
      ))}
    </ul>
  </div>
)

const NavMenu = ({ className = '', isMenuExpanded = false, menuItems, ctaNav, navFooter }) => (
  <nav id='navigation-drawer' className={`navigation-drawer ${className} ${isMenuExpanded ? 'navigation-drawer-native-open' : 'navigation-drawer-native-closed'}`}>
			<div className='navigation-drawer__inner'>
				<ul className='main-nav'>
          {menuItems.map((item, idx) => (
            <NavMenuItem
              key={idx}
              idx={idx}
              item={item}
              isActive={isActive(item.page)}
            />
          ))}
        </ul>
        <CTANav text={ctaNav.text} href={ctaNav.href} />
        <NavFooter {...navFooter} />
      </div>
  </nav>
)

export default NavMenu
