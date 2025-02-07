import React, { useRef } from 'react'
import ArrivalCard from '../Cards/ArrivalCard'
import jsonarrivalmap from '../../json/NewData.json'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const Newarivalpart = () => {
  const swiperRef = useRef();
  return (
    <>
      <div className="container">
        <div className="flex justify-between pt-20 pb-10">
          <h1 className=' text-[20px] md:text-[34px] font-font_heebo'>New Arrivals Products</h1>
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

                jsonarrivalmap.map((item, index) => (
                  <SwiperSlide className='w-[270px]' key={item + index + Date.now()}>
                    <Link to={item.to}>
                      <ArrivalCard newadd={item.newadd} Images={item.Images} Name={item.Name} Rating={item.Rating} Price={item.Price} Cart={item.Cart} />
                    </Link>
                  </SwiperSlide>
                ))

              } </Swiper>

          </div>
        
      </div>
    </>
  )
}

export default Newarivalpart
