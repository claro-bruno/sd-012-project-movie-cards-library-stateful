import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Button from './Button';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleClick(e) {
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          label="Título"
          type="text"
          id="title-input"
          value={ title }
          name="title"
          onChange={ this.handleChange }
        />
        <Input
          label="Subtítulo"
          type="text"
          id="subtitle-input"
          value={ subtitle }
          name="subtitle"
          onChange={ this.handleChange }
        />
        <Input
          label="Imagem"
          type="text"
          id="image-input"
          value={ imagePath }
          name="imagePath"
          onChange={ this.handleChange }
        />
        <TextArea
          label="Sinopse"
          id="storyline-input"
          value={ storyline }
          name="storyline"
          onChange={ this.handleChange }
        />
        <Input
          label="Avaliação"
          type="number"
          id="rating-input"
          value={ rating }
          name="rating"
          onChange={ this.handleChange }
        />
        <Select value={ genre } onChange={ this.handleChange } name="genre" />
        <Button onClick={ this.handleClick } />
      </form>
    );
  }
}

// AddMovie.propTypes = {

// };

export default AddMovie;
