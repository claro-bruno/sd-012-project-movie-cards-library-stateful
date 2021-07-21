import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {
  render() {
    const { name, v, lS, id, oC, type } = this.props;
    return (
      <label data-testid={ `${id}-label` } htmlFor={ id }>
        {lS}
        <input
          name={ name }
          id={ id }
          value={ v }
          data-testid={ id }
          onChange={ oC }
          type={ type }
        />
      </label>);
  }
}

InputForm.propTypes = {
  v: PropTypes.string.isRequired,
  lS: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  oC: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputForm;
