import React from 'react'
import LayoutWrapper from '../../../layouts/layout-wrapper'
import SpeakerProfileComponent from '../../../components/SpeakerProfile'

const SpeakerProfile = ({ speakerId }) => (
  <LayoutWrapper>
    <SpeakerProfileComponent id={speakerId} />
  </LayoutWrapper>
)

export default SpeakerProfile
