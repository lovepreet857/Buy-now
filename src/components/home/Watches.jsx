import React from 'react'
import Category from "../../json/Watches.json"
import { Link } from 'react-router-dom'

export default function Featured() {
  return (
    <>
    
    
      <div className='container'>
      <div className='max-w-[1152px] w-full pb-10'>
        <h1 className='font-font_heebo text-[34px] pb-5 text-black-black_100'>Category products Collections</h1>
        <div className=' overflow-x-auto overflow-y-hidden flex gap-3 list-none md:justify-between border-b text-[14px] font-font_inter text-gray-gray_200  '>
          {
            ["Watches","Mobiles","Laptops","Tablets","Headphones","Printers","Scanners","Speakers","Compu-ters","Smart tv.","Monitors"].map((item,index)=>(
              <div key={index + Date.now() + item}>
                <Link to={item.to}>
                <li className=' hover:border-b-[2px] hover:border-[#422659] pb-3 hover:text-yellow-yellow_102 hover:scale-105 duration-300 ease-in '>{item}</li>
                </Link>
              </div>
            ))
          }
          
          <img className='' src="src/assets/icons/arosr.svg" alt="" />
        </div>
      </div>
      <div className='grid grid-cols-2 xl:grid-cols-3 justify-between gap-6 '>
        {Category.map((item, index) => (
          <div key={index + Date.now() + item}>
            <Link to={item.to}>

              <div className='max-w-[365px] w-full grid justify-items-center py-5 border rounded-[20px] bg-pink-pink_1 hover:scale-105 duration-300 ease-in hover:shadow-lg'>
                <h1 className='text-[20px] font-font_heebo'>{item.head}</h1>
              
                <div className='grid grid-cols-2 '>
                  <img className=' rounded-tl-[20px]' src={`src/assets/Images/${item.watch1}`} alt="" />
                  <img  className='rounded-tr-[20px]' src={`src/assets/Images/${item.watch2}`} alt="" />
                  <img  className='rounded-bl-[20px]'src={`src/assets/Images/${item.watch3}`} alt="" />
                  <img className='rounded-br-[20px]' src={`src/assets/Images/${item.watch4}`} alt="" />
                </div>

                <button className='flex items-center max-w-[108px] w-full py-[6px] px-2 justify-between font-font_inter text-purple-purple_100'>{item.button}
                  <img src={`src/assets/icons/${item.right}`} alt="" />
                </button>
              </div>

            </Link>
          </div>

        ))
        }
      </div>

    </div>
    </>
  )
}
