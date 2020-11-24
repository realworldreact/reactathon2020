import React from 'react'
import Divider from '../../../Divider'
import LineHeader from '../../../LineHeader'
import DayTimeline from './Timeline'
import DaySchedule from './Schedule'
import DAY_ONE_DATA from '../../../../assets/data/schedule/day-one-schedule.json'
import DAY_TWO_DATA from '../../../../assets/data/schedule/day-two-schedule.json'
import DAY_THREE_DATA from '../../../../assets/data/schedule/day-three-schedule.json'
import IMG_MAP from './image-map'
import './index.css'

const DayHeader = ({ text }) => (
  <LineHeader text={text} className='schedule-day-header' />
)

const Day = ({ date, header, timeline, schedule }) => (
  <section id='day' className='schedule-day-section'>
    <DayHeader text={header} />
    <DayTimeline timeline={timeline} />
    <Divider className='section-divider' />
    <DaySchedule schedule={schedule} />
  </section>
)

const getData = (id) => {
  const transform = (data) => {
    const head = data[0] // page
    const tail = data[1] // schedule
    return {
      date: head.date,
      header: head.subHeader,
      timeline: head.timeline,
      schedule: tail.schedule.map(scheduleItem => ({
        ...scheduleItem,
        photo: scheduleItem.photo != null
          ? IMG_MAP[scheduleItem.speaker.toLowerCase().split(' ').join('-')]
          : scheduleItem.photo
      }))
    }
  }
  switch (id) {
    default:
    case 'day-1':
    case 'day1':
      return transform(DAY_ONE_DATA)
    case 'day-2':
    case 'day2':
      return transform(DAY_TWO_DATA)
    case 'day-3':
    case 'day3':
      return transform(DAY_THREE_DATA)
  }
}

const DayWrapper = ({ id }) => (
  <Day {...getData(id) } />
)

export default DayWrapper
