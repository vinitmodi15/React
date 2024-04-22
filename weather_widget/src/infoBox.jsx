import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infoBox.css"
export default function infoBox({info}){
    const INIT_URL ="https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    return(
        <div className='Infobox'>
            <h2>Weather Info -{info.weather}</h2>
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={INIT_URL}    
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {info.city}
            </Typography>
            <Typography variant="body2" color="text.secondary">
               <p>Temperature = {info.temp}</p>
               <p>Humidity= {info.humidity}</p>
               <p>Min Temp = {info.minTemp}</p>
               <p>Max Temp = {info.maxTemp}</p>
               <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}</p>
            </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}