import React from 'react'

const Calculator = () => {
  return (
    <div className='h-screen flex items-center justify-center w-80 mx-auto rounded-xl overflow-hidden'>
        <div className='bg-gray-500 text-white text-right text-5xl h-115 space-y-0.5'><div>0</div>
            <div className='grid grid-cols-4 gap-0.5 text-black w-full'>
                <button className='bg-gray-200 flex items-center justify-center p-4'>AC</button>
                <button className='bg-gray-200 flex items-center justify-center p-4'>+/-</button>
                <button className='bg-gray-200 flex items-center justify-center p-4'>%</button>
                <button className='bg-orange-400  flex items-center justify-center p-4'>÷</button>
            </div>
            <div className='grid grid-cols-4 gap-0.5 text-black w-full'>
                <button className='bg-gray-200 flex items-center justify-center p-4'>7</button>
                <button className='bg-gray-200 flex items-center justify-center p-4'>8</button>
                <button className='bg-gray-200 flex items-center justify-center p-4'>9</button>
                <button className='bg-orange-400  flex items-center justify-center p-4'>÷</button>
            </div>
            <div className='grid grid-cols-4 gap-0.5 text-black w-full'>
                <button className='bg-gray-200 flex items-center justify-center p-4'>4</button>
                <button className='bg-gray-200 flex items-center justify-center p-4'>5</button>
                <button className='bg-gray-200 flex items-center justify-center p-4'>6</button>
                <button className='bg-orange-400  flex items-center justify-center p-4'>-</button>
            </div>
            <div className='grid grid-cols-4 gap-0.5 text-black w-full'>
                <button className='bg-gray-200 flex items-center justify-center p-4'>1</button>
                <button className='bg-gray-200 flex items-center justify-center p-4'>2</button>
                <button className='bg-gray-200 flex items-center justify-center p-4'>3</button>
                <button className='bg-orange-400  flex items-center justify-center p-4'>+</button>
            </div>
            <div className='grid grid-cols-4 gap-0.5 text-black w-full'>
                <button className='bg-gray-200 flex col-span-2 items-center justify-center p-4'>0</button>
                <button className='bg-gray-200 flex items-center justify-center p-4'>.</button>
                <button className='bg-orange-400  flex items-center justify-center p-4'>=</button>
            </div>
            
        </div>
      
    </div>
  )
}

export default Calculator
