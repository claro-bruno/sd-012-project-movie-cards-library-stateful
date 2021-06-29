import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Option extends Component {
  render() {
    const { value, dataTestId, text } = this.props;
    return (
      <option value={ value } data-testid={ dataTestId }>{ text }</option>
    );
  }
}

Option.propTypes = {
  value: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Option;
