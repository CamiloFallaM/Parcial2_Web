import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import {FormattedMessage} from 'react-intl';
import './style.css';

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
    <div className='row p-5'>
    <div className='col'>
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th scope="col"><FormattedMessage id="Nombre"/></th>
          <th scope="col"><FormattedMessage id="Tipo"/></th>
          <th scope="col"><FormattedMessage id="Region"/></th>
        </tr>
      </thead>
      <tbody>
        {listas.map((e) => (
        <tr>
        <td>
        <Link to={"/lista/" + e.id}>
          {e.nombre}
        </Link>
        </td>
          <td>{e.tipo}</td>
          <td>{e.region}</td>
          
        </tr>

        ))}
      </tbody>
    </table>
    </div>
    <div className='col'></div>
    </div>
  </div>
   )
}

export default Lista;