import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Option extends Component {
  render() {
    const {
      dataTestid,
      value,
      text,
    } = this.props;
    return (
      <option data-testid={ dataTestid } value={ value }>{ text }</option>
    );
  }
}

Option.propTypes = {
  dataTestid: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Option;
