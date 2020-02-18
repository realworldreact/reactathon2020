import React from 'react'
import MainLayout from '../layouts/main'
import PageContentLayout from '../layouts/page-content'
import NotFoundComponent from '../components/NotFound'
import { windowExists } from '../utils/window'

const NotFoundPage = () => (
  <MainLayout>
    <PageContentLayout>
      {windowExists && (
        <NotFoundComponent />
      )}
    </PageContentLayout>
  </MainLayout>
)

export default NotFoundPage
