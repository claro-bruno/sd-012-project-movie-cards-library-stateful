import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Option extends Component {
  render() {
    const {
      value,
      name,
      dataId,
    } = this.props;
    return (
      <option value={ value } data-testid={ dataId }>
        { name }
      </option>
    );
  }
}

Option.propTypes = PropTypes.shape({
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}).isRequired;

export default Option;
