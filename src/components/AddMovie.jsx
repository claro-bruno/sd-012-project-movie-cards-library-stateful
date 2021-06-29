import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonAdd from './ButtonAdd';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';

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
      rating,
      genre,
    } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Title value={ this.state.title } handleChange={ this.handle } />
        < Subtitle value={ this.state.subtitle } handleChange={ this.handle } />
        < ImagePath value={ this.state.imagePath } handleChange={ this.handle } />
        < Storyline value={ this.state.storyline } handleChange={ this.handle } />
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
