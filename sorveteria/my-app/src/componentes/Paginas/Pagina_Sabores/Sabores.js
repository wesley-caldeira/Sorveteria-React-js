import React from 'react';
import Topo from '../../Topo/Topo';
import Rodape from '../../Rodape/RodaPe';

import './sabores.css';

function PaginaSabores () {
    return(
        <div>
            <div>
                <Topo />
            </div>

            <section className='banner-limite-s'>
                <div>
                    <h1>NOSSOS SABORES</h1>
                </div>
            </section>

            <section className='secao-tipo-sabor'>
                <h2>SABORES DE SORVETE</h2>
                <div className='sabores-flex'>
                    <div className='box-sabores'>
                        <img src="./assets/sabor-oreo.png" alt="sabor de sorvete" />
                        <div className='text-sabores'>
                            <span>Sorvete de Oreo</span>
                            <p>Delicioso sorvete sabor Oreo. Uma esplosão de sabor. </p>
                        </div>
                    </div>

                    <div className='box-sabores'>
                        <img src="./assets/sabor-pistache.png" alt="sabor de sorvete " />
                        <div>
                            <span>Sorvete Pistache</span>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente</p>
                        </div>
                    </div>
                    <div className='box-sabores'>
                        <img src="./assets/sabor-cookies-avela.png" alt="sabor de sorvete " />
                        <div>
                            <span>Sorvete Cookies & avelã</span>
                            <p>Onosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>
                    </div>
                    <div className='box-sabores'>
                        <img src="./assets/sorbet-kiwi.png" alt="sabor de sorvete " />
                        <div >
                            <span>Sorvete e sorvde Kiwi</span>
                            <p>Delicioso e refrescantete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                    </div>
                    <div className='box-sabores'>
                        <img src="./assets/sorbet-morango.png" alt="sabor de sorvete " />
                        <div>
                            <span>Sorvete de Morango</span>
                            <p>Sorvete de morango gourmet Tradicional e saboroso.</p>
                        </div>
                    </div>
                    <div className='box-sabores'>
                        <img src="./assets/sorbet-limao.png" alt=" " />
                        <div>
                            <span>Sorvete de Limão Siciliano</span>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <Rodape />
            </div>
        </div>
        )
};

export default PaginaSabores;