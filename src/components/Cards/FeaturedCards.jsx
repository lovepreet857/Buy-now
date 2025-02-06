import React from 'react'

const FeaturedCards = ({Image ,imge1,imge2,imge3,Paragraph,Price,offre,imge12,Buy}) => {
  return (
    <>
    <div className=' max-w-[270px] w-full border transition-all hover:scale-105 duration-300 ease-in hover:shadow-xl rounded-[10px] bg-[#42265914] ]'>
                                    <div className=' relative'>
                                           <img className=' absolute top-5 left-5' src={`src/assets/icons/${offre}`} alt="" />

                                        <img className=' absolute right-[31px] top-[10px]' src={`src/assets/icons/${imge1}`} alt="" />
                                        <div className='max-w-[270px] h-[240px] p-10 w-full '>

                                            <img className='' src={`src/assets/Images/${Image}`} alt="gsdjfs" />

                                        </div>
                                        <div className='flex justify-center gap-2'>
                                            <div className='w-[8px] h-[8px] rounded-[50%] bg-[#E57373]'></div>
                                            <div className='w-[8px] h-[8px] rounded-[50%] bg-[#FFB400]'></div>
                                            <div className='w-[8px] h-[8px] rounded-[50%] bg-[#EC407A]'></div>
                                            <div className='w-[8px] h-[8px] rounded-[50%] bg-[#2E1A3E]'></div>
                                        </div>
                                        <div className='max-w-[270px] w-full py-5 px-5 '>
                                            <p className='sm:text-base text-center md:text-sm text-gray-gray_200 h-[48px] max-w-[230px] font-font_inter' >{Paragraph}</p>
                                            <div className='flex items-center justify-between  border-t mt-[10px] pt-[10px]'>
                                                <p className=' hover:text-yellow-yellow_101 font-font_heebo text-[20px]'>{Price}</p>
                                                <button className='py-[6px] px-2'>
                                                    <div className='flex gap-2 w-[54px] items-center text-purple-purple_100'>
                                                        <p>{Buy}</p>
                                                        <img src={`src/assets/icons/${imge12}`} alt="" />
                                                    </div>
                                                </button>
                                                <div className=' group'>
                                                    <img className=' hidden group-hover:block' src={`src/assets/icons/${imge2}`} alt="" />
                                                    <img className=' group-hover:hidden' src={`src/assets/icons/${imge3}`} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                              
    </>
  )
}
export default FeaturedCards
