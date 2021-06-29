import React from 'react';
import InputRender from './InputRender';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputRender
          name="title"
          nome="Título"
          initValue={ title }
          onChange={ this.handleChange }
        />
        <InputRender
          name="subtitle"
          nome="Subtítulo"
          initValue={ subtitle }
          onChange={ this.handleChange }
        />
        <InputRender
          name="image"
          nome="Imagem"
          initValue={ imagePath }
          onChange={ this.handleChange }
        />
        <InputRender
          name="rating"
          nome="Avaliação"
          initValue={ rating }
          onChange={ this.handleChange }
          type="number"
        />
      </form>
    );
  }
}

export default AddMovie;
