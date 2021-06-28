import React from 'react';
import PropTypes from 'prop-types';

class CheckboxInput extends React.Component {
  render() {
    const { name, checked, onChange, text } = this.props;
    return (
      <label htmlFor={ name } data-testid="checkbox-input-label">
        { text }
        <input
          type="checkbox"
          data-testid="checkbox-input"
          name={ name }
          id={ name }
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}

CheckboxInput.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default CheckboxInput;
