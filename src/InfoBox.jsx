import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnl8ZW58MHx8MHx8fDA%3D";
    let HOT_URL="https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bm55fGVufDB8fDB8fHww";
    let COLD_URL="https://plus.unsplash.com/premium_photo-1675791930245-a94ea3edcaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";

    return(
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }} className='card'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80? RAIN_URL: info.temp>15? HOT_URL: COLD_URL}
                        title="green iguana"
                        className='cardMedia'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city} &nbsp; {info.humidity>80? <ThunderstormIcon />: info.temp>15? <WbSunnyIcon/>: <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature={info.temp}</p>
                            <p>Humidity={info.humidity}</p>
                            <p>Min Temp={info.tempMin}</p>
                            <p>Max Temp={info.tempMax}</p>
                            <p>The Weather can be described as {info.weather} and feel like {info.feelsLike}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            
        </div>
    )
}