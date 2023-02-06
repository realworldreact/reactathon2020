import React from 'react'
import SubPageSectionHeader from '../../../SubPageSectionHeader'
import AboutSectionDateTime from '../AboutSectionDateTime'
import Topics from './Topics'
import data from '../../../../assets/data/about/topic-tables.json'
import './index.css'

const TopicTablesDateTime = ({ date, time }) => (
  <AboutSectionDateTime
    date={date}
    time={time}
    className="topic-tables-datetime"
  />
)

const TopicTableList = ({ items = [] }) => (
  <div>
    <ul className="topic-tables-list">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
)

const TopicTables = ({
  header,
  description,
  topicHeader,
  listItems,
  date,
  time,
}) => (
  <section className="topic-tables">
    <SubPageSectionHeader text={header} className="topic-tables-header" />
    <p className="topic-tables-subtext">{description}</p>
    <h3 className="topic-tables-coming-soon">
      Topic Tables to be announced soon
    </h3>
    {/* <TopicTablesDateTime date={date} time={time} />
    <TopicTableList items={listItems} />
    <Topics /> */}
  </section>
)

TopicTables.defaultProps = {
  header: data.section.h2Slab,
  description: data.section.p1,
  listItems: data.section.bullets,
  date: data.section.date,
  time: data.section.time,
}

export default TopicTables
