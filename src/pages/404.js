import React from 'react'
import MainLayout from '../layouts/main'
import PageContentLayout from '../layouts/page-content'
import NotFoundComponent from '../components/NotFound'

const NotFoundPage = () => (
  <MainLayout>
    <PageContentLayout>
      <NotFoundComponent />
    </PageContentLayout>
  </MainLayout>
)

export default NotFoundPage
