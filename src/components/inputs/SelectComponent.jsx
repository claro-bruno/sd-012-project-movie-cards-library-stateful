import React from 'react';
import PropTypes from 'prop-types';

class SelectComponent extends React.Component {
  render() {
    const {
      label,
      identifier,
      getValue,
      onChangeComponent,
      options,
      name,
    } = this.props;

    return (
      <label
        htmlFor={ `${identifier}-input-label` }
        data-testid={ `${identifier}-input-label` }
      >
        { label }
        <select
          id={ `${identifier}-input-label` }
          data-testid={ `${identifier}-input` }
          value={ getValue }
          onChange={ onChangeComponent }
          name={ name }
        >
          {
            options.map(({ text, value }) => (
              <option value={ value } data-testid={ `${identifier}-option` } key={ text }>
                { text }
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

SelectComponent.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  label: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  getValue: PropTypes.string.isRequired,
  onChangeComponent: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default SelectComponent;
