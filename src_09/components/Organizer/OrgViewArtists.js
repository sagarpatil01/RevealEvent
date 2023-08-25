import { CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Button, Card } from "react-bootstrap";
import CustNavComp from "../Customer/CustNavComp";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import OrgNavComp from "./OrgNavComp";

import SendIcon from '@mui/icons-material/Send';
export default function ViewArtists()
{
  let navigate=useNavigate();
  const[sa,setArtist]=useState([]);
      useEffect(()=>{
        fetch("http://localhost:8080/getartist")
        .then(resp=>resp.json())
        .then(e=>setArtist(e))
    },[])
    return(
      <div>
        <OrgNavComp/>
        <div>
            <h3>Welcome to our Event Ticket Booking System!</h3>
            <h1>All Artists</h1>
            <Grid container spacing={20}>
            {sa.map((cs) => (
              <Grid item xs={12} sm={6} md={12}>
                <Card
                  sx={{ maxWidth: 1200 }}
                  
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '6.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cs.first_name }<span> </span>{ cs.last_name} 
                    </Typography>
                    <Typography>
                        <div>
                            <span>   <b>Email : </b>{cs.email}   </span>
                        
                            <span>   <b>Contact No : </b>{cs.contact_no}  </span>
                            

                        </div>
                        
                    </Typography>
                    <Typography>
                    <span>   {cs.description}   </span>
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <button type="button" class="btn btn-info">Request</button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
       
        </div>
       
      </div>
    )
}