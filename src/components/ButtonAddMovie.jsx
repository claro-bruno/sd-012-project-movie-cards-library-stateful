import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        value="Adicionar Filme"
        onClick={ handleClick }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAddMovie.propTypes = {
  handleClick: PropTypes.func,
}.isRequired;

export default ButtonAddMovie;
