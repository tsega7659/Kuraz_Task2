import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Category from './components/Category'
import TopSeiling from './components/TopSeiling'
import EasyFast from './components/EasyFast'
import Testimonials from './components/Testimonial'
import Sponsor from './components/Sponsor'
import SubscribeSection from './components/SubscribeSection'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Category />
      <TopSeiling />
      <EasyFast />
      <Testimonials />
      <Sponsor />
      <SubscribeSection />
      <Footer />
    </div>
  )
}

export default App
