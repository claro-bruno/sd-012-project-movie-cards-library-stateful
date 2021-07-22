import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonForm extends Component {
  render() {
    const { callbackButton } = this.props;

    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ callbackButton }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonForm.propTypes = {
  callbackButton: PropTypes.func.isRequired,
};

export default ButtonForm;
