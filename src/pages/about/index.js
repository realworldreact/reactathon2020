import React from 'react'
import LayoutWrapper from '../../layouts/layout-wrapper'
import AboutComponent from '../../components/About'

const About = ({ sectionId }) => (
  <LayoutWrapper>
    <AboutComponent sectionId={sectionId} />
  </LayoutWrapper>
)

export default About
