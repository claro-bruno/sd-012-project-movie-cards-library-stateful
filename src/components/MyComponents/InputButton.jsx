import React from 'react';
import PropTypes from 'prop-types';

class InputButton extends React.Component {
  render() {
    const { Click } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ Click }
      >
        Adicionar filme
      </button>
    );
  }
}

InputButton.propTypes = {
  Click: PropTypes.func.isRequired,
};

export default InputButton;
