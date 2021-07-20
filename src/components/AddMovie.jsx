import React, { Component } from 'react';
import PropType, { func } from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super()

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }
  render() {
    const { onClick } = this.props;
    return (
      <form></form>
    )
  }
}

AddMovie.propTypes = {
  onClick: PropType.func.isRequired,
};

export default AddMovie;
