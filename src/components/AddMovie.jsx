// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();
    this.state = { ...initialState };
  }

  render() {
    return (
      <div>
        oi
      </div>
    );
  }
}

AddMovie.porpTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
