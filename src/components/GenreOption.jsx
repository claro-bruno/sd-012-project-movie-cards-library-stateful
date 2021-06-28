import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GenreOption extends Component {
  render() {
    const { inner, value, testid } = this.props;
    return (
      <option data-testid={ testid } value={ value }>{inner}</option>
    );
  }
}

GenreOption.propTypes = {
  inner: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};
