import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonAdd from './ButtonAdd'
import Title from './Title'

/**
 * Consultei o repositório do Wendell Costa para resolver essa parte.
 * Link: https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/174/commits/44b731c7cb8c4d936475d54de1125e003e202a80
 */

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
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    const {
      subtitle,

      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Title value={ this.state.title } handleChange={ this.handle } />        <label
          data-testid="subtitle-input-label"
          htmlFor="subtitle-input"
        >
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label
          htmlFor="image-input"
          data-testid="image-input-label"
        >
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleChange }
          />
        </label>
        <label
          htmlFor="storyline-input"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          >
          </textarea>
        </label>
        <label
          data-testid="rating-input-label"
          htmlFor="rating-input"
        >
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
          />
        </label>
        <label
          data-testid="genre-input-label"
          htmlFor="genre-input"
        >
          Gênero
          <select
            name="genre"
            id=""
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option" selected>Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <ButtonAdd resetState={ () => this.resetState(onClick)} />
      </form>
    );
  }
}

export default AddMovie;
