// import Card from '@mui/material/Card';

// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';

// import Typography from '@mui/material/Typography';
// import "./InfoBox.css";
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';


// export default function InfoBox({info}){
//     const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
//     const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
//     const COLD_URL="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
//     const RAIN_URL="https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
//     return (
//         <div className="InfoBox">
//             <div className='cardContainer'>
//             <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image={
//           info.humidity>80
//           ?RAIN_URL: 
//           info.temp>15 
//           ? HOT_URL 
//           :COLD_URL}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {info.city}
//             {
//               info.humidity>80
//               ?<ThunderstormIcon/>: 
//               info.temp>15 
//               ?<WbSunnyIcon/>  
//               :<AcUnitIcon/>
//               }
          
//         </Typography>
//         <Typography variant="body2"  color= "text.secondary" component={"span"}>
//           <p>Temperature={info.temp}&deg;C</p>
//           <p>Humidity={info.humidity}</p>
//           <p>Min Temp={info.tempMin}&deg;C</p>
//           <p>Max Temp={info.tempMax}&deg;C</p>
//           <p>The weather can be described as <i>{info.weather}</i> feels like={info.feelslike}&deg;C</p>
//         </Typography>
//       </CardContent>
      
//     </Card>
//     </div>
//         </div>

//     )
// }

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=1000&auto=format&fit=crop&q=60";
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60";
    const COLD_URL = "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=1000&auto=format&fit=crop&q=60";
    const RAIN_URL = "https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?w=1000&auto=format&fit=crop&q=60";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345, borderRadius: "12px" }}>
                    <CardMedia
                        component="img"
                        alt="weather background"
                        height="140"
                        image={
                            info.humidity > 80 ? RAIN_URL :
                            info.temp > 15 ? HOT_URL :
                            COLD_URL
                        }
                    />
                    <CardContent className="cardContent">
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} 
                            <span className="weatherIcon">
                                {info.humidity > 80 ? <ThunderstormIcon fontSize="inherit" color="primary" /> :
                                info.temp > 15 ? <WbSunnyIcon fontSize="inherit" color="warning" /> :
                                <AcUnitIcon fontSize="inherit" color="info" />}
                            </span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="span">
                            <p>Temperature: {info.temp}&deg;C</p>
                            <p>Humidity: {info.humidity}%</p>
                            <p>Min Temp: {info.tempMin}&deg;C</p>
                            <p>Max Temp: {info.tempMax}&deg;C</p>
                            <p>Description: <i>{info.weather}</i>, feels like {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
