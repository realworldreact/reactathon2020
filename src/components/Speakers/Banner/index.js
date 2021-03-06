import React from 'react'
import Banner from '../../Banner'
import SpeakerBannerContent from './Content'
import './index.css'

const SpeakerBanner = ({ title, description }) => (
  <Banner
    className='banner-content-page speakers-banner banner-overlay'
    content={<SpeakerBannerContent title={title} description={description} />}
  />
)

SpeakerBanner.defaultProps = {}

export default SpeakerBanner
