import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Category from './components/Category'
import TopSeiling from './components/TopSeiling'

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Category />
      <TopSeiling />
    </div>
  )
}

export default App
