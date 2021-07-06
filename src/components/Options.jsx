import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Options extends Component {
  render() {
    const { optionValue, optionTestId, optionName } = this.props;

    return (
      <option
        data-testid={ optionTestId }
        value={ optionValue }
      >
        { optionName }
      </option>
    );
  }
}

Options.propTypes = {
  optionValue: PropTypes.string,
  optionText: PropTypes.string,
  optionTestId: PropTypes.string,
}.isRequired;

export default Options;
