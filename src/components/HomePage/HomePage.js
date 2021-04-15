
import {useState} from "react"
import Forecast from '../Forecast/Forecast';

export default function HomePage() {
  const [city, setCity] = useState("")
const API_KEY = "5fec1a9312514f5ab84aab4ed30a0beb"
const API_URL = `https://api.weatherbit.io/v2.0/current?&city=${city}&key=${API_KEY}&include=minutely`;
      return (
        <div>
          <h1>Weather Forecast</h1>
        <div><Forecast url={API_URL} setCity={setCity}/></div>    
        </div>
      )
    }
    