import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../generics/Input';

class InputSubtitle extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <Input
        id="add-subtitle"
        dataTestidLabel="subtitle-input-label"
        dataTestidInput="subtitle-input"
        textLabel="Subtítulo"
        onChange={ onChange }
        name="subtitle"
        value={ value }
      />
    );
  }
}

InputSubtitle.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputSubtitle;
