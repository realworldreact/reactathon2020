import React, { Component } from 'react'

export default function createUniverseTicketWidget(targetId) {
  return class UniverseTicketWidget extends Component {
    componentDidMount() {
      const script = document.createElement('script')

      script.src = 'https://www.universe.com/embed2.js'
      script.setAttribute('data-widget-type', 'universe-ticket')
      script.setAttribute('data-target-type', 'Listing')
      script.setAttribute('data-target-id', targetId)
      script.setAttribute(
        'data-state',
        'buttonColor=#000000&buttonText=Get Tickets'
      )

      this.el.appendChild(script)
    }

    render() {
      return <div ref={el => (this.el = el)} style={{ width: 650, margin: 'auto' }} />
    }
  }
}
