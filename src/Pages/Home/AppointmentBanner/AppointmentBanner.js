import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken',
    marginTop: '150px'
}

const AppointmentBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container style={appointmentBanner}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <img style={{ width: '370px', marginTop: '-100px', marginBottom: '-4px' }} src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={6} md={8} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        <Box>
                            <Typography variant="h5" style={{ color: '#5CE7ED' }}>
                                Appointment
                            </Typography>
                            <Typography variant="h4" sx={{ fontWeight: 600, color: 'primary.contrastText', mt: 2, mb: 3 }}>
                                Make an Appointment Today
                            </Typography>
                            <Typography variant="h6" sx={{ typography: 'body2', fontWeight: 500, color: 'primary.contrastText', mb: 4 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto impedit natus eius doloremque?
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;