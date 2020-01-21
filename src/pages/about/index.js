import React from 'react'
import MainLayout from '../../layouts/main'
import PageContentLayout from '../../layouts/page-content'
import AboutComponent from '../../components/About'

const About = () => (
  <MainLayout>
    <PageContentLayout>
      <AboutComponent />
    </PageContentLayout>
  </MainLayout>
)

export default About
