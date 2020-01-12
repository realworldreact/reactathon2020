import React from 'react'
import LeftNav from '../components/LeftNav'
import MainContentWrapper from '../components/MainContentWrapper'

const MainLayout = ({ children }) => (
  <div>
    <LeftNav />
    <MainContentWrapper children={children} />
  </div>
)

export default MainLayout
