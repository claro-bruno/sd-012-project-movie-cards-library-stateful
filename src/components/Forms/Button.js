import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { buttonName, onClickButton } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ onClickButton }
      >
        { buttonName }
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}.isRequired;

export default Button;
