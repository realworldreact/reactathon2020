import React from 'react'
import Header from '../../../Header'
import './index.css'
import HeaderDescription from '../../../HeaderDescription'

const HomeBannerContentCopy = ({ title, description }) => (
  <div className="section-content-only">
    <Header
      className="home-banner-content-header home-banner-h1"
      text={title}
      showDot={false}
    />
    <HeaderDescription
      text={description}
      className="home-banner-content-description"
    />
  </div>
)

HomeBannerContentCopy.defaultProps = {
  title: 'The San Francisco React Conference',
  description: `
  Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.
  `,
}

export default HomeBannerContentCopy
