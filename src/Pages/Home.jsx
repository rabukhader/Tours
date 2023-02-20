import React from 'react'
import TourCard from '../Components/TourCard';
import { Container, Grid, Typography} from '@mui/material';
import cities from '../data.json'
const Home = () => {
  return (
    <>
      <Container sx={{marginY: 5}} maxWidth="lg">
        {cities.map((city)=>(
            <>
              <Typography variant='h4' component='h2' marginTop={5} marginBottom={3}>
                Top {city.name} Tours
              </Typography>
              <Grid container spacing={3}>
                {city.tours.map((tour,index)=> <TourCard tour={tour} key={index} />)}
              </Grid>
            </>
        ))}
      </Container>
    </>
  )
}

export default Home