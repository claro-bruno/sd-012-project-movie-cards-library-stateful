import React from 'react';
import PropTypes from 'prop-types';

class AddMovieButton extends React.Component {
  render() {
    const { initialState } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ initialState }
      >
        Adicionar filme
      </button>
    );
  }
}

AddMovieButton.propTypes = {
  initialState: PropTypes.func.isRequired,
};

export default AddMovieButton;
