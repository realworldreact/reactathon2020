import React from 'react'
import LayoutWrapper from '../../layouts/layout-wrapper'
import AboutComponent from '../../components/About'

const About = ({ sectionId, subRouteId }) => (
  <LayoutWrapper>
    <AboutComponent sectionId={sectionId} subRouteId={subRouteId} />
  </LayoutWrapper>
)

export default About
