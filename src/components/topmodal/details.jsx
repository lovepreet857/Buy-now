import React, { useState } from 'react'
import Detail from '../../json/detail.json'
import New from '../../json/Filter.json'


function details() {
  const [active, setActive] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [button, setButton] = useState(false)
  const [color, setColor] = useState(false);
  return (
    <>
      <section>
        <div className='container'>
          <div className=' sm:py-20 pt-10 pb-5 '>
            <p className='text-[24px] sm:text-[34px] leading-[41px] font-font_heebo pb-[14px] sm:border-none border-b sm:pb-[10px]'>Top deals</p>
            <div className='hidden  sm:flex items-center gap-2 text-[16px] pb-5 border-b   leading-[24px] pt-[10px] font-font_inter'>
              <button className='text-gray-gray_200 hover:text-yellow-yellow_102 hover:scale-105 duration-300 ease-in' >Home</button>
              <button onClick={() => setButton(!button)}>
                <img className={`transition-all duration-300 ${button && "rotate-90"}`} src="src/assets/icons/leftblue.svg" alt="" />
              </button>
              <p>Products</p>
            </div>
          </div>
          <div className=' sm:flex justify-between pb-6'>
            <div className='hidden sm:block'>
              <p className='pb-[10px] text-[20px] font-font_heebo'>All deals</p>
              <p className='hidden sm:block font-font_inter text-gray-gray_200 text-[16px]'>Showing 1–9 of 200 results</p>
            </div>
            <div className=' md:max-w-[233px] w-full  h-[36px] flex justify-between leading-[24px] text-[14px] text-purple-purple_100 font-font_inter'>
                            <button onClick={() => setArrow(!arrow)} className='py-[6px] relative  px-4 border rounded-[20px] max-w-[104px]  w-full flex items-center gap-2 hover:scale-105 duration-300 ease-in hover:shadow-lg '>Filter <img src="src/assets/icons/filter (2).svg" alt="" /></button>

                            <button className='py-[6px] px-4 border rounded-[20px] max-w-[104px] w-full flex items-center gap-2 hover:scale-105 duration-300 ease-in hover:shadow-lg '>Sort by <img src="src/assets/icons/bluedowne (2).svg" alt="" /></button>

                            {
                                arrow && (<>
                                    <div className=' max-w-[270px] absolute z-50 top-[270px] right-[45px] sm:top-[430px] lg:right-[175px]  bg-white-white_100 w-full rounded-[20px] border'>
                                        <div className='flex justify-between py-[32px] px-5 border-b'>
                                            <p className='text-[20px] font-font_heebo leading-[32px]'>Filter</p>
                                            <button onClick={() => setArrow(!arrow)}>

                                                <p className='text-[14px] font-font_inter leading-6 text-purple-purple_200'>Clear all</p>
                                            </button>
                                        </div>
                                        <div className='mt-[10px] p-5 border-b'>
                                            <div className='flex justify-between pb-[10px] font-font_inter text-[16px]'>
                                                <p>Category</p>
                                                <button onClick={() => setActive(!active)}>

                                                    <img className={`transition-all duration-700 ${active && "rotate-180"}`} src="src/assets/icons/Newvector.svg" alt="" />
                                                </button>
                                            </div>
                                            <div className={` transition-all duration-300 overflow-hidden   ${active ? "h-[291px]" : "h-0"
                                                }`}>
                                                {
                                                    New.map((item, index) => (
                                                        <div key={index + Date.now() + item}>

                                                            <p className={`transition-all duration-700 ease-in  ${active && "w-full  hover:bg-white-white_200 rounded-[20px] py-1 pl-4 font-font_inter text-[14px] text-gray-gray_200"}`}>{item.name}</p>


                                                        </div>
                                                    ))
                                                }


                                            </div>
                                            <button onClick={() => setActive(!active)}>
                                                <p className='font-font_inter text-[16px] text-purple-purple_200'>View all</p>
                                            </button>
                                        </div>
                                        <div className='my-[10px] p-5 border-b'>
                                            <div className='flex justify-between pb-[10px] font-font_inter text-[16px] text-black-black_300'>
                                                <p>Price</p>
                                                <button>
                                                    <img src="src/assets/icons/Newvector.svg" alt="" />
                                                </button>
                                            </div>
                                            <div>
                                                <input className='w-full py-[21px] ' type="range" name="" id="" />
                                            </div>
                                            <div className=' flex justify-between font-font_inter text-[14px] text-gray-gray_200'>
                                                <p>low: $50.00</p>
                                                <p>High: $500.00</p>
                                            </div>
                                        </div>
                                        <div className='p-5 mb-[10px] border-b'>
                                            <div onClick={() => setColor(!color)} className='cursor-pointer flex justify-between pb-[10px] font-font_inter text-[16px] text-black-black_300 '>
                                                <p>Color</p>
                                                <img className={`transition-all duration-700 ${color && "rotate-180"}`} src="src/assets/icons/Newvector.svg" alt="" />
                                            </div>
                                            <div className={` transition-all duration-300 overflow-hidden grid grid-cols-6 ${color ? "h-[94px]" : "h-0"
                                                }`}>
                                                {["#1F292D", "#1976D2", "#81C784", "#4DD0E1", "#4DB6AC", "#78909C", "#67517A", "#FF8A65", "#FFB74D",
                                                    "#BA68C8"].map((items, index) => (
                                                        <div key={index + Date.now() + items}>
                                                        <div className=' hover:border rounded-full w-[25px] h-[25px] p-[3px]'>
                                                            <div key={index} style={{ backgroundColor: items }} className=" rounded-full h-full w-full  "></div>
                                                        </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                        <div className='p-5 mb-[10px] border-b'>
                                            <div className='flex justify-between pb-[10px] font-font_inter text-[16px] text-black-black_300 rounded-[5px]'>
                                                <p>Brands</p>
                                                <button>
                                                    <img src="src/assets/icons/Newvector.svg" alt="" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className='p-5 mb-[10px] border-b'>
                                            <div className='flex justify-between pb-[10px] font-font_inter text-[16px] text-black-black_300 rounded-[5px]'>
                                                <p>Customer review</p>
                                                <button>
                                                    <img src="src/assets/icons/Newvector.svg" alt="" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='p-5 mb-[10px] border-b'>
                                            <div className='flex justify-between pb-[10px] font-font_inter text-[16px] text-black-black_300 rounded-[5px]'>
                                                <p>Discount</p>
                                                <button>
                                                    <img src="src/assets/icons/Newvector.svg" alt="" />
                                                </button>
                                            </div>
                                        </div>


                                    </div>
                                </>)
                            }

                        </div>
            <div className='sm:hidden py-[10px]'>
              <p className='sm:pb-[10px] text-[20px] font-font_heebo'>All deals</p>
              <p className=' pt-[10px]  font-font_inter text-gray-gray_200 text-[14px] '>Showing 1–9 of 200 results</p>
            </div>
          </div>
          <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center'>
          {
                Detail.map((item,index)=>(
                  <div key={index + Date.now() + item} className=' max-w-[270px] w-full border transition-all hover:scale-105 duration-300 ease-in hover:shadow-xl rounded-[10px] bg-[#42265914] ]'>
                  <div className=' relative'>
                        <img className=' absolute top-5 left-5' src={`src/assets/icons/${item.offre}`} alt="" />

                        <img className=' absolute right-[31px] top-[10px]' src={`src/assets/icons/${item.imge1}`} alt="" />
                        <div className='max-w-[270px] h-[240px] p-10 w-full '>

                            <img className='' src={`src/assets/Images/${item.Image}`} alt="gsdjfs" />

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className='w-[8px] h-[8px] rounded-[50%] bg-[#E57373]'></div>
                            <div className='w-[8px] h-[8px] rounded-[50%] bg-[#FFB400]'></div>
                            <div className='w-[8px] h-[8px] rounded-[50%] bg-[#EC407A]'></div>
                            <div className='w-[8px] h-[8px] rounded-[50%] bg-[#2E1A3E]'></div>
                        </div>
                        <div className='max-w-[270px] w-full py-5 px-5 '>
                            <p className='sm:text-base md:text-sm text-gray-gray_200 h-[48px] max-w-[230px] font-font_inter' >{item.Paragraph}</p>
                            <div className='flex items-center justify-between  border-t mt-[10px] pt-[10px]'>
                                <p className=' hover:text-yellow-yellow_101 font-font_heebo text-[20px]'>{item.Price}</p>
                                <button className='py-[6px] px-2'>
                                    <div className='flex gap-2 w-[54px] items-end text-purple-purple_100'>
                                        <p>{item.Buy}</p>
                                        <img src={`src/assets/icons/${item.imge12}`} alt="" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                ))
          }
          </div>
          <div className='max-w-[234px] w-full flex pt-5 gap-[6px] mx-auto justify-center font-font_inter'>
                        <button className='py-[6px] '><img src="src/assets/icons/left1.svg" alt="left" /></button>
                        <button className='py-[6px] px-[12.5px] hover:text-white-white_100 hover:bg-purple-purple_200 rounded-[30px]'>1</button>
                        <button className='py-[6px] px-[12.5px] hover:text-white-white_100 hover:bg-purple-purple_200 rounded-[30px]'>2</button>
                        <button className='py-[6px] self-end'><img src="src/assets/icons/dotid.svg" alt="dots" /></button>
                        <button className='py-[6px] px-[12.5px] hover:text-white-white_100 hover:bg-purple-purple_200 rounded-[30px]'>10</button>
                        <button className='py-[6px]'><img src="src/assets/icons/leftblue.svg" alt="right" /></button>

                    </div>
        </div>
      </section>
    </>
  )
}

export default details