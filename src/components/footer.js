import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import {FormattedMessage} from 'react-intl';

function Footer () {
   return(
    <div>
        <div className='row'>
            <div className='col'></div>
            <div className='col'><FormattedMessage id="Contactanos"/>: +57 3163782253 - info@cafemagico.com</div>
            <div className='col'></div>
        </div>
    </div>
   )
}

export default Footer;