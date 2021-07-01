import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieButton extends Component {
  render() {
    const { clickFunction } = this.props;
    return (
      <button
        type="button"
        onClick={ clickFunction }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

AddMovieButton.propTypes = {
  clickFunction: PropTypes.func,
}.isRequired;
export default AddMovieButton;
