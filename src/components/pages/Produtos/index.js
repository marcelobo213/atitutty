import React from "react";

import caju from "../img/caju330ml.png";
import guarana from "../img/gurana330ml.png";
import laranja from "../img/laranja330ml.png";
import uva from "../img/uva330ml.png";
import cajupet from "../img/cajupet.png";
import guaranapet from "../img/guaranapet.png";
import laranjapet from "../img/laranjapet.png";
import uvapet from "../img/uvapet.png"

import './produtos.css';


const Produtos = () => {
    return(
<body>
    <div class="row">
      <div class="card green">
        <img class="image" src={caju} alt="money" />
        <p>Configure a monetização</p>
      </div>
 
      <div class="card blue">
        <img class="image" src={guarana} alt="settings" />
        <p>Configure o seu sistema</p>
      </div>
 
      <div class="card red">
        <img class="image" src={laranja} alt="article" />
        <p>Crie e edite artigos</p>
      </div>

      <div class="card red">
        <img class="image" src={uva} alt="article" />
        <p>Crie e edite artigos</p>
      </div>

      <div class="card red">
        <img class="image" src={cajupet} alt="article" />
        <p>Crie e edite artigos</p>
      </div>
      
      <div class="card red">
        <img class="image" src={guaranapet} alt="article" />
        <p>Crie e edite artigos</p>
      </div>

      <div class="card red">
        <img class="image" src={laranjapet} alt="article" />
        <p>Crie e edite artigos</p>
      </div>

      <div class="card red">
        <img class="image" src={uvapet} alt="article" />
        <p>Crie e edite artigos</p>
      </div>
    </div>
  </body>

    );
};

export default Produtos;