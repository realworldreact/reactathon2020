import React from 'react'
import Link from '../../../Link'
import { BUY_TICKETS_URI } from '../../../../constants'
import HeroBannerLogo from '../../../../assets/images/home/header/serverless-in-the-park-logo.svg'
import './index.css'

const HomeBannerContent = () => (
  <div className="home-banner-content">
    <p>with</p>
    <div className="home-banner-logo">
      <img src={HeroBannerLogo} alt="Hero banner logo"/>
    </div>
    <div className="home-banner-date">
      <p>San Francisco Bay Area</p>
      <p>May 2 - 5, 2022</p>
    </div>
    <div className="home-banner-cta">
      <Link
        isExternal={true}
        href={BUY_TICKETS_URI}
        className="home-banner-cta-btn"
        text={'Buy Tickets'}
      />
    </div>
  </div>
)

export default HomeBannerContent
