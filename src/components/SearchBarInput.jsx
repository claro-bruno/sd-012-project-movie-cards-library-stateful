import React, { Component } from 'react';
import PropTypes from 'prop-types';

import translate from '../translate';

class SearchBarInput extends Component {
  render() {
    const { type, value, onChange, name, checked } = this.props;
    return (
      <label
        htmlFor={ `${type}-input ` }
        data-testid={ `${type}-input-label` }
      >
        {translate(name, 'SearchBarInput')}
        <input
          type={ type }
          value={ value }
          checked={ checked }
          onChange={ onChange }
          name={ name }
          data-testid={ `${type}-input` }
        />
      </label>
    );
  }
}

SearchBarInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}.isRequired;

export default SearchBarInput;
