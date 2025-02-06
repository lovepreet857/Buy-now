import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {

  const [active, setActive] = useState(false);
  console.log(active, "active")
  return (
    <>
      <div className='bg-white-white_100 border-b font-font_inter'>
        <div className='bg-black-black_100 max-w-full py-3'>
          <div className='container'>
            <div className=" flex justify-between text-sm text-gray-gray_100">
              <div className='flex  gap-[10px] '>
                <img className=' hidden md:flex' src="src/assets/icons/new.svg" alt="scooty" />
                <p>Free delivery on $100.00</p>
              </div>
              <div className="flex gap-7">
                <div><p>Help center</p></div>
                <div className=' hidden md:flex'>
                  <div><p>Returns policy</p></div>
                  <div className='flex gap-2'><p>Support</p><p>(+00) 0123456789</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <nav className=' flex justify-between items-center  py-[19px] '>
            <div className='md:hidden'>
              <div className='max-w-[110px] w-full'>
                <img src="src/assets/icons/Logo.svg" alt="" />
              </div>
            </div>
            <div className=' md:hidden max-w-[112px] w-full h-5 flex gap-2  '>
              <img src="src/assets/icons/Union.jpg" alt="" />
              <img src="src/assets/icons/Badge W.Icon.svg" alt="" />
              <button>

              <img src="src/assets/icons/mainu.svg" alt="" />
              
              </button>
              
            </div>
          
            <div className=' hidden md:flex gap-[30px] md:max-w-[520px] md:w-full items-center'>
              <div className='max-w-[110px] w-full'>
                <img src="src/assets/icons/Logo.svg" alt="" />
              </div>
              <div className=' hidden lg:flex gap-2 justify-around max-w-[380px] w-full text-4 text-gray-gray_200 items-center'>
                <Link to="/"><p className=' hover:text-yellow-yellow_102 hover:scale-105 duration-300 ease-in '>Home</p></Link>
                <p className=' hover:text-yellow-yellow_102 hover:scale-105 duration-300 ease-in '>Top deals</p>
                <p className=' hover:text-yellow-yellow_102 hover:scale-105 duration-300 ease-in'>Hot offers</p>
                <p className=' hover:text-yellow-yellow_102 hover:scale-105 duration-300 ease-in'>Pages</p>
              </div>
            </div>
            <div className=' hidden md:flex md:max-w-[198px] lg:max-w-[498px] w-full justify-between'>
              <div className=' hidden lg:flex justify-between   max-w-[270px] w-full border-2  rounded-[30px] relative'>
                <div className='flex gap-2 items-center pl-3'>
                  <div className='max-w-6 w-full  pl-[3.5px]'>
                    <img src="src/assets/icons/Union.jpg" alt="" />
                  </div>
                  <input className='max-w-[214px] outline-none' type="text" placeholder='Search' />
                </div>
                <button onClick={() => setActive(!active)} className='rounded-[30px] bg-purple-purple_100 text-white-white_100 flex items-center absolute right-0 px-4 h-full gap-[6px] capitalize'>
                  all
                  <img className={`transition-all duration-300 ${active && "rotate-180"}`} src="src/assets/icons/Vector.png" alt="" />
                </button>
              </div>
              <div className=' hidden md:flex justify-between  md:max-w-[170px] lg:max-[198px]: w-full items-center'>
                <img src="src/assets/icons/Langauge.svg" alt="" />
                <img src="src/assets/icons/Rectangle 19.svg" alt="" />
                <img src="src/assets/icons/Badge W.Icon.svg" alt="" />
                <img src="src/assets/icons/Rectangle 19.svg" alt="" />
                <div className='border-[1px] hover:bg-yellow-yellow_102 duration-300 ease-in rounded-[50%] py-[10px] px-[10px]'>
                  <img   src="src/assets/icons/PersonOutlineOutlined.svg" alt="" />
                  {/* <img src="src/assets/icons/new12.svg" alt="" /> */}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
