import React, { Component } from 'react';

export default class GenreOption extends Component {
  render() {
    const { inner, value, testid } = this.props;
    return (
      <option data-testid={ testid } value={ value }>{inner}</option>
    );
  }
}
