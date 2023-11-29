import React, { useState } from 'react'
import Display from './Display'

const Hero = () => {
    const [selectedOption, setSelectedOption] = useState('annual');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className='text-center mt-10'>
            <h1 className='px-2 md:p-0 text-4xl font-bold'>Simple Pricing for everyone</h1>
            <div className='m-auto  mt-10  h-[70px] p-2  flex justify-between w-[80%] md:w-[20%] rounded-[1100px] bg-[#E9EAFF]'>
                <button
                    onClick={() => handleOptionChange('monthly')}
                    className={`cursor-pointer transition-all ease-out duration-1000 text-xl font-semibold px-4 py-2  ${selectedOption === 'monthly' ? 'bg-[#6161FF] w-[50%] rounded-full text-white' : 'w-[50%]'
                        }`}
                >
                    Monthly
                </button>

                <button
                    onClick={() => handleOptionChange('annual')}
                    className={`cursor-pointer transition-all text-lg font-semibold ease-out duration-1000 px-4 py-2  ${selectedOption === 'annual' ? 'bg-[#6161FF] rounded-full w-[50%] text-white' : 'w-[50%]'
                        }`}
                >
                    Annual
                    <span className='block text-[12px] -mt-2'>save 20%</span>
                </button>
            </div>
            <div className='text-sm font-medium mt-4'>
                <p >Pricing built for businesses of all sizes</p>
                <p>Always know what you'll pay.</p>
            </div>
            <div className='mt-10'>
                <Display />
            </div>
        </div>
    )
}

export default Hero