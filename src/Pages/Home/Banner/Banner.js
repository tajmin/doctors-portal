import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Typography, Container } from '@mui/material';

const bannerBackground = {
    background: `url(${bg})`,
    height: '50vh'
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '50vh'
}

const Banner = () => {
    return (
        <Container style={bannerBackground} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{ textAlign: 'left' }}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h3" sx={{ mt: 2, mb: 3 }}>
                            Your New Smile Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 14, color: 'text.secondary', mt: 2, mb: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste excepturi magni dolores a ducimus!
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appoinment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '450px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Banner;