import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Grid, } from '@mui/material';
const ColorC = () => {
    const[clr,setClr]=useState([]);
     const selectcolor=useSelector((state)=>state.colorReducer.filtColor);
    useEffect(()=>{
        setClr(selectcolor)
    },[setClr])
    return (
            <Grid container spacing={2}>
                <Grid item xs={12} align="center">
                <h2>Component C</h2>
                </Grid>
               
                {
                    clr.map((item)=>
                    <Grid item xs={6}>
                    <Card sx={{bgcolor:item,color:"white"}}align="center">
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

export default ColorC;