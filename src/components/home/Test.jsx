import React, { useEffect, useState } from 'react'
const Test = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className='flex items-center'>
                <button className='p-2 bg-green-300' onClick={() => setCount(count + 1)}>+</button>
                <h1>{count}</h1>
                <button className='p-2 bg-green-300' onClick={() => setCount(count - 1)}>-</button>
                <button className='p-2 bg-green-300' onClick={() => setCount(0)}>clear</button>
            </div>
            {/* <div>
            <p> {count+200}</p>
        </div> */}

        </>

    )

}

export default Test
   