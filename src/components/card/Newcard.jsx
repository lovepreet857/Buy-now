import React, { useRef } from 'react'
import Newcard from '../../json/Newcard.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
function card() {
  const swiperRef = useRef();
  return (
    <>
      <div className='container'>
      <div className="flex justify-between pt-20 pb-10">
        <h1 className=' text-[20px] md:text-[34px] font-font_heebo'>Related item your search</h1>
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
      <div className="flex justify-between w-full ">
        <Swiper
                      slidesPerView={4}
                      spaceBetween={30}
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
        Newcard.map((items, index) => (
          <>

            <SwiperSlide key={index} className=' p-[30px] max-w-[270px] w-full border rounded-[20px] hover:shadow-lg duration-300 ease-in'>
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

            </SwiperSlide>


          </>

        ))
      }</Swiper>
      </div>
</div>
    </>
  )
}

export default card
