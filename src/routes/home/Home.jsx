import React from 'react'
import LandingContainer from './LandingContainer'
import About from './About'
import Menu from './Menu'
import Resturant from './Resturant'

function Home() {
    return (
        <div className='w-full h-auto'>
          <LandingContainer />
          <About />
          <Menu />
          <Resturant />
        </div>
    )
}

export default Home
