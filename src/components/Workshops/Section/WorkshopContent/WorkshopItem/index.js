import React from 'react'
import WorkshopSpeaker from './WorkshopSpeaker'
import WorkshopDetails from './WorkshopDetails'
import './index.css'

const WorkshopItem = ({
  name, company, title,
  workshopTitle, time, day, length,
  level, headline, paragraphOne,
  bulletsOne, paragraphTwo, bulletsTwo,
  paragraphThree, bio, photo, buyTicketsUri
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
        workshopTitle={workshopTitle}
        time={time}
        day={day}
        length={length}
        level={level}
        headline={headline}
        paragraphOne={paragraphOne}
        bulletsOne={bulletsOne}
        paragraphTwo={paragraphTwo}
        bulletsTwo={bulletsTwo}
        paragraphThree={paragraphThree}
        buyTicketsUri={buyTicketsUri}
      />
    </div>
  </div>
)

export default WorkshopItem
