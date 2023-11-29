import React from 'react'
import Card from './Card'

const Display = () => {
  return (
    <div className='grid grid-cols-1 px-5 sm:grid-cols-2  md:grid-cols-3 w-full md:w-[50%] m-auto gap-8'>
        <Card title={"Free"} price={0} />
        <Card title={"Base plan"} price={29.99} />
        <Card title={"Premium"} price={34.99} />
    </div>
  )
}

export default Display