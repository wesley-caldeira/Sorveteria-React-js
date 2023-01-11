import React from "react";
import '../../Conteudo_Principal/secoes_descricao.css'

function SecaoEvento () {
    return (
        <sectionc className="secoes_descricao reverse">
            <div className="secoes_descricao-text">
                <h2>NOSSOS EVENTOS</h2>
                    <span>Delicias com sorvete!</span>
                        
                        <p>
                            Mais do que uma sorveteria, uma extensão da sua casa!
                            Estamos aqui prontinhos para te atender e oferecer os melhores 
                            eventos com os melhores sorvete da sua vida! venha nos conhecer e passar 
                            um tempo aqui com a gente.
                        </p>
                </div>
                    <img src="./assets/eventos-image.jpg" alt="Imagem de evento na loja" />
        </sectionc>
    )

};

export default SecaoEvento;