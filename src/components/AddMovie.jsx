import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  submit() {
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
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input name="title" data-testid="title-input" value={ title } onChange={ this.handleChange } />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input name="subtitle" data-testid="subtitle-input" value={ subtitle } onChange={ this.handleChange } />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input name="imagePath" data-testid="image-input" value={ imagePath } onChange={ this.handleChange } />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea name="storyline" cols="30" rows="10" data-testid="storyline-input" value={ storyline } onChange={ this.handleChange } />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input type="number" name="rating" data-testid="rating-input" value={ rating } onChange={ this.handleChange } />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select name="genre" data-testid="genre-input" value={ genre } onChange={ this.handleChange }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.submit }
        >
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
