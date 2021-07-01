import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Option from './Option';
import genreOptions from '../genreOptions';

class Select extends Component {
  render() {
    const { onChange, genreState } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          id="genre-input"
          name="genre"
          value={ genreState }
          onChange={ onChange }
        >
          { genreOptions.map(({ value, text }) => (
            <Option value={ value } text={ text } key={ value } />
          )) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  genreState: PropTypes.string.isRequired,
};

export default Select;
