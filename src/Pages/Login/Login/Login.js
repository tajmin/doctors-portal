import { Alert, Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {
    const [loginDetails, setLoginDetails] = useState({});
    const { user, authError, emailLogin, isLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newLoginDetails = { ...loginDetails };
        newLoginDetails[field] = value;
        setLoginDetails(newLoginDetails);
    }

    const handleLoginForm = event => {
        event.preventDefault();
        emailLogin(loginDetails.email, loginDetails.password, location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 12, pb: 4 }} variant="h4" align="left" gutterBottom component="div">
                        Login
                    </Typography>
                    {
                        isLoading ? <CircularProgress /> :
                            <form onSubmit={handleLoginForm}>
                                <TextField sx={{ my: 1 }} label="Email"
                                    fullWidth size="small" name="email" variant="standard" onBlur={handleOnBlur}
                                />
                                <TextField sx={{ my: 1 }} label="Password"
                                    fullWidth size="small" name="password" type="password" variant="standard" onBlur={handleOnBlur}
                                />
                                <Button sx={{ my: 3, width: '100%', py: 1.25 }} type="submit" variant="contained" >Submit</Button>
                            </form>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                    <NavLink style={{ textDecoration: 'none' }} to="/register">
                        <Button
                            sx={{ my: 3, width: '100%', py: 1.25 }} variant="text" >Don't have an account? Register</Button>
                    </NavLink>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img sx={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;