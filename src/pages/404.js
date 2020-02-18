import React from 'react'
import MainLayout from '../layouts/main'
import PageContentLayout from '../layouts/page-content'
import NotFoundComponent from '../components/NotFound'
import { windowExists } from '../utils/window'

const NotFoundPage = (props) => {
  console.log('404props', props)
  return (
    windowExists && (
      typeof window.location.pathname === 'string' &&
      !window.location.pathname.startsWith('/speakers/profile/')
    )
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
