import { useContext } from 'react'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../util/formatting';
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import EmptyCart from './EmptyCart';

function CheckoutItems() {
    const cartCtx = useContext(CartContext);

    const handleIncreaseItem = (item) => {
        cartCtx.addItem(item)
    }

    const handleDecreaseItem = (id) => {
        cartCtx.removeItem(id)
    }

    return (
        <div className='my-5'>
            {
                cartCtx.items.length === 0 ?
                   <EmptyCart />
                    :
                    cartCtx.items.map((item) => {
                        return (
                            <main key={item.id} className='border-t-1 border-[rgba(255,231,0,0.6)] py-5 flex justify-between items-center'>


                                <div className='flex items-center gap-8 w-[50%] max-lg:w-[80%] max-lg:gap-4'>
                                    <div className='w-[50%] max-md:w-[48%] h-[25vh] max-md:h-[18vh] '>
                                        <img className='w-[100%] h-[100%] object-cover rounded' src={item.img} alt="" />
                                    </div>

                                    <div className='flex justify-between flex-col items-start gap-5'>
                                        <h1 className='text-[1.2em] max-lg:text-[1em] max-md:text-[.8em]'>{item.name}</h1>
                                        <p className=' max-lg:text-[.9em] max-md:text-[.7em]'>{currencyFormatter.format(item.price)}</p>
                                        <small className='max-md:text-[.7em]'>Honey <span className='text-[#FFE700] max-md:text-[.8em]'>Bites</span></small>
                                    </div>
                                </div>

                                <div className='border-l border-r border-[rgba(255,231,0,0.6)] px-6 max-lg:px-2 flex gap-5  max-lg:gap-3 max-md:gap-2 items-center'>
                                    <button onClick={() => handleIncreaseItem(item)} className='cursor-pointer'><IoIosAdd /></button>
                                    <span className='bg-[rgba(255,231,0,0.7)] py-2 max-lg:py-1 px-4 max-md:px-2  max-md:text-[.8em] rounded text-stone-900'>{item.quantity}</span>
                                    <button onClick={() => handleDecreaseItem(item.id)} className=' cursor-pointer'><FiMinus /></button>
                                </div>
                            </main>
                        )
                    })
            }
        </div>
    )
}

export default CheckoutItems
