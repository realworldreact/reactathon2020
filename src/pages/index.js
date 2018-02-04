import React from 'react'
import Conference from '../components/Conference'
import Speakers from '../components/Speakers'
import AdditionalEvents from '../components/AdditionalEvents'
import Sponsors from '../components/Sponsors'
import Highlights from '../components/Highlights'
import pdfPlaceholder from '../assets/pdf-placeholder.pdf'

import BuyTickets from '../components/BuyTickets'

const IndexPage = () => (
  <main style={{ textAlign: 'center', marginBottom: 100 }}>
    <Conference />
    <hr />
    <Speakers />
    <hr />
    <AdditionalEvents />
    <hr />
    <Highlights />
    <hr />
    <Sponsors />
    <hr />
    <BuyTickets />
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
      <a href={pdfPlaceholder} target="_blank" className="document-links">
        Convince your Boss - pdf handouts
      </a>
    </p>
  </main>
)

export default IndexPage
