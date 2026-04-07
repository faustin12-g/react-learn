import React, { useState } from 'react';

function ToggleButtons() {
// these are initialColors: ['gray','gray','gray','gray','gray']
 const initialColors = Array(5).fill('gray');  
 const [buttonColors, setButtonColors] = useState(initialColors);
 
 return (
   <div>
     {buttonColors.map((color, index) => (
       <button
         key={index}
         style={{ backgroundColor: color, padding: '10px', margin: '5px', border: 'none' }}
         onClick={ () =>
         {
          const newColors = [...buttonColors]
          newColors[index] = newColors[index]==='blue'? 'gray':'blue'
          setButtonColors(newColors)
         }
         }
       >
         Button {index + 1}
        
       </button>
     ))}
   </div>
	);
}

export default ToggleButtons;