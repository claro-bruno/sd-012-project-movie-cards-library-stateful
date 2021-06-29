import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Option extends Component {
  render() {
    const { value, type, dataId } = this.props;

    return (<option value={ value } data-testid={ `${dataId}-option` }>{ type }</option>
    );
  }
}

Option.propTypes = {
  type: Proptypes.string.isRequired,
  dataId: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
};

export default Option;
