import React from 'react'
import bestdata from '../../json/bests.json'
import appldata from '../../json/appl.json'
import { data, Link } from 'react-router-dom'


function Bestselling() {
    return (
        <>
        <section>

            <div className='container'>
                <div className='newcard1 md:cardhaeding pb-10 '>
                    <p>Best selling products</p>
                </div>
                <div className='flex justify-between pb-20 justify-self-center'>


                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-[24px]'>
                        {
                            bestdata.map((items, index) => (
                                 <div key={index + Date.now() + items}>
                                    <div className=' p-[30px] max-w-[270px] w-full border rounded-[20px] hover:shadow-lg duration-300 ease-in'>
                                        <div>
                                            <img className='hover:scale-105 duration-300 ease-in hover:shadow-lg ' src={`src/assets/Images/${items.img1}`} alt="" />
                                            <div className='w-[161px] pt-5 grid gap-[10px]  justify-items-center'>
                                                <p className='newcard'>Bluetooth watchs</p>
                                                <img className='' src="src/assets/icons/Rating.svg" alt="" />
                                                <p className='newcard1'>{items.prec}</p>
                                                <button className='py-[6px] px-2'>
                                                    <div className='flex gap-2 w-[54px] items-center newbye'>
                                                        <p>Buy</p>
                                                        <img src="src/assets/icons/Arrowlineright.svg" alt="" />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                        <div className=' px-[30px] pt-20 pb-[50px] max-w-[270px] w-full border rounded-[20px] transition-all hover:scale-105 duration-300 ease-in bg-[url(src/assets/Images/bgimg.png)] bg-cover'>
                            <div className=' pb-[119px] text-white-white_100'>
                                <p className='newcard'>Product for you</p>
                                <p className='newpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu nulla nunc aenean ac donec lectus in vel.</p>
                            </div>
                            <Link to="/Card"><button className='w-[210px] bg-purple-purple_200 button1 rounded-[30px] py-2 hover:scale-105 duration-300 ease-in '>View all</button></Link>
                        </div>
                    </div>

                </div>
                <div className='grid md:grid-cols-2 justify-between gap-5'>
                    {
                        appldata.map((item, index) => (
                            <div key={index + Date.now() + item}>
                                <div className='md:flex hover:scale-105 duration-300 ease-in hover:shadow-lg justify-between max-w-[564px] w-full p-5 border rounded-[20px] bg-gradient-to-l from-[#42265914]'>
                                    <div className=' max-w-[254px] '>
                                        <div className='w-[151px] pb-5 '>
                                            <p className=' pb-[15px] cardhaeding'>{item.off}</p>
                                            <p className=' pb-[15px] newpara'>{item.name}</p>
                                            <p className='bannertext3'>{item.price}</p>
                                        </div>
                                        <img className='pb-5' src={`src/assets/icons/${item.line}`} alt="" />
                                        
                                        <img src={`src/assets/icons/${item.tags}`} alt="" />
                                    </div>
                                    <div className='w-[250px] hover:scale-105 duration-300 ease-in'>
                                        <img src={`src/assets/Images/${item.imges}`} alt="" />
                                    </div>

                                </div>


                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
        </>
    )
}

export default Bestselling