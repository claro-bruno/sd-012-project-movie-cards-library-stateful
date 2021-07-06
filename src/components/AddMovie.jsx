import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="text" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            value={ this.title }
            onChange={ this.title }
          />
        </label>
      </form>
    );
  }
}

/* AddMovie.propTypes = {
  movies: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
}; */

export default AddMovie;