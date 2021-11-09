import { Alert, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import BookingSlot from '../BookingSlot/BookingSlot';

const bookingSlots = [
    {
        id: 1,
        name: 'Cavity Protection',
        time: '09.00 AM - 10.00 AM',
        space: 5
    },
    {
        id: 2,
        name: 'Oral Surgeon',
        time: '11.00 AM - 12.00 PM',
        space: 7
    },
    {
        id: 3,
        name: 'Pediatric Dental',
        time: '12.00 PM - 02.00 PM',
        space: 10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '03.00 PM - 08.00 PM',
        space: 6
    }
]

const AvailableAppoinment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <Container>
            <h2>Available Appointments on {date.toDateString()}</h2>
            {
                bookingSuccess && <Alert severity="success">Booked Successfully!</Alert>
            }
            <Grid container spacing={2}>
                {
                    bookingSlots.map(booking => <BookingSlot
                        key={booking.id} booking={booking} date={date} setBookingSuccess={setBookingSuccess}
                    >
                    </BookingSlot>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableAppoinment;