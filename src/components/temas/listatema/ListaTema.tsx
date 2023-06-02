import React, { useState, useEffect } from "react";
import "./ListaTema.css";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import Tema from "../../../models/Tema";
import { Link, useNavigate } from "react-router-dom";
import { busca } from "../../../service/Service";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../store/token/Reducer";
import { toast } from "react-toastify";
import { addToken } from "../../../store/token/Actions";

function ListaTema() {

  const [temas, setTemas] = useState<Tema[]>();

  const dispatch = useDispatch()

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  let navigate = useNavigate();

  useEffect(() => {
    if (token === "") {
      toast.error("Você precisa estar logado!", {
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
  }, [token]);

  async function getTema() {

    try {
    await busca("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error: any) {
    if (error.response?.status === 403) {
      dispatch(addToken(''))
    }
  }
}

  useEffect(() => {
    getTema();
  }, [temas?.length]);

    return (
    <>
    <Link to={"/formularioTema"}>
     <Button type="submit" variant="contained"className="btnCadastrar-tema">Cadastrar tema</Button>
     </Link>

     {temas?.length === 0 ? (<div className="spinner"></div>) : (
      temas?.map((tema) => (
        <Box marginX={20} m={2}>
          <Card variant="outlined">
            <CardContent style={{ backgroundColor: "#fff0f3" }}>
              <Typography style={{ color: "#C9184A" }} gutterBottom>
                Titulo:
              </Typography>
              <Typography
                style={{ color: "#C9184A" }}
                variant="h5"
                component="h2"
              >
                {tema.descricao}
              </Typography>
            </CardContent>

            <CardActions style={{ backgroundColor: "#fff0f3" }}>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link to={`/formularioTema/${tema.id}` }className="text-decorator-none">
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      size="small"
                      className="btnAtualizar"
                    >
                      Atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarTema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      size="small"
                      className="btnDeletar"
                    >
                      Deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))
     )}
    </>
  );
}

export default ListaTema;