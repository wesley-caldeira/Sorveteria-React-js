import React from 'react';
import '../../Conteudo_Principal/secoes_descricao.css'

function SecaoSabores () {
    return (
        <section className='secoes_descricao'>
            <img src='./assets/banner-sabores.jpg' alt='Sabores da gelateria' />
            <div className='secoes_descricao-text'>
                <h2>NOSSOS SABORES</h2>
                    <span>Novos e deliciosos!</span>

                    <p>Sorvete bom é aquele feito com os melhores ingredientes!
                    Aqui na gelateria todos os nossos produtos são naturais, a base 
                    de frutas e sem nenhum conservante também temos opções sem lactose e sem 
                    açucar. Vem conhecer e perceber que tem como o sorvete ser delicioso e saudável ao 
                    mesmo tempo!
                    </p>
            </div>
        </section>
    )
}

export default SecaoSabores;