import { Alert, Button, Container, Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'
const Register = () => {
    const [registrationDetails, setRegistrationDetails] = useState({});
    const { user, authError, registerUser, isLoading } = useAuth();

    const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newRegistrationDetails = { ...registrationDetails };
        newRegistrationDetails[field] = value;
        setRegistrationDetails(newRegistrationDetails);
    }

    const handleRegistrationForm = event => {
        event.preventDefault();
        if (registrationDetails.password !== registrationDetails.confirmPassword) {
            alert('passwords did not match');
            return;
        }
        registerUser(registrationDetails.email, registrationDetails.password);

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 12, pb: 4 }} variant="h4" align="left" gutterBottom component="div">
                        Register
                    </Typography>
                    {
                        isLoading ? <CircularProgress /> : <form onSubmit={handleRegistrationForm}>
                            <TextField sx={{ my: 1 }} label="Email"
                                fullWidth size="small" type="email" name="email" variant="standard" onBlur={handleOnBlur}
                            />
                            <TextField sx={{ my: 1 }} label="Password"
                                fullWidth size="small" name="password" type="password" variant="standard" onBlur={handleOnBlur}
                            />
                            <TextField sx={{ my: 1 }} label="Confirm Password"
                                fullWidth size="small" name="confirmPassword" type="password" variant="standard" onBlur={handleOnBlur}
                            />
                            <Button sx={{ my: 3, width: '100%', py: 1.25 }} type="submit" variant="contained" >Submit</Button>
                        </form>
                    }

                    {
                        user?.email && <Alert severity="success">Registration Completed Successfully!</Alert>
                    }

                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }

                    <NavLink style={{ textDecoration: 'none' }}
                        to="/login">
                        <Button sx={{ my: 3, width: '100%', py: 1.25 }} variant="text" >Already have an account? Login</Button>
                    </NavLink>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img sx={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;