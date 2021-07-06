import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      buttonName,
      onClickButton,
      buttonTestId,
    } = this.props;

    return (
      <button
        type="submit"
        onClick={ onClickButton }
        data-testid={ buttonTestId }
      >
        { buttonName }
      </button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClickButton: PropTypes.func.isRequired,
  buttonTestId: PropTypes.string,
};

Button.defaultProps = {
  buttonTestId: '',
};

export default Button;
