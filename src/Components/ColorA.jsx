import React, { useEffect, useState } from 'react';
import { Grid,Card,CardContent,Button } from '@mui/material';
import { useSelector } from 'react-redux';
const ColorA = () => {
    const selectcolor=useSelector((state)=>state.colorReducer.filtColor) 
    const[data,setData]=useState([])
    useEffect(()=>{
        setData(selectcolor)
    },[selectcolor])
    return (
     <Grid container spacing={2}>
        <Grid item xs={12} align="center">
       <h2>
         Component A
        </h2>
        </Grid>
            {
                data.map((item)=>
                <Grid item xs={6}>
                    <Card sx={{bgcolor:item,color:"white"}} align="center">
                        <CardContent>
                             <h3>
                            {item.toUpperCase()}
                            </h3> 
                        </CardContent>
                    </Card>
                </Grid>
                
                )
            }
     </Grid>
       
    );
};

export default ColorA;