import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="input-text" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="input-text"
          value={ value }
          onChange={ onChange }
          id="input-text"
          data-testid="title-input"
        />
      </label>
    );
  }
}

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
