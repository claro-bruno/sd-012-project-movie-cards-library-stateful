import React from 'react';
import PropTypes from 'prop-types';
import MovieFormTitleSubtitleImage from './MovieFormTitleSubtitleImage';
import MovieFormStoryRatingGenre from './MovieFormStoryRatingGenre';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = initialState;
  }

  handleChange(event) {
    const { name, value } = event.target;
    return this.setState({
      [name]: value,
    });
  }

  handleClick() {
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <section>
        <form data-testid="add-movie-form">
          <MovieFormTitleSubtitleImage
            title={ title }
            subtitle={ subtitle }
            imagePath={ imagePath }
            handleChange={ this.handleChange }
          />
          <MovieFormStoryRatingGenre
            storyline={ storyline }
            rating={ rating }
            genre={ genre }
            handleChange={ this.handleChange }
          />
          {/* código js dentro da tag button feito com ajuda de Eric e Thalles */}
          <button
            type="button"
            data-testid="send-button"
            onClick={ (e) => {
              e.preventDefault();
              this.handleClick();
              onClick(this.state);
            } }
          >
            Adicionar filme
          </button>
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
