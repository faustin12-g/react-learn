import React from 'react'

const Form1 = () => {
    function handleForm(e)
    {
        const formEl = e.currentTarget
        const formDate = new FormData(formEl)
        const email = formDate.get('firstName')
        console.log(`${email}`)
        formEl.reset()

    }

  return (
    <section className='mx-auto w-full max-w-lg'>
      <form onSubmit={handleForm} className='space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8'>
        <header className='space-y-1'>
          <h2 className='text-2xl font-semibold tracking-tight text-slate-900'>Personal Information</h2>
          <p className='text-sm text-slate-600'>Please fill in your details below.</p>
        </header>

        <div className='space-y-5'>
          <label htmlFor='firstName' className='block space-y-2'>
            <span className='text-sm font-medium text-slate-700'>First Name</span>
            <input
              id='firstName'
              name='firstName'
              type='text'
              placeholder='Enter first name'
              className='w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
            />
          </label>

          <label htmlFor='lastName' className='block space-y-2'>
            <span className='text-sm font-medium text-slate-700'>Last Name</span>
            <input
              id='lastName'
              name='lastName'
              type='text'
              placeholder='Enter last name'
              className='w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
            />
          </label>
          <label htmlFor='lastName' className='block space-y-2'>
            <span className='text-sm font-medium text-slate-700'>Bio</span>
            <textarea
              id='bio'
              name='bio'
              placeholder='Tell the people what you want them to know about you'
              className='w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
            />
          </label>
          <fieldset className='space-y-3 rounded-xl border border-slate-200 bg-slate-50/70 p-4'>
            <legend className='px-1 text-sm font-semibold text-slate-800'>
              Employment status
            </legend>

            <label htmlFor='status-student' className='flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-white'>
              <input
                id='status-student'
                name='employmentStatus'
                type='radio'
                value='student'
                className='h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-200'
              />
              <span className='text-sm text-slate-700'>Student</span>
            </label>

            <label htmlFor='status-employed' className='flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-white'>
              <input
                id='status-employed'
                name='employmentStatus'
                type='radio'
                value='employed'
                className='h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-200'
              />
              <span className='text-sm text-slate-700'>Employed</span>
            </label>

            <label htmlFor='status-unemployed' className='flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-white'>
              <input
                id='status-unemployed'
                name='employmentStatus'
                type='radio'
                value='unemployed'
                className='h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-200'
              />
              <span className='text-sm text-slate-700'>Unemployed</span>
            </label>
        </fieldset>
         
        </div>

        <button
          type='submit'
          className='inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300'
        >
          Submit
        </button>

      </form>

    </section>
  )
}

export default Form1
