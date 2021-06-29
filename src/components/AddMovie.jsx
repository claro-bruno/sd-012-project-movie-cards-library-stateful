// implement AddMovie component here
import React, { Component } from 'react';
import Input from './Input';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    const { rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Input
          name="title"
          label="Título"
          labelTestId="title-input-label"
          value={ title }
          inputTestId="title-input"
          onChange={ this.handleChange }
          type="text"
          labelId="titleInput"
        />
        <Input
          name="subtitle"
          label="Subtítulo"
          labelTestId="subtitle-input-label"
          value={ subtitle }
          inputTestId="subtitle-input"
          onChange={ this.handleChange }
          type="text"
          labelId="subtitleInput"
        />
      </form>
    );
  }
}

export default AddMovie;
