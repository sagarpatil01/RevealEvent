import { CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Button, Card } from "react-bootstrap";
import CustNavComp from "../Customer/CustNavComp";
import { useNavigate } from "react-router-dom";
import React, { useEffect,useState } from "react";
import OrgNavComp from "./OrgNavComp";

import SendIcon from '@mui/icons-material/Send';
export default function ViewArtists()
{
  let navigate=useNavigate();

  const[organizer,setOraganizer]=React.useState('');
  const[sa,setArtist]=useState([]);
 
 const loginid=JSON.parse(localStorage.getItem("loggedUser")).id;

    
    React.useEffect(()=>{
      fetch("http://localhost:8080/getorname?login_id="+loginid)
      .then(resp=>resp.json())
      .then(obj=>{
          localStorage.setItem("loggedCustomer",JSON.stringify(obj))
          setOraganizer(obj.id);
          // alert(obj.id)
          fetch("http://localhost:8080/getartist")
          .then(resp=>resp.json())
          .then(e=>setArtist(e))
      })
     
  },[])

  //const[sa,setArtist]=useState([]);
    //   useEffect(()=>{
    //     fetch("http://localhost:8080/getartist")
    //     .then(resp=>resp.json())
    //     .then(e=>setArtist(e))
    // },[])

   // const loggedOrganizerId = parseInt(localStorage.getItem("loggedOrganizer"));
    var url="http://localhost:8080/insertartistreq";

    const sendData = (e) => {
     // e.preventDefault();
      const reqOptions={
          method:'POST',
          headers:{'content-type':'application/json'},
          body:JSON.stringify({org_id:organizer,art_id:e.id})
      }
       fetch(url,reqOptions)
      .then(resp => {if(resp.ok)
                        return resp.text();
                      else
                        throw new Error("Server error");
                     })
      .then(text => text.length ? JSON.parse(text):{})
      .then(obj=>console.log(obj))

      navigate(`/sendrequest`)
                  }
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
                  <button type="button" class="btn btn-info"
                   onClick={()=>{{ sendData(cs)}
                  } } 
                   >Request</button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
       
        </div>
       
      </div>
    )
}