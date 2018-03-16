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

    this.state = { activeTab: 3 }
  }

  handleTabClick(e, tabNum) {
    e.preventDefault()
    this.setState({ activeTab: tabNum })
  }

  renderActiveTabContent(activeTab) {
    if (activeTab === 3) {
      return (
        <div>
          <p>Both conferences are now sold out.</p>
          <p style={{ marginTop: 20 }}>There are still a few tickets for workshops, the hiring mixer, and the hackathon.</p>
          <p style={{ marginTop: 20 }}>You can also check out another developer conference we're running April 11-12 called <a href="https://www.FrontierSF.com">Frontier</a>, and use the code REACTATHON to get 40% off ;)</p>
        </div>
      )
    } else if (activeTab === 1) {
      return <p>Round 1 tickets are sold out.</p>
    } else if (activeTab === 2) {
      return <p>Round 2 tickets are sold out.</p>
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
