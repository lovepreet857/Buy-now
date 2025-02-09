import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function touch() {
    const [active,setActive]= useState(false)
  return (
    <>
       <div className='container'>
       <div className='sm:pt-20 pt-10 pb-10 border-b sm:border-none'>
                        <p className='text-[24px] sm:text-[34px] leading-[41px] font-font_heebo  pb-[20px] sm:pb-[10px]'>Get In touch!</p>
                        <div className='flex justify-between items-center'>
                            <div className='hidden  sm:flex items-center gap-2 text-[16px] leading-[24px] pt-[10px] font-font_inter'>
                            <Link to="/">  <button className='text-gray-gray_200 hover:text-yellow-yellow_102 hover:scale-105 duration-300 ease-in' >Home</button> </Link>
                                <button onClick={() => setActive(!active)}>
                                    <img className={`transition-all duration-300 ${active && "rotate-90"}`} src="src/assets/icons/leftblue.svg" alt="" />
                                </button>
                                <p>Contact us</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className='md:flex justify-between'>
                       <div className='max-w-[662px] w-full'>
                        <p className='text-[20px] font-font_heebo pb-5'>Contact us</p>
                        <input className='border w-full rounded-[30px] py-4 px-5 mb-5' type="text" placeholder='Name' />
                        <input className='border w-full rounded-[30px] py-4 px-5 mb-5' type="Email/Phone" placeholder='Email/Phone No.' />
                       <select className='border w-full rounded-[30px] py-4 px-5 mb-5 text-[16px] text-gray-gray_200' name="" id="">
                        <option className='' value="">Select an option...</option>
                       </select>
                      <textarea className='border w-full rounded-[30px] py-4 px-5 mb-5' name="" id="" placeholder='Comment'></textarea>
                        <div className='flex gap-3 items-center py-[9px] pl-3'>
                            <input type="checkbox" name="" id="" />
                            <img src="src/assets/icons/Label.svg" alt="" />
                        </div>
                        <button className=' w-full md:max-w-[166px] py-2 px-[22px] border rounded-[30px] bg-purple-purple_100 text-white-white_100 font-font_inter mt-5'>send message</button>
                       </div>
                       <div>
                        <img src="src/assets/Images/map.png" alt="" />
                       </div>
                    </div>
       </div>
    
    </>
  )
}

export default touch
