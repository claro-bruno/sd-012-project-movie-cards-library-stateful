import React from 'react';
import PropTypes from 'prop-types';
import Genre from './addMovie/Genre';
import ImagePath from './addMovie/ImagePath';
import Subtitle from './addMovie/Subtitle';
import Title from './addMovie/Title';
import Rating from './addMovie/Rating';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      genre: 'action',
      rating: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMovie = this.submitMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  submitMovie() {
    const { onClick } = this.props;
    // A função onClick está apresentando um erro que ainda não identifiquei
    const { title, subtitle, storyline,
      imagePath, genre, rating } = this.state;

    const updateMovies = {
      title,
      subtitle,
      storyline,
      imagePath,
      genre,
      rating,
    };

    onClick(updateMovies);

    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      genre: 'action',
      rating: 0,
    });
  }

  render() {
    const { title, subtitle } = this.state;
    const { imagePath, rating } = this.state;
    const { storyline, genre } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ (e) => e.preventDefault() }>
        <Title
          title={ title }
          handleChange={ this.handleChange }
        />
        <Subtitle
          subtitle={ subtitle }
          handleChange={ this.handleChange }
        />
        <ImagePath
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <label htmlFor="importTextarea" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            id="importTextarea"
            onChange={ this.handleChange }
          />
        </label>
        <Rating
          rating={ rating }
          handleChange={ this.handleChange }
        />
        <Genre
          genre={ genre }
          handleChange={ this.handleChange }
        />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.submitMovie }
        >
          Adicionar filme
        </button>
      </form>

    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
