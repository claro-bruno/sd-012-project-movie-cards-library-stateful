import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
    this.handleImagePathChange = this.handleImagePathChange.bind(this);
    this.handleStoryLineChange = this.handleStoryLineChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubtitleChange(event) {
    this.setState({ subtitle: event.target.value });
  }

  handleImagePathChange(event) {
    this.setState({ imagePath: event.target.value });
  }

  handleStoryLineChange(event) {
    this.setState({ storyline: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            data-testid="title-input"
            name="title"
            type="text"
            value={ title }
            onChange={ this.handleTitleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            type="text"
            value={ subtitle }
            onChange={ this.handleSubtitleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            data-testid="image-input"
            name="imagePath"
            type="text"
            value={ imagePath }
            onChange={ this.handleImagePathChange }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ this.handleStoryLineChange }
            cols="30"
            rows="10"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
