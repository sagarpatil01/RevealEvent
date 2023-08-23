import { CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Button, Card } from "react-bootstrap";
import CustNavComp from "../Customer/CustNavComp";

import CardList from "./CardListComp";
import cardData from './cardData.json';

export default function EventComp()
{
  
    return(
      <div>
        <CustNavComp/>
        <div>
            {/* <Card sx={{ maxWidth: 345 }}>
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
            </Card> */}
            <h1>All Events</h1>
            <Grid container spacing={4}>
            {cardData.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
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
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
       
        </div>
       
      </div>
    )
}