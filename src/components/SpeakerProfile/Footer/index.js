import React from 'react'
import Link from '../../Link'
import { getSpeakerProfileUrl } from '../../../utils/speaker'
import SeeAllIcon from '../../../assets/icons/speakers/see-all-speakers-icon.svg'
import './index.css'

const SpeakerProfileFooterGridItem = ({ name, title, company, photo, align = 'left'}) => {
  const speakerPhoto = (imgClassName) => (
    <div className={`${imgClassName}`}>
      <img className='speaker-profile-footer-img' src={photo} alt={name} />
    </div>
  )
  const speakerDetails = (
    <div className='speaker-profile-footer-details'>
      <h2 className='speaker-profile-footer-details-name'>
        {name}
      </h2>
      <span className='speaker-profile-footer-details-title'>
        {title}
      </span><br />
      <span className='speaker-profile-footer-details-company'>
        {company}
      </span><br />
    </div>
  )

  let sections = align === 'left'
    ? {
        className: 'speaker-profile-footer-grid-left',
        left: speakerPhoto('speaker-profile-footer-img-left'),
        right: speakerDetails
      }
    : {
        imgClassName: 'speaker-profile-footer-img-right',
        className: 'speaker-profile-footer-grid-right',
        left: speakerDetails,
        right: speakerPhoto('speaker-profile-footer-img-right')
      }

  return (
    <Link
      href={getSpeakerProfileUrl(name)}
      text={(
        <div className={sections.className}>
          {sections.left}
          {sections.right}
        </div>
      )}
      isExternal={false}
    />
  )
}

const SpeakerProfileFooterSeeAllGridItem = () => (
  <div className='speaker-profile-footer-see-all'>
    <Link
      href={'/speakers'}
      text={(
        <div className='speaker-profile-footer-see-all-inner'>
          <div className='speaker-see-all-img-wrap'>
            <img src={SeeAllIcon} alt='see-all' />
          </div>
          <br />
          See All Speakers
        </div>
      )}
      isExternal={false}
    />
  </div>
)

const SpeakerProfileFooter = ({ speaker, previous, next }) => (
  <div className='speaker-profile-footer'>
    <SpeakerProfileFooterGridItem
      name={previous.name}
      title={previous.title}
      company={previous.company}
      photo={previous.photo}
      align={'left'}
    />
    <SpeakerProfileFooterSeeAllGridItem />
    <SpeakerProfileFooterGridItem
      name={next.name}
      title={next.title}
      company={next.company}
      photo={next.photo}
      align={'right'}
    />
  </div>
)

export default SpeakerProfileFooter
