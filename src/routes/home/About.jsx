import { PiChefHat } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { RiEBike2Line } from "react-icons/ri";
import AboutSub from "./AboutSub";

function About() {
    return (
        <div className="flex justify-center items-center h-auto gap-10 max-lg:gap-4 p-15 px-25 max-lg:px-5 max-lg:py-15  max-md:px-3 max-md:flex-wrap">
            <div className="w-1/2 max-md:w-full">
                <p className="text-[#FFE700]">Discover Your Test</p>
                <article className="my-3">
                    <h1 className="text-[3em] max-lg:text-[2em] max-md:text-[1.6em]">We Provide Good Food</h1>
                    <h1 className="text-[3em] max-lg:text-[2em] max-md:text-[1.6em]">For Your Family!</h1>
                </article>
                <p>
                    We’re more than just a place to eat — we’re
                    a place to experience flavor, comfort, and care. Every meal
                    is freshly prepared with quality ingredients and a touch of passion.
                    Whether you’re here for a quick bite or a special occasion, we’re committed to giving you a memorable
                    dining experience that feels like home.
                </p>

                <div className="my-5 flex flex-wrap justify-between gap-y-2 w-[100%] max-md:gap-5">
                    <AboutSub
                        icons={<PiChefHat />}
                        text='Our chef creates every dish with skill and passion.'
                    />
                    <AboutSub
                        icons={<BiDish />}
                        text='Our dishes are fresh, flavorful, and made with care.'
                    />
                    <AboutSub
                        icons={<GiForkKnifeSpoon />}
                        text='Our cutleries are clean, elegant, and designed for your dining comfort'
                    />
                    <AboutSub
                        icons={<RiEBike2Line />}
                        text='Fast and reliable delivery to your door.'
                    />
                </div>
            </div>

            <div className="w-1/2 h-[60vh] max-md:w-full">
                <img
                    src="https://res.cloudinary.com/dxe5unu0u/image/upload/v1760350343/chef_mja0fq.jpg"
                    alt="chef"
                    className="w-[100%] h-[100%] object-cover rounded"
                />
            </div>
        </div>
    )
}

export default About
