import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Button extends Component {
  render() {
    const { onClick, text } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ onClick }
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  onChange: Proptypes.func,
  text: Proptypes.string,
}.isRequired;

export default Button;
