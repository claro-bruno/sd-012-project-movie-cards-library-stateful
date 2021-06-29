import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieButon extends Component {
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

AddMovieButon.propTypes = {
  Click: PropTypes.func.isRequired,
};

export default AddMovieButon;
