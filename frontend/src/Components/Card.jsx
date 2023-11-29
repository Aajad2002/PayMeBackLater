import React from 'react'

const Card = ({ title, price }) => {
    return (
        <div className='text-center hover:text-white border-r-2 py-4 rounded-xl bg-[#E9EAFF] hover:bg-[#6161FF] group'>
            <h2 className='text-md font-bold'>{title}</h2>
            <h1 className='mt-3 text-2xl  font-[700]'>${price}</h1>
            <p className='mt-1 text-xs'>Per Month</p>
            <button className='text-sm md:text-xs font-semibold mt-3 h-9 rounded-lg border-2 border-slate-300 w-[40%] text-black group-hover:bg-white'>
                Get Started
            </button>
        </div>

    )
}

export default Card