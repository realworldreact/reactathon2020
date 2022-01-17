import React, { useState } from 'react'
import Divider from '../../../../Divider'
import CaretUpIcon from '../../../../../assets/images/schedule/show-bio-carrot.svg'
import './index.css'

const DayScheduleSpeaker = ({ speaker, company, talkTitle, talkDescription, photo, speakerBio, expandBio }) => {
  const [isBioExpanded, toggleBio] = useState(false)
  return (
    <div className='schedule-day-schedule-item-details-speaker-grid'>
      <div className='schedule-day-schedule-item-details-speaker-img-col-wrap'>
        <img className='schedule-day-schedule-item-details-speaker-img' src={photo} alt={speaker} />
      </div>
      <div className='schedule-day-schedule-item-details-speaker-details'>
        <h2 className='speaker-name'>
          {speaker}
        </h2>
        <span className='speaker-company'>
          {company}
        </span>
        <br />
        <span
          className={`schedule-day-schedule-item-details-speaker-grid-bio schedule-day-schedule-item-details-speaker-grid-bio-${isBioExpanded ? 'show' : 'hide'}`}
        >
          {speakerBio}
        </span>
        <button
          className='schedule-day-schedule-item-details-speaker-bio-button'
          onClick={() => toggleBio(!isBioExpanded)}
        >
          {isBioExpanded ? 'Hide' : 'Show'} Bio <img src={CaretUpIcon} alt='caret-up' />
        </button>
        <br />
      </div>
    </div>
  )
}

const DayScheduleItem = ({ time, speaker, company, talkTitle, talkDescription, photo, speakerBio, expandBio }) => {
  return (
    <div className='schedule-day-schedule-item'>
      <div className='schedule-day-schedule-item-time'>
        {time}
      </div>
      <div className='schedule-day-schedule-item-details'>
          <div className='schedule-day-schedule-item-details-title'>
            {talkTitle}
          </div>
          {speaker && (
            <DayScheduleSpeaker
              speaker={speaker}
              company={company}
              talkTitle={talkTitle}
              talkDescription={talkDescription}
              photo={photo}
              speakerBio={speakerBio}
              expandBio={expandBio}
            />
          )}
          <div className='schedule-day-schedule-item-details-description'>
            {talkDescription}
          </div>
      </div>
    </div>
  )
}

const DaySchedule = ({ schedule }) => (
  <div className='schedule-day-schedule'>
    <h1 className="subpage-section-header">Full schedule coming soon</h1>
    <Divider className='section-divider' />
    {/* {schedule.map((scheduleItem, idx) => (
      <div>
        <DayScheduleItem
          key={idx}
          time={scheduleItem.time}
          speaker={scheduleItem.speaker}
          company={scheduleItem.company}
          talkTitle={scheduleItem.talkTitle}
          talkDescription={scheduleItem.talkDescription}
          photo={scheduleItem.photo}
          speakerBio={scheduleItem.speakerBio}
          expandBio={scheduleItem.showBioExpands}
        />
        <Divider className='section-divider' />
      </div>
    ))} */}
  </div>
)

export default DaySchedule
