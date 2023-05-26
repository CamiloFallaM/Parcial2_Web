import Card from 'react-bootstrap/Card';
import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";

function Autenticacion(props){

    const [message, setMessage] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);
      };

      const [message2, setMessage2] = useState('');

    const handleChange2 = event => {
        setMessage2(event.target.value);
      };


    const autenticar = () => {
        const URL = "http://localhost:3001/login";
        const datos = {
            login:message,
            password:message2
        }
        console.log(message)
        fetch(URL,{method:"POST", body: JSON.stringify(datos), headers: {"Content-type": "application/json; charset=UTF-8"}}).then(res => res.json()).then(res => {
            console.log(res["status"]);
            if(res["status"] == "success")
            {
                window.location.replace('http://localhost:3000/lista');
            }
        })
      };





   return(
        <div>
            <h1>El aroma magico</h1>
            <div className="text-center">
            <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-coffee-fresh-brown-poster-banner-background-image_133007.jpg" alt="Cafe"></img>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                Inicio de sesion
                    <div className="card">
                    <form>
                    <label htmlFor="fname">Nombre de usuario</label><br></br>
                    <input type="text" id="message" name="message" onChange={handleChange} value={message}></input><br></br>
                    <label htmlFor="lname">Contraseña</label><br></br>
                    <input type="text" id="message2" name="message2" onChange={handleChange2} value={message2}></input>
                    </form>
                    
                    <Button variant="primary" onClick={autenticar}>
                        Ingresar
                    </Button>
                    <Button variant="danger">
                        Cancelar
                    </Button>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
   );
}

export default Autenticacion;