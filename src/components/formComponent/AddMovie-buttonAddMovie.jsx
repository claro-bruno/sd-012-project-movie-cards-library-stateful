import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends React.Component {
  render() {
    const { addMovie } = this.props;

    return (
      <button type="button" data-testid="send-button" onClick={ addMovie }>
        Adicionar filme
      </button>
    );
  }
}

ButtonAddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

export default ButtonAddMovie;
