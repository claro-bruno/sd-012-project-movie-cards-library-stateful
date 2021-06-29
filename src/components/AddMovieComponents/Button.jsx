import React from 'react';

class Button extends React.Component {
  render() {
    const { addMovie } = this.props;

    return (
      <button type="button" data-testid="send-button" onClick={ addMovie }>
        Adicionar filme
      </button>
    );
  }
}

export default Button;
