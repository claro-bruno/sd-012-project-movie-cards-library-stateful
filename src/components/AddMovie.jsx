// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderTitles() {
    const { title } = this.state;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input id="title-input" data-testid="title-input" />
        <input
          name="title"
          type="text"
          id="title-input"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <h2>Adiciona Filme</h2>
        <form data-testid="add-movie-form">
          { this.renderTitles() }
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
