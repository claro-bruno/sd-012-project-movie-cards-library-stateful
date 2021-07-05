import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Title extends Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <Input
        labelTestId="title-input-label"
        labelText="Título"
        inputTestId="title-input"
        value={ title }
        onChange={ onChange }
        name="title"
      />
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Title;
