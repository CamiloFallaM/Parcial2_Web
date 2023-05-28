import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Card from 'react-bootstrap/Card';
import Lista from './lista';
import {FormattedMessage} from 'react-intl';
import {FormattedDate} from 'react-intl';

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
    <div className="row">
        <div className="col"></div>
        <div className="col">
        <Card style={{ width: '45rem', backgroundColor: '#FFE4E4' }}>
        <div className="text-center">
        <h1>{actual.nombre}</h1>
        <h4><FormattedDate
            value={new Date(actual.fecha_cultivo)}
            year='numeric'
            month='long'
            day='numeric'
            weekday='long'
            />
        </h4>
        <img src={actual.imagen} alt="Cafe" style={{ width: '200px', borderColor: '#E25540' }}></img>
        <p><FormattedMessage id="Notas"/></p>
        <p>{actual.notas}</p>
        <h5><FormattedMessage id="Cultivado"/> {actual.altura} <FormattedMessage id="Msnm"/></h5>
        </div>
        </Card>
        </div>
        <div className="col"></div>
   </div>
   <br></br>
   </div>
 );
}