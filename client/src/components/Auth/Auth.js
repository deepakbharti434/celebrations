import React, {useState} from 'react'
import {  Button, Typography, Paper,Avatar,Grid,Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import useStyle from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import {GoogleLogin} from 'react-google-login'
import { useDispatch } from 'react-redux';
import { signin, signup } from '../../actions/auth';


import Icon from './Icon';
const Auth = () => {
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword:''
    }
    const cases= useStyle();
    const [isSignup,setIsSignup]= useState(false);
    const dispatch= useDispatch();
    const history= useHistory();
    const [formData,setFormData]= useState(initialState);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if (isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const [showPassword,setShowPassword]= useState(false);

    const handleShowPassword=()=>{
        setShowPassword((preShowPassword)=> !preShowPassword); 
    }
    const switchMode=()=>{
        setIsSignup((prev)=> !prev);
        setShowPassword(false);
    }
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({
                type: 'AUTH', data: {
                    result, token
                }
            });
            history.push('/');
        } catch (error) {
            console.log(error);
        }
     
    }
    const googleFailure=(error)=>{
        console.log(error);
        console.log(
            "Google sign in was successful"
        );
    }
    return (
        <Container component="main" maxWidth='xs'>
            <Paper className={cases.paper} elevation={3}>
              <Avatar className={cases.Avatar}>
                  <LockOutlinedIcon></LockOutlinedIcon>

              </Avatar>
              <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={cases.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                    
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                    </Grid>
                    
                    
                    <Button type="submit" fullWidth variant="contained" color="primary" className={cases.submit}>
                        {isSignup? 'Sign Up': 'Sign In'}
                    </Button>
                    <GoogleLogin clientId="553281188785-6l8e6j88kqehedcfqpjsv6ojhu6mc0lj.apps.googleusercontent.com" render={(renderProps) => (
                        <Button className={cases.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">Google Sign In</Button>
                    )} onSuccess={googleSuccess} onFailure={ googleFailure } cookiePolicy="single_host_origin"/>
                    <Grid container justify='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup? "Already have an account? Sign In": "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>

            
                </form>
            </Paper>

        </Container>
    )
}

export default Auth
