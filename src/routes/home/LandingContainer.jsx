import { Skeleton } from '@mui/material';
import Slider from "react-slick";
import { fetchingLandingContainer } from '../../lib/landpageLib';
import { useFetch } from '../../hooks/useFetch';

function LandingContainer() {


    const { meals, isLoading } = useFetch(fetchingLandingContainer, [])
    const splicedMeal = meals.slice(2, 5)
   
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
    }

    return (
        <div className='overflow-hidden w-full h-auto'>
            { isLoading ?
                <Skeleton height='75vh' sx={{ bgcolor: 'grey.900' }} animation="wave" variant="round" />
                :
                <Slider {...settings}>
                    {
                        splicedMeal.map((meal) => {
                            return (
                                <div key={meal.id} className='w-full h-[90vh] max-xl:h-[85vh] max-lg:h-[80vh] max-md:h-[70vh] relative'>
                                    <img src={meal.img} alt={meal.name} className='w-[100%] h-[100%] object-cover' />

                                    <div className='w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 flex flex-col justify-center text-white'>
                                      
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
