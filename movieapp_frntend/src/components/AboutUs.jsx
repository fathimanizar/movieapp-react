import { Typography } from '@mui/material'
import React from 'react'

const AboutUs = () => {
  return (
    <div style={{paddingTop:'100px'}}>
       <Typography variant='h4'  style={{color:'rgb(184, 182, 182)',fontFamily:'fantacy',marginTop:'150px'}}>ABOUT US</Typography>
       <br /><br />
        <Typography variant='h6' style={{color:'rgb(184, 182, 182)',marginBottom:'300px',fontFamily:'fantacy',width:'50%',marginLeft: 'auto',marginRight:'auto'}}>This is a Movie Management App build using React.js as a part of the course on web development using react
          which will list out the details of latest releasing movies of all languages. Also there is an add option where you can add the details of new movies.</Typography>
         <br /><br />
    
   
    </div>
  )
}

export default AboutUs