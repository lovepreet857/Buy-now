import React from 'react'

const ArrivalCard = ({Images,Name,Rating,Price,Cart,newadd}) => {
    return (
        <>
            <div className="flex flex-col w-full border rounded-[20px] transition-all duration-300 ease-in hover:shadow-lg overflow-hidden">
                <div className="bg-[#FEF9F9] relative">
                    <div className=' absolute right-[10px] top-[10px] flex gap-2'>
                    <img src={`src/assets/icons/${newadd}`}alt="" />
                    <button>
                    <img src="src/assets/icons/hart.svg" alt="" />
                    </button>
                    </div>
                    <img className='p-[5px]' src={`src/assets/images/${Images}`} alt="images" />
                </div>
                <div className="flex justify-between py-5 px-[10px] w-full ">
                    <div className="flex  flex-col gap-5  w-full">
                        <div className="flex flex-col gap-1">
                            <h3 className='text-[20px] font-font_heebo'>{Name}</h3>
                            <img className='w-[90px]' src={`src/assets/icons/${Rating}`} alt="rating" />
                        </div>
                        <div className='flex justify-between w-full'>
                        <p className="text-[24px] font-font_heebo">{Price}</p>
                       
                        <div className="bg-[#422659] rounded-full p-[6.67px] ">
                        <img src={`src/assets/icons/${Cart}`} alt="cart" /> 
                    </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ArrivalCard
