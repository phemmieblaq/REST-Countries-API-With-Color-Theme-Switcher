import React, {useState, useEffect} from 'react';
import {apiURL} from './Api.jsx';
import SearchInput from "./SearchInput.jsx";
import FilterByRegion from "./FilterByRegion.jsx";
import Countries from "./Countries.jsx";
import {Link} from 'react-router-dom';


const AllCountries = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] =useState("");

    const fetchAllCountries = async()=>{
        try {
            const response = await fetch (`${apiURL}/all`) ;
            if (!response.ok) throw new Error ("something went wrong fetching")
            const data =await response.json();
            console.log(data);
            setCountries(data);
            setIsLoading(false);
        }
        catch (error){
            setIsLoading(false);
            setError(error.message);
        }
    };

    const fetchCountryByName = async(countryName)=>{
        try {
            const response = await fetch (`${apiURL}/name/${countryName}`) ;
            if (!response.ok) throw new Error ("Country not found !")
            const data =await response.json();

            setCountries(data);
            setIsLoading(false);
        }
        catch (error){
            setIsLoading(false);
            setError(error.message);
        }
    };


    const fetchCountryByRegion = async(regionName)=>{
        try {
            const response = await fetch (`${apiURL}/region/${regionName}`) ;
            if (!response.ok) throw new Error (" Failed..............!")
            const data =await response.json();

            setCountries(data);
            setIsLoading(false);
        }
        catch (error){
            setIsLoading(false);
            setError(error.message);
        }
    };

    useEffect(()=> {
        fetchAllCountries();

    }, []);



  return (
    <div>
     <div className="search-filter">
         <SearchInput onSearch = {fetchCountryByName}/>
         <FilterByRegion onSelect = {fetchCountryByRegion}/>
     </div>
        <div className="loading">
            {isLoading && !error && <h4> Loading.......... </h4> }
            {error && !isLoading &&  <h4> {error}</h4>}
        </div>
        <div className="countrydata">

        {countries.map((country)=>(

         <Link style= {{textDecoration: 'none'}} to  ={`/country/${country.name.common}`}   >
                <Countries country={country}/>
                </Link>
  


        ))}
      
      </div>
    </div>
  )
}

export default AllCountries
