import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="importMovieTitle" data-testid="title-input-label">
          Título
          <input type="text" name="" id="importMovieTitle" data-testid="title-input" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
