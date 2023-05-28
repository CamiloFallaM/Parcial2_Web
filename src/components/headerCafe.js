import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import {FormattedMessage} from 'react-intl';

function HeaderCafe () {
   return(
    <div>
        <h1 style={{fontFamily: "Comic Sans MS"}}><FormattedMessage id="Aroma"/></h1>
            <div className="text-center">
            <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-coffee-fresh-brown-poster-banner-background-image_133007.jpg" alt="Cafe" ></img>
        </div>
    </div>
   )
}

export default HeaderCafe;