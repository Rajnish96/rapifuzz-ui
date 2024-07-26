import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

// import { STATUS } from '../../redux/constants';
// import { resetPassword, getForgotPasswordOtp, resetAuthStatus } from '../../redux/actions';
import useStyles from "./styles";
// import CeroEdLogo from '../../assets/images/Logo';

const ForgotPassword = () => {
    const classes = useStyles();


    const handleNext = (step, data) => {
        // if (step === 0) {
        //     setEmail(data.email)
        //     dispatch(getForgotPasswordOtp(userType, data.email));
        // } else if (step === 1) {
        //     setOtp(data.otp)
        //     setProgress(isProgress + 1);
        // } else if (step === 2) {
        //     dispatch(resetPassword(userType, email, otp, data))
        // }
    };


    // const getTitle = () => {
    //     switch (isProgress) {
    //         case 0:
    //             return 'Forgot Password';
    //         case 1:
    //             return 'Enter OTP';
    //         case 2:
    //             return 'Change Password';
    //         default:
    //             throw new Error('Unknown step');
    //     }
    // }

    return (
        <Grid container justifyContent='center' alignContent='center' className={classes.forgotPassword}>
            <Container component="main" maxWidth="sm">
                <Paper variant="outlined" className={classes.container}>
                    <Typography component="h1" variant="h5" className={classes.cardTitle} align="center">
                        {/* {getTitle(isProgress)} */}
                    </Typography>
                    <>
                       
                    </>
                </Paper>
            </Container>
        </Grid >
    );
}

export default ForgotPassword;
