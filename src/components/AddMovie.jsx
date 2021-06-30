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

  handleClick = (action) => {
    action(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  inputTitle(t, handle) {
    return (
      <label htmlFor="texto" data-testid="title-input-label">
        Título:
        <input
          type="text"
          name="title"
          id="texto"
          data-testid="title-input"
          value={ t }
          onChange={ handle }
        />
      </label>
    );
  }

  inputSubtitle(t, handle) {
    return (
      <label htmlFor="text" data-testid="subtitle-input-label">
        Subtítulo:
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ t }
          onChange={ handle }
        />
      </label>
    );
  }

  imageInput(t, handle) {
    return (
      <label htmlFor="text" data-testid="image-input-label">
        Imagem:
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={ t }
          onChange={ handle }
        />
      </label>
    );
  }

  storylineArea(t, handle) {
    return (
      <label htmlFor="text" data-testid="storyline-input-label">
        Sinopse:
        <textarea
          type="textarea"
          name="storyline"
          data-testid="storyline-input"
          value={ t }
          onChange={ handle }
        />
      </label>
    );
  }

  ratingSelect(t, handle) {
    return (
      <label htmlFor="text" data-testid="rating-input-label">
        Avaliação:
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          min="0"
          max="5"
          value={ t }
          onChange={ handle }
        />
      </label>
    );
  }

  genreSelect(t, handle) {
    return (
      <label htmlFor="selectList" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ t }
          onChange={ handle }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (

      <form data-testid="add-movie-form">
        {this.inputTitle(title, this.handleChange)}
        {this.inputSubtitle(subtitle, this.handleChange)}
        {this.imageInput(imagePath, this.handleChange)}
        {this.storylineArea(storyline, this.handleChange)}
        {this.ratingSelect(rating, this.handleChange)}
        {this.genreSelect(genre, this.handleChange)}

        <button
          type="button"
          data-testid="send-button"
          className="button"
          onClick={ () => this.handleClick(onClick) }
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
