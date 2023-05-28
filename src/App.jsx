import React from 'react'
import {Switch} from './components/switch/Switch'
import {Header} from './components/header/Header'
import {Nav} from './components/nav/Nav'
import {Experience} from './components/experience/Experience'
import {About} from './components/about/About'
import {Services} from './components/services/Services'
import {Portfolio} from './components/portfolio/Portfolio'
import {Contact} from './components/contact/Contact'
import {Footer} from './components/footer/Footer'

export const App = () => {

  return (
    <>
      <Switch/>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      {/*
      <Testimonials/>
      */}
      <Contact/>
      <Footer/>
    </>
  )
}
