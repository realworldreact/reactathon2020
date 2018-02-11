import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './index.module.css'
import fundamentalsPlaceholder from '../../assets/placeholder/tickets-fundamentals-placeholder.png'
import advancedPlaceholder from '../../assets/placeholder/tickets-advanced-placeholder.png'
import { BUY_TICKETS_ID } from '../../constants'

class BuyTickets extends Component {
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
          <div style={{ marginBottom: 30 }}>
            <img src={fundamentalsPlaceholder} />
          </div>
          <div style={{ marginBottom: 50 }}>
            <img src={advancedPlaceholder} />
          </div>
        </div>
      )
    } else if (activeTab === 2) {
      return <p>Round 2 tickets go on sale Feb 19</p>
    } else if (activeTab === 3) {
      return <p>Round 3 tickets go on sale Feb 26</p>
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
