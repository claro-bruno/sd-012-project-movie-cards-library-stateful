import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieButton extends Component {
  render() {
    const { funcOnClick } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ funcOnClick }
      >
        Adicionar filme
      </button>
    );
  }
}

export default AddMovieButton;

AddMovieButton.propTypes = {
  funcOnClick: PropTypes.func.isRequired,
};
