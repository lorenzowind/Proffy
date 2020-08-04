import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars3.githubusercontent.com/u/48891746?s=460&u=c53ef00e81830ae2549ded78efff6a68c2c97f10&v=4" alt="Avatar"/>
      <div>
        <strong>Lorenzo Windmoller</strong>
        <span>Física</span>
      </div>
    </header>

    <p>
      Entusiasta da Física tradicional clássica
      <br/>
      Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$20,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;