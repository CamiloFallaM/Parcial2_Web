import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const { useEffect, useState } = require("react");

function Lista () {

   const [listas, setLista] = useState([]);
   useEffect(()=>{
       const URL = "http://localhost:3001/cafes";
       fetch(URL).then(data => data.json()).then(data => {
           setLista(data);
           console.log(data)
       })
   }, []);

   return(
    
    <div>
        <h1>El aroma magico</h1>
            <div className="text-center">
            <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-coffee-fresh-brown-poster-banner-background-image_133007.jpg" alt="Cafe"></img>
            </div>
    <div className='row'>
    <div className='col'>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Tipo</th>
          <th scope="col">Region</th>
        </tr>
      </thead>
      <tbody>
        {listas.map((e) => (
        <tr>
        <Link to={"/lista/" + e.id}>
          <td>{e.nombre}</td>
          </Link>
          <td>{e.tipo}</td>
          <td>{e.region}</td>
          
        </tr>

        ))}
      </tbody>
    </table>
    </div>
    <div className='col'>.</div>
    </div>
  </div>
   )
}

export default Lista;