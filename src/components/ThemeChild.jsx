import { useContext } from "react"
import {ThemeContext} from "./ThemeProvider"



const ThemeChild = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div 
    style={{
      backgroundColor: theme === 'light' ? '#ffffff' : '#1a1a1a',
      color: theme === 'light' ? '#000000' : '#ffffff',
      padding: '40px',
      textAlign: 'center',
      minHeight: '100vh',
      transition: 'all 0.3s ease'
    }}
    >
        <h1>Current Theme: {theme.toUpperCase()}</h1>
        <p>The background changes based on theme!</p>
        
        <button 
        onClick={toggleTheme}
        style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: theme === 'light' ? '#333' : '#fff',
            color: theme === 'light' ? '#fff' : '#333',
            border: 'none',
            borderRadius: '5px'
        }}
        >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
  </div>
  )
}

export default ThemeChild
