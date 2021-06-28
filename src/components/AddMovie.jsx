import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';

class AddMovie extends Component {
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

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  makeTitle(value) {
    return (
      <Input
        type="text"
        name="title"
        id="title"
        label="Título"
        value={ value }
        callback={ this.handleChange }
      />
    );
  }

  makeSubtitle(value) {
    return (
      <Input
        type="text"
        name="subtitle"
        id="subtitle"
        label="Subtítulo"
        value={ value }
        callback={ this.handleChange }
      />
    );
  }

  makeImage(value) {
    return (
      <Input
        type="text"
        name="imagePath"
        id="image"
        label="Imagem"
        value={ value }
        callback={ this.handleChange }
      />
    );
  }

  makeRating(value) {
    return (
      <Input
        type="number"
        name="rating"
        id="rating"
        label="Avaliação"
        value={ value }
        callback={ this.handleChange }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, rating, genre, storyline } = this.state;

    return (
      <form data-testid="add-movie-form">
        {this.makeTitle(title)}
        {this.makeSubtitle(subtitle)}
        {this.makeImage(imagePath)}

        <TextArea
          name="storyline"
          label="Sinopse"
          value={ storyline }
          callback={ this.handleChange }
        />

        {this.makeRating(rating)}

        <Select
          name="genre"
          label="Gênero"
          value={ genre }
          callback={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
