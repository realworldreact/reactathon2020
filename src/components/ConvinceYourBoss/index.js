import React from 'react'
import pdfWhitePaper from '../../assets/reactathon-2018-white-paper.pdf'

const ConvinceYourBoss = () => (
  <div>
    <p style={{ marginBottom: 0 }}>
      <a
        href="https://raw.githubusercontent.com/realworldreact/reactathon-2018/develop/convince-your-boss-email-template.txt?token=ADfG8gVCpee9pK3O-lASUSiWp0ZbXbkSks5aiIM-wA%3D%3D"
        target="_blank"
        className="document-links"
      >
        Convince your Boss - email templates
      </a>
    </p>
    <p>
      <a href={pdfWhitePaper} target="_blank" className="document-links">
        Convince your Boss - pdf white paper
      </a>
    </p>
  </div>
)

export default ConvinceYourBoss
