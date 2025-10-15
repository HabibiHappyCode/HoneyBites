import { Skeleton } from '@mui/material';
import Slider from "react-slick";
import { fetchingLandingContainer } from '../../lib/landpageLib';
import { useFetch } from '../../hooks/useFetch';
import Button from '../../UI/Button';

function LandingContainer() {


    const { meals, isLoading } = useFetch(fetchingLandingContainer, [])
    const splicedMeal = meals.slice(2, 5)

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
    }

    return (
        <div className='overflow-hidden w-full h-auto'>
            {isLoading ?
                <Skeleton height='75vh' sx={{ bgcolor: 'grey.900' }} animation="wave" variant="round" />
                :
                <Slider {...settings}>
                    {
                        splicedMeal.map((meal) => {
                            return (
                                <div key={meal.id} className='w-full h-[90vh] max-xl:h-[85vh] max-lg:h-[80vh] max-md:h-[60vh] relative'>
                                    <img src={meal.img} alt={meal.name} className='w-[100%] h-[100%] object-cover' />

                                    <div className='w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 flex flex-col justify-center  max-md:gap-5 px-10 max-lg:px-5'>
                                        <p className='font-dancingScript text-[1.5em] max-lg:text-[1.2em] max-md:text-[1em] text-[#FFE700]'>Wide Options of Choice</p>
                                        <h1 className='text-[4.5em] font-bold max-lg:text-[3em] max-md:text-[2em]'>Delicious Recipes</h1>
                                        <p className='w-[40%] font-light max-md:text-[1em] max-lg:w-[70%] max-md:w-[100%]'>
                                            Delicious Recipes bring joy to every table,
                                            combining fresh ingredients, creativity, and flavor in every bite.
                                            Whether it’s a quick snack or a hearty meal.
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>

            }
        </div>
    )
}

export default LandingContainer
