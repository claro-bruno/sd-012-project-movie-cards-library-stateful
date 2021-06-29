import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Input from './Input';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    // const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          label="Título"
          type="text"
          id="title-input"
          value={ title }
          name="title"
          data-testid="title-input"
          onChange={ this.handleChange }
        />
        <Input
          label="Subtítulo"
          type="text"
          id="subtitle-input"
          value={ subtitle }
          name="subtitle"
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
        <Input
          label="Imagem"
          type="text"
          id="image-input"
          value={ imagePath }
          name="imagePath"
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

// AddMovie.propTypes = {

// };

export default AddMovie;
