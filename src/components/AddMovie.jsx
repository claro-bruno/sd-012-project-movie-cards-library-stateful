import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
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
      title = '',
    } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleInput" data-testid="title-input-label">
          <input
            id="titleInput"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.textInputHandler }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AddMovie;
