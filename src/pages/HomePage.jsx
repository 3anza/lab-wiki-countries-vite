import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react"; 
import { Link } from 'react-router-dom'; 



function HomePage() {

    const [countries, setCountries] = useState([]);
        useEffect(() => {
            axios
                .get('https://ih-countries-api.herokuapp.com/countries')
                .then((response) => {
                    setCountries(response.data)
                })
                .catch((error) => {
                    console.error('Error fetching countries', error)
                })
        }, [])

    return (
        <div className="container" >
          <h1>WikiCountries: Your Guide to the World.</h1>
          {countries.map((country) => (
             <Link to={`/${country.alpha3Code}`} key={country.alpha3Code}>
             <div className="list-group" key={country._id}>
                <img style={{height: 30, width: 30} } src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
                <h3 className="list-group-item list-group-item-action">{country.name.official}</h3>
            </div>
            </Link> 
            ))}
          {!countries.length && <h1>Loading...</h1>}
        </div>
    )
}

export default HomePage;