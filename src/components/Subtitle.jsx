import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Subtitle extends Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <Input
        labelTestId="subtitle-input-label"
        labelText="Subtítulo"
        inputTestId="subtitle-input"
        value={ subtitle }
        onChange={ onChange }
        name="subtitle"
      />
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Subtitle;
