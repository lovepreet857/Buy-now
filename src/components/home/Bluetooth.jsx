import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';


function Bluetooth() {
    return (
        <section>
            <div className='container '>
                <div className="pt-20">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}

                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            < div className=' max-w-[1152px] w-full  bg-[url(src/assets/Images/bannerBackground.png)] bg-contain  bg-no-repeat     ' >

                                <div className='sm:max-w-[503px] w-full py-5 pl-5 sm:pl-20  lg:py-[96px] md:py-[40px]'>
                                    <div className='flex items-center gap-5'>
                                        <p className=' text-[12px] md:text-[16px] text-white-white_100 font-font_heebo'>$ 108.00</p>
                                        <img src="src/assets/icons/shlash.svg" alt="/" />
                                        <p className='text-[16px] md:text-[20px] text-yellow-yellow_101 font-font_inter'>60% off</p>
                                    </div>

                                    <div className=' pb-5 max-w-[335px] '>
                                        <p className='text-white-white_100 md:text-[30px]  md:leading-[56px] leading-[30px] hidden md:grid'>Bluetooth Headphones
                                            with Mic</p>
                                        <p className='md:hidden text-[20px] text-white-white_100 leading-[30px]'>Bluetooth Headphone..</p>
                                    </div>
                                    <button className=' hover:border rounded-[20px]  hover:scale-105 transition-all duration-300 ease-in '>
                                        <img src="src/assets/icons/shopnew.svg" alt="" />
                                    </button>
                                </div>

                            </div >
                        </SwiperSlide>
                        <SwiperSlide>
                            < div className=' max-w-[1152px] w-full  bg-[url(src/assets/Images/bannerBackground.png)] bg-contain  bg-no-repeat     ' >

                                <div className='sm:max-w-[503px] w-full py-5 pl-5 sm:pl-20  lg:py-[96px] md:py-[40px]'>
                                    <div className='flex items-center gap-5'>
                                        <p className=' text-[12px] md:text-[16px] text-white-white_100 font-font_heebo'>$ 108.00</p>
                                        <img src="src/assets/icons/shlash.svg" alt="/" />
                                        <p className='text-[16px] md:text-[20px] text-yellow-yellow_101 font-font_inter'>60% off</p>
                                    </div>

                                    <div className=' pb-5 max-w-[335px] '>
                                        <p className='text-white-white_100 md:text-[30px]  md:leading-[56px] leading-[30px] hidden md:grid'>Bluetooth Headphones
                                            with Mic</p>
                                        <p className='md:hidden text-[20px] text-white-white_100 leading-[30px]'>Bluetooth Headphone..</p>
                                    </div>
                                    <button className=' hover:border rounded-[20px]  hover:scale-105 transition-all duration-300 ease-in '>
                                        <img src="src/assets/icons/shopnew.svg" alt="" />
                                    </button>
                                </div>

                            </div >
                        </SwiperSlide>
                    </Swiper>





                </div>

            </div>

        </section>
    )
}

export default Bluetooth
