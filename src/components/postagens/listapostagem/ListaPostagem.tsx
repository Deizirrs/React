import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../models/Postagem';
import { busca } from '../../services/Service';
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListaPostagem.css';
import useLocalStorage from 'react-use-localstorage';
import {useNavigate, useParams } from 'react-router-dom'

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      navigate("/login")

    }
  }, [token])

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
      {
        posts.map(post => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent style={{backgroundColor:"#fff0f3"}}>
                <Typography style={{color: "#C9184A"}} gutterBottom>
                  Postagens
                </Typography>
                <Typography style={{color: "#C9184A"}} variant="h5" component="h2">
                  {post.titulo}
                </Typography>
                <Typography style={{color: "#C9184A"}} variant="body2" component="p">
                  {post.texto}
                </Typography>
                <Typography style={{color: "#C9184A"}} variant="body2" component="p">
                  {post.tema?.descricao}
                </Typography>
              </CardContent>

              <CardActions style={{backgroundColor:"#fff0f3"}}>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="botaoAtualizar" size='small' >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className='botaoDeletar' size='small'>
                        Deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaPostagem;