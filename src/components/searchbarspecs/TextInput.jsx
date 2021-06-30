import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { searchText, onSearchTextChange, name } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto
        <input
          type="text"
          data-testid="text-input"
          value={ searchText }
          name={ name }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}
TextInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,

};

export default TextInput;
