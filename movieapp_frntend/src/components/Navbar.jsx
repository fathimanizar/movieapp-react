import { AppBar, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PlaylistAddSharpIcon from '@mui/icons-material/PlaylistAddSharp';
import TextSnippetSharpIcon from '@mui/icons-material/TextSnippetSharp';
import icon from "../images/icon.png";
import '../components/style.css';


const Navbar = () => {
  return (
    <div >
        <AppBar className='nav' style={{color:'rgb(184, 182, 182)'}}>
            <Toolbar>
                <Typography variant='h4' style={{fontFamily:'fantacy'}}>Movie Management App</Typography>&nbsp;&nbsp;&nbsp;
                <img height='80px' src={icon} alt="film-roll-logo" />
             
                <Button><NavLink to={'/'} style={{textDecoration:'none',marginLeft:'190px'}}>
                    <Tooltip title='Home'>
                      <IconButton>
                      <HomeSharpIcon style={{fontSize:'40px',color:'rgb(184, 182, 182)'}} />
                      </IconButton>
                    </Tooltip>
                </NavLink></Button>

                <Button><NavLink to={'/add'} style={{textDecoration:'none'}}>
                <Tooltip title='Add Movie'>
                      <IconButton>
                      <PlaylistAddSharpIcon style={{fontSize:'40px',color:'rgb(184, 182, 182)'}}/>
                      </IconButton>
                    </Tooltip> 
                </NavLink></Button>

                <Button><NavLink to={'/about'} style={{textDecoration:'none'}}>
                <Tooltip title='About Us'>
                      <IconButton>
                      <TextSnippetSharpIcon style={{fontSize:'40px',color:'rgb(184, 182, 182)'}}/>
                      </IconButton>
                    </Tooltip>
                </NavLink></Button>
           
        
                

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar