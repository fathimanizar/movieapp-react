import { Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import '../components/style.css';
import axios from 'axios';
import AddMovie from './AddMovie';

const HomePage = () => {
    const[movies,setMovies]=useState([]);
    const[update,setUpdate]=useState(false);
    const [singlevalue,setSinglevalue]=useState([])

// ..............To get the movie list.......................
    useEffect(()=>{
        axios.get("http://localhost:3003/viewmovies")
        .then((response)=>{
          setMovies(response.data);
        })
       },[]);

//..............To edit a movie............................

const editmovie=(value)=>{
    setUpdate(true);
    setSinglevalue(value);
     }  

// ..............To delete a movie .......................
       const deletemovie=(id)=>{
        axios.delete("http://localhost:3003/deletemovie/"+id)
        .then(()=>{
          alert("Movie deleted successfully");
          window.location.reload(false);
         
         })
         .catch(err=>{
           console.log(err)
         })
       }

       var finalJSX = 
       
      <TableContainer style={{paddingTop:'150px'}}>
       <Table style={{backgroundColor:'black',width:'90%',marginLeft: 'auto',marginRight:'auto',marginBottom:'150px',borderRadius:'20px'}}>

           <TableHead className='head'>
               <TableRow>
                   <TableCell style={{color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>MOVIE NAME</TableCell>
                   <TableCell style={{color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>ACTOR</TableCell>
                   <TableCell style={{color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>ACTRESS</TableCell>
                   <TableCell style={{color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>DIRECTOR</TableCell>
                   <TableCell style={{color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>RELEASED YEAR</TableCell>
                   <TableCell style={{color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>CAMERA</TableCell>
                   <TableCell style={{color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>PRODUCER</TableCell>
                   <TableCell style={{color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>LANGUAGE</TableCell>
                   <TableCell style={{border:'black'}}></TableCell>
                   <TableCell style={{border:'black'}}></TableCell>

               </TableRow>
           </TableHead>

           <TableBody>
           {movies.map((val,index)=>{
                                  return(
                                      <TableRow key={index}>
                                          <TableCell style={{fontSize:'18px',color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>{val.movie_name}</TableCell>
                                          <TableCell style={{fontSize:'18px',color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>{val.actor}</TableCell>
                                          <TableCell style={{fontSize:'18px',color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>{val.actress}</TableCell>
                                          <TableCell style={{fontSize:'18px',color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>{val.director}</TableCell>
                                          <TableCell style={{fontSize:'18px',color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>{val.released_year}</TableCell>
                                          <TableCell style={{fontSize:'18px',color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>{val.camera}</TableCell>
                                          <TableCell style={{fontSize:'18px',color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>{val.producer}</TableCell>
                                          <TableCell style={{fontSize:'18px',color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>{val.language}</TableCell>

                                           {/* .......................TABLE CELL FOR EDIT MOVIE......................... */}
                                           <TableCell  style={{border:'black'}}>
                                               <Button variant='contained' style={{color:'rgb(184, 182, 182)',backgroundColor:'rgb(45, 1, 1)'}} onClick={()=>editmovie(val)}>
                                               <Tooltip title='Edit'>
                                                   <IconButton>
                                                   <EditSharpIcon style={{fontSize:'20px',color:'rgb(184, 182, 182)'}}/>
                                                   </IconButton>
                                               </Tooltip>
                                               </Button>
                                           </TableCell>
                                           {/* .......................TABLE CELL FOR DELETE MOVIE......................... */}
                                           <TableCell  style={{border:'black'}}>
                                               <Button variant='contained'style={{color:'rgb(184, 182, 182)',backgroundColor:'rgb(45, 1, 1)'}} onClick={()=>deletemovie(val._id)}>
                                               <Tooltip title='Delete'>
                                                   <IconButton>
                                                   <DeleteSharpIcon style={{fontSize:'20px',color:'rgb(184, 182, 182)'}}/>
                                                   </IconButton>
                                               </Tooltip>
                                               </Button>
                                           </TableCell>

                                      </TableRow>
                                  )
                               })}
            
              
           </TableBody>
       </Table>
      </TableContainer>
 if(update) finalJSX = <AddMovie data={singlevalue} method='put'/>
 return finalJSX;
};

export default HomePage