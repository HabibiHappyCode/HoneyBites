import MenuItems from './MenuItems'
import Button from '../../UI/Button'
import { useNavigate } from 'react-router-dom'

function Menu() {

    const navigate = useNavigate();

    const moreMeals = () => {
        navigate('/more-meals')
    }

    return (
        <div className='py-10 px-25 max-lg:px-5 max-lg:py-5 max-md:px-3 '>
            <h1 className='capitalize text-[2.5em] text-center max-lg:text-[1.5em]'>our <span className='text-[#FFE700]'>menu</span></h1>
            <MenuItems />
            <p>
                <Button onClick={moreMeals} myStyle='block mx-auto bg-[#FFE700] text-stone-900 px-4 py-2 text-[16px] rounded max-md:text-[12px]'>Explore...</Button>
            </p>
        </div>
    )
}

export default Menu
