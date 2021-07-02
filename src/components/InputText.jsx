import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        htmlFor="inputName"
        data-testid="text-input-label"
      >
        <p>Inclui o texto</p>
        <input
          type="text"
          name="inputName"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
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
