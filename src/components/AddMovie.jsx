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
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            type="text"
            id="title-input"
            value={ title }
            data-testid="title-input"
            onChange={ ({ target }) => this.setState({ title: target.value }) }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            id="subtitle-input"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ ({ target }) => this.setState({ subtitle: target.value }) }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            id="image-input"
            data-testid="image-input"
            value={ imagePath }
            onChange={ ({ target }) => this.setState({ imagePath: target.value }) }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            id="storyline-input"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ ({ target }) => this.setState({ storyline: target.value }) }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            type="number"
            id="rating-input"
            data-testid="rating-input"
            value={ rating }
            onChange={ ({ target }) => this.setState({ rating: target.value }) }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
