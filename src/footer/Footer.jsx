import Abt from './Abt'
import Service from './Service'
import Questions from './Questions'

function Footer() {
    return (
        <div className='flex justify-between bg-[#FFE700] p-10  max-md:gap-y-4 max-lg:px-5 max-lg:flex-wrap'>
            <Abt />
            <Service />
            <Questions />
        </div>
    )
}

export default Footer
