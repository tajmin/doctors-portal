import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ booking, openModal, handleModalClose, date, setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' };
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newInfo = { ...bookingInfo };
        console.log(newInfo);
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = event => {
        event.preventDefault();
        const appointment = {
            ...bookingInfo,
            serviceName: name,
            time,
            date: date.toLocaleDateString()
        };
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleModalClose();
                }
            })


    }
    return (
        <div>
            <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
                open={openModal} onClose={handleModalClose} closeAfterTransition BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <Typography sx={{ my: 2 }} id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <form onSubmit={handleBookingSubmit}>
                            <TextField sx={{ my: 1 }} label="Time"
                                disabled
                                id="outlined-size-small" defaultValue={time}
                                fullWidth
                                size="small"
                            />
                            <TextField sx={{ my: 1 }} label="Date"
                                disabled defaultValue={date.toDateString()}
                                fullWidth
                                size="small"
                            />
                            <TextField sx={{ my: 1 }} label="Name" id="outlined-size-small" name="patientName"
                                defaultValue={user.displayName} fullWidth size="small" onBlur={handleOnBlur}
                            />
                            <TextField sx={{ my: 1 }} label="Email" id="outlined-size-small" name="email"
                                defaultValue={user.email} fullWidth size="small" onBlur={handleOnBlur}
                            />

                            <Button sx={{ my: 1 }} type="submit" variant="contained">Book Now</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;