import React from 'react';

class ButtonAddMovie extends React.Component {
  render() {
    const { addMovie } = this.props;

    return (
      <button type="button" data-testid="send-button" onClick={ addMovie }>
        Adicionar filme
      </button>
    );
  }
}

export default ButtonAddMovie;