import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleInput extends Component {
  render() {
    // const {
    //   searchText,
    //   onSearchTextChange,
    // } = this.props;

    const { value, handleChange } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="Título">
        Título
        <input
          name="title"
          data-testid="title-input"
          type="text"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
