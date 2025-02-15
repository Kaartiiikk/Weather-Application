import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./Searchbox.css";
import { useState } from "react";


export default function SearchBox({ updateinfo }){
    let[city,setcity] = useState("");
    let[err,seterr] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "b90c465fb105d1c05bccec588cb96e4d";
     
     let getWeatherInfo = async()=>{
        try{let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse  = await response.json();
        console.log(jsonResponse);
        let result ={
         city : city,
         temp: jsonResponse.main.temp,
         tempMin:jsonResponse.main.temp_min,
         tempMax:jsonResponse.main.temp_max,
         humidity:jsonResponse.main.humidity,
         feelsLike:jsonResponse.main.feels_like,
         weather : jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
     }
     catch(err){
        throw err; 
     }
   
    };
       
      let handlechange = (evt) =>{
        setcity(evt.target.value);
      }; 

 let handlesubmit = async(evt)=>{
    try{
    evt.preventDefault();
    console.log(city);
    setcity("");
    let newinfo = await getWeatherInfo();
    updateinfo(newinfo);
 }
 catch(err){
    seterr(true); 
 }


};
    return(
       
        <div className="Searchbox">
            <form onSubmit={handlesubmit}>
                <TextField id="outlined-basic" label="City name" variant="outlined" required value={city}
                 onChange={handlechange}/>
                <br/><br/>
                <Button variant="contained" type="submit">
                 Search
      </Button>
      {err && <p>No such place exist</p>}
            </form>
        </div>
    );
}