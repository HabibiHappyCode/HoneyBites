import React from 'react'
import ResturantSub from './ResturantSub'

function Resturant() {
    return (
        <div className='py-10 px-25 max-lg:px-5 max-lg:py-5 max-[1198px]:px-18 max-md:px-5 mb-5'>
            <h1 className='capitalize text-[2.5em] text-center max-lg:text-[1.5em]'>our <span className='text-[#FFE700]'>Resturant</span></h1>
            <ResturantSub />
        </div>
    )
}

export default Resturant
