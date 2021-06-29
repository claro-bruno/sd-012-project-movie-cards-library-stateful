import React from 'react';
import PropTypes from 'prop-types';

class GenInput extends React.Component {
  render() {
    const { name, value, onChange, labelName, id } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${name}-input-label` }>
        {labelName}
        <input
          type="text"
          id={ id }
          data-testid={ `${name}-input` }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

GenInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GenInput;
