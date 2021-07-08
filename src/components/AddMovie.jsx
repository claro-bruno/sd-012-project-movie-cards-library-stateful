import React from 'react';
import PropTypes from 'prop-types';
import MovieImage from './NewComponents/MovieImage';
import MovieSubtitle from './NewComponents/MovieSubtitle';
import MovieTitle from './NewComponents/MovieTitle';
import MovieStoryline from './NewComponents/MovieStoryline';
import MovieRating from './NewComponents/MovieRating';
import MovieGenre from './NewComponents/MovieGenre';

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

    this.handleChange = this.handleChange.bind(this);
    this.resetEverything = this.resetEverything.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetEverything() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <MovieTitle
            title={ title }
            handleChangeFunction={ this.handleChange }
          />
          <MovieSubtitle
            subtitle={ subtitle }
            handleChangeFunction={ this.handleChange }
          />
          <MovieImage
            image={ imagePath }
            handleChangeFunction={ this.handleChange }
          />
          <MovieStoryline
            storyline={ storyline }
            handleChangeFunction={ this.handleChange }
          />
          <MovieRating
            rating={ rating }
            handleChangeFunction={ this.handleChange }
          />
          <MovieGenre
            genre={ genre }
            handleChangeFunction={ this.handleChange }
          />
          <button
            type="button"
            data-testid="send-button"
            onClick={ () => {
              onClick(this.state);
              this.resetEverything();
            } }
          >
            Adicionar filme

          </button>
        </form>

      </div>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
