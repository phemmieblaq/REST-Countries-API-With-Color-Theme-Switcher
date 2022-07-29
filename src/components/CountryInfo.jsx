import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from './Api.jsx';
import { Link } from "react-router-dom";
import backArrow from "./backArrow.svg"

const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { countryName } = useParams();
  




  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`${apiURL}/name/${countryName}?fullText=True`);

        if (!res.ok) throw new Error("Could not found!");

        const data = await res.json();

        setCountry(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCountryByName();
  }, [countryName]);

  



  return (
    <div className="country__info__wrapper">
     <Link style= {{textDecoration: 'none'}} to="/">
      <button>
      <img src={backArrow} alt="back" />
       <span>Back</span>
      </button>
      </Link>

      <div className="loading">

      {isLoading && !error && <h4>Loading........</h4>}
      {error && !isLoading && { error }}
      </div>

      {country?.map((country) => (
        <div className="country__info__container" key={country.alpha3code}>
          <div className="country__info-img">
            <img src={country.flags.svg} alt={country.name.common} />
          </div>

          <div className="country__info">
          <h3>{country.name.common}</h3>
          <div className="country__info__right__left">


          
            <div className="country__info-left">
           
            <h4> Native Name: <span>{country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}</span></h4>
            <h4>  Population: <span>{country.population}</span> </h4>
            <h4> Region: <span>{country.region}</span></h4>
            <h4> Sub Region: <span>{country.subregion}</span> </h4>
            <h4> Capital:  <span>{country.capital}</span></h4>
            </div>

            <div className="country__info-right">
               <h4> Top Level Domain: <span>{country.tld ? Object.values(country.tld).join(', ') : ''}</span></h4>
               <h4> Currencies:  <span>{country.currencies ? Object.values(country.currencies).map(obj => obj.name).join(', ') : ''}</span> </h4>
               <h4> Language: <span>{country.languages ? Object.values(country.languages).join(', ') : ''}</span></h4>


               </div>
          </div>
          <div className="border">
              <h4>Border countries:

              {country.borders? country.borders.map((border)=>{
                 return <div> {border} </div>
                }): "none"}
              </h4>
            </div>

          </div>
        </div>
      ))}
      
      
      </div>
  
  );
};

export default CountryInfo;