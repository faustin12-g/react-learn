import React from 'react'
import MALE from '../assets/male.png'
import FEMALE from '../assets/female.png'

const Person = () => {
    const [contact, SetContact] = React.useState({
        firstName: 'Faustin',
        lastName: 'Nshimiyimana',
        phone: '+250 791 894 346',
        email: 'nshimiefaustinpeace@gmail.com',
        black: false

    }
)

    let picon = contact.black? FEMALE: MALE
    function handletoggle()
    {
        SetContact(prev=>{
            return{
                ...prev,
                black: !prev.black
            }
        })
    }

  return (
    <main className="mx-auto max-w-xl">
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <img
                    src={MALE}
                    className="h-56 w-full object-cover"
                    alt="User profile picture"
                />
                <div className="space-y-4 p-6">
                    <button
                        type="button"
                        onClick={handletoggle}
                        aria-pressed={contact.black}
                        aria-label={contact.black? 'Toggle to white': 'Toggle to black'}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition hover:bg-slate-100"
                    >
                        <img
                            src={picon}
                            alt="favorite icon"
                            className="h-5 w-5"
                        />
                    </button>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="text-sm text-slate-600">{contact.phone}</p>
                    <p className="text-sm text-slate-600">{contact.email}</p>
                </div>

            </article>
        </main>
  )
}

export default Person
