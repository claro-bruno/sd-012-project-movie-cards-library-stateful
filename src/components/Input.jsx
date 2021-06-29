import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, value, onChange, label } = this.props;
    const { labelTestId, labelId, inputTestId, checked, name } = this.props;

    return (
      <section>
        <label data-testid={ labelTestId } htmlFor={ labelId }>
          { label }
          <input
            name={ name }
            type={ type }
            value={ value }
            onChange={ onChange }
            data-testid={ inputTestId }
            id={ labelId }
            checked={ checked }
          />
        </label>
      </section>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  labelTestId: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  inputTestId: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  name: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  checked: false,
  name: '',
};

export default Input;
