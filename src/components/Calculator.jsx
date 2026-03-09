import React from 'react'
import { useState } from 'react'
import { evaluate } from 'mathjs'


const Calculator = () => {
    const [displayNum, setDisplayNum] = useState('0')
    const [pov_nev_toggle, set_pov_nev_toggle] = useState('')


    function handleDisplay(value)
    {
        if(displayNum==='0')
        {
            setDisplayNum(value)
        }
        else{
            setDisplayNum(displayNum+value)
        }
    }
    function handleDelete()
    {
        if(displayNum.length === 1)
        {
            setDisplayNum('0')
        }
        else{
            setDisplayNum(displayNum.slice(0,-1))
        }
    }

    function handleEquals()
    {
        try{
            const result = Number((evaluate(displayNum)).toFixed(10))
            setDisplayNum(String(result))
        }
        catch
        {
            setDisplayNum('IMPOSSIBLE')
        }
    }

    function handleSign()
    {
        if(displayNum===0) return
        if(displayNum.startsWith('-')) setDisplayNum(displayNum.slice(1))
        else setDisplayNum('-'+displayNum)
    }
  return (
    <div className='h-screen flex items-center justify-center w-80 mx-auto rounded-xl overflow-hidden'>
        <div className='bg-gray-500 text-white text-right text-5xl h-115 space-y-0.5'><div>{displayNum}</div>
            <div className='grid grid-cols-4 gap-0.5 text-black w-full'>
                <button onClick={handleDelete} className='bg-gray-200 flex items-center justify-center p-4'>AC</button>
                <button onClick={handleSign} className='bg-gray-200 flex items-center justify-center p-4'>+/-</button>
                <button onClick={()=>handleDisplay('%')} className='bg-gray-200 flex items-center justify-center p-4'>%</button>
                <button onClick={()=>handleDisplay('/')} className='bg-orange-400  flex items-center justify-center p-4'>÷</button>
            </div>
            <div className='grid grid-cols-4 gap-0.5 text-black w-full'>
                <button onClick={()=>handleDisplay('7')} className='bg-gray-200 flex items-center justify-center p-4'>7</button>
                <button onClick={()=>handleDisplay('8')} className='bg-gray-200 flex items-center justify-center p-4'>8</button>
                <button onClick={()=>handleDisplay('9')} className='bg-gray-200 flex items-center justify-center p-4'>9</button>
                <button onClick={()=>handleDisplay('*')} className='bg-orange-400  flex items-center justify-center p-4'>X</button>
            </div>
            <div className='grid grid-cols-4 gap-0.5 text-black w-full'>
                <button onClick={()=>handleDisplay('4')} className='bg-gray-200 flex items-center justify-center p-4'>4</button>
                <button onClick={()=>handleDisplay('5')} className='bg-gray-200 flex items-center justify-center p-4'>5</button>
                <button onClick={()=>handleDisplay('6')} className='bg-gray-200 flex items-center justify-center p-4'>6</button>
                <button onClick={()=>handleDisplay('+')} className='bg-orange-400  flex items-center justify-center p-4'>-</button>
            </div>
            <div className='grid grid-cols-4 gap-0.5 text-black w-full'>
                <button onClick={()=>handleDisplay('1')} className='bg-gray-200 flex items-center justify-center p-4'>1</button>
                <button onClick={()=>handleDisplay('2')} className='bg-gray-200 flex items-center justify-center p-4'>2</button>
                <button onClick={()=>handleDisplay('3')} className='bg-gray-200 flex items-center justify-center p-4'>3</button>
                <button onClick={()=>handleDisplay('+')} className='bg-orange-400  flex items-center justify-center p-4'>+</button>
            </div>
            <div className='grid grid-cols-4 gap-0.5 text-black w-full'>
                <button onClick={()=>handleDisplay('0')} className='bg-gray-200 flex col-span-2 items-center justify-center p-4'>0</button>
                <button onClick={()=>handleDisplay('.')} className='bg-gray-200 flex items-center justify-center p-4'>.</button>
                <button onClick={handleEquals} className='bg-orange-400  flex items-center justify-center p-4'>=</button>
            </div>
            
        </div>
      
    </div>
  )
}

export default Calculator
