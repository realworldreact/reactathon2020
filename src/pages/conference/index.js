import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './conference.module.css'
import BuyTicketsButton from '../../components/BuyTicketsButton'
import pdfPlaceholder from '../../components/BuyTickets'
import Schedule from '../../components/Schedule'
import dayOneSchedule from './day-one-schedule.json'
import Location from '../../components/Location'
import BuyTickets from '../../components/BuyTickets'

class Conference extends Component {
  constructor() {
    super()

    this.state = { activeTab: 1 }
  }

  handleTabClick(e, tabNum) {
    e.preventDefault()
    this.setState({ activeTab: tabNum })
  }

  renderActiveTabContent(activeTab) {
    if (activeTab === 1) {
      return (
        <div>
          <h1 style={{ marginBottom: 15 }}>FUNDAMENTALS</h1>
          <div style={{ display: 'flex' }}>
            <div style={{ width: 400 }}>
              <p style={{ marginBottom: 15 }}>
                Day 1 of the conference features a full day of talks introducing
                you to the React ecosystem in a linear fashion. It is intended
                for those who have less than 1 year of experience shipping
                production code with React, but are comfortable with JavaScript
                or a similar programming language.
              </p>
              <p>
                If you want to learn React — or to improve — these are the
                experts you want to learn from. We are the only React conference
                with an entire day dedicated to the core fundamentals.
              </p>
            </div>
            <div style={{ marginLeft: 80, marginTop: 60 }}>
              <div style={{ width: 166, marginBottom: 15 }}>
                <BuyTicketsButton inverse />
              </div>
              <p style={{ marginBottom: 20 }}>
                Don't wait. This conference will sell out.
              </p>
              <p style={{ marginBottom: 0 }}>
                <a
                  href="https://www.lipsum.com/"
                  target="_blank"
                  className="document-links"
                >
                  Convince your Boss - email templates
                </a>
              </p>
              <p>
                <a
                  href={pdfPlaceholder}
                  target="_blank"
                  className="document-links"
                >
                  Convince your Boss - pdf handouts
                </a>
              </p>
            </div>
          </div>
          <Schedule date="MARCH 20" schedule={dayOneSchedule} />
        </div>
      )
    } else if (activeTab === 2) {
      return (
        <div>
          <h1>ADVANCED</h1>
          <div style={{ display: 'flex' }}>
            <div style={{ width: 400 }}>
              <p style={{ marginBottom: 15 }}>
                If you have more than 1 year experience shipping production
                React code, we recommend the Advanced Conf: Days 2 & 3.
              </p>
              <p>
                If you’re not already an expert in the extended React ecosystem,
                you may benefit from attending both days.
              </p>
            </div>
            <div style={{ marginLeft: 80 }}>
              <div style={{ width: 166, marginBottom: 15 }}>
                <BuyTicketsButton inverse />
              </div>
              <p style={{ marginBottom: 20 }}>
                Don't wait. This conference will sell out.
              </p>
              <p style={{ marginBottom: 0 }}>
                <a
                  href="https://www.lipsum.com/"
                  target="_blank"
                  className={styles['document-links']}
                >
                  Convince your Boss - email templates
                </a>
              </p>
              <p>
                <a
                  href={pdfPlaceholder}
                  target="_blank"
                  className={styles['document-links']}
                >
                  Convince your Boss - pdf handouts
                </a>
              </p>
            </div>
          </div>
          <Schedule date="MARCH 21" schedule={dayOneSchedule} />
        </div>
      )
    } else if (activeTab === 3) {
      return (
        <div>
          <h1>ADVANCED</h1>
          <div style={{ display: 'flex' }}>
            <div style={{ width: 400 }}>
              <p style={{ marginBottom: 15 }}>
                If you have more than 1 year experience shipping production
                React code, we recommend the Advanced Conf: Days 2 & 3.
              </p>
              <p>
                If you’re not already an expert in the extended React ecosystem,
                you may benefit from attending both days.
              </p>
            </div>
            <div style={{ marginLeft: 80 }}>
              <div style={{ width: 166, marginBottom: 15 }}>
                <BuyTicketsButton inverse />
              </div>
              <p style={{ marginBottom: 20 }}>
                Don't wait. This conference will sell out.
              </p>
              <p style={{ marginBottom: 0 }}>
                <a
                  href="https://www.lipsum.com/"
                  target="_blank"
                  className={styles['document-links']}
                >
                  Convince your Boss - email templates
                </a>
              </p>
              <p>
                <a
                  href={pdfPlaceholder}
                  target="_blank"
                  className={styles['document-links']}
                >
                  Convince your Boss - pdf handouts
                </a>
              </p>
            </div>
          </div>
          <Schedule date="MARCH 22" schedule={dayOneSchedule} />
        </div>
      )
    }
  }

  render() {
    const { activeTab } = this.state

    return (
      <section style={{ marginTop: 60, marginBottom: 60, textAlign: 'center' }}>
        <h1>Conference</h1>
        <div style={{ margin: 'auto', marginTop: 20, marginBottom: 50 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {[1, 2, 3].map(tabNum => (
              <div key={`round-${tabNum}`}>
                <a
                  href="#"
                  className={classNames(styles.tab, {
                    [styles.active]: activeTab === tabNum,
                  })}
                  onClick={e => this.handleTabClick(e, tabNum)}
                >
                  Round {tabNum}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className={styles['tab-content-container']}>
          {this.renderActiveTabContent(activeTab)}
        </div>
        <hr />
        <Location />
        <hr />
        <BuyTickets />
      </section>
    )
  }
}

export default Conference
