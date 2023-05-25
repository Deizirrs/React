import React from 'react';
import { AppBar, Toolbar, Typography, Box, createTheme, ThemeProvider} from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'

const theme = createTheme({  
    typography: {
      "fontFamily": 
      `"Indie Flower", cursive` ,
    },
  });

function Navbar(){
    return(
        <>
            <AppBar position="static" style={{background: "#FFB3C1"}}  >
                <Toolbar variant="dense">
                <ThemeProvider theme={theme}>
                    <Box className='cursor'>
                        <Typography variant="h5" style={{color: "#C9184A", fontSize: 50}}>
                            BlogPessoal
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{color: "#C9184A"}}>
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "#C9184A"}}>
                                Criar Postagem
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "#C9184A"}}>
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "#C9184A"}}>
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "#C9184A"}}>
                                Cadastrar Temas
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{color: "#C9184A"}}>
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                    </ThemeProvider>
                </Toolbar>
            </AppBar>
          
        </>
    );
};

export default Navbar;