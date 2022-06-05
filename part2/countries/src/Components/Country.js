import { useState, useEffect } from "react"
import axios from "axios"

const Country = ({ data }) => {
    // fetch weather data for the country
    const [weather, setWeather] = useState([])

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data.name.common}&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                console.log(response.data)
                setWeather(response.data)
            })

    }, [data.name.common])

    useEffect(() => {
        console.log(weather.wind)
    }, [weather])

    

    return (
        <>
            <h2>{data.name.common}</h2>
            <p>Capital : {data.capital}</p>
            <p>Area : {data.area}</p>
            <h4>languages:</h4>
            <ul>
                {Object.entries(data.languages).map(language => <li key={language[1]}>{language[1]}</li>)}
            </ul>
            <div className="flag">{data.flag}</div>

            <div>
                <h3>Weather in {data.name.common}</h3>
                <p>Temperature : {(weather?.main?.temp-273).toFixed(2)} </p>
                <p>wind : {weather?.wind?.speed}m/s </p>
            </div>



        </>
    )
}

export default Country