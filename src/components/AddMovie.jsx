import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    const {
      title = "",
    } = this.props;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="" data-testid="title-input-label">
          <input
          type="text"
          value={ title }
          data-testid="title-input"
          onChange={ title = input.value }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
