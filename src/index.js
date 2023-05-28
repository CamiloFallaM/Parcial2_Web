import React from 'react';
import ReactDOM from 'react-dom/client';
import {IntlProvider} from 'react-intl';
import './index.css';
import App from './App';
import Autenticacion from './components/autenticacion';
import Lista from './components/lista';
import Detail from './components/detail';
import Footer from './components/footer';
import HeaderCafe from './components/headerCafe';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const userLanguage = navigator.language;

const root = ReactDOM.createRoot(document.getElementById('root'));

if(userLanguage == "es-ES")
{
root.render(
  <IntlProvider locale="es-ES" messages={localeEsMessages}>
    <div>
    <HeaderCafe />
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Autenticacion />} />
         <Route path="/lista" element={<Lista />} />
         <Route path="/lista/:listaId" element={<Detail />} />
       </Routes>
     </BrowserRouter>
     <Footer />
    </div>
    </IntlProvider>
);
}
else if(userLanguage == "en-US")
{
  root.render(
    <IntlProvider locale="en-US" messages={localeEnMessages}>
      <div>
      <HeaderCafe />
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Autenticacion />} />
           <Route path="/lista" element={<Lista />} />
           <Route path="/lista/:listaId" element={<Detail />} />
         </Routes>
       </BrowserRouter>
       <Footer />
      </div>
      </IntlProvider>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
