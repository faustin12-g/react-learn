import { useEffect, useRef, useState } from 'react'


export default function App() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [char, setChar] = useState(false)
  const [upper, setUpper] = useState(false)
  const [lower, setLower] = useState(false)
  const [digit, setDigit] = useState(false)
  const [special, setSpecial] = useState(false)
  const [disabled, setDisabled] = useState(true)

  useEffect(()=>{
    setDisabled(!(char && upper && lower && special && digit))
  }, [char, upper, lower, digit, special]
  )
    
  function handleForm(e)
  {
    const value = e.target.value
    setPassword(value)
    if(value.length>=8)
      {
        setChar(true)
      }
      else{
        setChar(false)
      }
    if(value.split('').some(item=> item >= 'A' && item <= 'Z'))
      {
        setUpper(true)
      }
      else{
        setUpper(false)
      }
    if(value.split('').some(item=> item >= 'a' && item <= 'z'))
      {
        setLower(true)
      }
      else{
        setLower(false)}
    if(value.split('').some(item=> item >= '0' && item <= '9'))
      {
        setDigit(true)
      }
      else{
        setDigit(false)}
    if(value.split('').some(item=>!(item >= 'A' && item <= 'Z') && !(item >= 'a' && item <= 'z') && !(item >= '0' && item <= '9')))
        {
            setSpecial(true)
        }
        else{
            setSpecial(false)
        }
    
    }
    
    
  return (
    <div className="App">
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'

      }}>
        <h1 style={{
            font: 'bold',
            fontSize: '20px',

        }}>Create secure password</h1>
        <p style={{
            color: 'gray'
        }}>Enter secure password</p>
        <div style={{
            display: 'flex',
            item: 'center',
            gap: '5px'
        }}>
      <input 
      style={{
    padding: '10px 12px',         
    border: '2px solid #ccc',      
    borderRadius: '5px',          
    outline: 'none',               
    width: '250px',                
    fontSize: '16px',              
    transition: 'border-color 0.2s' 
  }}
  onFocus={e => e.target.style.borderColor = '#4CAF50'}  // green on focus
  onBlur={e => e.target.style.borderColor = '#ccc'}
       value={password} onChange={handleForm} name='password' type={showPassword?'text': 'password'} placeholder='Enter a strong password'></input>

      <input type='checkbox' onChange={()=>setShowPassword(!showPassword)}></input>
      </div>
      <p>Requirements</p>
              <div style={{
            display: 'flex',
            item: 'center',
            gap: '5px'
        }}>
      <input name='char' type='radio' checked={char} onChange={handleForm}></input>
      <label>At least 8 characters</label>
      </div>
              <div style={{
            display: 'flex',
            item: 'center',
            gap: '5px'
        }}>
      <input name='upper' type='radio' checked={upper} onChange={handleForm}></input>
      <label>Contain uppercase</label> 
      </div>
              <div style={{
            display: 'flex',
            item: 'center',
            gap: '5px'
        }}>
      <input name='lower' type='radio' checked={lower} onChange={handleForm}></input>
      <label>Contain lowercase</label> 
      </div>
              <div style={{
            display: 'flex',
            item: 'center',
            gap: '5px'
        }}>
      <input name='digit' type='radio' checked={digit} onChange={handleForm}></input>
      <label>Contain a digit</label>
      </div>
              <div style={{
            display: 'flex',
            item: 'center',
            gap: '5px'
        }}>
      <input name='special' type='radio' checked={special} onChange={handleForm}></input>
      <label>Contain a special character</label> <br></br>
        <button disabled={disabled} style={{
            backgroundColor: disabled? 'gray': 'blue',
            cursor: disabled? 'not-allowed': 'pointer',
            color: 'white',
            padding: '2px'
        }} onClick={()=>alert(`Your password is ${password}`)}>Proceed</button>
        </div>
      </form>
    </div>
  );
}

