import cardData from './cardData.json';
import '../../static/images/Event_Music/image_1.jpg'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardList(){
    // const cards = ({ title, content, image }) => (
    //     <div className="card">
    //       <img src={image} alt="Card Image" />
    //       <h2>{title}</h2>
    //       <p>{content}</p>
    //     </div>
    //   );
    let navigate=useNavigate();

      useEffect(()=>{
        fetch("http://localhost:8080/getallgenre")
        .then(resp=>resp.json())
        
    },[])
    
      return(
        
            <div>
              {cardData.map((card, index) => (
                <div className='Card-event-cat'>
                {/* <Card
                  key={index}
                  title={card.title}
                  content={card.content}
                  image={card.image}
                /> */}
                 <Grid container spacing={2}>
                 <Grid item xs={12}>
                <Card sx={{ maxWidth: 1500}}>
                <CardActionArea>
                <CardMedia
                component="img"
                height="300"
                 image="https://source.unsplash.com/random?wallpapers" //{card.image}
                alt={index}
                onClick={()=>{{navigate("/singleevent")}}}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {card.content}
                </Typography>
                </CardContent>
                </CardActionArea>
               </Card> 
               </Grid>
               </Grid>
               
            </div>
              ))}
            </div>
      
      )
     
}
