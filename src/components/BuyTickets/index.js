import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './index.module.css'
import createUniverseTicketWidget from '../UniverseTicketWidget/createUniverseTicketWidget'
import {
  BUY_TICKETS_ID,
  FUNDAMENTALS_TICKET_WIDGET_ID,
  ADVANCED_TICKET_WIDGET_ID,
} from '../../constants'

const FundamentalsUniverseTicketWidget = createUniverseTicketWidget(
  FUNDAMENTALS_TICKET_WIDGET_ID
)
const AdvancedUniverseTicketWidget = createUniverseTicketWidget(
  ADVANCED_TICKET_WIDGET_ID
)

class BuyTickets extends Component {
  constructor() {
    super()

    this.state = { activeTab: 2 }
  }

  handleTabClick(e, tabNum) {
    e.preventDefault()
    this.setState({ activeTab: tabNum })
  }

  renderActiveTabContent(activeTab) {
    if (activeTab === 2) {
      return (
        <div>
          <div style={{ marginBottom: 30 }}>
            <FundamentalsUniverseTicketWidget />
          </div>
          <div style={{ marginBottom: 50 }}>
            <AdvancedUniverseTicketWidget />
          </div>
        </div>
      )
    } else if (activeTab === 1) {
      return <p>Round 1 tickets are sold out.</p>
    } else if (activeTab === 3) {
      return <p>Round 3 tickets go on sale March 6</p>
    }
  }

  render() {
    const { activeTab } = this.state

    return (
      <section
        id={BUY_TICKETS_ID}
        className={styles['component-container']}
        style={{ marginTop: 50 }}
      >
        <h1>Buy Tickets</h1>
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
        {this.renderActiveTabContent(activeTab)}
      </section>
    )
  }
}

export default BuyTickets
