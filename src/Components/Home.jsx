import React from 'react';
import { Grid,Button,Card,CardContent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
    const dispatch=useDispatch();
    const colors=["green","brown","red","darkblue","blue","orange"]
    const handleAdd=(str)=>{
        const type="ADD__COLOR"
        const payload=str;
        const action={type,payload};
        dispatch(action)

    }
    return (
            <Card>
                <CardContent>
                    <h1 style={{textAlign:"center"}}>Home</h1>
        <Grid container spacing={2}> 
                    {
                    colors.map((item)=>
                    <Grid item xs={4}>
                    <Button sx={{bgcolor:item,height:200,color:"white"}} onClick={()=>handleAdd(item)} variant='secondry' fullWidth>
                        <h2>
                            {item}
                            </h2>
                    </Button>

                    </Grid>
                    
                    )
                }
            
                
        </Grid>
                </CardContent>
            </Card>
    );
};

export default Home;