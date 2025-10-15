import MenuItems from '../home/MenuItems'

function MoreMeals() {
    return (
        <div className='py-25 px-25 max-lg:px-5 max-lg:py-20 max-[1198px]:px-18 max-md:px-5 '>
            <h1 className='capitalize text-[2.5em] text-center max-lg:text-[1.5em]'>our <span className='text-[#FFE700]'>menu</span></h1>
            <MenuItems />
        </div>
    )
}

export default MoreMeals
