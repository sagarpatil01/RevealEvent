import {  CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import {  Card } from "react-bootstrap";
import CustNavComp from "../Customer/CustNavComp";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
export default function EventComp()
{
  let navigate=useNavigate();
  const[cd,setcardData]=useState([]);
      useEffect(()=>{
        fetch("http://localhost:8080/futureevent")
        .then(resp=>resp.json())
        .then(e=>setcardData(e))
    },[])
    
    
    return(
      <div>
        <CustNavComp/>
        <div>

<h3>Welcome to Event Ticket Booking System!</h3>

<h5 style={{color:"white"}}>Discover and Attend Your Favorite Events with Ease

Looking for the perfect way to experience concerts, conferences, workshops, and more? Look no further! Our Event Ticket Booking System offers a seamless and convenient way to explore a diverse range of events and secure your spot hassle-free.</h5>
<br/>
            <h1>All Upcoming Events</h1>
            <Grid container spacing={4}>
            {cd.map((cs) => (
              localStorage.setItem("eventid", cs.id),
              <Grid item key={cs} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                    onClick={()=>{{navigate(`/singleevent/${cs.id}`)}
                    localStorage.setItem("eventid", cs.id)}}
                    
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cs.event_name}
                    </Typography>
                    <Typography>
                     {cs.description}
                    </Typography>
                    <Typography>
                     {cs.event_date}
                    </Typography>
                  </CardContent>
                  <CardActions>
                     {/* <Button size="small">View</Button>  */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
       
        </div>
       
      </div>
    )
}