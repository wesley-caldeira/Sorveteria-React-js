import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaHome from '../Paginas/Pagina_Home/Home';
import PaginaSobre from '../Paginas/Pagina_Sobre/Sobre';
import PaginaSabores from '../Paginas/Pagina_Sabores/Sabores';

function Rotas (){
    return (
            <BrowserRouter>
                <Routes>
                    <Route  path="/" element={<PaginaHome />} />
                    <Route  path="/Home" element={<PaginaHome />} />
                    <Route  path="/Sabores" element={<PaginaSabores />} />
                    <Route  path="/Sobre" element={<PaginaSobre />} />
                    
                </Routes>
            </BrowserRouter>
        )
};

export default Rotas;
