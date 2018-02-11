import React from 'react'

const UniverseTicketWidget = ({ id }) => (
  <script
    src="https://www.universe.com/embed2.js"
    data-widget-type="universe-ticket"
    data-target-type="Listing"
    data-target-id={id}
    data-state="buttonColor=#000000&buttonText=Get Tickets"
  />
)

export default UniverseTicketWidget
