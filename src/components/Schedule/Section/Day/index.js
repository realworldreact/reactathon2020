import React from 'react'
import LineHeader from '../../../LineHeader'
import DAY_ONE_DATA from '../../../../assets/data/schedule/day-one-schedule.json'
import DAY_TWO_DATA from '../../../../assets/data/schedule/day-two-schedule.json'
import './index.css'

const DayHeader = ({ text }) => (
  <LineHeader text={text} className='schedule-day-header' />
)

const DayTimeline = ({ timeline }) => (
  timeline.toString()
)

const DaySchedule = ({ schedule }) => (
  schedule.toString()
)

const Day = ({ date, header, timeline, schedule }) => (
  <section id='day' className='schedule-day-section'>
    <DayHeader text={header} />
    <DayTimeline timeline={timeline} />
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
      schedule: tail.schedule
    }
  }
  switch (id) {
    default:
    case 'day1':
      return transform(DAY_ONE_DATA)
    case 'day2':
      return transform(DAY_TWO_DATA)
  }
}

const DayWrapper = (id) => (
  <Day {...getData(id) } />
)

export default DayWrapper
