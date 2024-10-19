import { div } from 'framer-motion/client';
import react from 'react';
import { SlArrowUp } from "react-icons/sl";
function Footer(){
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // This will enable smooth scrolling
        });
    };
    return (
        <div className='w-full h-[9vh] p-5 flex items-center justify-between gap-5 '>
            <h1 className='text-white'>Copyrights © 2024 by @Ritik | All rights Reserved.</h1>
            <h1 onClick={scrollToTop} className='scrollToTop text-black p-2 font-bold rounded-md cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out   bg-[#00EEFF]'> <SlArrowUp /> </h1>
        </div>
    )
}
export default Footer;