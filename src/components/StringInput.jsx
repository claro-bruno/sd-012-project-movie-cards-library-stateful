import React from 'react';
import PropTypes from 'prop-types';

class StringInput extends React.Component {
  render() {
    const { text, testid, name, value, onChange } = this.props;
    return (
      <label data-testid={ `${testid}-input-label` } htmlFor={ name }>
        { text }
        <input
          data-testid={ `${testid}-input` }
          name={ name }
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

StringInput.propTypes = {
  text: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StringInput;
