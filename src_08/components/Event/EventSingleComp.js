import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import CustNavComp from "../Customer/CustNavComp";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function EventSingle()
{
    let navigate=useNavigate();
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
                {/* {card.title} */}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {/* {card.content} */}
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={()=>{{navigate("/payment")}}}>Book Now</Button>
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </CardActionArea>
               </Card> 
               </Grid>
               </Grid>
        </div>

    )

}