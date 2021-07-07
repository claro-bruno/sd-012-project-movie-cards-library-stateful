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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    
  }

  render() {
    const { onClick } = this.props;

    return (
      <form
        onClick={ onClick }
        data-testid="add-movie-form"
      >
        <label
          htmlFor="title-input-label"
        >
          Título
          <input
            data-testid="title-input-label"
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
