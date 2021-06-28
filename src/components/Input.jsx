import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, value, onChange, label } = this.props;
    const { labelTestId, labelId, inputTestId } = this.props;

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
          />
        </label>
      </section>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  labelTestId: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  inputTestId: PropTypes.string.isRequired,
};

export default Input;
