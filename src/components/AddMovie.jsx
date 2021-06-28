// implement AddMovie component here
import React from 'react';
import Titulo from './AddMovieComponents/Titulo';
import Subtitulo from './AddMovieComponents/Subtitulo';
import Imagem from './AddMovieComponents/Imagem';
import Sinopse from './AddMovieComponents/Sinopse';
import Avaliacao from './AddMovieComponents/Avaliacao';
import Genero from './AddMovieComponents/Genero';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleAddMovies = this.handleAddMovies.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleAddMovies({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

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
          onClick={ this.handleAddMovies }
        >
          Adicionar filme
        </button>

      </form>
    );
  }
}

export default AddMovie;
