import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { dataTestId, onClick, innerText } = this.props;
    return (
      <button
        type="button"
        data-testid={ dataTestId }
        onClick={ onClick }
      >
        { innerText }
      </button>
    );
  }
}

Button.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  innerText: PropTypes.string,
};

Button.defaultProps = {
  innerText: '',
};

export default Button;
