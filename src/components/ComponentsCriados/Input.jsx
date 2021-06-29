import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      type,
      datatestid,
      value,
      name,
      onChange,
      labelText,
      datatestidLabel,
    } = this.props;

    return (
      <section>
        <label htmlFor={ datatestid } data-testid={ datatestidLabel }>
          { labelText }
          <input
            type={ type }
            id={ datatestid }
            data-testid={ datatestid }
            value={ value }
            name={ name }
            checked={ value }
            onChange={ onChange }
          />
        </label>
      </section>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  datatestidLabel: PropTypes.string.isRequired,
}.isRequired;

export default Input;
