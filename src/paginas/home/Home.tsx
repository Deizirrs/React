import React, { useEffect } from 'react';
import './Home.css';
import { Box, Button, Grid, Typography} from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
// import Carrossel from '../../components/carrossel/Carrossel';

function Home(){

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
        
    useEffect(() => {
        if (token == "") {
        alert("Você precisa estar logado")
        navigate("/login")
      
        }
    }, [token])

    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#FFB3C1"}}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{color: "white", fontWeight: "bold"}}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{color: "white", fontWeight: "bold"}}>Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                    <Button variant="outlined" className='botaoHome'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img className='imagemHome' src="../../../src/assets/images/dicas.jpg" alt="Flor, Café e Bloco de notas"/>
                </Grid>
                <Grid xs={12} className='postagens' style={{ backgroundColor: "white"}}>
                    <TabPostagem />
                </Grid>
           </Grid> 

        {/* <Grid container style={{ marginTop: "2px" }}>
            <Grid item xs={12}>
                <Carrossel />
            </Grid>
        </Grid> */}
        </>
    );
}

export default Home;