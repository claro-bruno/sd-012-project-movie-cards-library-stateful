import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <form data-testid="add-movie-form" />
    );
  }
}

AddMovie.propType = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
