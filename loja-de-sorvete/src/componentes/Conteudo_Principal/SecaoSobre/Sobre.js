import React from "react";
import '../../Conteudo_Principal/secoes_descricao.css'


function SecaoSobre () {
    return (
        <section className="secoes_descricao">
            <img src="./assets/sobre-image.jpg" alt="Sobre a empresa" />
                
                <div className="secoes_descricao-text">
                    <h2>SOBRE NÓS</h2>

                    <span>Alegria em cada casquinha!</span>

                    <p>
                        Venha tomar o melhor sorvete da região aqui a gente! Nós estamos
                        há anos no mercado produzindo o que tem de melhor para o nosso cliente e você
                        não pode ficar fora dessa venha nos fazer uma visita é aproveitar atendimento e o melhor
                        atendimento e o melhor sorvete da cidade.
                    </p>
                </div>
        </section>
    )
};

export default SecaoSobre;