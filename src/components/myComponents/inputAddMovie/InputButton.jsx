import React from 'react';
import PropTypes from 'prop-types';

class InputButton extends React.Component {
  render() {
    const { onClick } = this.props;

    return (
      <button type="submit" onClick={ onClick } data-testid="send-button">
        Adicionar filme
      </button>
    );
  }
}

InputButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default InputButton;
