import React from 'react';
import PropTypes from 'prop-types';

class InputTextSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="input-text-sub" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ value }
          onChange={ onChange }
          id="input-text-sub"
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

InputTextSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTextSubtitle;
