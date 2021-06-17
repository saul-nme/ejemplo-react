import { useState } from 'react';

/**
 * Un componente así como las pantallas tiene un estado inicial
 * y también recibe props que son utilizador para modificar el componente a necesidad
 * por ejemplo:
 * funciones
 * colores
 * textos
 * tamaños
 */
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