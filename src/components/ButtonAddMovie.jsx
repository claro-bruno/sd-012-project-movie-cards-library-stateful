import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends Component {
  render() {
    const { Click } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ Click }
      >
        Adicionar filme
      </button>
    );
  }
}

export default ButtonAddMovie;

ButtonAddMovie.propTypes = {
  Click: PropTypes.func.isRequired,
};
