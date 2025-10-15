import React, { useContext } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom'
import Button from '../UI/Button';
import CartContext from '../store/CartContext';

function Navbar() {
    const cartCtx = useContext(CartContext);

    const totalCartItems = cartCtx.items.reduce((totalNumOfItems, item) => {
        return totalNumOfItems + item.quantity;
    }, 0);

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/checkout')
    }
    const handleNavigateToHome = () => {
        navigate('/')
    }
    return (
        <header className='p-5 fixed z-1 w-full h-auto max-lg:p-3'>
            <nav className='flex items-center justify-between px-6 py-3 rounded-full bg-[#FFE700] max-lg:py-2 max-lg:px-4 shadow-2xs'>
                <div className='cursor-pointer'>
                    <h1 className='text-[1.3em] font-medium text-stone-900  max-lg:text-[1.1em] uppercase' onClick={handleNavigateToHome}>Honey Bites</h1>
                </div>

                <ul>
                    <li>
                        <Button onClick={handleNavigate} myStyle='flex cursor-pointer'>
                            <span className='text-4xl max-lg:text-3xl text-stone-900'><CiShoppingCart /></span>
                            <sub className='text-stone-900'>{totalCartItems}</sub>
                        </Button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
