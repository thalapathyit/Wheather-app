import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Wheather()
{
  var[city,setcity]=useState("")
  var[whet,setwhet]=useState("")
  var[desc,setdesc]=useState("")
  var [temp,settemp]=useState("")
  function handlecity(evt)
  {
    setcity(evt.target.value)
  }
  function handlebutton()
  {
    var wheatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a9f41a68c1010a05a53335f6df4dbd30`)
     wheatherdata.then(function(success)
    {
      console.log(success.data)
      setwhet(success.data.weather[0].main)
      setdesc(success.data.weather[0].description)
      settemp(success.data.main.temp)
    })
  }
  return(
    <div className='wheat'>
    <div className='wheat-1'>
    <h1>WHEAHER REPORT</h1>
    <p>I CAN GIVE YOU A WEATHER REPORT ABOUT YOUR CITY</p>
    <input onChange={handlecity} ></input><br></br>
    <button onClick={handlebutton}>GET REPORT</button>
    <p>Weather:{whet}</p>
    <p>Temperature:{temp}</p>
    <p>Description:{desc}</p>
    </div>
  </div>
  )
}
root.render(<Wheather/>);



 