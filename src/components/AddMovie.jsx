import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './generics/Input';
import Select from './generics/Select';

class AddMovie extends Component {
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
  }

  render() {
    const { onClick } = this.props;
    return (
      <form
        className="form-addMovie"
        data-testid="add-movie-form"
      >
        <Input
          id="add-subtitle"
          textLabel="Subtítulo : "
          name="subtitle"
        />

        <Input
          id="add-title"
          textLabel="Título : "
          name="title"
        />

        <Input
          id="add-imagePath"
          textLabel="Caminho da Imagem : "
          name="imagePath"
        />

        <Input
          id="add-storyline"
          textLabel="Sinopse : "
          name="storyline"
        />

        <Input
          id="add-rating"
          textLabel="Avaliação : "
          name="rating"
        />

        <Select
          id="add-genre"
          textLabel="Gênero : "
          name="genre"
        />

      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func.isRequired,
};

export default AddMovie;
