import ArtistNavComp from "./ArtistNavComp";
import './ArtistRequestComp.css'

import * as React from 'react';

import { Card, CardContent, Button, Typography, Grid, CardActionArea, CardMedia, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function ArtistRequest(){

//  const loggedArtistId = parseInt(localStorage.getItem("loggedOrganizer"));
 // console.log("hiiiii"+loggedArtistId)
 const[artist,setArtist]=React.useState('');
 const[sr,setReq]=React.useState([]);
 const loginid=JSON.parse(localStorage.getItem("loggedUser")).id;

    let navigate=useNavigate();
    React.useEffect(()=>{
      fetch("http://localhost:8080/getarname?login_id="+loginid)
      .then(resp=>resp.json())
      .then(obj=>{
          localStorage.setItem("loggedCustomer",JSON.stringify(obj))
          setArtist(obj.id);
          //alert(obj.id)
          fetch("http://localhost:8080/getbyartist?art_id="+obj.id)
          .then(resp=>resp.json())
          .then(e=>setReq(e))
      })
     
  },[])

    //const[sr,setReq]=React.useState([]);
  //   React.useEffect(()=>{
  //     alert("hi " +artist);
  //     fetch("http://localhost:8080/getbyartist?art_id="+artist)
  //     .then(resp=>resp.json())
  //     .then(e=>setReq(e))
  // },[])

  
 // const url1="http://localhost:8080/updatestatus";
  
  const sendData = (e) => {
   // e.preventDefault();
    const reqOptions={
        method:'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(),
        
    }
  
    

     fetch("http://localhost:8080/updatestatus/"+e.id,reqOptions)
    .then(resp => {if(resp.ok)
                      return resp.text();
                    else
                      throw new Error("Server error");
                   })
    .then(text => text.length ? JSON.parse(text):{})
    .then(obj=>console.log(obj))
    .catch(error => console.error("Request failed:", error));

    navigate(`/requestapproved`)
                }

    return(
        <div>
            <ArtistNavComp/>
           
            <Grid container spacing={2}>
            {sr.map((r) => (
              <Grid item xs={12} sm={6} md={12}>
                <Card sx={{ maxWidth: 1200 }} >
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
                      {r.org_id?.company_name}<span> </span>
                      {/* { cs.last_name}  */}
                    </Typography>
                    <Typography>
                        <div>
                            <span>   <b>Email : </b> {r.org_id.email}</span>
                        
                            <span>   <b>Contact No : </b>  {r.org_id.contact_no} </span>
                            
                        </div>                        
                    </Typography>
                    <Typography>
                    <span>     </span>
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <button type="button" class="btn btn-success" onClick={()=>{sendData(r)}}>Approve</button>
                  {/* <button type="button" class="btn btn-danger">Decline</button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

         {/* <h1>{url1} {urlWithId}</h1> */}
        </div>
    )
}