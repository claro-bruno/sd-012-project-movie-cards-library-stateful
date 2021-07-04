// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      // rating: 0,
      // genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyLine } = this.state;

    return (
      <section>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title">
            Título
            <input
              name="title"
              type="text"
              data-testid="title-input"
              value={ title }
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle">
            Subtítulo
            <input
              name="subtitle"
              type="text"
              data-testid="subtitle-input"
              value={ subtitle }
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="image-input-label" htmlFor="image">
            Imagem
            <input
              name="image"
              type="text"
              data-testid="image-input"
              value={ imagePath }
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline">
            Sinopse
            <input
              name="storyline"
              type="textarea"
              data-testid="storyline-input"
              value={ storyLine }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </section>
    );
  }
}

export default AddMovie;
