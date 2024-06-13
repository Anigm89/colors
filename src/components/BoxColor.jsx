import { useEffect, useRef, useState } from "react";
import MyForm from "./MyFormChallenge";


function BoxColor ({color, value}) {
 const [classList, setClassList] = useState('');
 const boxRef = useRef(null);

 useEffect(() => {
  
    setClassList(boxRef.current.classList);
  
 },[]);

 const colorCss = {
  color: classList == `box ${value}` ?  'black' : color,
  backgroundColor: classList.value == `box ${value}` ?  color : 'white',
  borderColor:  color
 }
 
  return (
    <>
    <div className={`box ${color}`}  ref={boxRef} style={colorCss} > 
    {color === value ?
      (<p>Soy el color {value} </p>)
      : (<p> I´m not a {value} color </p>)
    }
    </div>
    </> 
  )
}
export default BoxColor;  
