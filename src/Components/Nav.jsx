import React from "react";
import { navData } from "./navData";
import { Grid,Button, Card,CardContent } from "@mui/material";
import { Link } from "react-router-dom";
export const Nav=()=>{
    return(
        <Card sx={{bgcolor:"papayawhip"}}>
            <CardContent>
<Grid container spacing={2}sx={{marginTop:1}} >

    {
        navData.map((item)=>(
            <Grid item xs={item.xs}>
                <Link to={item.path}>
                <Button variant="contained" color="inherit" fullWidth>{item.title}</Button>
                </Link>
            </Grid>

        ))
    }
</Grid>
            </CardContent>
        </Card>

    )
}