
import '../../static/images/Event_Music/image_1.jpg'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustNavComp from '../Customer/CustNavComp';

export default function PoetryComp(){
    
  let navigate=useNavigate();

  const[sc,setCat]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:8080/geteventname?genre_cat_id=4")
    .then(resp=>resp.json())
    .then(e=>setCat(e))
},[])
  
    return(
      
          <div>
               <CustNavComp/>
               {sc.map((c, index) => ( 
               <div className='Card-event-cat'>
               <Grid container spacing={2}>
              <Grid item xs={12}>
              <Card sx={{ maxWidth: 1500}}>
              <CardActionArea>
              <CardMedia
              component="img"
              height="300"
               image="https://source.unsplash.com/random?wallpapers"
              alt={index}
              // onClick={()=>{navigate("/singleevent")}}
              onClick={()=>{{navigate(`/singleevent/${c.id}`)}
                localStorage.setItem("eventid", c.id)}}
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {c.event_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {c.description}
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
