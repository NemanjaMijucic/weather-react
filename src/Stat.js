import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faCity, faGlobe } from '@fortawesome/free-solid-svg-icons';

 const Stat = (props) => {
    return (
        <div>
            <p>COUNTRY <FontAwesomeIcon icon={faGlobe} /> : {props.country}</p>
            <p>CITY <FontAwesomeIcon icon={faCity} /> : {props.city}</p>
            <p>TEMPERATURE  <FontAwesomeIcon icon={faThermometerHalf} /> : {Math.round(props.temp) - 271} C </p>
            <p>GENERAL: {props.main}</p>
            <div className="description">
                <p>DESCRIPTION: {props.descr} </p><img src={props.icon} alt='Loading...'></img>
            </div>
            
        </div>
    )
}


export default Stat