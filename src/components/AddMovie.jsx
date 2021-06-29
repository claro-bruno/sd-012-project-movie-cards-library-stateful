// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import TextAreaInput from './TextAreaInput';
import NumberInput from './NumberInput';
import SelectInput from './SelectInput';
import Button from './Button';

class AddMovie extends Component {
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

    this.handleChange = this.handleChange.bind(this);
    this.onClickFunction = this.onClickFunction.bind(this);
  }

  handleChange(e) {
    const { name } = e.target;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({
      [name]: value,
    });
  }

  onClickFunction(e) {
    e.preventDefault();
    const movie = this.state;
    const { onClick } = this.props;
    console.log('filme cadastrado no addmovie:', movie);
    onClick(movie);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextInput
          id="title"
          label="Título"
          name="title"
          value={ title }
          handleChange={ this.handleChange }
        />
        <TextInput
          id="subtitle"
          label="Subtítulo"
          name="subtitle"
          value={ subtitle }
          handleChange={ this.handleChange }
        />
        <TextInput
          id="image"
          label="Imagem"
          name="imagePath"
          value={ imagePath }
          handleChange={ this.handleChange }
        />
        <TextAreaInput
          id="storyline"
          label="Sinopse"
          name="storyline"
          value={ storyline }
          handleChange={ this.handleChange }
        />
        <NumberInput
          id="rating"
          label="Avaliação"
          name="rating"
          value={ rating }
          handleChange={ this.handleChange }
        />
        <SelectInput
          id="genre"
          label="Gênero"
          name="genre"
          value={ genre }
          handleChange={ this.handleChange }
        />
        <Button onClick={ this.onClickFunction } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
