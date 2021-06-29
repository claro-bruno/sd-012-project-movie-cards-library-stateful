import React, { Component } from 'react';
import '../style/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>
          <span>Desenvolvido por </span>
          <a href="https://www.rslfilho.com.br/" target="_blank" rel="noopener noreferrer">Roberval Filho</a>
          <span> usando React - Bloco 12 - </span>
          <a href="http://www.betrybe.com.br/" target="_blank" rel="noopener noreferrer">Trybe</a>
        </p>
      </div>
    );
  }
}

export default Footer;
