import React from 'react'
import '../css/Profile.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


function BarraMenu(){

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const username = JSON.parse(localStorage.getItem('username'));
    const avatar = JSON.parse(localStorage.getItem('avatar'));
    const nombre = JSON.parse(localStorage.getItem('nombre'));

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("id");
        localStorage.removeItem("username");
        localStorage.removeItem("nombre");
        localStorage.removeItem("apellido");
        localStorage.removeItem("avatar");

        window.location.href ="/";

    };
    
    return (
        <div className='root'>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant="h6" className='title'>
                        Perfil: {nombre}
                    </Typography>
                    <div>
                        <IconButton onClick={handleMenu} color="inherit">
                            <Avatar src={avatar}/>
                        </IconButton>
                        <Menu 
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleLogout}> Cerrar sesion </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default BarraMenu;