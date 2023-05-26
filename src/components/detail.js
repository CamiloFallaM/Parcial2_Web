import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Lista from './lista';
export default function Detail() {
 const params = useParams();

 const [actual, setActual] = useState([]);
 useEffect(()=>{
     const URL = "http://localhost:3001/cafes/"+params.listaId;
     fetch(URL).then(data => data.json()).then(data => {
         setActual(data);
         console.log(data)
     })
 }, []);


 return (
    <div><Lista />
   <div className="text-center">
     <h1>{actual.nombre}</h1>
     <h4>{actual.fecha_cultivo}</h4>
     <img src={actual.imagen} alt="Cafe" style={{ width: '200px', borderColor: '#E25540' }}></img>
     <h4>{actual.notas}</h4>
   </div>
   </div>
 );
}