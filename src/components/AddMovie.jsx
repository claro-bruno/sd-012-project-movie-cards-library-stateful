import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
    };
    this.textInputHandler = this.textInputHandler.bind(this);
  }

  // Este trecho do código foi resolvido com ajuda do projeto do Leonardo Ferreira.

  textInputHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      title,
      subtitle,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            id="title-input"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.textInputHandler }
            name="title"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle-input"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.textInputHandler }
            name="subtitle"
          />
        </label>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default AddMovie;
