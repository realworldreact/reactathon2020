import React from 'react'
import Link from '../../Link'
import { getSpeakerProfileUrl } from '../../../utils/speaker'
import './index.css'

const Speaker = ({
  id,
  isWithAnimeImg,
  className = '',
  imgSrc,
  imgAlt,
  name,
  headline,
  company,
  twitterUrl = '#',
  githubUrl = '#',
}) => (
  <div key={id} className={`speaker ${className}`}>
    <div className="speaker-img-wrap">
      <Link
        href={getSpeakerProfileUrl(name)}
        text={
          <span className="speaker-img-container">
            <img className="speaker-img" src={imgSrc} alt={imgAlt} />
          </span>
        }
        isExternal={false}
      />
    </div>
    <div className="speaker-description">
      <Link
        href={getSpeakerProfileUrl(name)}
        text={<h2 className="speaker-name">{name}</h2>}
        isExternal={false}
      />
      <span className="speaker-headline">{headline}</span>
      <br />
      <span className="speaker-company">{company}</span>
      <br />
    </div>
  </div>
)

export default Speaker
