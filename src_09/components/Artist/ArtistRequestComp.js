import ArtistNavComp from "./ArtistNavComp";
import './ArtistRequestComp.css'




import * as React from 'react';

import { Card, CardContent, Button, Typography, Grid, CardActionArea } from '@mui/material';

export default function ArtistRequest(){
    return(
        <div>
            <div></div>
            <ArtistNavComp/>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={12} >
            <Card sx={{ maxWidth: 1200 }} >
            <CardActionArea >
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                    Dancing performance Event
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    dance, the movement of the body in a rhythmic way, usually to music and within a given space, for the purpose of expressing an idea or emotion, releasing energy, or simply taking delight in the movement itself.
                    </Typography>
                </CardContent>
                <Button
          variant="contained"
          color="primary"
         >
          Approve Request
        </Button>
                </CardActionArea>
            </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={12} >
            <Card sx={{ maxWidth: 1200}} >
            <CardActionArea >
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                    Dancing performance Event
                    
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    dance, the movement of the body in a rhythmic way, usually to music and within a given space, for the purpose of expressing an idea or emotion, releasing energy, or simply taking delight in the movement itself.
                    </Typography>
                </CardContent>
                <Button
          variant="contained"
          color="primary"
         >
          Approve Request
        </Button>
                </CardActionArea>
            </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={12} >
            <Card sx={{ maxWidth: 1200 }} >
            <CardActionArea >
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                    Dancing performance Event
                    
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    dance, the movement of the body in a rhythmic way, usually to music and within a given space, for the purpose of expressing an idea or emotion, releasing energy, or simply taking delight in the movement itself.
                    </Typography>
                </CardContent>
                <Button
          variant="contained"
          color="primary"
         >
          Approve Request
        </Button>
                </CardActionArea>
            </Card>
      </Grid>
    </Grid>

    
        </div>
    )
}
         <Button
          variant="contained"
          color="primary"
         >
          Approve Request
        </Button>