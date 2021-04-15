import React, {useState,useEffect} from 'react'
import {AppBar,Typography,Toolbar,Button,Avatar} from '@material-ui/core';
import useStyles from './styles'
import {Link,  useHistory, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import memories from '../../images/memories.jpg';


const Navbar = () => {
    const classes= useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    return (
        <div>
        <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
                <Typography component={ Link } to="/" className={ classes.heading } variant="h2" align="center">celebrations</Typography>
                <img className={ classes.image } src={memories} alt="memories" height="60" />
        </div>
        <Toolbar className={classes.toolbar}> 
                    {user ? (
                        <div className={classes.profile}>
                            <div>
                                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            </div>
                            <div>
                                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                            </div>
                            <div>
                                <Button variant="contained" className={classes.logout} color="secondary"onClick={logout}>Logout</Button>
                            </div>
                        </div>
                    ) : (
                            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                    )}
                </Toolbar>
        
      </AppBar>
      
        </div>
    )
}

export default Navbar
