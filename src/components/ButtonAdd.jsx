import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
* Consultei o repositório do Luan Alexandre para resolver essa parte.
* Link: https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/169/commits/6195bd209186ee736b54e48f818f5c7d5ee22efc
*/

class ButtonAdd extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ handleClick }
        value="Adicionar filme"
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAdd.propTypes = {
  handleClick: PropTypes.func,
}.isRequired;

export default ButtonAdd;
