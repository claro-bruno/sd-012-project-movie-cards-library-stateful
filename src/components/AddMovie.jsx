import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;  
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    const { handleChange } = this;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            onChange={ handleChange }
            data-testid="title-input"
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ handleChange }
            data-testid="subtitle-input"
          />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ handleChange }
            data-testid="image-input"
          />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyLine"
            value={ storyLine }
            onChange={ handleChange }
            data-testid="storyline-input"
          />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            onChange={ handleChange }
            data-testid="rating-input"
          />
        </label>
        <label data-testid="genre-input-label">
          Gênero
          <select name="genre" value={ genre } onChange={ handleChange } data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;