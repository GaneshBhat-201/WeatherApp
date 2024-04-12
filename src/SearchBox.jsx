import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="08d6154560f919fd24ee48eea53b0eaa";

    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    let handleChange=(event)=>{
        setCity(event.target.value);
    };

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            let result={
                city:city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            }
            console.log(result); 
            return result;
        }
        catch(err){
            throw err;
        }
        
    }

    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            setError(false);
            updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    };


    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required style={{backgroundColor:"white", boxShadow: "0 15px 25px rgba(0, 0, 0, 0.2)"}}/>
                <br /><br />
                <Button variant="contained" type='submit'>
                     Search
                </Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    );
}