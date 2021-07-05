import React from 'react';
import PropTypes from 'prop-types';

class InputTextAreaSin extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="input-textArea-sin" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="input-textArea-sin"
          value={ value }
          onChange={ onChange }
          cols="30"
          rows="10"
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

InputTextAreaSin.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTextAreaSin;
