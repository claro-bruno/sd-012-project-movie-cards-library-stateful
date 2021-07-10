import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      dataTestidLabel,
      textLabel,
      dataTestid,
      onChange,
      name,
      genre,
      dataTestidOption,
      options,
    } = this.props;
    return (
      <label htmlFor={ dataTestid } data-testid={ dataTestid }>
        { textLabel }
        <select
         data-testid={ dataTestid }
         id={ dataTestid }
         name={ name }
         value={ genre }
         onChange={ onChange }
        >
          { options.map(({ value, text }) => (
            <option
              data-testid={ dataTestidOption }
              value={ value }
              key={ value }
            >  
              { text }
            </option>
          )) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  dataTestidLabel: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  dataTestidOption: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Select;
