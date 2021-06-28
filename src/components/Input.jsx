import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, type, name, searchText, onSearchTextChange } = this.props;

    return (
      <label htmlFor={ name } data-testid={ `${type}-input-label` }>
        { label }
        <input
          id={ name }
          name={ name }
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid={ `${type}-input` }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default Input;
