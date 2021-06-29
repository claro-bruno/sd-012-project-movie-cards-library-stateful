import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      datatestid,
      value,
      name,
      onChange,
      labelText,
      datatestidLabel,
      options,
      datatestidOption,
    } = this.props;

    return (
      <section>
        <label htmlFor={ datatestid } data-testid={ datatestidLabel }>
          { labelText }
          <select
            id={ datatestid }
            data-testid={ datatestid }
            value={ value }
            name={ name }
            onChange={ onChange }
          >
            {options.map(
              (option) => (
                <option
                  id={ datatestid }
                  key={ option.value }
                  value={ option.value }
                  data-testid={ datatestidOption }
                >
                  { option.text }
                </option>),
            )}
          </select>
        </label>
      </section>
    );
  }
}

Select.propTypes = {
  type: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  datatestidLabel: PropTypes.string.isRequired,
  datatestidOption: PropTypes.string.isRequired,
}.isRequired;

export default Select;
