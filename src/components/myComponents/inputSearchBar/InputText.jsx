import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="search-text" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          value={ value }
          onChange={ onChange }
          id="search-text"
          data-testid="text-input"
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
