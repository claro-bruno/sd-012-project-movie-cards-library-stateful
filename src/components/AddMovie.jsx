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
  }

  render() {
    const { onClick } = this.props;

    return (
      <div>
        AddMovie
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.string.isRequired,
};

export default AddMovie;
