import { Button, Menu, MenuItem } from '@material-ui/core';
import React, { useContext } from 'react'
import { SignInBtn, SignOutBtn } from '../../components'
import { UserContext } from '../../contexts/user'
import './style.css'
export default function Navbar() {
    const [user, setUser] = useContext(UserContext);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="navbar">
            <p>ReactaGram</p>
            {/* {console.log(user)} */}
            {user ? <>

                <img src={user.photoURL} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="userPic" alt="userProfile" />

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem>{`User: ${user.displayName}`}</MenuItem>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>

                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}><SignOutBtn/></MenuItem>
                    
                </Menu></>
                
                : <SignInBtn />}

        </div>
    )
}
