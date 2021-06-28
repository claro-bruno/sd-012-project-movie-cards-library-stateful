import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, value, onChange, label } = this.props;
    const { labelTestId, labelId, inputTestId, checked } = this.props;

    return (
      <section>
        <label data-testid={ labelTestId } htmlFor={ labelId }>
          { label }
          <input
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
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  labelTestId: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  inputTestId: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

Input.defaultProps = {
  value: '',
  checked: false,
};

export default Input;
