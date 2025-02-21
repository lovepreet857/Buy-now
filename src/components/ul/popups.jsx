import React from 'react'
import { Link } from 'react-router-dom'

function popups({ Acount, className }) {
    return (
        <>
            {
                Acount === "solid" && (<>
                    <div className={`max-w-[355px] p-10 rounded-[20px] border ${className} absolute z-10  backdrop-blur-3xl bg-opacity-30`}>
                        <div className='flex justify-between text400 pb-5 hover:text-yellow-yellow_102'>
                            <p>Welcome</p>
                            <img src="src/assets/icons/wtchbliue.svg" alt="watch" />
                        </div>
                        <div className='py-5 border-y flex flex-col gap-5'>
                            {
                                ["Account", "Orders", "Wishlist", "Logout"].map((item, index) => (
                                    <div key={index + Date.now() + item}>
                                        <Link to={item.to}>
                                            <p className='text500 hover:text-yellow-yellow_102'>{item}</p>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex gap-[10px] rounded-[30px] text-black-black_100 mt-5'>
                            {
                                ["Log in", "Sign up"].map((items, index) => (
                                    <div key={index + Date.now() + items}>
                                        <p className='hover:bg-purple-purple_100 transition-all duration-500 hover:text-white-white_100 textnew12 rounded-[30px] py-[6px] px-[33.75px]'>{items}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </>)
            }

            {
                Acount === "solid1" ? (<>
                    <div className={` max-w-[531px] rounded-[20px] border ${className} absolute left-0 z-10  backdrop-blur-3xl bg-opacity-30`}>
                        <div className='p-[30px] flex justify-between'>
                            <div className='pr-[30px] border-r '>
                                {
                                    ["Home - 1", "Home - 2", "Home - 3", "Home - 4"].map((item, index) => (
                                        <div key={index + Date.now() + item}>
                                            <Link to={item.to}>
                                                <p className='w-[190px] navetext1 hover:text-yellow-yellow_102 pb-[10px] mb-[10px] border-b'>{item}</p>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                <div>
                                    <img src="src/assets/Images/best1.png" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>

                </>) : (<></>)
            }
        </>
    )
}

export default popups
