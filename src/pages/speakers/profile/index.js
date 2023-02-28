import React from 'react'
import SpeakerProfile from '../../../components/SpeakerProfile'

import { Router } from '@reach/router'

const Profile = (/* { speakerId } */) => {
  return (
    <Router>
      <SpeakerProfile path="speakers/profile/:name" />
    </Router>
  )
}

export default Profile
