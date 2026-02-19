import React from 'react'

const Main = () => {
  return (
    <main className='mx-auto max-w-3xl rounded-lg mt-6 border-2 border-purple-200 bg-white'>
        <form className="space-y-4">
            <div className="flex items-center gap-3">
                <input
                type="text"
                placeholder="e.g. oregano"
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
    </main>
  )
}

export default Main
