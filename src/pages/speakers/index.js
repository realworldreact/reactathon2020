import React from 'react'
import MainLayout from '../../layouts/main'
import PageContentLayout from '../../layouts/page-content'
import SpeakersComponent from '../../components/Speakers'

const Speakers = () => (
  <MainLayout>
    <PageContentLayout>
      <SpeakersComponent />
    </PageContentLayout>
  </MainLayout>
)

export default Speakers
