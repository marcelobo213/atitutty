import React from "react";

import './home.css';

const Home = () => {
    return(
      <div className="naveBar">
        <nav>
            <h1>ATITUTTY</h1>
            <ul>
                <li> <a href="../Produtos">Produtos</a> </li>
                <li> <a href="https://api.whatsapp.com/send?phone=558532744829">Contato</a> </li>
                <li> <a href="Sobre">Sobre</a> </li>
            </ul>
        </nav>
      </div>
    );
};

export default Home;