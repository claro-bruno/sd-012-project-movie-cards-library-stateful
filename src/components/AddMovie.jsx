import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const { title } = this.state;
    return (
      <form
        handleChange={ this.handleChange }
        data-testid="add-movie-form"
      >
        <label
          htmlFor="input-label"
          data-testid="title-input-label"
        >
          Título
          <input
            type="text"
            id="input-label"
            name="title"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default AddMovie;
