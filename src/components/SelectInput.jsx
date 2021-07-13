import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { value, onChange, options } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          id="genre"
          value={ value }
          onChange={ onChange }
        >
          {
            options.map((option) => (
              <option
                data-testid="genre-option"
                value={ option.value }
                key={ option.text }
              >
                { option.text }
              </option>))
          }
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape(
    { value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default SelectInput;
