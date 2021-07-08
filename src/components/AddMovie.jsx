import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import Text from './Text';
import Button from './Button';
import Select from './Select';

export default class AddMovie extends Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Label
          data="title-input-label"
          value={ title }
          name="Título"
          inputName="title"
          inputData="title-input"
          inputType="text"
          func={ this.handleChange }
        />
        <Label
          data="subtitle-input-label"
          value={ subtitle }
          name="Subtítulo"
          inputName="subtitle"
          inputData="subtitle-input"
          inputType="text"
          func={ this.handleChange }
        />
        <Label
          data="image-input-label"
          value={ imagePath }
          name="Imagem"
          inputName="imagePath"
          inputData="image-input"
          inputType="text"
          func={ this.handleChange }
        />
        <Text value={ storyline } func={ this.handleChange } />
        <Label
          data="rating-input-label"
          value={ rating }
          name="Avaliação"
          inputName="rating"
          inputData="rating-input"
          inputType="number"
          func={ this.handleChange }
        />
        <Select func={ this.handleChange } value={ genre } />
        <Button func={ this.handleSubmit } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
