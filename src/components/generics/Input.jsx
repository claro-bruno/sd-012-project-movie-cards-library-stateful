import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      id,
      classNameInput,
      classNameLabel,
      onChange,
      type,
      value,
      checked,
      dataTestidLabel,
      dataTestidInput,
      textLabel,
    } = this.props;

    return (
      <label
        htmlFor={ id }
        data-testid={ dataTestidLabel }
        className={ classNameLabel }
      >

        { textLabel }

        <input
          id={ id }
          type={ type }
          value={ value }
          onChange={ onChange }
          className={ classNameInput }
          data-testid={ dataTestidInput }
          checked={ checked }
        />

      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  classNameInput: PropTypes.string,
  classNameLabel: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  dataTestidLabel: PropTypes.string,
  dataTestidInput: PropTypes.string,
  textLabel: PropTypes.string,
};

Input.defaultProps = {
  classNameInput: '',
  classNameLabel: '',
  onChange: () => {},
  type: 'text',
  value: '',
  checked: false,
  dataTestidLabel: '',
  dataTestidInput: '',
  textLabel: '',
};

export default Input;
