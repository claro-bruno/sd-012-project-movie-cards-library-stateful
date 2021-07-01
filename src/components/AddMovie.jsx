import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleSubtitle = this.handleSubtitle.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleStoryline = this.handleStoryline.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
  }

  handleTitle(event) {
    const { target } = event;
    this.setState({
      title: target.value,
    });
  }

  handleSubtitle(event) {
    const { target } = event;
    this.setState({
      subtitle: target.value,
    });
  }

  handleImage(event) {
    const { target } = event;
    this.setState({
      imagePath: target.value,
    });
  }

  handleStoryline(event) {
    const { target } = event;
    this.setState({
      storyline: target.value,
    });
  }

  handleRating(event) {
    const { target } = event;
    this.setState({
      rating: target.value,
    });
  }

  handleGenre(event) {
    const { target } = event;
    this.setState({
      genre: target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleTitle }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleSubtitle }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleImage }
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline-input"
            cols="30"
            rows="10"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleStoryline }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="text"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleRating }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select value={ genre } data-testid="genre-input" onChange={ this.handleGenre }>
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
