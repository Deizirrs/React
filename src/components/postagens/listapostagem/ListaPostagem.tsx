import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import { busca } from "../../../service/Service";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import "./ListaPostagem.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../store/token/Reducer";
import { toast } from "react-toastify";
import { addToken } from "../../../store/token/Actions";

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([]);

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  const dispatch = useDispatch();

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

  async function getPost() {
    try {
      await busca("/postagens", setPosts, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.response?.status === 403) {
        dispatch(addToken(""));
      }
    }
  }

  useEffect(() => {
    getPost();
  }, [posts.length]);

  return (
    <>
      {posts.length === 0 ? (
        <div className="spinner"></div>
      ) : (
        posts.map((post) => (
          <Box marginX={20} m={2} className="boxPost">
            <Card variant="outlined">
              <CardContent style={{ backgroundColor: "#fff0f3" }}>
                <Typography style={{ color: "#C9184A" }} gutterBottom>
                  Postagens
                </Typography>
                <Typography variant="body2" component="p">
                  Postado por: {post.usuario?.nome}
                </Typography>
                <Typography variant="body1" component="p">
                  Data:{" "}
                  {Intl.DateTimeFormat("pt-BR", {
                    dateStyle: "short",
                    timeStyle: "medium",
                  }).format(new Date(post.data))}
                </Typography>
                <Typography
                  style={{ color: "#C9184A" }}
                  variant="h5"
                  component="h2"
                >
                  {post.titulo}
                </Typography>
                <Typography
                  style={{ color: "#C9184A" }}
                  variant="body2"
                  component="p"
                >
                  {post.texto}
                </Typography>
                <Typography
                  style={{ color: "#C9184A" }}
                  variant="body2"
                  component="p"
                >
                  {post.tema?.descricao}
                </Typography>
              </CardContent>

              <CardActions style={{ backgroundColor: "#fff0f3" }}>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link
                    to={`/formularioPostagem/${post.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        className="botaoAtualizar"
                        size="small"
                      >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link
                    to={`/deletarPostagem/${post.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        className="botaoDeletar"
                        size="small"
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

export default ListaPostagem;