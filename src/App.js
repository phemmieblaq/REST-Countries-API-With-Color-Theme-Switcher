import React from 'react';
import "./App.css";
import useLocalStorage from 'use-local-storage'


import  {Routes, Route} from "react-router-dom";



import Moon from './components/moon.svg';
import AllCountries from './components/AllCountries.jsx';
import CountryInfo from './components/CountryInfo';





const App = () => {
  
  const [theme, setTheme] = useLocalStorage('theme' ? 'light' : 'dark')

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme)
  }

  
  return (


    
    <div className="body" >
    <div className="app" data-theme={theme}>


    {/* header */}
    

    <div className="top-container">
          <h2><span> Where in the world?</span> </h2>
          <div className="dark-theme-wrapper" onClick={switchTheme}  >
              <img src={Moon} alt="dark mode" />
              <h2>Dark Mode</h2>
          </div>
      </div>

       <Routes>
        <Route  path ="/" element={<AllCountries/>}/>
        <Route  path = "/country/:countryName"  element ={<CountryInfo/>}/>
      </Routes>
      </div>
      </div>
    
     

  )
}

export default App


