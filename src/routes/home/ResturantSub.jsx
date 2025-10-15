import React from 'react'
import Button from '../../UI/Button';
import { useNavigate } from 'react-router-dom';

function ResturantSub() {

      const navigate = useNavigate();

    const moreMeals = () => {
        navigate('/more-meals')
    }

    return (
        <div className='flex justify-between items-center py-5 max-md:flex-wrap'>
            <div className="w-[49%] max-md:w-[100%] max-md:mb-5">
                <p className="text-[#FFE700] text-[1.5em] max-md:text-[1.3em] font-dancingScript">Your Reserved table</p>
                <article className="my-3">
                    <h1 className="text-[3em] max-lg:text-[2em] max-md:text-[1.6em]">Healthy Dishes</h1>
                    <h1 className="text-[3em] max-lg:text-[2em] max-md:text-[1.6em]">For Your Family!</h1>
                </article>
                <p>
                    Stepping into Flashy feels like entering a world of elegance and style.
                    The restaurant captivates guests with its vibrant décor,
                    modern design, and warm lighting that set the perfect
                    mood for dining. Every element is beautifully arranged and thoughtfully organized,
                </p>
                <p>
                    <Button onClick={moreMeals} myStyle='max-md:block max-md:my-5 mx-auto bg-[#FFE700] text-stone-900 mt-5 px-4 py-2 text-[16px] rounded max-md:text-[12px]'>Explore...</Button>
                </p>
            </div>

            <div className='flex flex-col gap-3 max-sm:gap-2 w-[49%] max-md:w-[100%]'>
                <div className='flex items-end gap-3  max-sm:gap-2'>
                    <div className='w-[50%] h-[30vh] max-sm:w-[50%] max-sm:h-[25vh]'>
                        <img className='w-[100%] h-[100%] object-cover' src="https:/res.cloudinary.com/dxe5unu0u/image/upload/v1760518949/resturant_one_vsv4bq.webp" alt="resturant" />
                    </div>
                    <div className='w-[50%] h-[40vh] max-sm:w-[50%] max-sm:h-[30vh]'>
                        <img className='w-[100%] h-[100%] object-cover' src="https://res.cloudinary.com/dxe5unu0u/image/upload/v1760518950/resturant_three_ojbksm.avif" alt="resturant" />
                    </div>
                </div>
                <div className='flex gap-3 max-sm:gap-2'>
                    <div className='w-[50%] h-[40vh] max-sm:w-[50%] max-sm:h-[30vh]'>
                        <img className='w-[100%] h-[100%] object-cover' src="https://res.cloudinary.com/dxe5unu0u/image/upload/v1760518949/resturant_four_yinvon.jpg" alt="resturant" />
                    </div>
                    <div className='w-[50%] h-[30vh] max-sm:w-[50%] max-sm:h-[25vh]'>
                        <img className='w-[100%] h-[100%] object-cover' src="https://res.cloudinary.com/dxe5unu0u/image/upload/v1760518950/resturant_two_vmcn3q.avif" alt="resturant" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResturantSub
