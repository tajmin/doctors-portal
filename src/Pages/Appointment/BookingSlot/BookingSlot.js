import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';

const BookingSlot = ({ booking, date }) => {
    const { name, time, space } = booking;
    const [openModal, setOpenModal] = React.useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 3 }}>
                    <Typography variant="h6" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom component="div">
                        {space} spaces available
                    </Typography>
                    <Button onClick={handleModalOpen} variant="contained">Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                booking={booking}
                openModal={openModal}
                date={date}
                handleModalClose={handleModalClose}
            ></BookingModal>
        </>
    );
};

export default BookingSlot;