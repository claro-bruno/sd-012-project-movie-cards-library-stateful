import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonForm extends Component {
  render() {
    const { handleSubmitButton } = this.props;

    return (
      <button type="button" data-testid="send-button" onClick={ handleSubmitButton }>
        Adicionar filme
      </button>
    );
  }
}

ButtonForm.propTypes = {
  handleSubmitButton: PropTypes.func.isRequired,
};

export default ButtonForm;
