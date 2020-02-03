import React, { useState } from 'react'
import CaretUpIcon from '../../../../../../assets/images/schedule/show-bio-carrot.svg'
import './index.css'

const Speaker = ({ id, className = '', imgSrc, imgAlt, name, title, workshopTitle, headline, company, bio }) => {
  const [isBioExpanded, toggleBio] = useState(false)
  return (
    <div key={id} className={`${className}`}>
      <div className='workshop-item-speaker-img'>
        <img className='speaker-img' src={imgSrc} alt={imgAlt} />
      </div>
      <div>
        <span className='workshop-item-speaker-name'>
          {name}
        </span>
        <br />
        <span className='workshop-item-speaker-title'>
          {title}
        </span>
        <br />
        <span className='workshop-item-speaker-company'>
          {company}
        </span>
        <br />
        <div className='workshop-item-speaker-bio-section'>
          <button
            className='workshop-item-speaker-bio-button'
            onClick={() => toggleBio(!isBioExpanded)}
          >
            {`
            ${isBioExpanded ? 'Less' : 'More'}
            About
            ${name && name.split(' ')[0]}
            `}
            <img src={CaretUpIcon} alt='caret-up' />
          </button>
          <div className={`workshop-item-speaker-bio ${isBioExpanded ? 'workshop-item-speaker-bio-show' : 'workshop-item-speaker-bio-hide'}`}>
            {bio}
          </div>
        </div>
      </div>
    </div>
  )
}

const WorkshopSpeaker = ({ name, photo, title, company, bio }) => (
  <div>
    <Speaker
      className='workshop-item-speaker'
      name={name}
      imgSrc={photo}
      imgAlt={name.split(' ').join('-')}
      company={company}
      title={title}
      bio={bio}
    />
  </div>
)

export default WorkshopSpeaker
