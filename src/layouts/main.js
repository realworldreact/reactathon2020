import React from 'react'
import LeftNav from '../components/LeftNav'
import MainContentWrapper from '../components/MainContentWrapper'
import Head from './head'
import './main.css'

const MainLayout = ({ children }) => (
  <div>
    <Head />
    <LeftNav />
    <MainContentWrapper 
      children={children} 
    />
  </div>
)

export default MainLayout
