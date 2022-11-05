import React from 'react';
import './home.css'

import Topo from '../../Topo/Topo';
import Banner from '../../Conteudo_Principal/Banner/Banner';
import SecaoSabores from '../../Conteudo_Principal/Secao_Sabores/Sabores';
import SecaoEvento from '../../Conteudo_Principal/SecaoEvento/evento';
import SecaoSobre from '../../Conteudo_Principal/SecaoSobre/Sobre';
import Rodape from '../../Rodape/RodaPe';


function PaginaHome () {
    return(
        <div id='home'>
        <Topo />
        <main>
            <Banner />
            <SecaoSabores />
            <SecaoEvento />
            <SecaoSobre />
        </main>
        <Rodape />

        </div>
        )
};

export default PaginaHome;