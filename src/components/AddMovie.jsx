import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.initialState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.onClickr = this.onClickr.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  onClickr() {
    const { onClick } = this.props;
    onClick();
    this.setState(this.initialState);
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {/* <Input
          label-data-testid="title-input-label"
          label-htmlFor="title-input"
          type="text"
          value={ title }
          input-data-testid="title-input"
          onChange={ this.handleChange }
          name="title"
        /> */}
        <label htmlFor="title-input" data-testid="title-input-label">
          Título:
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
            name="title"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
            name="subtitle"
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem:
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleChange }
            name="imagePath"
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse:
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
            name="storyline"
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação:
          <input
            type="number"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
            name="rating"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero:
          <select
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
            name="genre"
          >
            <option value="action" data-testid="genre-option">
              Ação
            </option>
            <option value="comedy" data-testid="genre-option">
              Comédia
            </option>
            <option value="thriller" data-testid="genre-option">
              Suspense
            </option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.onClickr }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}.isRequired;

export default AddMovie;
