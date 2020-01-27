import React from 'react'
import Banner from '../../Banner'
import SpeakerBannerContent from './Content'
import './index.css'

const SpeakerBanner = ({ title, description }) => (
  <Banner
    className='banner-content-page speakers-banner'
    content={<SpeakerBannerContent title={title} description={description} />}
  />
)

export default SpeakerBanner
