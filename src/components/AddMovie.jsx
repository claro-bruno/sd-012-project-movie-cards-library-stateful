import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const { value, name } = e.target;  
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    const { handleInput } = this;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            onChange={ handleInput }
            data-testid="title-input"
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ handleInput }
            data-testid="subtitle-input"
          />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ handleInput }
            data-testid="image-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;