import React from 'react'
import SubPageSectionHeader from '../../../SubPageSectionHeader'
import DateIcon from '../../../../assets/icons/about/calendar-icon-about.svg'
import TimeIcon from '../../../../assets/icons/about/clock-icon-about.svg'
import Topics from './Topics'
import data from '../../../../assets/data/about/topic-tables.json'
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
  header: data.section.h2Slab,
  description: data.section.p1,
  listItems: data.section.bullets,
  date: data.section.date,
  time: data.section.time
}

export default TopicTables
