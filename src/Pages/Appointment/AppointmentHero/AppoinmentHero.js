import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import chair from '../../../images/chair.png'
import Calendar from '../../Shared/Calendar/Calendar';

const AppoinmentHero = ({ date, setDate }) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppoinmentHero;