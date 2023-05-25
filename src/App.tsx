import React from 'react';
import Navbar from './assets/components/estaticos/navbar/Navbar';
import Footer from './assets/components/estaticos/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css';

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
            </Routes>
            </div>
        <Footer />
      </BrowserRouter>
  );
}

export default App;