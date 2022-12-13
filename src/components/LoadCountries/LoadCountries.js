import React, { useEffect, useState } from 'react';
import LoadCountry from '../LoadCountry/LoadCountry';
import './LoadCountries.css';

const LoadCountries = () => {
    const [countries, setCountries] = useState([]);
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
      }, [] )
    return (
        <div>
            <h1>Hello From Countries : {countries.length}</h1>
            <div className="countries-container">
                {
                    countries.map(country => <LoadCountry 
                        key={country.cca3} 
                        country={country}
                        ></LoadCountry>)
                }
            </div>
        </div>
    );
};

export default LoadCountries;