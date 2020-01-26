import React from 'react'
import MainLayout from './main'
import PageContentLayout from './page-content'

const LayoutWrapper = ({ children }) => (
  <MainLayout>
    <PageContentLayout>
      {children}
    </PageContentLayout>
  </MainLayout>
)

export default LayoutWrapper
