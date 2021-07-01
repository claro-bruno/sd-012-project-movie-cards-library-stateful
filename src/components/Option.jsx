import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Option extends Component {
  render() {
    const {
      value,
      text,
    } = this.props;
    return (
      <option data-testid="genre-option" value={ value }>{ text }</option>
    );
  }
}

Option.propTypes = {
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Option;
