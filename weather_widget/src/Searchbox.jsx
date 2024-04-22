import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";

export default function Searchbox() {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "93d374c4950fe46d7a613bbe6d66087b";

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let onSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity("");
            let info = await getWeatherInfo();
            console.log("hi")
            console.log("hi");
            updateWeatherInfo(info);
         
        } catch (err) {
            setError(true);
        }
    };

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                maxTemp: jsonResponse.main.temp_max,
                minTemp: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };

    return (
        <div className="searchbox">
            <form onSubmit={onSubmit}>
                <TextField id="outlined-basic" label="Enter Your City" variant="outlined" size="medium" value={city} onChange={handleChange} required/>
                &nbsp;
                &nbsp;
                <Button variant="contained" type="submit">Submit</Button>
                {error && <p>NO such place exist</p>}
            </form>
        </div>
    );
}
