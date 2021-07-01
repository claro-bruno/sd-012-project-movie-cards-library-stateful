import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Consultei o repositório do Luan Alexandre para resolver essa parte.
 * Link: https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/169/commits/6195bd209186ee736b54e48f818f5c7d5ee22efc
 */

class ButtonAdd extends Component {
  render() {
    const { resetState } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ resetState }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAdd.propTypes = {
  resetState: PropTypes.func,
}.isRequired;

export default ButtonAdd;
