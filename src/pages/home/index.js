import React from 'react'
import MainLayout from '../../layouts/main'
import PageContentLayout from '../../layouts/page-content'
import HomeComponent from '../../components/Home'

const Home = () => (
  <MainLayout>
    <PageContentLayout>
      <HomeComponent />
    </PageContentLayout>
  </MainLayout>
)

export default Home
