import { CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import CustNavComp from "./CustNavComp";
import { Card } from "react-bootstrap";
import { blue } from "@mui/material/colors";
import { useEffect, useState } from "react";
import "./CustProfile.css"

export default function CustProfile(){
    const loggedCust=JSON.parse(localStorage.getItem("loggedCustomer"));
     console.log(loggedCust.id);
    
    const[st,setTickets]=useState([]);
    useEffect(()=>{
      fetch("http://localhost:8080/getuser?uid="+loggedCust.id)
      .then(resp=>resp.json())
      .then(e=>setTickets(e))
  },[])
    return (
        <div>
            <CustNavComp/>
            <div class="card">
            <div class="card-header">
                <h3>{loggedCust.first_name } { loggedCust.last_name} </h3> 
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p><b>Email :</b>{loggedCust.email}</p>
                <p><b>Contact No :</b>{loggedCust.contact_no}</p>
                <p><b>Address :</b>{loggedCust.address}</p>
                <p><b>Birthdate :</b>{loggedCust.birthdate}</p>
                {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
                </blockquote>
            </div>
            </div>
            {/* <Grid container spacing={2}>
                 <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 1500}} className="artist-card">
                <CardActionArea>
                <CardMedia
                // className="artist-media"
                // component="img"
                // height="300"
                //  image="https://source.unsplash.com/random?wallpapers"
                // alt="" 
                 />
                <CardContent className="artist-content">
                <Typography gutterBottom variant="h6" component="div">
                <h1 style={{color:blue}}>{loggedCust.first_name } { loggedCust.last_name}</h1>
                </Typography>

                <Typography gutterBottom variant="h6" component="div">
                <b>Email :</b>{loggedCust.email}
                </Typography>

                <Typography gutterBottom variant="h6" component="div">
                <b>Contact No :</b>{loggedCust.contact_no}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                <b>Address :</b>{loggedCust.address}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                <b>Birthdate :</b>{loggedCust.birthdate}
                </Typography>
                </CardContent>
                <CardActions>
                 
                  </CardActions>
                </CardActionArea>
               </Card> 
                
               </Grid>
               <Grid item xs={12} sm={6} md={7}> */}
                
              
               <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                        <th colSpan="7"><h3>Your tickets</h3></th>
                        </tr>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Event</th>
                        <th scope="col">Venue</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {st.map((t,index) => (
                        <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{t.event_id.event_name}</td>
                        <td>{t.event_id.venue_id.venue_name}</td>
                        <td>{t.event_id.event_date}</td>
                        <td>{t.event_id.starttime}</td>
                        <td>{t.quantity}</td>
                        <td>{t.total_amount} Rs.</td>
                        </tr>
                         ))}
                        {/* <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr> */}
                    </tbody>
                    </table>
                   
                    {/* </Grid>
               </Grid> */}
        </div>
    )
}