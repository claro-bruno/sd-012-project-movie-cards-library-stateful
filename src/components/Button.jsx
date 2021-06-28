import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      buttonText,
      onClickButton,
      buttonTestId,
    } = this.props;

    return (
      <button type="submit" onClick={ onClickButton } data-testid={ buttonTestId }>
        {buttonText}
      </button>
    );
  }
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClickButton: PropTypes.func.isRequired,
  buttonTestId: PropTypes.string.isRequired,
};

export default Button;
