import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { handleClick, labelButton } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ handleClick }
      >
        {labelButton}
      </button>
    );
  }
}
Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  labelButton: PropTypes.string.isRequired,
};

export default Button;
