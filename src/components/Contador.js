import { useState } from 'react';


export default function Contador() {
   const [count, setCount] = useState(0);
   const [isActive, setIsActive] = useState(false);

   return (
      <div>
         Valor: {count}
         <br />
         <button onClick={() => setCount(count + 1)} >+1</button>
         <button onClick={() => setCount(count - 1)} >-1</button>
         <br />
         <button onClick={() => setIsActive(!isActive)} > Cambiar </button>
         <h3>{isActive ? "Está activo" : "No está activo"}</h3>
      </div>
   )
}