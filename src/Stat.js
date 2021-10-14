import React from 'react'

 const Stat = (props) => {
    return (
        <div>
            <p>COUNTRY: {props.country}</p>
            <p>CITY: {props.city}</p>
            <p>TEMPERATURE: {Math.round(props.temp) - 271} C </p>
            <p>GENERAL: {props.main}</p>
            <p>DESCRIPTION: {props.descr}</p>
        </div>
    )
}


export default Stat