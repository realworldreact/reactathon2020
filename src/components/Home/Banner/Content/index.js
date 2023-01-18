import React from 'react'
// import Link from '../../../Link'
// import { BUY_TICKETS_URI } from '../../../../constants'
import HeroBannerLogo from '../../../../assets/images/home/header/serverless-in-the-park-logo.svg'
import PresentingSponsorWhiteLogo from '../../../../assets/images/home/header/vercel-and-rwr-white-logos.svg'
import ReactathonLogo from '../../../../assets/images/left-nav/reactathon-nav-logo.svg'
import './index.css'

const HomeBannerContent = () => (
  <div className="home-banner-content">
    <div className="home-banner-logo home-banner-logo_mobile">
      <img src={ReactathonLogo} alt="Hero banner logo" />
    </div>
    <p>with</p>
    <div className="home-banner-logo">
      <img src={HeroBannerLogo} alt="Hero banner logo" />
    </div>
    <div className="home-banner-date">
      <p>
        <strong>San Francisco</strong>
      </p>
      <p>
        <strong>May 2 - 4, 2023</strong>
      </p>
    </div>
    {/* <div className="home-banner-cta">
      <Link
        isExternal={true}
        href={BUY_TICKETS_URI}
        className="home-banner-cta-btn"
        text={'Buy Tickets'}
      />
    </div> */}
    <div>
      <p>Presented by</p>
      <img
        src={PresentingSponsorWhiteLogo}
        className="presenting-sponsor-logo"
        alt="Vercel logo"
      />
    </div>
  </div>
)

export default HomeBannerContent
