import { useState } from "react"

const Shown = () => {
    const [shown, setShown] = useState(true)

    function handleHide()
    {
        setShown(prev=>!prev)

    }
  return (
    <div className="justify-center text-center">
       <h1>Frequetly asked questions</h1>
       <h1 onClick={handleHide}>How much does it cost?</h1>
       <p className={shown?'hidden':''}>This product costs 200$. You can pay in instances</p>
        <br />
        <br />
        <br />
       <h1 onClick={handleHide}>Is there anyone</h1>
       <p className={shown? 'hidden': ''}>Yes. Thare are several partners. You can browse and check one of them</p>
               <br />
        <br />
        <br />
       <h1 onClick={handleHide}>How long does it take for this product to be delivered?</h1>
       <p className={shown?'hidden':''}>Only 100 days to delever it please. Thank you for asking!</p>
    </div>
  )
}

export default Shown
