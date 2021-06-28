import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../generics/Input';

class InputTitle extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <Input
        id="add-title"
        dataTestidLabel="title-input-label"
        dataTestidInput="title-input"
        textLabel="Título"
        onChange={ onChange }
        name="title"
        value={ value }
      />
    );
  }
}

InputTitle.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputTitle;
