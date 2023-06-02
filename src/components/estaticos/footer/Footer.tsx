import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./Footer.css";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/token/Reducer";

function Footer() {
  const token = useSelector<UserState, UserState["tokens"]>((state) => state.tokens);

  if (token === "") {
    return null; // Não renderizar o footer se o token estiver vazio
  }

  return (
    <footer className="footer">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Box className="box1">
            <Typography variant="h6" align="center" gutterBottom className="textos">
              Me siga nas redes sociais
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://github.com/deizirrs" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="redes" />
              </a>
              <a href="https://www.linkedin.com/in/deizianer/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="redes" />
              </a>
              <a href="mailto:deizianesantos.rodrigues15@gmail.com" target="_blank" rel="noopener noreferrer">
                <MailOutlineIcon className="redes" />
              </a>
            </Box>
          </Box>
          <Box className="box2">
            <Typography variant="subtitle2" align="center" gutterBottom className="textos">
              © 2023 Company Name. Todos os direitos reservados.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
