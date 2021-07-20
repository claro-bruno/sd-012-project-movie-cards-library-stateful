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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label
          data-testid="title-input-label"
          htmlFor="title-input"
        >
          Título
          <input
            id="title-input"
            value={ title }
            data-testid="title-input"
            onChange={ ({ target }) => this.setState({ title: target.value }) }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AddMovie;
