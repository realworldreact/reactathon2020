import React from 'react'
import Link from '../../../Link'
import { ROUTES } from '../../../../constants'
import './index.css'
/*
  <a key={id} href={href} className={`footer-sitemap-link-item ${className}`}>
    {text || <span>&nbsp;</span> }
</a>
*/
const SitemapLinkItem = ({
  href = '#',
  className = '',
  text,
  id,
  isExternal,
}) => (
  <Link
    id={id}
    href={href}
    className={`footer-sitemap-link-item ${className}`}
    text={text}
    isExternal={isExternal}
  />
)

const Sitemap = ({ items }) => (
  <div className="footer-sitemap">
    {items.map((item, idx) => (
      <SitemapLinkItem
        key={idx}
        id={idx}
        href={item.href}
        text={item.text}
        isExternal={item.isExternal}
        className={item.className}
      />
    ))}
  </div>
)

Sitemap.defaultProps = {
  items: [
    {
      text: 'Schedule',
      href: ROUTES.schedule,
    },
    {
      text: 'Code of Conduct',
      href: ROUTES.conduct,
    },
    {
      text: 'Speakers',
      href: ROUTES.speakers,
    },
    {
      text: 'Diversity / Scholarship',
      href: ROUTES.diversity,
      isExternal: true,
    },
    {
      text: 'Workshops',
      href: ROUTES.workshops,
    },
    {
      text: 'Volunteers',
      href: ROUTES.volunteers,
      isExternal: true,
    },
    {
      text: 'Topic Tables',
      href: ROUTES.topicTables,
    },
    {
      text: 'Become a sponsor',
      href: ROUTES.sponsor,
      isExternal: true,
    },
    {
      text: 'Jobs',
      href: ROUTES.jobs,
    },
    {
      text: 'Convince Your Boss',
      href: ROUTES.boss,
      isExternal: true,
    },
    {
      text: 'About',
      href: ROUTES.about,
    },
  ],
}

export default Sitemap
