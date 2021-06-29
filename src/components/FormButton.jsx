import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormButton extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

FormButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}.isRequired;

export default FormButton;
