import React from 'react'
import LeftNav from '../components/LeftNav'
import MainContentWrapper from '../components/MainContentWrapper'
import './main.css'

const MainLayout = ({ children }) => (
  <div>
    <LeftNav />
    <MainContentWrapper children={children} />
  </div>
)

export default MainLayout
