import React from "react";
import { AppBar, Toolbar, Typography, Box, createTheme, ThemeProvider } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import useLocalStorage from "react-use-localstorage";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../store/token/Reducer";
import { addToken } from "../../../store/token/Actions";
import { toast } from 'react-toastify';

const theme = createTheme({
  typography: {
    fontFamily: `"Playfair"`,
  },
});

function Navbar() {
  const dispatch = useDispatch();

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  let navigate = useNavigate();

  function goLogout() {
    dispatch(addToken(""));

    toast.info('Usuário deslogado!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });

    navigate("/login");
  }

  if (token !== "") {
    return (
      <AppBar position="static" style={{ background: "#000000" }}>
        <Toolbar variant="dense">
          <ThemeProvider theme={theme}>
            <Link to="/home" className="blog">
              <Typography
                variant="h5"
                style={{
                  color: "#FF0579",
                  fontSize: 50,
                  background: "#000000",
                  textAlign: "center",
                }}
              >
                Gossip Girl
              </Typography>
            </Link>
            <Box display="flex" justifyContent="center">
              <Box mx={1} className="navbar">
                <Link to="/home" className="navbar-link">
                  <Typography variant="h6" style={{ color: "#FF0579" }}>
                    Home
                  </Typography>
                </Link>
              </Box>
              <Box mx={1} className="navbar">
                <Link to="/postagens" className="navbar-link">
                  <Typography variant="h6" style={{ color: "#FF0579" }}>
                    Postagens
                  </Typography>
                </Link>
              </Box>
              <Box mx={1} className="navbar">
                <Link to="/temas" className="navbar-link">
                  <Typography variant="h6" style={{ color: "#FF0579" }}>
                    Temas
                  </Typography>
                </Link>
              </Box>
              <Box mx={1} className="navbar">
                <Link to="/perfil" className="navbar-link">
                  <Typography variant="h6" style={{ color: "#FF0579" }}>
                    Perfil de Usuário
                  </Typography>
                </Link>
              </Box>
              <Box mx={1} className="navbar">
                <Link to="/atualizar-perfil" className="navbar-link">
                  <Typography variant="h6" style={{ color: "#FF0579" }}>
                    Atualizar o Perfil de Usuário
                  </Typography>
                </Link>
              </Box>
              <Box mx={1} className="navbar" onClick={goLogout}>
                <Typography variant="h6" style={{ color: "#FF0579" }}>
                  Logout
                </Typography>
              </Box>
            </Box>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    );
  }

  return null;
}

export default Navbar;
