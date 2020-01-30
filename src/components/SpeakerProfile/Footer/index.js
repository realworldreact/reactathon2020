import React from 'react'
import Link from '../../Link'
import { getSpeakerId, getSpeakerProfileUrl } from '../../../utils/speaker'
import './index.css'

const SpeakerProfileFooter = ({ speaker, previous, next }) => (
  <div className='speaker-profile-footer'>
    <div>
      <Link
        href={getSpeakerProfileUrl(previous.name)}
        text={(
          <div>
            <img className='speaker-profile-footer-img' src={previous.photo} alt={previous.name} />
            {previous.name}
          </div>
        )}
        isExternal={false}
      />
    </div>
    <div>
      See all
    </div>
    <div>
      <Link
        href={getSpeakerProfileUrl(next.name)}
        text={(
          <div>
            <img className='speaker-profile-footer-img' src={next.photo} alt={next.name} />
            {next.name}
          </div>
        )}
        isExternal={false}
      />
    </div>
  </div>
)

export default SpeakerProfileFooter
