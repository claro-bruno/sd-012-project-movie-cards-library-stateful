import PropTypes from 'prop-types';
import React from 'react';

class InputText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="Inclui o texto:" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          id="Inclui o texto:"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default InputText;
