import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Label extends Component {
  render() {
    const { data, value, name, inputName, inputData, inputType, func } = this.props;
    return (
      <label data-testid={ data } htmlFor={ inputName }>
        {name}
        <input
          type={ inputType }
          value={ value }
          name={ inputName }
          data-testid={ inputData }
          onChange={ func }
        />
      </label>
    );
  }
}

Label.propTypes = {
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputData: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
