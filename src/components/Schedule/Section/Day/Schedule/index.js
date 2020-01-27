import React from 'react'
import './index.css'

const DayScheduleItem = ({ time, speaker, company, talkTitle, talkDescription, photo, speakerBio, expandBio }) => {
  console.log(time, speaker, company, talkTitle, talkDescription, photo, speakerBio, expandBio)
  return (
    <div className='schedule-day-schedule-item'>
      {speaker}
      <hr className='section-divider' />
    </div>
  )
}

const DaySchedule = ({ schedule }) => (
  <div className='schedule-day-schedule'>
    {schedule.map((scheduleItem, idx) => (
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
    ))}
  </div>
)

export default DaySchedule
