import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      onClick,
      buttonTestId,
      text,
    } = this.props;

    return (
      <button
        type="submit"
        data-testid={ buttonTestId }
        onClick={ onClick }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonTestId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
