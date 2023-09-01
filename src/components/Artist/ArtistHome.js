
import ArtistNavComp from "./ArtistNavComp";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import './ArtistHome.css';
import { useEffect, useState } from "react";
import { blue, blueGrey } from "@mui/material/colors";


export default function ArtistHome(){
    const[artist,setArtist]=useState(null);
    useEffect(()=>{
        const loginid=JSON.parse(localStorage.getItem("loggedUser")).id;
        fetch("http://localhost:8080/getarname?login_id="+loginid)
        .then(resp=>resp.json())
        .then(obj=>{
            localStorage.setItem("loggedCustomer",JSON.stringify(obj))
            setArtist(obj);
        })
    },[])

    const loggedArtistId = parseInt(localStorage.getItem("loggedOrganizer"));
    return (
        <div className="artist-home" >
            <ArtistNavComp/>
            
            <Grid container spacing={2}>
                 <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ maxWidth: 1500}} className="artist-card">
                <CardActionArea>
                <CardMedia
                className="artist-media"
                component="img"
                height="300"
                 image="https://source.unsplash.com/random?wallpapers"
                alt="" 
                 />
                <CardContent className="artist-content">
                <Typography gutterBottom variant="h5" component="div">
                
               <h1 style={{color:blue}}>  {artist && artist.first_name} {artist && artist.last_name}</h1>
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                
                <b>Email :</b>{artist && artist.email} 
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                
                <b>Contact NO :</b>{artist && artist.contact_no}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                
                
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                
                <b>Social Media Handle :</b>{artist && artist.social_media1}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                
                <b>Social Media Handle :</b>{artist && artist.social_media2}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                
                {artist && artist.description}
               
                
                
                
                </Typography>
                </CardContent>
                <CardActions>
                 
                  </CardActions>
                </CardActionArea>
               </Card> 
               </Grid>
               </Grid>
       
        </div>
    )
    
}