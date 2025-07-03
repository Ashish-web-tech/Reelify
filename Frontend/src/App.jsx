import React from 'react'
import Header from './components/Header/Header.jsx'
import { Hero } from './components/Hero/Hero.jsx'
import HeroTwo from './components/Hero/HeroTwo.jsx'
import HeroThree from './components/Hero/HeroThree.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HeroTwo />
      <HeroThree />
      <Footer />
    </div>
  )
}

export default App