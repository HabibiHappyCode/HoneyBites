import React from 'react'
import LandingContainer from './LandingContainer'
import About from './About'
import Menu from './Menu'

function Home() {
    return (
        <div className='w-full h-auto'>
          <LandingContainer />
          <About />
          <Menu />
        </div>
    )
}

export default Home
