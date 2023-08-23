import React from 'react'
//import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
 import Dance_cat from '../../static/images/Event_Cat/Dance_cat.jpg'
import Standup_cat from '../../static/images/Event_Cat/Standup_cat.jpg'
import Music_cat from '../../static/images/Event_Cat/Music_cat.jpg'
import Drama_cat from '../../static/images/Event_Cat/Drama_cat.jpg'


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import './CardComp.css'
import LoginComp from '../Login/LoginComp';
import { useSelector } from 'react-redux';
import EventComp from '../Event/EventComp';
import { useNavigate } from 'react-router-dom';


export default function CardComp() {
  
    
  let navigate=useNavigate();

  return (
    // <CardGroup className='container'>
    //   <Card >
    //     <Card.Img variant="top" src={image1} />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This content is a little bit longer.
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src={image2} />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This card has supporting text below as a natural lead-in to
    //         additional content.{' '}
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src={image3} />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This card has even longer content than the
    //         first to show that equal height action.
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    // </CardGroup>
    <div className='card1'>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3} >
      <Card sx={{ maxWidth: 345 }} >
    <CardActionArea >
      <CardMedia
        component="img"
        height="140"
        image={Dance_cat}
        alt="green iguana"
        onClick={()=>{{navigate("/login")}}}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          Dancing performance
        </Typography>
        <Typography variant="body2" color="text.secondary">
        dance, the movement of the body in a rhythmic way, usually to music and within a given space, for the purpose of expressing an idea or emotion, releasing energy, or simply taking delight in the movement itself.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ maxWidth: 345 }} >
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={Music_cat}
        alt="green iguana"
        onClick={()=>{{navigate("/login")}}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Music Concert
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Singing is the act of creating musical sounds with the voice.A person whose profession is singing is called a singer, artist or vocalist (in jazz and/or popular music).Singers perform music (arias, recitatives, songs, etc.) </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Standup_cat}
          alt="green iguana"
          onClick={()=>{{navigate("/login")}}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Stand Up Comedy
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Stand-up comedy is a comedic performance to a live audience in which the performer addresses the audience directly from the stage. The performer is known as a comedian, comic, or stand-up.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Drama_cat}
          alt="green iguana"
          onClick={()=>{{navigate("/login")}}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Drama
          </Typography>
          <Typography variant="body2" color="text.secondary">
          drama is a composition in verse or prose presenting a story in pantomime or dialogue. It contains conflict of characters, particularly the ones who perform in front of an audience on the stage. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
    </Grid>

    
    
   
 
    
  
  
  

  </div>
  );
}
