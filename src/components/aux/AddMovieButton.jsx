import React from 'react';
import PropTypes from 'prop-types';

class AddMovieButton extends React.Component {
  render() {
    const { func } = this.props;
    return (
      <button data-testid="send-button" type="submit" onClick={ func }>
        Adicionar filme
      </button>
    );
  }
}

AddMovieButton.propTypes = {
  func: PropTypes.func.isRequired,
};

export default AddMovieButton;
