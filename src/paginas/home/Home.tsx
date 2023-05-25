import React from 'react';
import './Home.css';
import { Grid} from '@material-ui/core';
import Carrossel from '../../assets/components/carrossel/Carrossel';

function Home(){
    return(
        <>
           {/* <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#DDA0DD"}}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{color: "white", fontWeight: "bold"}}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{color: "white", fontWeight: "bold"}}>Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}></Box>
                    <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#DDA0DD", color: "white"}}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="Sala de Reuniões" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white"}}>
                </Grid>
           </Grid> */}

        <Grid container style={{ marginTop: "2px" }}>
            <Grid item xs={12}>
                <Carrossel />
            </Grid>
        </Grid>
        </>
    );
}

export default Home;