import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Option extends Component {
  render() {
    const { value, name, type, dataId } = this.props;

    return (
      <option
        name={ name }
        value={ value }
        data-testid={ `${dataId}-option` }
      >
        { type }
      </option>
    );
  }
}

Option.propTypes = {
  name: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  dataId: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
};

export default Option;
