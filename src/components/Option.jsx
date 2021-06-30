import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Option extends Component {
  render() {
    const { optionValue, optionText, optionTestId } = this.props;

    return (
      <option value={ optionValue } data-testid={ optionTestId }>
        {optionText}
      </option>
    );
  }
}

Option.propTypes = {
  optionValue: PropTypes.string.isRequired,
  optionText: PropTypes.string.isRequired,
  optionTestId: PropTypes.string.isRequired,
};

export default Option;
