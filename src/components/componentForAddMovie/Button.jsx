import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { resetState } = this.props;

    return (
        <button
          data-testid="send-button"
          onClick={ resetState }
        >
          Adicionar filme
        </button>
    );
  }
}

export default Button;
