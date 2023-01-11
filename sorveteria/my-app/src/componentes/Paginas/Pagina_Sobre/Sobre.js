import React from 'react';
import Topo from '../../Topo/Topo';
import Rodape from '../../Rodape/RodaPe';

import './sobre.css'

function PaginaSobre () {
    return(
        <div>
            <div>
                <Topo />
            </div>
            <section className='banner-limite-s'>
                <div>   
                    <h1>A Gelateria</h1>
                </div>
            </section>
            <section className='secao-sobre'>
                <div>
                    <h2>Sobre Nós</h2>
                    <span>Nós simplesmente amamos sorvete!</span>
                </div>
                <div className='secao-sobre-text'>
                    <p>
                        Somos uma empresa apaixonada pelo que faz. colocamos, amor em cadasorvete produzido. Fazemos o melhor sorvete
                        para os nosos clientes e gostamos de receber elogios. estamos operando desde 2009 com as melhores matériais-primas
                        para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
                    </p>
                    <p>
                        Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar 
                        junto com a familia. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário. Formaturas e eventos empresariais.
                        Para contratar os nossos serviços. Basta entrar em contato conosco iremos proporcionar o melhor atendimento e os melhores produtos para você fazer mais
                        sabores, com o melhor vorvete da cidade.
                    </p>
                </div>
                <figure className='imagem'>
                    <img src='./assets/sobre-image.jpg' alt='' />
                    <img src='./assets/sorveteria.jpg' alt='' />
                </figure>
            </section>
            
            <div>
                <Rodape />
            </div>
        </div>
        )
};

export default PaginaSobre;