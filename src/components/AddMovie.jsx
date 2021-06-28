import React from 'react';

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

    this.ratingChange = this.ratingChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
  }

  titleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  ratingChange(e) {
    this.setState({
      rating: e.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre, onClick } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            onChange={ this.titleChange }
            value={ title }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input data-testid="subtitle-input" type="text" value={ subtitle } />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input data-testid="image-input" type="text" value={ imagePath } />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea data-testid="storyline-input" type="text" value={ storyline } />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            value={ rating }
            onChange={ this.ratingChange }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select data-testid="genre-input" onChange={ genre }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" type="submit" onClick={ onClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
