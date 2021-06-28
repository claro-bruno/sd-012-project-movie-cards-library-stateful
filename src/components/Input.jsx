import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, value, onChange } = this.props;
    return (
      <section>
        <label data-testid="text-input-label" htmlFor="inputTxt">
          Inclui o texto:
          <input
            type={ type }
            value={ value }
            onChange={ onChange }
            data-testid="text-input"
            id="inputTxt"
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
};

export default Input;
