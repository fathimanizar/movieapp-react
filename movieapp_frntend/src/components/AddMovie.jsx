import { Table, TableCell, TableContainer, TableRow, TextField, Button, Tooltip, IconButton } from '@mui/material'
import React, { useState } from 'react'
import AddSharpIcon from '@mui/icons-material/AddSharp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMovie = (props) => {
    var navigate = useNavigate();
    var[inp,setInp]=useState(props.data);
    const inputhandler=(e)=>
    {
      const {name,value}= e.target;
      setInp((inp)=>({...inp,[name]:value}));
    }
    const addmovie=()=>
    {
      if(props.method==="post")
      {
        axios.post("http://localhost:3003/addmovie",inp)
        .then(()=>{
             alert("new movie added successfully");
             navigate('/')
            })
            .catch(err=>{
              console.log(err)
            })
      }

      if(props.method==="put")
      {
        axios.put("http://localhost:3003/editmovie/"+inp._id,inp)
        .then(()=>{
             alert("movie updated successfully");
             window.location.reload(false)
            })
            .catch(err=>{
              console.log(err)
            })
      }

    }

  return (
    <div style={{paddingTop:'120px'}}>
       
        <TableContainer>
            <Table style={{backgroundColor:'black',width:'50%',marginLeft: 'auto',marginRight:'auto',marginBottom:'50px',borderRadius:'20px'}}>
          
                  <TableRow>
                    <TableCell style={{color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>MOVIE NAME</TableCell>
                    <TableCell style={{border:'black'}}><TextField variant='outlined' name='movie_name' value={inp.movie_name} onChange={inputhandler} style={{backgroundColor:'rgb(184, 182, 182)',width:'100%',borderRadius:'10px'}}/></TableCell>
                  </TableRow>  
                  <TableRow>
                    <TableCell  style={{color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>ACTOR</TableCell>
                    <TableCell style={{border:'black'}}><TextField variant='outlined' name='actor' value={inp.actor} onChange={inputhandler} style={{backgroundColor:'rgb(184, 182, 182)',width:'100%',borderRadius:'10px'}}/></TableCell>
                  </TableRow> 
                  <TableRow>
                    <TableCell  style={{color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>ACTRESS</TableCell>
                    <TableCell style={{border:'black'}}><TextField variant='outlined' name='actress' value={inp.actress} onChange={inputhandler} style={{backgroundColor:'rgb(184, 182, 182)',width:'100%',borderRadius:'10px'}}/></TableCell>
                  </TableRow> 
                  <TableRow>
                    <TableCell  style={{color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>DIRECTOR</TableCell>
                    <TableCell style={{border:'black'}}><TextField variant='outlined' name='director' value={inp.director} onChange={inputhandler} style={{backgroundColor:'rgb(184, 182, 182)',width:'100%',borderRadius:'10px'}}/></TableCell>
                  </TableRow> 
                  <TableRow>
                    <TableCell  style={{color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>RELEASED YEAR</TableCell>
                    <TableCell style={{border:'black'}}><TextField variant='outlined' name='released_year' value={inp.released_year} onChange={inputhandler} style={{backgroundColor:'rgb(184, 182, 182)',width:'100%',borderRadius:'10px'}}/></TableCell>
                  </TableRow> 
                  <TableRow>
                    <TableCell  style={{color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>CAMERA</TableCell>
                    <TableCell style={{border:'black'}}><TextField variant='outlined' name='camera' value={inp.camera} onChange={inputhandler} style={{backgroundColor:'rgb(184, 182, 182)',width:'100%',borderRadius:'10px'}}/></TableCell>
                  </TableRow> 
                  <TableRow>
                    <TableCell  style={{color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>PRODUCER</TableCell>
                    <TableCell style={{border:'black'}}><TextField variant='outlined' name='producer' value={inp.producer} onChange={inputhandler} style={{backgroundColor:'rgb(184, 182, 182)',width:'100%',borderRadius:'10px'}}/></TableCell>
                  </TableRow> 
                  <TableRow>
                    <TableCell  style={{color:'rgb(184, 182, 182)',border:'black',fontFamily:'fantacy'}}>LANGUAGE</TableCell>
                    <TableCell style={{border:'black'}}><TextField variant='outlined' name='language' value={inp.language} onChange={inputhandler} style={{backgroundColor:'rgb(184, 182, 182)',width:'100%',borderRadius:'10px'}}/></TableCell>
                  </TableRow> 
                  <TableRow>
                    <TableCell style={{border:'black'}}></TableCell>
                    <TableCell style={{border:'black'}}>
                    <Button variant='contained' onClick={addmovie} style={{color:'rgb(184, 182, 182)',backgroundColor:'rgb(45, 1, 1)',width:'100%',height:'50px',borderRadius:'10px'}}>
                    <Tooltip title='Add/Update Movie'>
                            <IconButton>
                            <AddSharpIcon style={{fontSize:'40px',color:'rgb(184, 182, 182)'}}/>
                            </IconButton>
                        </Tooltip>
                    </Button>
                    </TableCell>
                  </TableRow>
              
             
            </Table>
        </TableContainer>
    </div>
  )
}

export default AddMovie