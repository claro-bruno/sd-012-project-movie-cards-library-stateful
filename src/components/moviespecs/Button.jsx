import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick, labelButton } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ onClick }
      >
        {labelButton}
      </button>
    );
  }
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  labelButton: PropTypes.string.isRequired,
};

export default Button;
