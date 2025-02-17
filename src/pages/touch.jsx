import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function touch() {
    const [active, setActive] = useState(false)
    return (
        <>
            <section>
                <div className='container'>
                    <div className='sm:pt-20 pt-10 border-b mb-5 md:mb-10'>
                        <p className='text-[24px] sm:text-[34px] leading-[41px] font-font_heebo  pb-[20px] sm:pb-[10px]'>Get In touch!</p>
                        <div className='flex justify-between items-center'>
                            <div className='hidden  sm:flex items-center gap-2 text-[16px] leading-[24px] pt-[10px] font-font_inter pb-[21px]'>
                                <Link to="/">  <button className='text-gray-gray_200 hover:text-yellow-yellow_102 hover:scale-105 duration-300 ease-in' >Home</button> </Link>
                                <button onClick={() => setActive(!active)}>
                                    <img className={`transition-all duration-300 ${active && "rotate-90"}`} src="src/assets/icons/leftblue.svg" alt="" />
                                </button>
                                <p>Contact us</p>
                            </div>

                        </div>
                    </div>
                    <div className='md:flex md:justify-between justify-items-center'>
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
                            {/* <img className='w-full' src="src/assets/Images/map.png" alt="" /> */}
                            <iframe className='w-full sm:w-[466px] '
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55199.41529528346!2d74.19721845!3d30.152460799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917a79154f86721%3A0x4ce09ae52bb2fd93!2sAbohar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1739425419090!5m2!1sen!2sin"
                                width={600}
                                height={450}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default touch
