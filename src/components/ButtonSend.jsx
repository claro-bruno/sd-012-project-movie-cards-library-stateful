import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonSend extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="submit"
        onClick={ onClick }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonSend.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonSend;
