import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title-input"
            value={ title }
            name="title"
            onChange={ this.handleChange }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle-input"
            value={ subtitle }
            name="subtitle"
            onChange={ this.handleChange }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="image-input"
            value={ imagePath }
            name="imagePath"
            onChange={ this.handleChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline-input"
            value={ storyline }
            name="storyline"
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="rating-input"
            value={ rating }
            name="rating"
            onChange={ this.handleChange }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Filtrar por gênero
          <select
            id="genre-input"
            value={ genre }
            name="genre"
            onChange={ this.handleChange }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
