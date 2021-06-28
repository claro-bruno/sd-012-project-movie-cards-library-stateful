// implement AddMovie component here
import React from 'react';
import Titulo from './AddMovieComponents/Titulo';
import Subtitulo from './AddMovieComponents/Subtitulo';
import Imagem from './AddMovieComponents/Imagem';
import Sinopse from './AddMovieComponents/Sinopse';
import Avaliacao from './AddMovieComponents/Avaliacao';
import Genero from './AddMovieComponents/Genero';
import propTypes from 'prop-types';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
}

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleAddMovies = this.handleAddMovies.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = initialState;
  }

  handleAddMovies({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    this.setState(initialState);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Titulo
          value={ title }
          handleAddMovies={ this.handleAddMovies }
        />

        <Subtitulo
          value={ subtitle }
          handleAddMovies={ this.handleAddMovies }
        />

        <Imagem
          value={ imagePath }
          handleAddMovies={ this.handleAddMovies }
        />

        <Sinopse
          value={ storyline }
          handleAddMovies={ this.handleAddMovies }
        />

        <Avaliacao
          value={ rating }
          handleAddMovies={ this.handleAddMovies }
        />

        <Genero
          value={ genre }
          handleAddMovies={ this.handleAddMovies }
        />

        <button
          type="submit"
          data-testid="send-button"
          onClick={ (event) => {event.preventDefault(); this.handleClick(); onClick()} }
        >
          Adicionar filme
        </button>

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: propTypes.func.isRequired,
};



export default AddMovie;
