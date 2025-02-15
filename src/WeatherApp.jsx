import SearchBox from "./Searchbox";
import Infobox from "./Infobox";
import { useState } from "react";
export default function WeatherApp(){
    const[weatherinfo,setweatherinfo] = useState({
        city:"Delhi",
        feelslike:18.37,
        temp:18.05,
        tempmin:18.05,
        tempmax:18.05,
        humidity:94,
        weather:"mist",
    });

     let updateinfo = (newinfo) =>{
        setweatherinfo(newinfo);
     };
    return(
        <div>
            <h4>Weather app by delta!</h4>
            <SearchBox updateinfo = {updateinfo}/>
            <Infobox info = {weatherinfo}/>
        </div>
    );
}