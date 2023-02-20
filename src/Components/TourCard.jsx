import React from 'react'
import {Box,  Typography , Paper ,Grid, Rating , createTheme, ThemeProvider} from '@mui/material';
import {AccessTime} from '@mui/icons-material'

const theme = createTheme({
    components:{
        MuiTypography:{
            variants:[
                {   props : {
                        variant:"body2",
                    },
                    style : {
                        fontSize:11,
                    },
                },
                {   props : {
                        variant:"body3",
                    },
                    style : {
                        fontSize:9,
                    },
                },

            ]
        },
    },
});

const TourCard = ({tour}) => {
  return (
    <>
    <Grid item xs={3}>
        <ThemeProvider theme={theme}>
            <Paper elevation={5}>
                <img src={tour.image} className='img' alt="" />
                <Box paddingX={1}>
                    <Typography variant='subtitle1' component="h2">
                        {tour.name}
                    </Typography>
                    <Box sx={{
                        display:"flex",
                        alignItems: "center",                   
                    }}>
                        <AccessTime sx={{width: 18.5, marginRight: 0.5}}/>
                        <Typography variant='body2' component="p">
                            {tour.duration}
                        </Typography>
                    </Box>
                    <Box sx={{
                        display:"flex",
                        alignItems: "center",  
                        marginTop: 3                 
                    }}>
                        <Rating name="read-only" readOnly precision={0.5} value={tour.rating} size="small"/>
                        <Typography variant='body2' component="p">
                            {tour.rating}
                        </Typography>
                        <Typography variant='body3' component="p" >
                            ({tour.numberOfReviews} reviews)
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6' component="h3">
                            From C ${tour.price}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </ThemeProvider>
    </Grid>
    </>
  )
}

export default TourCard