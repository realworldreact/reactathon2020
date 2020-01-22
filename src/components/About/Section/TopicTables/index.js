import React from 'react'
import SubPageSectionHeader from '../../../SubPageSectionHeader'
import DateIcon from '../../../../assets/icons/about/calendar-icon-about.svg'
import TimeIcon from '../../../../assets/icons/about/clock-icon-about.svg'
import Topics from './Topics'
import './index.css'


const TopicTablesDateTime = ({ date, time }) => (
  <div className='topic-tables-datetime'>
    <img alt='date' src={DateIcon} />
    {date}
    &nbsp;&nbsp;
    <img alt='time' src={TimeIcon} />
    {time}
  </div>
)

const TopicTableList = ({ items = [] }) => (
  <div>
    <ul className='topic-tables-list'>
      {items.map((item, idx) => (
        <li key={idx}>
          {item}
        </li>
      ))}
    </ul>
  </div>
)

const TopicTables = ({ header, description, topicHeader, listItems, date, time }) => (
  <section className='topic-tables'>
    <SubPageSectionHeader text={header} className='topic-tables-header' />
    <p className='topic-tables-subtext'>
      {description}
    </p>
    <TopicTablesDateTime date={date} time={time} />
    <TopicTableList items={listItems} />
    <Topics />
  </section>
)

TopicTables.defaultProps = {
  header: 'Topic Tables',
  description: `
    A gathering place where engineers test & expand their knowledge of a 
    subject through discussion, moderated by experts.
  `,
  listItems: [
    'Easily identify the subjects you care about',
    'Break the ice with the other attendees, speakers, and workshop instructors',
    'Engage in conversation or listen to others discuss',
    'Make new friends & improve your confidence through experience'
  ],
  date: 'March 30',
  time: '6pm-8pm'
}

export default TopicTables
