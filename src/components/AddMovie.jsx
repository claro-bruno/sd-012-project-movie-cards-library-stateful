import React from 'react';


class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    }

    this.addTitle = this.addTitle.bind(this);
    this.addSubtitle = this.addSubtitle.bind(this);
    this.addImage= this.addImage.bind(this);
    this.addStoryline= this.addStoryline.bind(this);
  }

  addTitle(e) {
    this.setState({ title: e.target.value });
  }

  addSubtitle(e) {
    this.setState({ subtitle: e.target.value });
  }

  addImage(e) {
    this.setState({ imagePath: e.target.value });
  }
  
  addStoryline(e) {
    this.setState({ storyline: e.target.value });
  }

  render() {
    const {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título
          <input
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.addTitle }
            />
        </label>
        <label data-testid="subtitle-input-label">Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ this.addSubtitle }
            />
        </label>
        <label data-testid="image-input-label">Imagem
          <input
            data-testid="image-input"
            type="text"
            value={ imagePath }
            onChange={ this.addImage }
            />
        </label>
        <label data-testid="storyline-input-label">Sinopse
          <textarea
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.addStoryline }
            />
        </label>
      </form>
    );
  }
}

export default AddMovie;