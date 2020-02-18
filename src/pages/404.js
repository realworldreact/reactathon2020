import React from 'react'
import MainLayout from '../layouts/main'
import PageContentLayout from '../layouts/page-content'
import NotFoundComponent from '../components/NotFound'
import { windowExists } from '../utils/window'
import { showNotFound } from '../utils/404'

const NotFoundPage = (props) => {
  return (
    windowExists && showNotFound
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
