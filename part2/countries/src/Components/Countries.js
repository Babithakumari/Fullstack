import Country from "./Country"
import ShowCountry from "./ShowCountry"

const Countries = ({ countriesList,setCountryList }) => {

    console.log(countriesList)
    console.log(countriesList.length)
    
    // for one country, display data
    if(countriesList.length===1){
        return (
            <Country data={countriesList[0]}/>
        )
    }
    // for more than 1 and less than/ equal to 10, display list of names
    else if(countriesList.length>1 && countriesList.length<=10)
    {
        return (
            <ul>
                {countriesList.map(country => 
                <ShowCountry key = {country.name.common} 
                            country_obj = {country} 
                            handleClick = {()=>setCountryList([country])}
                />)}
            </ul>
        )

    }

    // for more than 10 display message
    return(
            <p>Too many matches, specify another filter</p>
        )
    
    
}

export default Countries

