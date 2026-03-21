import React, { createContext, useContext, useState }from 'react'

const ThemeContext = createContext()
const ThemeLabel = () => {
    const {theme} = useContext(ThemeContext)
    return <p>Current theme: {theme}</p>
}

const Context = () =>
{
    const [theme]= useState('light')
    return (
        <ThemeContext.Provider value = {{theme}}>
            <div>
                <h2>useContext - First step</h2>
                <ThemeLabel />
            </div>

        </ThemeContext.Provider>
    )
}

export default Context
