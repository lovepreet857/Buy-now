import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function hepl() {
    const [active, setActive] = useState(false);
    return (
        <>
            <section>
                <div className="container">
                    <div className='sm:py-20 pt-10 pb-5 border-b sm:border-none'>
                        <p className='text-[24px] sm:text-[34px] leading-[41px] font-font_heebo  pb-[20px] sm:pb-[10px]'>Help Center</p>
                        <div className='flex justify-between items-center'>
                            <div className='hidden  sm:flex items-center gap-2 text-[16px] leading-[24px] pt-[10px] font-font_inter'>
                            <Link to="/">  <button className='text-gray-gray_200 hover:text-yellow-yellow_102 hover:scale-105 duration-300 ease-in' >Home</button> </Link>
                                <button onClick={() => setActive(!active)}>
                                    <img className={`transition-all duration-300 ${active && "rotate-90"}`} src="src/assets/icons/leftblue.svg" alt="" />
                                </button>
                                <p>Help Center</p>
                            </div>
                            <div className=' max-w-[335px] md:max-w-[368px] w-full border rounded-[30px] py-[15px] pl-[25px] flex items-center gap-2'>
                                <img className='h-full' src="src/assets/icons/Union.jpg" alt="" />
                                <input className=' text-[16px] font-font_inter outline-none text-gray-gray_300' type="text" placeholder='Search' />

                            </div>
                        </div>
                    </div>
                    <div className='border-b'>

                        <div className='max-w-[429px] flex justify-between m-auto overflow-x-auto'>
                            <p className='text-[14px] font-font_inter py-3 px-2 text-gray-gray_200 hover:border-b hover:border-black-black_100 hover:text-purple-purple_100'>orders</p>
                            <p className='text-[14px] font-font_inter py-3 px-2 text-gray-gray_200 hover:border-b hover:border-black-black_100 hover:text-purple-purple_100'>billing</p>
                            <p className='text-[14px] font-font_inter py-3 px-2 text-gray-gray_200 hover:border-b hover:border-black-black_100 hover:text-purple-purple_100'>Returns</p>
                            <p className='text-[14px] font-font_inter py-3 px-2 text-gray-gray_200 hover:border-b hover:border-black-black_100 hover:text-purple-purple_100'>Careers</p>
                            <p className='text-[14px] font-font_inter py-3 px-2 text-gray-gray_200 hover:border-b hover:border-black-black_100 hover:text-purple-purple_100'>Others</p>
                        </div>

                    </div>
                    <div className='max-w-[1152px] w-full sm:mt-[20.5px] mt-[10px] mb-5 md:mb-10'>
                          <img src="src/assets/Images/shopitems.png" alt="" /> 
                    </div>
                </div>
            </section>

        </>
    )
}

export default hepl