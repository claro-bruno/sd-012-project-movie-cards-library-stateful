import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputGenre extends Component {
  render() {
    const {
      optTxt,
      value,
      dataTestid,
    } = this.props;
    return (
      <select data-testid={ dataTestid }>
        <option value={ value }>
          { optTxt }
        </option>
      </select>
    );
  }
}

InputGenre.propTypes = {
  dataTestid: PropTypes.string,
  value: PropTypes.string,
  optTxt: PropTypes.string,
}.isRequired;

export default InputGenre;
