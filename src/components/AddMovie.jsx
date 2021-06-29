import React from 'react';

class AddMovie extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.props.value;
    const { handleChange } = this.props
    return (
      <form data-testid="add-movie-form" className="form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            data-testid="title-input"
            name="title"
            value={ title }
            onChange={ handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            value={ subtitle }
            onChange={ handleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            name="imagePath"
            value={ imagePath }
            onChange={ handleChange }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyLine-input">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyLine"
            value={ storyLine }
            onChange={ handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            data-testid="rating-input"
            name="rating"
            type="number"
            value={ rating }
            onChange={ handleChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select data-testid="genre-input" value={ genre }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
