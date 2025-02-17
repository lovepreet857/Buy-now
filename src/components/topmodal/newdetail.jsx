import React, { useRef } from 'react'
import bestdata from '../../json/bests2.json'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
function newdetail() {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  return (
    <>
      <section>
        <div className="container">
          <div className="flex justify-between pt-20 pb-10">
            <h1 className=' text-[20px] md:text-[34px] font-font_heebo'>New Arrivals Products</h1>
            <div className="flex gap-[10px] self-end">
              <button ref={prevRef}
                className="flex items-center justify-center w-[46px]  h-[26px] md:h-[46px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300"
              >
                <img src="src/assets/icons/Laftarronew.svg" alt="left" />
              </button>
              <button ref={nextRef}
                className=" flex items-center justify-center w-[46px]  h-[26px] md:h-[46px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300"
              >

                <img src="src/assets/icons/Rightarrownew.svg" alt="right" />
              </button>
            </div>
          </div>


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
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper"
          >
            {
              bestdata.map((items, index) => (
                <SwiperSlide key={index + Date.now() + items}>
                  <div className=' p-[30px] max-w-[270px] w-full border rounded-[20px] hover:shadow-lg duration-300 ease-in'>
                    <div>
                      <img className='hover:scale-105 duration-300 ease-in hover:shadow-lg ' src={`src/assets/Images/${items.img1}`} alt="" />
                      <div className='w-[161px] pt-5 grid gap-[10px]  justify-items-center text-[20px] font-font_heebo'>
                        <p>Bluetooth watchs</p>
                        <img className='' src="src/assets/icons/Rating.svg" alt="" />
                        <p className='text-[24px]'>{items.prec}</p>
                        <button className='py-[6px] px-2'>
                          <div className='flex gap-2 w-[54px] items-center text-purple-purple_100'>
                            <p>Buy</p>
                            <img src="src/assets/icons/Arrowlineright.svg" alt="" />
                          </div>
                        </button>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>

        </div>
      </section>
    </>
  )
}

export default newdetail
