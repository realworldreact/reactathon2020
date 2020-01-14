import React from 'react'
import HomeBannerFooter from '../Footer'
import CalIcon from '../../../../assets/icons/home/calendar-icon-home.svg'
import './index.css'

const HomeBannerContent = () => (
  <div className='home-banner-content'>
    <div className='home-banner-h1'>
      The San Francisco React Conference
    </div>
    <div className='home-banner-p'>
      Reactathon is a developer conference featuring 2 days of technical talks,
      networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.
    </div>
    <div className='home-banner-date'>
      <img src={CalIcon} alt='cal' /> &nbsp;
      March 30 - 31, 2020
    </div>
    <div className='home-banner-cta'>
      <a href='#'>
        <button className='home-banner-cta-btn'>
          Buy Tickets
        </button>
      </a>
    </div>
    <HomeBannerFooter />
  </div>
)

export default HomeBannerContent
