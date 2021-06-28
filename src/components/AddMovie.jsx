import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
          />
        </label>
      </form>
    );
  }
}
