import React from 'react'
import LayoutWrapper from '../../../layouts/layout-wrapper'
import { Router } from '@reach/router'
import SpeakerProfileComponent from '../../../components/SpeakerProfile'

const SpeakerProfile = (props) => {
  console.log('SpeakerProfileMain', props)
  const speakerId = props['*']
  return (
    <LayoutWrapper>
      <SpeakerProfileComponent id={speakerId} path={'/speaker/profile/:speakerId'} />
    </LayoutWrapper>
  )
}

export default SpeakerProfile
