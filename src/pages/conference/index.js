import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './conference.module.css'
import BuyTicketsButton from '../../components/BuyTicketsButton'
import pdfPlaceholder from '../../components/BuyTickets'

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
            <div style={{ minWidth: 400, width: 400 }}>
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
        </div>
      )
    } else if (activeTab === 2) {
      return <h1>ADVANCED</h1>
    } else if (activeTab === 3) {
      return <h1>ADVANCED</h1>
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
      </section>
    )
  }
}

export default Conference
