import React from 'react'
import WorkshopSpeaker from './WorkshopSpeaker'
import WorkshopDetails from './WorkshopDetails'
import './index.css'

const WorkshopItem = ({
  name, company, title,
  workshopTitle, time, date, length,
  level, headline, paragraphOne,
  bulletsOne, paragraphTwo, bulletsTwo,
  paragraphThree, bio, photo
}) => (
  <div className='workshops-grid-item-wrap'>
    <div className='workshops-grid-item'>
      <WorkshopSpeaker
        name={name}
        company={company}
        title={title}
        bio={bio}
        photo={photo}
      />
      <WorkshopDetails
        title={workshopTitle}
        time={time}
        date={date}
        length={length}
        level={level}
        headline={headline}
        paragraphOne={paragraphOne}
        bulletsOne={bulletsOne}
        paragraphTwo={paragraphTwo}
        bulletsTwo={bulletsTwo}
        paragraphThree={paragraphThree}
      />
    </div>
  </div>
)

export default WorkshopItem
