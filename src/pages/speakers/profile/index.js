import React from 'react'
import LayoutWrapper from '../../../layouts/layout-wrapper'
import SpeakerProfileComponent from '../../../components/SpeakerProfile'

const SpeakerProfile = (props) => {
  const speakerId = props['*']
  return (
    <LayoutWrapper>
      <SpeakerProfileComponent id={speakerId} />
    </LayoutWrapper>
  )
}

export default SpeakerProfile
