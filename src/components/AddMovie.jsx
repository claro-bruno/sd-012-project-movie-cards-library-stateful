// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
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

  updateInfo = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  addMovieButton = () => {
    const { onClick } = this.props;
    onClick(this.state);
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input data-testid="title-input" name="title" value={ title } onChange={ this.updateInfo }/>
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input data-testid="subtitle-input" name="subtitle" value={ subtitle } onChange={ this.updateInfo }/>
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input data-testid="image-input" name="imagePath" value={ imagePath } onChange={ this.updateInfo } />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <input data-testid="storyline-input" name="storyline" value={ storyline } onChange={ this.updateInfo }/>
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input data-testid="rating-input" name="rating" type="number" value={ rating } onChange={ this.updateInfo }/>
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select data-testid="genre-input" name="genre" value={ genre } onChange={ this.updateInfo }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ this.addMovieButton }>
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
