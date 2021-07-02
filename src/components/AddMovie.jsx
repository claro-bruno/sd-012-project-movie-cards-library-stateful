import React, { Component } from 'react';
import InputsAddMovie from './InputsAddMovie';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.hendleChange = this.hendleChange.bind(this);
    this.hendleClickButton = this.hendleClickButton.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  hendleChange(e) {
    const { name } = e.target;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [name]: value,
    });
  }

  hendleClickButton(onClick) {
    onClick({ ...this.state });
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
    const { onClick } = this.props;
    const { genre, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputsAddMovie hendleChange={ this.hendleChange } state={ this.state } />
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            type="text"
            value={ storyline }
            onChange={ this.hendleChange }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            value={ genre }
            onChange={ this.hendleChange }
            name="genre"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => this.hendleClickButton(onClick) }
        >
          Adicionar filme
        </button>

      </form>
    );
  }
}

export default AddMovie;
