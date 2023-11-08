import React, { useState,useEffect } from "react";
import { Grid,CardContent, Card } from "@mui/material";
import { useSelector } from "react-redux";
const ColorB = () => {
     const [data,setData]=useState([]);
         const selectcolor=useSelector((state)=>state.colorReducer.filtColor);
    useEffect(()=>{
        setData(selectcolor)
    },[selectcolor])
   return(
     
<Grid container spacing={2}>
    <Grid item xs={12} sx={{textAlign:"center"}}>
    <h2>Component B</h2>
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
      
   )
};

export default ColorB;