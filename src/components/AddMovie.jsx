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

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="input">
          Título
          <input
            data-testid="title-input"
            name="title"
            type="text"
            value={ title }
            onChange={ this.handleClick }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="input">
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            type="text"
            value={ subtitle }
            onChange={ this.handleClick }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="input">
          Imagem
          <input
            data-testid="image-input"
            name="imagePath"
            type="text"
            value={ imagePath }
            onChange={ this.handleClick }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="input">
          Sinopse
          <input
            data-testid="storyline-input"
            name="storyline"
            type="textarea"
            value={ storyline }
            onChange={ this.handleClick }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
