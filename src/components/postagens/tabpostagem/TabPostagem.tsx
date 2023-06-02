import React, { useState } from "react";
import "./TabPostagem.css";
import ListaPostagem from "../listapostagem/ListaPostagem";
import { TabContext, TabPanel } from "@material-ui/lab";
import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core";

function TabPostagem() {
  const [value, setValue] = useState("1");
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs
            centered
            style={{ backgroundColor: "#FF0579" }}
            onChange={handleChange}
          >
            <Tab label="Todas as postagens" value="1"  />
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center" >
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography
            variant="h5"
            gutterBottom
            style={{ color: "#FF0579" }}
            component="h5"
            align="center"
            className="titulo"
          >
            Sobre-nós
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ color: "#000000" }}
            align="justify"
          >
           Vamos voltar ao início. Quando nossas elites de Manhattan favoritos eram apenas calouros e estudantes do segundo ano, 
           passando seus dias nos corredores da Constance Billiard para meninas e do Saint Judes para meninos.
           Uma época muito mais simples na vida de nossos elites...
            mas isso não significa que fosse mais fácil.
           Foi antes de Serena e Nate dormirem juntos, antes mesmo de Chuck e Blair. Antes de Jenny Humphrey querer ser a rainha B, 
           antes de Serena sequer saber quem era Dan, antes de Blair e Nate terminarem, antes de Serena partir, ANTES DE TUDO! 
           Ainda há os boatos, os rumores, os escândalos, as batalhas de poder. E este ano é o ano em que a misteriosa Gossip Girl abriu seu site... 
           e essa sou eu, suas vadias. Vocês sabem que me amam. Beijos, Gossip Girl.
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}

export default TabPostagem;