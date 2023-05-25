import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './Footer.css';

function Footer(){
    return(
        <>
           <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/Deizirrs" target="_blank"><GitHubIcon className='redes'/> </a>
                            <a href="https://www.linkedin.com/in/Deizianner/" target="_blank"><LinkedInIcon className='redes'/> </a>
                            <a href="deizianesantos.rodrigues15@gmail.com" target="_blank"><MailOutlineIcon className='redes'/> </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos'>© 2023 Copyright</Typography>
                        </Box>

                    </Box>
                </Grid>

           </Grid>
        </>
    )
}

export default Footer;