import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle:'',
      title:'',
      imagePath:'',
      storyline:'',
      rating:0,
      genre:'action',
    };
  }
  handleChange({ target }) {
    const name = target.id;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
          type="text"
          id="title"
          data-testid="title-input"
          value={this.state.title}
          onChange={this.handleChange}
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
          type="text"
          id="subtitle"
          data-testid="subtitle-input"
          value={this.state.subtitle}
          onChange={this.handleChange}
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
          type="text"
          id="imagePath"
          data-testid="image-input"
          value={this.state.imagePath}
          onChange={this.handleChange}
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
          id="storyline"
          data-testid="storyline-input"
          value={this.state.storyline}
          onChange={this.handleChange}
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
          type="number"
          id="rating"
          data-testid="rating-input"
          value={this.state.rating}
          onChange={this.handleChange}
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
          id="genre"
          data-testid="genre-input"
          value={this.state.genre}
          onChange={this.handleChange}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
        data-testid="send-button"
        onClick={(event) => {
          event.preventDefault();
          onClick();
          this.setState({
            subtitle:'',
            title:'',
            imagePath:'',
            storyline:'',
            rating:0,
            genre:'action',
          });
        }}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
