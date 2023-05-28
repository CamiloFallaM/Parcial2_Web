import Card from 'react-bootstrap/Card';
import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import {FormattedMessage} from 'react-intl';

function Autenticacion(){

    const [authState, setAuth] = useState("");

    const renderAuthError = () => {
        if (authState === "") return "";
        else if(authState === "success") return "";
        else return "Error de autenticacion. Revise sus credenciales.";
    };

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
            else{
                setAuth("error");
            }
        })
      };





   return(
        <div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                <br></br>
                <b><FormattedMessage id="Inicio"/></b>
                    <Card style={{ width: '45rem', backgroundColor: '#FFE4E4' }}>
                    <div className='row'>
                        <div className="col"></div>
                        <div className="col">
                        <div className='row'>
                            <form>
                            <label htmlFor="fname"><b><FormattedMessage id="NombreU"/></b></label><br></br>
                            <input type="text" id="message" name="message" onChange={handleChange} value={message}></input><br></br>
                            <label htmlFor="lname"><b><FormattedMessage id="Contrasena"/></b></label><br></br>
                            <input type="text" id="message2" name="message2" onChange={handleChange2} value={message2}></input>
                            </form>
                            <br></br>
                        </div>
                        <div className='row'>
                        <br></br>
                        <br></br>
                        <div className='col'>
                            <br></br>
                            <Button style={{ backgroundColor: "#A1E091", color:"#000000" }} onClick={autenticar}>
                                <b><FormattedMessage id="Ingresar"/></b>
                            </Button>
                        </div>
                        <div className='col'>
                            <br></br>
                            <Button style={{ backgroundColor: "#F55959", color:"#000000" }}>
                                <b><FormattedMessage id="Cancelar"/></b>
                            </Button>
                        </div>
                        </div>
                        <br></br>
                        <Card.Text style={{ color: "#FF4F4F" }}><b>{renderAuthError()}</b></Card.Text>
                        </div>
                        <div className="col"></div>
                    
                    </div>
                    </Card>
                <br></br>
                <br></br>
                </div>
                <div className="col"></div>
            </div>
        </div>
   );
}

export default Autenticacion;