import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        data-testid="send-button"
        onClick={ onClick }
        type="button"
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = PropTypes.shape({
  onClick: PropTypes.func.isRequired,
}).isRequired;

export default Button;
