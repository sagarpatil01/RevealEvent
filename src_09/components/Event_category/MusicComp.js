
import '../../static/images/Event_Music/image_1.jpg'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustNavComp from '../Customer/CustNavComp';

export default function MusicComp(){
    
    let navigate=useNavigate();
    const[sC,setCat]=useState([]);

    const loadData = async () => {
      let showData = undefined;
      await fetch("http://localhost:8080/geteventname?genre_cat_id="+2)
      .then(res => res.json())
      .then(data => showData=data);

      !Array.isArray(showData) ? setCat([showData]) : setCat(showData);
    }

    useEffect(()=>{
     loadData();
    },[])

  //   const[sc,setCat]=useState([]);
  //   useEffect(()=>{
  //     fetch("http://localhost:8080/geteventname?genre_cat_id=2")
  //     .then(resp=>resp.json())
  //     .then(e=>setCat(e))
  // },[])
    
      return(
        
            <div>
              <CustNavComp/>
                {sC?.map((c, index) => ( 
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
                onClick={()=>{navigate("/singleevent")}}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {/* {c.event_name} */}alen walker dj show
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {/* {c.description} */}Alan Walker is currently touring across 1 country and has 4 upcoming concerts. 
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
