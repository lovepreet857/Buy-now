import React from 'react'
const Banner = () => {

  return (
    <>
      
    <section>
    <div className='container'>
      <div className=' hidden lg:gap-5 xl:gap-0 md:flex md:justify-between py-[110px]'>
        <div>
          <div className='pl-5 max-w-[466px] pb-5 border-2 rounded-[30px] hover:scale-105 duration-300 ease-in'>
            <img src="src/assets/Images/computer.png" alt="" />
          </div>
        </div>
        <div className='max-w-[662px] w-full  lg:pr-[60px] font-font_heebo'>
          <div className=' border-b-2 pb-10  md:text-[40px] md:leading-[50px] lg:leading-[60px] xl:text-[60px] xl:lenading-[72px]'>
            <h1>Products for your need start shopping now</h1>
          </div>
          <div className='flex gap-[2px] text-xl py-10 font-font_heebo'>
            <p>For first pruches</p>
            <img src="src/assets/icons/Fire.svg" alt="" />
            <p className=' text-yellow-yellow_101 '>get 30% off</p>
          </div>
          <button className='hover:scale-105 duration-300 ease-in flex gap-2 max-w-[157px] text-white-white_100 text-[15px] bg-purple-purple_100 rounded-[30px] py-2 px-[22px] font-font_inter'>
            <img src="src/assets/icons/shop.svg" alt="" />
            <p>Shop Now</p>
          </button>
        </div>
      </div>
      <div className='md:hidden pt-[30px] pb-10 grid justify-center'>
        <div className='max-w-[335px] w-full text-center pb-10'>
          <div className=' border-b-2 pb-[30px]  text-[35px] leading-[41.99px]'>
            <h1>Products for your need start shopping now</h1>
          </div>
          <div className=' grid justify-center text-pur'>
          <div className='flex gap-[2px] text-[12px] py-[30px]'>
            <p>For first pruches</p>
            <img src="src/assets/icons/Fire.svg" alt="" />
            <p className=' text-yellow-yellow_101 '>get 30% off</p>
          </div>
          <button className=' flex gap-2 max-w-[157px] text-white-white_100 text-[15px] bg-purple-purple_100 rounded-[30px] py-2 px-[22px] font-font_inter'>
            <img src="src/assets/icons/shop.svg" alt="" />
            <p>Shop Now</p>
          </button>
          </div>
        </div>
        <div>
          <div className='pl-5 max-w-[335px] pb-5 border-2 rounded-[30px] '>
            <img src="src/assets/Images/computer.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    </section>
   
    </>
  )
}

export default Banner
