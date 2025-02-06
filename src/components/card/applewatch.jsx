import React, { useState } from 'react'
import appledata from "../../json/applewatch.json"
function applewatch() {
    const [active, setActive] = useState(false);
    const [arrow, setArrow] = useState(false);
    return (
        <>
            <section>
                <div className='container'>
                    <div className='sm:py-20 pt-10 pb-5'>
                        <p className='text-[24px] sm:text-[34px] leading-[41px] font-font_heebo border-b sm:border-none pb-[14px] sm:pb-[10px]'>Apple watches</p>
                        <div className='hidden  sm:flex items-center gap-2 text-[16px] leading-[24px] pt-[10px] font-font_inter'>
                            <button className='text-gray-gray_200 hover:text-yellow-yellow_102 hover:scale-105 duration-300 ease-in' >Home</button>
                            <button onClick={() => setActive(!active)}>
                                <img className={`transition-all duration-300 ${active && "rotate-90"}`} src="src/assets/icons/leftblue.svg" alt="" />
                            </button>
                            <p>Products</p>
                        </div>
                    </div>
                    <div className=' sm:flex justify-between pb-6'>
                        <p className='hidden sm:block font-font_inter text-gray-gray_200 text-[16px]'>Showing 1–9 of 200 results</p>
                        <div className=' md:max-w-[233px] md:w-full flex justify-between leading-[24px] text-[14px] text-purple-purple_100 font-font_inter'>
                            <button className='py-[6px]  px-4 border rounded-[20px] max-w-[104px]  w-full flex items-center gap-2 hover:scale-105 duration-300 ease-in hover:shadow-lg '>Filter <img src="src/assets/icons/filter (2).svg" alt="" /></button>
                            <button onClick={() => setArrow(!arrow)} className='py-[6px] px-4 border rounded-[20px] max-w-[104px] w-full flex items-center gap-2 hover:scale-105 duration-300 ease-in hover:shadow-lg '>Sort by <img className={`transition-all duration-300 ${arrow && "rotate-180"}`} src="src/assets/icons/bluedowne (2).svg" alt="" /></button>

                        </div>
                        <p className=' pt-[10px] sm:hidden font-font_inter text-gray-gray_200 text-[14px] '>Showing 1–9 of 200 results</p>
                    </div>

                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:justify-between justify-center sm:gap-4 md:gap-5 lg:gap-6 gap-3'>
                        {
                            appledata.map((items, index) => (
                                <>

                                    <div className="max-w-[270px] rounded-[20px] border hover:scale-105 duration-300 ease-in hover:shadow-lg">
                                        <div className="bg-white-white_2 relative rounded-t-[20px]">
                                            <div className=' absolute right-[20px] top-[20px] flex gap-2'>
                                                <button>
                                                    <img src="src/assets/icons/hart.svg" alt="" />
                                                </button>
                                            </div>
                                            <img src={`src/assets/Images/${items.whatch}`} alt="" />
                                        </div>
                                        <div className="flex justify-between py-5  w-full ">
                                            <div className="w-full max-w-[270px] pb-[10px] rounded-[5px] px-5 border-b-2">
                                                <p className='text-[16px] font-font_inter text-gray-gray_200'>{items.pragragh}</p>
                                                <div className="flex max-w-[230px] w-full justify-between items-center pt-[10px]">
                                                    <p className='text-[24px] font-font_heebo w-[130px]'>{items.price}</p>
                                                    <img src="src/assets/icons/Rating.svg" alt="stars" />
                                                </div>

                                            </div>

                                        </div>
                                        <div className='flex w-full px-5 justify-between items-center pb-5'>
                                            <button>
                                                <p className='text-purple-purple_100 text-[14px] font-font_inter'>In stock</p>
                                            </button>
                                            <button className="bg-[#422659] rounded-full p-[6.67px] ">
                                                <img src="src/assets/icons/shop.svg" alt="" />
                                            </button>
                                        </div>
                                    </div>


                                </>
                            ))
                        }
                    </div>
                    <div className='max-w-[234px] w-full flex pt-5 gap-[6px] mx-auto justify-center font-font_inter'>
                        <button className='py-[6px] '><img src="src/assets/icons/left1.svg" alt="left" /></button>
                        <button className='py-[6px] px-[12.5px] hover:text-white-white_100 hover:bg-purple-purple_200 rounded-[30px]'>1</button>
                        <button className='py-[6px] px-[12.5px] hover:text-white-white_100 hover:bg-purple-purple_200 rounded-[30px]'>2</button>
                        <button className='py-[6px] self-end'><img src="src/assets/icons/dotid.svg" alt="dots" /></button>
                        <button className='py-[6px] px-[12.5px] hover:text-white-white_100 hover:bg-purple-purple_200 rounded-[30px]'>10</button>
                        <button className='py-[6px]'><img src="src/assets/icons/leftblue.svg" alt="right" /></button>

                    </div>

                </div>
            </section>
        </>
    )
}

export default applewatch
