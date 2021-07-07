import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
    };

    this.handleChange = this.handleChange.bind(this);
    // this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }
  // takeStats() {
  //   this.state
  // }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form" action="">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            onChange={ this.handleChange }
            value={ title }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
            // data-testid="image-input"
          />
        </label>
      </form>
    );
  }
}
export default AddMovie;
