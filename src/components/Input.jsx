import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      id,
      dataTestIDLabel,
      labelContent,
      type,
      name,
      value,
      dataTestIDInput,
      onChangeCallback,
    } = this.props;

    return (
      <label htmlFor={ id } data-testid={ dataTestIDLabel }>
        { labelContent }
        <input
          type={ type }
          name={ name }
          id={ id }
          data-testid={ dataTestIDInput }
          value={ value }
          onChange={ onChangeCallback }
        />
      </label>
    );
  }
}

//  Para essa serie de propTypes eu presiva que a prop value pudesse receber tanto uma string quanto um número, então para resolver esse problema eu consultei esse site: https://stackoverflow.com/questions/41808428/react-proptypes-allow-different-types-of-proptypes-for-one-prop para conseguir adicionar dois tipos diferentes para uma unica prop.

Input.propTypes = {
  id: PropTypes.string.isRequired,
  dataTestIDLabel: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  dataTestIDInput: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
};

export default Input;
