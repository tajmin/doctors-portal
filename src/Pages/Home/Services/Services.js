import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';





const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus gravida vehicula. ',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus gravida vehicula. ',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus gravida vehicula. ',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 'regular', color: 'success.main', my: 2 }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 'bold', mb: 6 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service) => <Service
                        key={service.name}
                        service={service}
                    ></Service>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;