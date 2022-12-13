import React from 'react';
import './LoadCountry.css';

const LoadCountry = (props) => {
    const {name, flags, capital, area, population} = props.country;
    return (
        <div className="country">
            <h2>{name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Capital : {capital}</p>
            <p>Area : {area}</p>
            <p>Population : {population}</p>
        </div>
    );
};

export default LoadCountry;