// import {useState} from "react";
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import "./SearchBox.css";
// export default function SearchBox({updateInfo}){
//     let [city,setCity]=useState("");
//     let [error,setError]=useState(false);
//     const API_URL="https://api.openweathermap.org/data/2.5/weather"
//     const API_KEY="81640dbc09127db95430fcf186efa54f";

//     let getWeatherInfo=async()=>{

//         try{
//             let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//         let jsonResponse=await response.json();
//         console.log(jsonResponse);
//         let result={
//             city:city,
//             temp: jsonResponse.main.temp,
//             tempMin:jsonResponse.main.temp_min,
//             tempMax:jsonResponse.main.temp_max,
//             humidity:jsonResponse.main.humidity,
//             feelsLike:jsonResponse.main.feels_Like,
//             weather: jsonResponse.weather[0].description,

//         };
//         console.log(result);
//         return result;
//         }catch(err){
//             throw err;
//         }

        
//     }
    
//     let handleChange=(evt)=>{
//         setCity(evt.target.value);
//     };
//     let handleSubmit=async(evt)=>{
//         try{
//             evt.preventDefault();
//             console.log(city);
//             setCity("");
//             let newInfo=await getWeatherInfo();
//             updateInfo(newInfo);
//         }catch(err)
//         {
//             setError(true);
//         }
        
//     }
//     return(
//         <div className='SearchBox'>
//             <form onSubmit={handleSubmit}>
//             <TextField
//              id="city" 
//              label="City Name" 
//              variant="outlined" 
//              required 
//              value={city}
//              onChange={handleChange}/> 
//             <br></br><br></br>
//             <Button className="search"variant="contained"type="submit">Search</Button>
//             {error && <p style={{color:red}}>No such place exist!</p>}
//             </form>
//         </div>
//     );
// }
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "81640dbc09127db95430fcf186efa54f";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) throw new Error("City not found");
            const jsonResponse = await response.json();

            const result = {
                city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch (err) {
            setError(true);
            console.error(err);
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setError(false); // Reset error on new submission
        const newInfo = await getWeatherInfo();
        if (newInfo) updateInfo(newInfo);
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                /> 
                <br /><br />
                <Button className="search" variant="contained" type="submit">
                    Search
                </Button>
                {error && <Alert severity="error" className="alert">No such place exists!</Alert>}
            </form>
        </div>
    );
}
