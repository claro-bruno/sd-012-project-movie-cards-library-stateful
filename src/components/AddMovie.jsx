import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super()

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
    action(this.state)
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    })
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (

      <form data-testid="add-movie-form">
        <label htmlFor="texto" data-testid="title-input-label">
          Título:
          <input
            type="text"
            name="title"
            id="texto"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="text" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="text" data-testid="image-input-label">
          Imagem:
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="text" data-testid="storyline-input-label">
          Sinopse:
          <textarea
            type="textarea"
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="text" data-testid="rating-input-label">
          Avaliação:
          <input
            type="number"
            name="rating"
            data-testid="rating-input"
            min="0"
            max="5"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="selectList" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
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

export default AddMovie;