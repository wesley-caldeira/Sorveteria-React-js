import React from 'react';
import { Link } from 'react-router-dom';
import './Topo.css'

function Topo () {
    return (
        <header className='limite-sacao'>
            <div className='secao-topo'>
                <img src='./assets/logo.png' alt='Logo da loja'/>
                <nav>
                    <Link to={"/Home"}>Home</Link>
                    <Link to={"/Sabores"}>Sabores</Link>
                    <Link to={"/Sobre"}>Sobre</Link>

                </nav>
            </div>
        </header>
        );
}

export default Topo;