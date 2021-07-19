import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };
    this.titleHandleChange = this.titleHandleChange.bind(this);
    this.subtitleHandleChange = this.subtitleHandleChange.bind(this);
    this.imageHandleChange = this.imageHandleChange.bind(this);
    this.storylineHandleChange = this.storylineHandleChange.bind(this);
  }

  titleHandleChange(event) {
    this.setState({ title: event.target.value });
  }

  subtitleHandleChange(event) {
    this.setState({ subtitle: event.target.value });
  }

  imageHandleChange(event) {
    this.setState({ imagePath: event.target.value });
  }

  storylineHandleChange(event) {
    this.setState({ storyline: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            id="title-input"
            value={ title }
            data-testid="title-input"
            onChange={ this.titleHandleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            id="subtitle-input"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.subtitleHandleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            id="image-input"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.imageHandleChange }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            id="storyline-input"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.storylineHandleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
