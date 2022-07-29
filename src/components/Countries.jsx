import React from 'react'



const countries = ({country:{area, name, population, region, capital, flags}}) => {
  return (
    
      <div className="country" key= {area}>
      
        <div>
        
          <img src={flags.png} alt={name.common} />
          </div>
          <div className="properties">
            <h3>{name.common}</h3>
            <div>
              <h4>Population: <span>{ population}</span> </h4>
              <h4>Region: <span>{region}</span> </h4>
              <h4>Capital: <span>{capital}</span> </h4>
            </div>
        </div>
      
    </div>
    
  )
}

export default countries
