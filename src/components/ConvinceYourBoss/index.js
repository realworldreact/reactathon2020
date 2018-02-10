import React from 'react'
import pdfPlaceholder from '../../assets/pdf-placeholder.pdf'

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
      <a href={pdfPlaceholder} target="_blank" className="document-links">
        Convince your Boss - pdf handouts
      </a>
    </p>
  </div>
)

export default ConvinceYourBoss
