import React from 'react';
import PropTypes from 'prop-types';

class InputCheckBox extends React.Component {
  render() {
    const { checked, onChange } = this.props;

    return (
      <label htmlFor="search-checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarkedOnly"
          checked={ checked }
          onChange={ onChange }
          id="search-checkbox"
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

InputCheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputCheckBox;
