import React from 'react'
import { Link } from 'react-router-dom'
import footerdata from "../..//json/footer.json";
const Footer = () => {


  return (
    <>
      <footer>
        <div className=' md:flex max-w-[335px] mb-[-117px] pt-20 relative m-auto justify-between md:max-w-[1152px] w-full rounded-[20px] pb-10 md:px-[50px] items-end bg-white-white_100'>
          <div className='pb-[30px] md:pb-0 max-w-[441px] text-center md:text-left grid justify-center gap-5'>
            <img className='px-[90px] md:px-0' src="src/assets/icons/footnew.svg" alt="" />
            <p className='text-black-black_100 text-[20px] md:text-[34px] md:leading-[41.99px] font-font_heebo'>Subscribe to our newsletter</p>
            <p className='text-gray-gray_100 font-font_inter'>Get 10% discount</p>
          </div>
          <div className='  flex  justify-between max-w-[346px] w-full h-[56px] border rounded-[30px] px-5 py-[15px]'>
            <input className=' border-none outline-none text-gray-gray_100 font-font_inter' type="email" placeholder='Enter your email...' />
            <img className='max-w-6 w-full' src="src/assets/icons/newsarch.svg" alt="" />
          </div>
        </div>
        <div className='bg-black-black_100 pt-[115px]'>  {/*main-container*/}


          <div className="container ">
            <div className='max-w-[1152px] w-full'>
              <div className=' md:flex py-20 text-white-white_100 justify-between'>
                <div className='grid justify-center'>
                  <div className='max-w-[421px] w-full pb-[49.5px]'>
                    <div className='flex pb-10 gap-10 font-font_heebo'>
                      <p>About</p>
                      <img src="src/assets/icons/a.svg" alt="" />
                    </div>
                    <p className='text-gray-gray_100 font-font_inter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit sem tortor dui mattis vulputate fermentum. Turpis nisi, nulla interdum luctus.</p>
                  </div>
                  <div className='max-w-[271px] w-full font-font_inter'>
                    <div className='flex gap-3 border-b border-gray-gray_100 pb-4'>
                      <img src="src/assets/icons/Message.svg" alt="" />
                      <p>debra.holt@example.com</p>
                    </div>
                    <div className='flex gap-3 pt-4'>
                      <img src="src/assets/icons/Map marker.svg" alt="" />
                      <p>6391 Elgin St. Celina, Delaware 10299</p>
                    </div>
                  </div>
                  <div className='max-w-[288px] w-full pt-[49.5px] font-font_inter text-gray-gray_100'>
                    <p>Download the app</p>
                    <div className='flex gap-3 pt-2'>
                      <div className='flex gap-2 border rounded-[10px] px-[15px] py-[13.5px]'>
                        <img src="src/assets/icons/Apple logo.svg" alt="" />
                        <img src="src/assets/icons/Text.svg" alt="" />
                      </div>
                      <div className='flex gap-2 border rounded-[10px] px-[15px] py-[13.5px]'>
                        <img src="src/assets/icons/Google Play logo.svg" alt="" />
                        <img src="src/assets/icons/Text (1).svg" alt="" />
                      </div>
                    </div>
                  </div>


                </div>
                <div className=' bg-black-black_200 rounded-[30px] max-w-[732px] w-full: h-[497px] translate-t-10 pt-10 pb-10 px-7  grid justify-center'>
                  <div className='flex md:gap-[10px] lg:gap-[90.5px] max-w-[564px] pb-10 w-full  pt-10  md:pt-0'>
                    {
                      footerdata.map((items,index)=>(
                        <div key={index} className="flex flex-col gap-10" >
                          <p className=" font-font_heebo" >{items.head}</p>
                          <div className="flex flex-col gap-5 font-font_inter">
                        <p className="">{items.text1}</p>
                        <p className="">{items.text2}</p>
                        <p className="">{items.text3}</p>
                        <p className="">{items.text4}</p>
                        <p className="">{items.text5}</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  <div className=' max-w-[564px] w-full flex justify-between border-y border-white-white_100 py-[41.5px] font-font_inter'>
                    <p>© 2021. All rights reserved</p>
                    <div className='flex gap-11 text-gray-gray_100'>
                      <p>Help Center</p>
                      <p>Terms of Service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
