import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    this.setState({
      [event.target.name]: event.target.value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">

        <label htmlFor="input-text" data-testid="title-input-label">
          Título
          <input
            name="title"
            data-testid="title-input"
            id="input-text"
            type="text"
            value={ title }
            onChange={ this.changeValue }
          />

        </label>
        <label htmlFor="input-text2" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            data-testid="subtitle-input"
            id="input-text2"
            type="text"
            value={ subtitle }
            onChange={ this.changeValue }
          />

        </label>
        <label htmlFor="input-image" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            data-testid="subtitle-input"
            id="input-image"
            type="text"
            value={ imagePath }
            onChange={ this.changeValue }
          />

        </label>
      </form>
    );
  }
}
export default AddMovie;
