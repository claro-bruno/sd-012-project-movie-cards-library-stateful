import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button
        data-testid="send-button"
        type="submit"
      >
        Adicionar filme
      </button>
    );
  }
}

export default Button;
