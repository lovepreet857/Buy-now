import React, { useRef } from 'react'
import NewArrivaldata from "../Cards/ArrivalCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function NewArrivals({ Data, Title, info }) {
    const swiperRef = useRef();
    return (
        <>
            <section>
                <div className="container pt-20">
                    <div className="flex flex-col gap-10">

                        <div className="flex justify-between pb-10">
                            <div className="flex flex-col gap-5">
                                <h1 className=' text-[26px] md:text-[34px] text-center'>{Title}</h1>
                                <p className="">{info}</p>
                            </div>
                            <div className="flex gap-[10px] self-end">
                                <button onClick={() => swiperRef.current?.slidePrev()}
                                    className="flex items-center justify-center w-[46px]  h-[26px] md:h-[46px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300"
                                >
                                    <img src="src/assets/icons/Laftarronew.svg" alt="left" />
                                </button>
                                <button onClick={() => swiperRef.current?.slideNext()}
                                    className=" flex items-center justify-center w-[46px]  h-[26px] md:h-[46px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300"
                                >

                                    <img src="src/assets/icons/Rightarrownew.svg" alt="right" />
                                </button>
                            </div>
                        </div>




                    </div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={24}
                        loop={true}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={{
                            0: {
                              width: 425,
                              slidesPerView: 1.9,
                            },
                            425: {
                              width: 640,
                              slidesPerView: 2.5,
                            },
                            640: {
                              width: 768,
                              slidesPerView: 3.5,
                            },
                            768: {
                              width: 1024,
                              slidesPerView: 3.58,
                            },
                          }}
                        navigation={false}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {
                            Data.map((items, index) => (
                                <SwiperSlide key={index}>
                                    <NewArrivaldata
                                        newadd={items.newadd}
                                        Name={items.Name}
                                        Images={items.Images}
                                        Price={items.Price}
                                        Rating={items.Rating}
                                        Cart={items.Cart}
                                    />
                                </SwiperSlide>

                            ))
                        }
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default NewArrivals 