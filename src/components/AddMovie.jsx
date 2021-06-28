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
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle } = this.state;

    // const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <Input
          label="Título"
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />

        <Input
          label="Subtítulo"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
