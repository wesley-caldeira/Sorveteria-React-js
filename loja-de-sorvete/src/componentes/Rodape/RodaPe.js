import React from "react";
import './rodape.css';

function Rodape () {
    return (
        <footer>
            <div className="limite-secao">
                <div className="footer-descricao">
                    <figure className="logo-footer">
                        <img src="./assets/logo.png" alt="Logo da gelateria" />
                    </figure>

                    <div >
                        <h3>ENDEREÇO</h3>

                        <p>Av. Bernardino de Campos, 98</p>
                        <p>são Paulo, SP 12345-678</p>
                    </div>
                    
                    <div>
                        <h3> CONTATO </h3>

                        <p>Info@meusite.com</p>
                        <p>Tel: (11) 3456 - 7890</p>
                    </div>
                    

                </div>
                <div className="desenvolvedor">
                        <p>gelateria. Orgulhosamente desenvolvido por "Wesley Caldeira de Souza"</p>
                    </div>
                <div>

                </div>
            </div>
        </footer>
    )
};

export default Rodape;