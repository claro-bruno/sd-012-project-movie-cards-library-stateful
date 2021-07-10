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
    this.updateTitle = this.updateTitle.bind(this);
    this.updateSubtitle = this.updateSubtitle.bind(this);
    this.updateImage = this.updateImage.bind(this);
  }

  updateTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  updateSubtitle(event) {
    this.setState({
      subtitle: event.target.value,
    });
  }

  updateImage(event) {
    this.setState({
      imagePath: event.target.value,
    })
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor>
          Título:
          <input
            type="text"
            onChange={ this.updateTitle }
            data-testid="title-input"
            value={ title }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor>
          Subtítulo:
          <input
            type="text"
            onChange={ this.updateSubtitle }
            data-testid="subtitle-input"
            value={ subtitle }
          />
        </label>
        <label data-testid="image-input-label" htmlFor>
          Imagem:
          <input
            type="text"
            onChange={ this.updateImage }
            data-testid="image-input"
            value={ imagePath }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
