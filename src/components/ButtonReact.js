export default function ButtonReact({ text, onClick, color }) {
   return (
      <button onClick={onClick} >
         <p style={{ color: color }}>{text}</p>
      </button>
   )
}