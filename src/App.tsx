import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
          <div style={{ minHeight: '100vh' }}>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastrousuario" element={<CadastroUsuario/>}/>
                <Route path="/temas" element={<ListaTema/>}/>
                <Route path="/postagens" element={<ListaPostagem/>}/>
                <Route path="/formularioPostagem" element={<CadastroPostagem/>}/>
                <Route path="/formularioPostagem/:id" element={<CadastroPostagem/>}/>
                <Route path="/deletarPostagem/:id" element={<DeletarPostagem/>}/>
                <Route path="/formularioTema" element={<CadastroTema/>}/>
                <Route path="/temas/:id" element={<CadastroTema/>}/>
                <Route path="/deletarTema/:id" element={<DeletarTema/>}/>
            </Routes>
            </div>
        <Footer />
      </BrowserRouter>
  );
}

export default App;