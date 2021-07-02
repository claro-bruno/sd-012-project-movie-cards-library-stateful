// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

class AddMovie extends Component {
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
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSinopseChange = this.handleSinopseChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubtitleChange(e) {
    this.setState({ subtitle: e.target.value });
  }

  handleImageChange(e) {
    this.setState({ imagePath: e.target.value });
  }

  handleSinopseChange(e) {
    this.setState({ storyline: e.target.value });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="movie-add-title" data-testid="title-input-label">
            Título
            <input
              id="movie-add-title"
              type="text"
              data-testid="title-input"
              value={ title }
              onChange={ this.handleTitleChange }
            />
          </label>
          <label htmlFor="movie-add-subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              data-testid="subtitle-input"
              value={ subtitle }
              onChange={ this.handleSubtitleChange }
            />
          </label>
          <label data-testid="image-input-label" htmlFor="movie-add-img">
            Imagem
            <input
              type="text"
              id="movie-add-img"
              data-testid="image-input"
              value={ imagePath }
              onChange={ this.handleImageChange }
            />
          </label>
          <label htmlFor="add-movie-sinopse" data-testid="storyline-input-label">
            Sinopse
            <textarea
              id="add-movie-sinopse"
              data-testid="storyline-input"
              value={ storyline }
              onChange={ this.handleSinopseChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
