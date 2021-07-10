import React, { Component } from 'react';


class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.onChangeInputTitle = this.onChangeTitle.bind(this);
    this.onChangeSubtitle = this.onChangeSubtitle.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
  }
  onChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangeSubtitle(e) {
    this.setState({ subtitle: e.target.value });
  }

  onChangeIMage(e) {
    this.setState({ image: e.target.value })
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="text-input-label">
          Título
          <input
            data-testid="title-input"
            id="title-input"
            type="text"
            value={ title }
            onChange={ this.onChangeTitle }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            id="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ this.onChangeSubtitle }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            id="image-input"
            type="text"
            value={ imagePath }
            onChange={ this.onChangeImage }
          />
        </label>
      </form>
    )
  }
}

export default AddMovie;
