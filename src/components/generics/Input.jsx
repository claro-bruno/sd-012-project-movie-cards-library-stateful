import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      name,
      id,
      classNameInput,
      classNameLabel,
      onChange,
      type,
      step,
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
          name={ name }
          id={ id }
          type={ type }
          step={ step }
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
  name: PropTypes.string,
  classNameInput: PropTypes.string,
  classNameLabel: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  step: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  checked: PropTypes.bool,
  dataTestidLabel: PropTypes.string,
  dataTestidInput: PropTypes.string,
  textLabel: PropTypes.string,
};

Input.defaultProps = {
  name: '',
  classNameInput: '',
  classNameLabel: '',
  onChange: () => {},
  type: 'text',
  step: '',
  value: '' || 0,
  checked: false,
  dataTestidLabel: '',
  dataTestidInput: '',
  textLabel: '',
};

export default Input;
