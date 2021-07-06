import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };

    this.newMovieInfo = this.newMovieInfo.bind(this);
    this.submitNewMovie = this.submitNewMovie.bind(this);
  }

  newMovieInfo(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  submitNewMovie(state) {
    state.preventDefault();
    state = this.state;
    console.log(state);
    return (
      this.setState({
        title: '',
        subtitle: '',
        storyline: '',
        rating: 0,
        imagePath: '',
        genre: 'action',
      })
    );
  }

  render() {
    const {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form" onSubmit={ this.submitNewMovie }>
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            id="title-input"
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.newMovieInfo }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            id="subtitle-input"
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ this.newMovieInfo }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            id="image-input"
            data-testid="image-input"
            type="text"
            value={ imagePath }
            onChange={ this.newMovieInfo }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            id="storyline-input"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.newMovieInfo }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            id="rating-input"
            data-testid="rating-input"
            type="number"
            step=".1"
            value={ rating }
            onChange={ this.newMovieInfo }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            id="genre-input"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.newMovieInfo }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" type="submit">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
