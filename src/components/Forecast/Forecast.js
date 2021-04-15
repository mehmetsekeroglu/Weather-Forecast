import { useState } from "react";
import "./Forecast.css"

export default function Forecast({url, setCity}) {
  const [data, setData] = useState([]);

  const loadData = async () =>{
    const response = await fetch(url);
    const dt = await response.json();
    setData(dt)
  }

  if(data==""){
return(
<div>
      <input placeholder="Please select a city" id="input-city" onChange={(e) => setCity(e.target.value)}></input>
      <button onClick={loadData}>Show</button> 
      </div> 
) 
  }
  else{
    console.log(data.data[0].weather)
    return (
      <div className="forecast-container">
        <div>
         <input placeholder="Please select a city" id="input-city" onChange={(e) => setCity(e.target.value)}></input>
      <button onClick={loadData}>Show</button>    
        </div>
      <div>
      <div className="city-name">{data.data[0].city_name}</div> 
      <div><img src={`https://www.weatherbit.io/static/img/icons/${data.data[0].weather.icon}.png`}></img></div>
      <div className="description">{data.data[0].weather.description}</div>
      <table>
  <tr>
    <th>Temperature</th>
    <th>Humidity</th>
    <th>Wind Speed</th>
    <th>Clouds</th>
  </tr>
  <tr>
    <td>{data.data[0].temp}&deg;</td>
    <td>%{data.data[0].rh}</td>
    <td>{data.data[0].wind_spd}m/s</td>
    <td>%{data.data[0].clouds}</td>
  </tr>
</table>   
      </div>
      </div>
    )
}} 






/**
 * import React, { useEffect, useLayoutEffect } from 'react'
import { useState } from "react";

export default function Forecast({url, setCity}) {

 



  const [data, setData] = useState([]);
  const loadData = async () =>{
    const response = await fetch(url);
    const dt = await response.json();
    setData(dt)
  }
  useEffect(()=>{
    createIcon();
  },[]);

const [icon, setIcon] = useState("");
const createIcon = () =>{
  let iconCode = data.data[0].weather.icon;
  setIcon(`https://www.weatherbit.io/static/img/icons/${iconCode}.png`); 
}
  if(data=="" || icon==""){
return(
<div>
      <input id="input-city" onChange={(e) => setCity(e.target.value)}></input>
      <button onClick={loadData}>Show</button> 
      </div> 
) 
  }
  else{
    return (
      <div>
      <input id="input-city" onChange={(e) => setCity(e.target.value)}></input>
      <button onClick={loadData}>Show</button> 
      <div>
         <div>Sunrise:{data.data[0].sunrise}</div>
         <div>Sunset{data.data[0].sunset}</div> 
         <div>{data.data[0].city_name}</div> 
         <div>Temperature:{data.data[0].temp}</div> 
         <div>Wind Speed:{data.data[0].wind_spd}</div> 
         <div>Humidity:{data.data[0].rh}</div> 
         <div>Clouds:{data.data[0].clouds}</div> 
      
         <div><img src= {icon}></img></div> 
         <div>code{data.data[0].weather.code}</div> 
         <div>Description:{data.data[0].weather.description}</div> 
         <div>{data.data[0].precip}</div> 
         <div>{data.data[0].wind_spd}</div> 
         <div>{data.data[0].wind_spd}</div> 
      </div>
        
      </div>
    )
  }
  } 
 */