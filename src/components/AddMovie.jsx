import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './addMovie/Title';
import Subtitle from './addMovie/Subtitle';

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
    return (
      <form
        handleChange={ this.handleChange }
        data-testid="add-movie-form"
      >
        <Title value={ this.state.title } handleChange={ this.handleChange } />
        <Subtitle value={ this.state.subtitle } handleChange={ this.handleChange } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default AddMovie;
