import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    const { onClick } = this.props;
    e.preventDefault();
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
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <label htmlFor="blabla" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            name="title"
            value={ this.state.title }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="blabla" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            name="subtitle"
            value={ this.state.subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="blabla" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="imagePath"
            value={ this.state.imagePath }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="blabla" data-testid="storyline-input-label">
          Sinopse
          <input
            type="textarea"
            data-testid="image-input"
            name="storyline"
            value={ this.state.storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="blabla" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="image-input"
            name="rating"
            value={ this.state.rating }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="blabla" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            value={ this.state.genre }
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          labelButton="Adicionar filme"
        />
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
