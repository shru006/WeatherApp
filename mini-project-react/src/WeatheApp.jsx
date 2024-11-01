// import SearchBox from "./SearchBox";
// import InfoBox from "./InfoBox";
// import {useState} from "react";
// export default function WeatherApp() {
//     const [weatherInfo,setWeatherInfo]=useState(
//         {
//             city: "WonderLand",
//             feelslike: 24.84,
//             temp:25.05,
//             tempMin:25.05,
//             tempMax:25.05,
//             humidity:"haze",
//         }
//     );
//     let updateInfo=(newInfo)=>{
//         setWeatherInfo(newInfo);
//     }
//     return (
//         <div style={{textAlign: "center"}}>
//             <h2>
//                 Weather App by Shruti
//             </h2>
//             <SearchBox updateInfo={updateInfo}/>
//             <InfoBox info={weatherInfo}/>
//         </div>
//     )
// }

import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "WonderLand",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div
            style={{
                textAlign: "center",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(to bottom, #e0f7fa, #80deea)"
            }}
        >
            <h2 style={{ color: "#01579b", marginBottom: "20px" }}>
                Weather App by Shruti
            </h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
