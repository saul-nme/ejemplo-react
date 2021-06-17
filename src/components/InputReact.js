import React, { useState } from 'react';

export default function InputReact() {

   const [textinput, setTextinput] = useState("");

   return (
      <div>
         <p>el valor es: {textinput} </p>
         <input
            type="text"
            value={textinput}
            onChange={(e) => setTextinput(e.target.value)}
         />
      </div>
   )
}