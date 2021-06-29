import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      datatestid,
      value,
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
            onChange={ onChange }
          >
            {options.map(
              (option) => (
                <option
                  key={ option[0] }
                  value={ option[1] }
                  data-testid={ datatestidOption }
                >
                  { option[0] }
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
  onChange: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  datatestidLabel: PropTypes.string.isRequired,
  datatestidOption: PropTypes.string.isRequired,
}.isRequired;

export default InputSelect;
