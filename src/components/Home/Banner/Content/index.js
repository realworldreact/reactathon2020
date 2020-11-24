import React from 'react'
import Link from '../../../Link'
import HomeBannerFooter from '../Footer'
import LiveStreamAccessInput from '../../../LiveStreamAccessInput'
import CalIcon from '../../../../assets/icons/home/calendar-icon-home.svg'
import {BUY_TICKETS_URI} from '../../../../constants'
import './index.css'

const HomeBannerContent = () => (
  <div className="home-banner-content">
    <div className="home-banner-h1">Reactathon: Online &amp; Worldwide!</div>
    <div className="home-banner-p">
      Reactathon is a developer conference featuring 3 days of technical talks,
      networking, &amp; workshops on all things React. It's a remote event
      that's much more than a livestream -- we come together on an interactive
      conference platform called Hopin. So come and hang out with and learn from
      some of the brightest minds and best speakers in the JS/React community!
    </div>
    <div className="home-banner-date">
      <img src={CalIcon} alt="cal" /> &nbsp; December 7, 8, &amp; 9, 2020
    </div>
    <div className="home-banner-cta">
      <Link
        isExternal={true}
        href={BUY_TICKETS_URI}
        className="home-banner-cta-btn"
        text={'Buy Tickets'}
      />
      <LiveStreamAccessInput />
    </div>
    <HomeBannerFooter />
  </div>
)

export default HomeBannerContent
