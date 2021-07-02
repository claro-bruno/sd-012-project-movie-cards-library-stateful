import React, { Component } from 'react';
import InputsAddMovie from './InputsAddMovie';
// import PropTypes from 'prop-types';

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
  }

  hendleChange(e) {
    const { name } = e.target;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <InputsAddMovie onChange={ this.hendleChange } state={ this.state } />

      </form>
    );
  }
}

export default AddMovie;
