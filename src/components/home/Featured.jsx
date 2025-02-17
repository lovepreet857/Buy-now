import React, { useRef } from 'react'

import FeaturedCards from '../Cards/FeaturedCards';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
function Featured({ data, Title }) {
    const nextRef = useRef(null);
    const prevRef = useRef(null);
    return (
        <>
          <section>
          <div className='container py-20'>
                <div className='flex md:cardhaeding newcard1  justify-between sm:pb-10 pb-5 '>
                    <p>{Title}</p>
                    <div className='sm:flex max-w-[95px] hidden w-full items-end'>
                        <button ref={prevRef}>
                            <img className='w-[22px]' src="src/assets/icons/Laftarronew.svg" alt="" />
                        </button>
                        <img src="src/assets/icons/line.svg" alt="" />
                        <button ref={nextRef}>
                            <img className='w-[22px]' src="src/assets/icons/Rightarrownew.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={24}
                        loop={true}
                          
                        modules={[Navigation]}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        breakpoints={{
                            0: {
                              slidesPerView: 1,
                            },
                            425: {
                              slidesPerView: 1.5,
                            },
                            525: {
                                slidesPerView: 2,
                              },
                            768: {
                              slidesPerView: 3,
                            },
                            1068: {
                              slidesPerView: 3.5,
                            },
                            1150:{
                                slidesPerView: 4,
                            }
                    
                        
                          }}
                        className="mySwiper"
                    >
                        {
                            data?.map((item, index) => (
                                <SwiperSlide key={index + Date.now() + item}>
                                    <FeaturedCards
                                        Buy={item.Buy}
                                        imge12={item.imge12}
                                        offre={item.offre}
                                        imge3={item.imge3}
                                        imge2={item.imge2}
                                        imge1={item.imge1}
                                        Image={item.Image}
                                        Paragraph={item.Paragraph}
                                        Price={item.Price}
                                    />
                                </SwiperSlide>
                            ))
                        }
                  
                    </Swiper>
                    <div className='flex justify-center pt-10'>
                    <button className='hover:scale-105 duration-300 ease-in py-2 px-[22px] bg-purple-purple_100 w-[209px] font-font_inter text-[15px] text-white-white_100 rounded-[30px] '>
                        <p>View all Products</p>
                    </button>
                </div>
                </div>
            </div>
          </section>

        </>
    )
}

export default Featured