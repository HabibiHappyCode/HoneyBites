import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button.jsx'
import { BiDish } from "react-icons/bi";


function EmptyCart() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <div className='flex flex-col justify-center items-center h-[75vh] gap-6 py-5 max-lg:gap-3 max-lg:py-3'>
            <BiDish className='text-[4em] max-lg:text-[2em] ' />
            <h2 className='text-2xl max-lg:text-[1em]'>Your Cart is Empty</h2>
            <p className='text-[rgba(255,255,255,0.7)] max-lg:text-[.8em] '>Browse our categories and discover our best deals!</p>
            <Button onClick={handleNavigate} myStyle='bg-[#FFE700] text-stone-900 px-9 max-lg:px-6 py-3 max-lg:py-2 rounded-full cursor-pointer max-lg:text-[.8em]'>Start Shopping...</Button>
        </div>
    )
}

export default EmptyCart
