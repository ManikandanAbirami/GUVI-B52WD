import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);


  //Mount, UnMount, Update
  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`)
      .then(res => {
        // Extract only the common names of the countries
        const countryName = res.data.map(i => i.name.official);
        console.log("Country Name:", countryName);
        setCountries(countryName);
      })
  }, []);


  return (
    <div className="App">
      <h1>List of Countries</h1>
      <ul>
        {countries.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
