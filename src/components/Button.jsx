import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { btnText, name, dataTestId, onClick } = this.props;

    return (
      <button
        type="button"
        name={ name }
        data-testid={ dataTestId }
        onClick={ onClick }
      >
        { btnText }
      </button>
    );
  }
}

Button.propTypes = PropTypes.exact({
  btnText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}).isRequired;

export default Button;
