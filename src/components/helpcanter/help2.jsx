import React, { useState } from 'react'

function help2() {
    const [button1,setButton1] = useState(false)
    const [button2,setButton2] = useState(false)
    const [button3,setButton3] = useState(false)
    const [button4,setButton4] = useState(false)
    const [button5,setButton5] = useState(false)




    return (
        <>
            <section>
                <div className='container'>
                    <div className=' p-[15px] sm:p-[50px] border rounded-[20px] w-full'>
                        <div className='flex justify-between items-center py-[10px] sm:py-5 text-[16px] font-font_inter'>
                            <p>Sed eu, fames at accumsan vitae in tristique turpis.</p>
                            <button onClick={()=> setButton1(!button1)}>

                                <img className={`transition-all duration-300 ${button1 && "rotate-180"}`} src="src/assets/icons/Newvictor2blue.svg" alt="" />
                            </button>
                        </div>
                       <p className={`transition-all duration-300 text-gray-gray_200 text-[16px]   font-font_inter ${button1 ? "h-[72px]  overflow-hidden p-[8px_16px_16px_16px]":"h-0 p-0 overflow-hidden"}`} >Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.</p>

                        <div className='flex justify-between items-center py-[10px] sm:py-5 text-[16px] font-font_inter border-y'>
                            <p className='py-3'>Eget gravida sapien, volutpat blandit ut sem.</p>
                            <button onClick={()=> setButton2(!button2)}>

                                <img className={`transition-all duration-300 ${button2 && "rotate-180"}`} src="src/assets/icons/Newvictor2blue.svg" alt="" />
                            </button>
                        </div>
                        <p className={`transition-all duration-300 text-gray-gray_200 text-[16px]   font-font_inter ${button2 ? "h-[72px]  overflow-hidden p-[8px_16px_16px_16px]":"h-0 p-0 overflow-hidden"}`} >Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.</p>

                        <div className='flex justify-between items-center py-[10px] sm:py-5 text-[16px] font-font_inter border-y'>
                            <p className='py-3'>Sed dui dolor commodo auctor tristique.</p>
                            <button onClick={()=> setButton3(!button3)}>

                                <img className={`transition-all duration-300 ${button3 && "rotate-180"}`} src="src/assets/icons/Newvictor2blue.svg" alt="" />
                            </button>
                        </div>
                        <p className={`transition-all duration-300 text-gray-gray_200 text-[16px]   font-font_inter ${button3 ? "h-[72px]  overflow-hidden p-[8px_16px_16px_16px]":"h-0 p-0 overflow-hidden"}`} >Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.</p>

                        <div className='flex justify-between items-center py-[10px] sm:py-5 text-[16px] font-font_inter border-y'>
                            <p className='py-3'>Ac iaculis turpis maecenas tellus.</p>
                            <button onClick={()=> setButton4(!button4)}>

                                <img className={`transition-all duration-300 ${button4 && "rotate-180"}`} src="src/assets/icons/Newvictor2blue.svg" alt="" />
                            </button>
                        </div>
                        <p className={`transition-all duration-300 text-gray-gray_200 text-[16px]   font-font_inter ${button4 ? "h-[72px]  overflow-hidden p-[8px_16px_16px_16px]":"h-0 p-0 overflow-hidden"}`} >Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.</p>

                        <div className='flex justify-between items-center py-[10px]  sm:py-5 text-[16px] font-font_inter border-y  '>
                            <p className='py-3'>Dignissim tortor vitae massa vel, id amet.</p>
                            <button onClick={()=> setButton5(!button5)}>

                                <img className={`transition-all duration-300 ${button5 && "rotate-180"}`} src="src/assets/icons/Newvictor2blue.svg" alt="" />
                            </button>
                        </div>
                        <p className={`transition-all duration-300 text-gray-gray_200 text-[16px]   font-font_inter ${button5 ? "h-[72px]  overflow-hidden p-[8px_16px_16px_16px]":"h-0 p-0 overflow-hidden"}`} >Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.</p>

                    </div>

                </div>
            </section>

        </>
    )
}

export default help2
