import React from 'react'
import MainLayout from '../layouts/main'
import PageContentLayout from '../layouts/page-content'
import NotFoundComponent from '../components/NotFound'
import { windowExists } from '../utils/window'

const NotFoundPage = () => {
  return (
    windowExists 
    ? (
      <MainLayout>
        <PageContentLayout>
          <NotFoundComponent />
        </PageContentLayout>
      </MainLayout>
      )
    : (<span>Loading...</span>)
  )
}

export default NotFoundPage
