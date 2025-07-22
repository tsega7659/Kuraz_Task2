import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Category from './components/Category'
import TopSeiling from './components/TopSeiling'
import EasyFast from './components/EasyFast'

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Category />
      <TopSeiling />
      <EasyFast />
    </div>
  )
}

export default App
