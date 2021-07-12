import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
      genre: 'action',
    };

    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  handleRatingChange(event) {
    this.setState({ rating: event.target.value });
  }

  handleGenreChange(event) {
    this.setState({ genre: event.target.value });
  }

  render() {
    const { subtitle, title, imagePath,
      storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input data-testid="title-input" value={ title } onChange={ title } />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input data-testid="subtitle-input" onChange={ subtitle } value={ subtitle } />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input data-testid="image-input" onChange={ imagePath } value={ imagePath } />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            onChange={ storyline }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            type="number"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleRatingChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleGenreChange }
          >
            <option selected value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
