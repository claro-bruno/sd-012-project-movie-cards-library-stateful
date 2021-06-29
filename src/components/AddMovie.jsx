// implement AddMovie component here
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((estadoAnterior) => ({
      title: estadoAnterior.title,
      subtitle: estadoAnterior.subtitle,
      imagePath: estadoAnterior.imagePath,
      storyline: estadoAnterior.storyline,
    }));
    console.log(this.state);
  }

  titleInput(title) {
    const input = (
      <label htmlFor="input-title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="input-title"
          id="input-title"
          placeholder={ title }
          onChange={ this.handleClick }
          data-testid="title-input"
        />
      </label>
    );
    return input;
  }

  subtitleInput(subtitle) {
    const input = (
      <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="input-subtitle"
          id="input-subtitle"
          placeholder={ subtitle }
          onChange={ this.handleClick }
          data-testid="subtitle-input"
        />
      </label>
    );
    return input;
  }

  imagePath(inputImage) {
    const input = (
      <label htmlFor="input-image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="input-image"
          id="input-image"
          placeholder={ inputImage }
          onChange={ this.handleClick }
          data-testid="image-input"
        />
      </label>
    );
    return input;
  }

  textArea(storyline) {
    const textArea = (
      <label htmlFor="input-sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="input-sinopse"
          id="input-sinopse"
          cols="30"
          rows="10"
          placeholder={ storyline }
          onChange={ this.handleClick }
          data-testid="storyline-input"
        />
      </label>
    );
    return textArea;
  }

  render() {
    const { onclick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.titleInput(title) }
        { this.subtitleInput(subtitle) }
        { this.imagePath(imagePath) }
        { this.textArea(storyline) }
        { onclick }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func.isRequired,
};

export default AddMovie;
