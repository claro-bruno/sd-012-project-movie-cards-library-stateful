import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const {
      buttonText,
      buttonId,
      onClickInput,
    } = this.props;

    return (
      <button
        type="button"
        data-testid={ buttonId }
        onClick={ onClickInput }
      >
        { buttonText }
      </button>
    );
  }
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonId: PropTypes.string.isRequired,
  onClickInput: PropTypes.func.isRequired,
};

export default Button;
