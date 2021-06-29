import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form"> </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func,
}.isRequired;

export default AddMovie;
