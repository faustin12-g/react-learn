import { useReducer, useRef, useState } from 'react'


export default function App() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [char, setChar] = useState(false)
  const [upper, setUpper] = useState(false)
  const [lower, setLower] = useState(false)
  const [digit, setDigit] = useState(false)
  const [special, setSpecial] = useState(false)
  const [disabled, setDisabled] = useState(true)

  

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
    if(char && upper && lower && special && digit)
    {
        setDisabled(false)
    }
    else
    {
        setDisabled(true)
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
      <input value={password} onChange={handleForm} name='password' type={showPassword?'text': 'password'} placeholder='Enter a strong password'></input>

      <input type='checkbox' onChange={()=>setShowPassword(!showPassword)}></input>
      <br></br>
      <p>Requirements</p>
      <input name='char' type='radio' checked={char} onChange={handleForm}></input>
      <label>At least 8 characters</label>
      <br></br>
      <input name='upper' type='radio' checked={upper} onChange={handleForm}></input>
      <label>Contain uppercase</label> 
      <br></br> 
      <input name='lower' type='radio' checked={lower} onChange={handleForm}></input>
      <label>Contain lowercase</label> 
      <br></br> 
      <input name='digit' type='radio' checked={digit} onChange={handleForm}></input>
      <label>Contain a digit</label>
      <br></br>
      <input name='special' type='radio' checked={special} onChange={handleForm}></input>
      <label>Contain a special character</label> <br></br>
        <button disabled={disabled} style={{
            backgroundColor: disabled? 'gray': 'blue',
            cursor: disabled? 'not-allowed': 'pointer',
            color: 'white',
            padding: '2px'
        }} onClick={handleForm}>Proceed</button>
      </form>
    </div>
  );
}

