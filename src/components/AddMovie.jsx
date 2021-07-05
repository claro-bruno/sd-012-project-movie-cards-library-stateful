import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleCHange = this.handleCHange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleCHange({ target }) {
    const { name } = target;
    const value = target.type === 'rating' ? Number(target.value) : target.value;
    this.setState({ [name]: value });
  }

  handleSubmit() {
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
        <label data-testid="title-input-label" htmlFor="first-name">
          Título
          <input
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleCHange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="second-name">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="Third-name">
          Imagem
          <input
            type="image"
            data-testid="subtitle-input"
            alt={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="Fourth-name">
          Sinopse
          <textarea
            data-testid="storyline-input"
            value={ storyline }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="Fifth-name">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="Sixth-name">
          Gênero
          <select
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
          onClick={ this.handleSubmit }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}
export default AddMovie;
