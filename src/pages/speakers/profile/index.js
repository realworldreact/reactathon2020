import React from 'react'
import LayoutWrapper from '../../../layouts/layout-wrapper'
import SpeakerProfileComponent from '../../../components/SpeakerProfile'

import { Router } from '@reach/router'

const SpeakerProfile = (/* { speakerId } */) => {
  return (
    <LayoutWrapper>
      <Router>
        <SpeakerProfileComponent path="/speakers/profile/:name" />
      </Router>
    </LayoutWrapper>
  )
}

export default SpeakerProfile
