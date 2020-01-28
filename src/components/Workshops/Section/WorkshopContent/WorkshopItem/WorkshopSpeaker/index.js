import React from 'react'
import './index.css'

const Speaker = ({ id, className = '', imgSrc, imgAlt, name, headline, company, bio }) => (
  <div key={id} className={`${className}`}>
    <div className='workshop-item-speaker-img'>
      <img className='speaker-img' src={imgSrc} alt={imgAlt} />
    </div>
    <div>
      <span className='workshop-item-speaker-name'>
        {name}
      </span>
      <br />
      <br />
      <span className='workshop-item-speaker-title'>
        {headline}
      </span>
      <br />
      <span className='workshop-item-speaker-company'>
        {company}
      </span>
      <br />
      <div className='workshop-item-speaker-bio-section'>
        <button className='workshop-item-speaker-bio-button'>
          More about {name && name.split(' ')[0]}
        </button>
        <div className='workshop-item-speaker-bio'>
          {bio}
        </div>
      </div>
    </div>
  </div>
)

const WorkshopSpeaker = ({ name, photo, title, company, bio }) => (
  <div className='workshop-item-speaker'>
    <Speaker
      name={name}
      imgSrc={photo}
      imgAlt={name.split(' ').join('-')}
      company={company}
      headline={title}
      bio={bio}
    />
  </div>
)

export default WorkshopSpeaker
