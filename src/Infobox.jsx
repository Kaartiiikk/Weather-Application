import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./Infobox.css";

export default function Infobox({ info }){
    const INIT_URL = "https://images.unsplash.com/photo-1579158949482-3e9e0ac69333?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1c3R5JTIwd2V0YWhlciUyMGltYWdlfGVufDB8fDB8fHww"
    let HOT_URl = "https://images.unsplash.com/photo-1622130535467-62c85533ee3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VuJTIwcGhvdG98ZW58MHx8MHx8fDA%3D";
    let COLD_URL= "https://images.unsplash.com/photo-1702571202424-84d58143cfcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";
    return(
    <div className="Infobox">
       <div className="Cardcontainer">
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 
          ?RAIN_URL 
          : info.temp > 15 
          ? HOT_URl
          : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>{info.city}</b>{
            info.humidity>85 ?(
            <ThunderstormIcon/>
          )
            : info.temp > 15?(
            <WbSunnyIcon/>)
            :(<AcUnitIcon/>
          )}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component= {"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min temp = {info.tempMin}</p>
          <p>Max temp = {info.tempMax}</p>
          <p>The weather feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      </Card>
      </div>
</div>
    );
}