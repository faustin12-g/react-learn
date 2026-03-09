import React, { useState } from 'react'

const Main = () => {
    const [igr, setIgr] = useState([])

    const igrLists = igr.map((item, index)=>(
                    <li key={index} className='text-gray-700 hover:text-gray-500 transition cursor-pointer'>{item}</li>
                ))

    function handleSubmit(formData)
    {
        const data = formData.get('ingridients')
        setIgr(prev=>[...prev, data])

    }


  return (
    <main className='mx-auto max-w-3xl rounded-lg mt-6 border-2 border-purple-200 bg-white'>
        <form className="space-y-4" action={handleSubmit}>
            <div className="flex items-center gap-3">
                <input name='ingridients'
                className="flex-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition duration-150"
                />
                <button 
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 shadow-sm transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                + Add ingredient
                </button>
            </div>
        </form>
        <div className="mt-4 p-4 border-t border-gray-200 rounded-b-2xl">
            <h3 className="font-semibold mb-3 text-gray-800 text-lg">Ingredients:</h3>
            <ul className="list-disc list-inside space-y-2">
                {igrLists}
            </ul>

        </div>
    </main>
  )
}

export default Main
