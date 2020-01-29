import React from 'react'
import Banner from '../../Banner'
import SpeakerProfileBannerContent from './Content'
import './index.css'

const SpeakerProfileBanner = ({ speaker }) => (
  <Banner
    className='banner-content-page speaker-profile-banner'
    content={speaker && <SpeakerProfileBannerContent title={speaker.name} description={speaker.headerBio || speaker.bio} />}
  />
)

export default SpeakerProfileBanner
