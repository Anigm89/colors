import { useEffect, useState, useRef } from "react";
import BoxColor from "./BoxColor";

function MyForm() {

  const inputRef = useRef(null);
  const [value, setValue ] = useState('');
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'grey', 'blue', 'aqua', 'olive'];

  useEffect( () => {
    inputRef.current.focus();
  }, [])

  return (
    <>
    <input type="text" placeholder="write a color" onChange={() => setValue(inputRef.current.value)} value={value} ref={inputRef} />
    <div className="container">
      {colors.map( (color, i) => {
        return( <BoxColor  key={i} color={color} value={value}/>)
      })}
    </div>
    </>
  );
}

export default MyForm;