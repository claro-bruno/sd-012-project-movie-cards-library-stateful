import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title:'',
      subtitle:'',
      imagePath:'',
      storyline:'',
      rating: 0,
      genre:'action',
    };
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form"></form>
    );
  }
}

export default AddMovie;
