import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";

function Questions() {
    return (
        <div className='w-[30%] max-md:w-[100%] max-md:pb-5 max-md:border-b-1 border-[#000]'>
            <h2 className='text-[#fff] capitalize mb-4'>have a Question?</h2>
            <p className="text-[#000] mb-3">
                <span>
                    <IoLocationOutline />
                </span>
                <span>
                    Ayedun Community, Oshogbo, Osun State, Nigeria.
                </span>
            </p>

           <p className="text-[#000] mb-3">
                <span>
                   <FaPhone />
                </span>
                <span>
                    +234 814 928 5789
                </span>
            </p>

            <p className="text-[#000] mb-3">
                <span>
                   <CiMail />
                </span>
                <span>
                    abdulmalikiyiola@gmail.com
                </span>
            </p>
        </div>
    )
}

export default Questions
