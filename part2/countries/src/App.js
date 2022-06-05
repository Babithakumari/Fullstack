import './App.css';
import {useState,useEffect} from "react"
import axios from "axios"
import Countries from "./Components/Countries.js"


const App = () => {
   const [countries,setCountries] = useState([])
   const [searchCountry,setSearchCountry]=useState("")
   const [filterCountries,setFilterCountries]=useState([])


   // fetch the data for all countries
   useEffect( () => {
     axios.get('https://restcountries.com/v3.1/all')
          .then(response =>{
            console.log(response.data)
            setCountries(response.data)

          })
   },[])
  

   
  

   const handleCountryChange = (event) =>
   {
     console.log(event.target.value)
     setSearchCountry(event.target.value)


      const c=countries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
      console.log(c)

      setFilterCountries(c)
    
    }





  return (
    <div>
      find countries
      <input type="search" value={searchCountry} onChange={handleCountryChange}/>
      <Countries countriesList={filterCountries} setCountryList={setFilterCountries}/>

    </div>
    
   
  );
}

export default App;
