import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    const {
      title = '',
    } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleInput" data-testid="title-input-label">
          <input
            id="titleInput"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ title.value === input.value }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AddMovie;
