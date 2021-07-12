// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieImage from './AddMovieImage';
import AddMovieRating from './AddMovieRating';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieTitle from './AddMovieTitle';

const stateDefault = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyLine: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = stateDefault;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.check : target.value;

    this.setState({
      [name]: name === 'rating' ? Number(value) : value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <AddMovieTitle
            value={ title }
            onChange={ this.handleChange }
          />
        </label>

        <label data-testid="subtitle-input-label" >
          Subtítulo
          <AddMovieSubtitle
            value={ subtitle }
            onChange={ this.handleChange }
            />
        </label>

        <label data-testid="image-input-label" >
          Imagem
          <AddMovieImage
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>

        <label data-testid="storyline-input-label" >
          Sinopse
          <AddMovieStoryline 
            value={ storyLine }
            onChange={ this.handleChange }
            />
        </label>

        <label data-testid="rating-input-label" >
          Avaliação
          <AddMovieRating
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>

        <label data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            id="genre"
            value={ genre }
            onChange={ this.handleChange} 
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>

        <button data-testid="send-button" onClick={ onClick }>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
