import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { resetState } = this.props;

    return (
      <button
        type="reset"
        data-testid="send-button"
        onClick={ resetState }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  resetState: PropTypes.func.isRequired,
};

export default Button;
