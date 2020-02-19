import React from 'react'
import LayoutWrapper from '../../layouts/layout-wrapper'
import AboutComponent from '../../components/About'

const About = (props) => {
  const aboutSectionId = props['*']
  return (
    <LayoutWrapper>
      <AboutComponent sectionId={aboutSectionId} />
    </LayoutWrapper>
  )
}

export default About
