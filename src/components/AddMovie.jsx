import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form
        data-testid="add-movie-form"
      >
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            onChange={ this.handleChange }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleChange }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ this.handleChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline-textarea" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="text"
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
