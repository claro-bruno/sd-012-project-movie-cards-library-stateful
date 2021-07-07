import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Inputs from './Forms/Inputs';

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
      // genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Inputs
          inputLabel="Título"
          inputType="text"
          inputName="title"
          inputValue={ title }
          onChangeInput={ this.handleChange }
        />
        <Inputs
          inputLabel="Subtítulo"
          inputType="text"
          inputName="subtitle"
          inputValue={ subtitle }
          onChangeInput={ this.handleChange }
        />
        <Inputs
          inputLabel="Imagem"
          inputType="text"
          inputName="image"
          inputValue={ imagePath }
          onChangeInput={ this.handleChange }
        />
        <label htmlFor="story" data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
        <Inputs
          inputLabel="Avaliação"
          inputType="number"
          inputName="rating"
          inputValue={ rating }
          onChangeInput={ this.handleChange }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  // onClick: PropTypes.func.isRequired,
};

export default AddMovie;
