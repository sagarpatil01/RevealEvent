import { CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Card } from "react-bootstrap";
import CustNavComp from "../Customer/CustNavComp";
import CardList from "./CardListComp";
import './EventCatComp.css'
import { useNavigate } from "react-router-dom";
export default function EventCat()
{
    
    return(
      <div>
        <CustNavComp/>

         {/* <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
               Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
              </Typography>
              </CardContent>
            </CardActionArea>
            </Card>
       
        </div>

    */}
    <CardList/>
      </div>
    )
}