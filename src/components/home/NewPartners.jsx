import React from 'react'
function partners() {
  return (
    <>
   <section>
   <div className="container">
        <div className='flex flex-col w-full text-center font-font_heebo text-[20px] text-gray-gray_200'> 

          <p>Our partners </p>
          <div className='grid grid-cols-3 justify-items-center lg:flex justify-around pt-10 pb-2 mb-20'>
            <img className='w-[112px] transition-all hover:border rounded-[10px] hover:scale-105 duration-300 ease-in hover:shadow-lg' src="src/assets/icons/partner1.svg" alt="" />
            <img className='w-[112px] transition-all hover:border rounded-[10px] hover:scale-105 duration-300 ease-in hover:shadow-lg' src="src/assets/icons/partner2.svg" alt="" />
            <img className='w-[112px] transition-all hover:border rounded-[10px] hover:scale-105 duration-300 ease-in hover:shadow-lg' src="src/assets/icons/partner3.svg" alt="" />
            <img className='w-[112px] transition-all hover:border rounded-[10px] hover:scale-105 duration-300 ease-in hover:shadow-lg' src="src/assets/icons/partner4.svg" alt="" />
            <img className='w-[112px] transition-all hover:border rounded-[10px] hover:scale-105 duration-300 ease-in hover:shadow-lg' src="src/assets/icons/partner5.svg" alt="" />
            <img className='w-[112px] transition-all hover:border rounded-[10px] hover:scale-105 duration-300 ease-in hover:shadow-lg' src="src/assets/icons/partner6.svg" alt="" />
          </div>
           
        </div>
    </div>
   </section>
    </>
  )
}

export default partners

