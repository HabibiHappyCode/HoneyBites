import React, { useContext } from 'react'
import CheckoutItems from './CheckoutItems'
import CartContext from '../store/CartContext'

function Checkout() {
    const cartCtx = useContext(CartContext);

    return (
        <div className='pt-22 px-30 max-xl:px-20 max-lg:px-10 max-md:px-2 '>
            {
                cartCtx.items.length === 0 ?
                    null
                    :
                    <h1 className='text-[2.5em] max-xl:text-[1.8em] max-lg:text-[1.3em] max-md:text-[1em] text-center uppercase font-dancingScript'>your <span className='text-[#FFE700]'>carts</span></h1>

            }
            <CheckoutItems />
        </div>
    )
}

export default Checkout
