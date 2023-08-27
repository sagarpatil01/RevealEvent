import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import CustNavComp from "../Customer/CustNavComp";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EventSingle()
{
    let navigate=useNavigate();
   // const up=useParams();
   // const {eve_id}=parseInt(up,10);
    
   const eventsolo = localStorage.getItem("eventid");
   // console.log(JSON.parse(eventsolo));
   // console.log(eve_id);

    const[se,setEve]=useState([]);
    useEffect(()=>{
       console.log(eventsolo)
       fetch(`http://localhost:8080/oneevent/${eventsolo}`)
      .then(resp=>resp.json())
      .then(e=>{setEve(e);localStorage.setItem("sevent",JSON.stringify(e))})
  },[])

 // localStorage.setItem("selectedeve",se);
  //alert(se);
//   const l1=JSON.parse(localStorage.getItem("selectedeve"));
//   console.log(l1)


    return(
        <div>
            <CustNavComp/>
            <Grid container spacing={2}>
                 <Grid item xs={12}>
                <Card sx={{ maxWidth: 1500}}>
                <CardActionArea>
                <CardMedia
                component="img"
                height="300"
                 image="https://source.unsplash.com/random?wallpapers" //{card.image}
                alt="" //{index}
                
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {se.event_name} 
                
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {se.description}
                
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Date :: {se.event_date}
                
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Duration ::{se.duration}
                
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Ticket Price ::{se.price}
                
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Starting Time ::{se.starttime}
                
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={()=>{{navigate("/payment")}}}>Book Now</Button>
                    
                  </CardActions>
                </CardActionArea>
               </Card> 
               </Grid>
               </Grid>
               
        </div>

    )
    

}